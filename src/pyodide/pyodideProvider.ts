import type { PyodideInterface } from "pyodide";

const PYODIDE_VERSION = "0.26.1";
const PYODIDE_CDN = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

declare global {
  interface Window {
    loadPyodide: (config: { indexURL: string }) => Promise<PyodideInterface>;
  }
}

let pyodidePromise: Promise<PyodideInterface> | null = null;

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window.loadPyodide === "function") return resolve();

    const existing = document.getElementById("pyodide-script");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }

    const script = document.createElement("script");
    script.id = "pyodide-script";
    script.src = `${PYODIDE_CDN}pyodide.js`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Pyodide"));
    document.body.appendChild(script);
  });
}

/** Returns the same Pyodide instance/promise on every call. */
export function getPyodide(): Promise<PyodideInterface> {
  if (!pyodidePromise) {
    pyodidePromise = loadScript().then(() =>
      window.loadPyodide({ indexURL: PYODIDE_CDN })
    );
  }
  return pyodidePromise;
}