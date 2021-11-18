//export type Constructor<T> = new (...args: any[]) => T;

//fixed by this:
export type Constructor = new (...args: any[]) => {};
