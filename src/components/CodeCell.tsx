import React, { useCallback, useRef, useState } from "react";
import Editor, { type BeforeMount, type OnMount } from "@monaco-editor/react";
import { shikiToMonaco } from "@shikijs/monaco";
import type { PyodideInterface } from "pyodide";
import { getPyodide } from "../pyodide/pyodideProvider";
import { getShikiHighlighter } from "../lib/shikiSingleton";

interface CodeCellProps {
  children?: React.ReactNode;
}

const CodeCell: React.FC<CodeCellProps> = ({ children }) => {
  const initialCode = typeof children === 'string' ? children : String(children ?? '');
  const [code, setCode] = useState<string>(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const pyodideRef = useRef<PyodideInterface | null>(null);
  const runRef = useRef<() => void>(() => {});

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    setOutput("");
    try {
      if (!pyodideRef.current) {
        pyodideRef.current = await getPyodide();
      }
      const pyodide = pyodideRef.current;

      pyodide.setStdout({ batched: (m) => setOutput((p) => p + m + "\n") });
      pyodide.setStderr({ batched: (m) => setOutput((p) => p + m + "\n") });

      const result = await pyodide.runPythonAsync(code);
      if (result !== undefined) setOutput((p) => p + String(result));
    } catch (err) {
      setOutput((p) => p + "\n" + String(err));
    } finally {
      setIsRunning(false);
    }
  }, [code]);

  runRef.current = handleRun;

  const handleBeforeMount: BeforeMount = async (monaco) => {
    const highlighter = await getShikiHighlighter();
    shikiToMonaco(highlighter, monaco);
  };

  const handleMount: OnMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () =>
      runRef.current()
    );
  };

  return (
    <div style={styles.container}>
      <Editor
        height="180px"
        defaultLanguage="python"
        value={code}
        beforeMount={handleBeforeMount}
        onMount={handleMount}
        onChange={(v) => setCode(v ?? "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: "Menlo, Monaco, monospace",
          scrollBeyondLastLine: false,
          padding: { top: 12 },
        }}
      />

      <div style={styles.toolbar}>
        <span style={styles.hint}>⌘/Ctrl + Enter to run</span>
        <button style={styles.button} onClick={handleRun} disabled={isRunning}>
          {isRunning ? "Running…" : "▶ Run"}
        </button>
      </div>
      {output && <pre style={styles.output}>{output}</pre>}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    border: "1px solid #2d2d2d",
    borderRadius: 8,
    overflow: "hidden",
    background: "#1e1e1e",
    marginBottom: 16,
    fontFamily: "sans-serif",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "6px 10px",
    borderTop: "1px solid #2d2d2d",
    background: "#1e1e1e",
  },
  hint: { color: "#666", fontSize: 12 },
  button: {
    background: "#0e639c",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    padding: "4px 12px",
    fontSize: 13,
    cursor: "pointer",
  },
  output: {
    margin: 0,
    padding: "10px 14px",
    background: "#111",
    color: "#d4d4d4",
    fontSize: 13,
    whiteSpace: "pre-wrap",
    maxHeight: 200,
    overflowY: "auto",
    borderTop: "1px solid #2d2d2d",
  },
};

export default CodeCell;