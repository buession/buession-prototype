/**
 * Optional 对象
 */
export declare class Optional<T> {
    private value;
    private constructor();
    static of<T>(value: T): Optional<T>;
    static ofNullable<T>(value: T): Optional<T>;
    static empty<T>(): Optional<T>;
    get<T>(): T;
    orElse<T>(other: T): T;
    isPresent(): boolean;
}
