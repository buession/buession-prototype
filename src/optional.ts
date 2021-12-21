/**
 * Optional 对象
 */

export class Optional<T> {
    private value: T | null | undefined;

    private constructor(value: T | null | undefined) {
        this.value = value;
    }

    public static of<T>(value: T): Optional<T> {
        return new Optional(value);
    }

    public static ofNullable<T>(value: T): Optional<T> {
        return Object.isUndefinedOrNull(value) ? Optional.empty() : new Optional(value);
    }

    public static empty<T>(): Optional<T> {
        return new Optional(null as unknown as T);
    }

    public get<T>(): T {
        if (this.value == null) {
            throw "No value present";
        }

        return this.value as unknown as T;
    }

    public orElse<T>(other: T): T {
        return Object.isUndefinedOrNull(this.value) ? other as T : this.value as unknown as T;
    }

    public isPresent(): boolean {
        return Object.isUndefinedOrNull(this.value) === false;
    }
}

(window as any).Optional = Optional;
