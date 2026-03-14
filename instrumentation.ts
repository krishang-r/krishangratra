const createStorageStub = (): Storage => {
  const store = new Map<string, string>();

  return {
    getItem: (key: string) => (store.has(key) ? store.get(key)! : null),
    setItem: (key: string, value: string) => {
      store.set(key, String(value));
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    clear: () => {
      store.clear();
    },
    key: (index: number) => Array.from(store.keys())[index] ?? null,
    get length() {
      return store.size;
    }
  };
};

export function register() {
  if (typeof window !== "undefined") {
    return;
  }

  const current = globalThis.localStorage as unknown;
  if (current && typeof (current as Storage).getItem === "function") {
    return;
  }

  Object.defineProperty(globalThis, "localStorage", {
    value: createStorageStub(),
    configurable: true,
    enumerable: true,
    writable: false
  });
}
