const isWindow = () => globalThis.window !== undefined;

const hasDocument = () => isWindow() && window.document !== undefined;

export { isWindow, hasDocument };
