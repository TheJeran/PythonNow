import { createContext, useContext, useEffect, useRef, useState } from 'react'

const PyodideContext = createContext(null)

// Loads Pyodide once (via the CDN script in index.html) and shares one
// interpreter instance across every code cell in the app.
export function PyodideProvider({ children }) {
  const [status, setStatus] = useState('loading') // loading | ready | error
  const pyodideRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    window
      .loadPyodide()
      .then((pyodide) => {
        if (cancelled) return
        pyodideRef.current = pyodide
        setStatus('ready')
      })
      .catch((err) => {
        console.error('Pyodide failed to load:', err)
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  async function run(code) {
    const pyodide = pyodideRef.current
    if (!pyodide) throw new Error('Pyodide is not ready yet')

    const lines = []
    pyodide.setStdout({ batched: (msg) => lines.push(msg) })
    pyodide.setStderr({ batched: (msg) => lines.push(msg) })

    try {
      const result = await pyodide.runPythonAsync(code)
      if (result !== undefined) lines.push(String(result))
      return { output: lines.join('\n'), error: null }
    } catch (err) {
      return { output: lines.join('\n'), error: err.message }
    }
  }

  return (
    <PyodideContext.Provider value={{ status, run }}>
      {children}
    </PyodideContext.Provider>
  )
}

export function usePyodide() {
  const ctx = useContext(PyodideContext)
  if (!ctx) throw new Error('usePyodide must be used within a PyodideProvider')
  return ctx
}
