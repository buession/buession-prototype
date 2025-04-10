export type Un = undefined | null;

export type Ou<T> = T | undefined;

export type On<T> = T | null;

export type Oun<T> = T | Un;

export type MaybeArray<T> = T | T[];

export type MaybePromise<T> = T | Promise<T>;

export type GenericData<T> = Record<string, T>;

export type Data = GenericData<any>;
