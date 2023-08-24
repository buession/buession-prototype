/**
 * Optional 对象
 */

class Optional<T> {
  private value: T | null | undefined;

  /**
   * 构造函数
   * 
   * @param value T 类型的值
   */
  private constructor(value: T | null | undefined) {
    this.value = value;
  }

  /**
   * 返回一个指定 T 类型的值的 Optional 实例
   * 
   * @param value T 类型的值
   * @return T 类型的值的 Optional 实例
   */
  public static of<T>(value: T): Optional<T> {
    return new Optional(value);
  }

  /**
   * 如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例
   * 
   * @param value T 类型的值
   * @return T 类型的值的 Optional 实例，或空的 Optional 实例
   */
  public static ofNullable<T>(value: T): Optional<T> {
    return Object.isUndefinedOrNull(value) ? Optional.empty() : new Optional(value);
  }

  /**
   * 返回空的 Optional 实例
   * 
   * @return 空的 Optional 实例
   */
  public static empty<T>(): Optional<T> {
    return new Optional(null as unknown as T);
  }

  /**
   * 如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常
   * 
   * @return Optional 中包含这个值
   */
  public get<T>(): T {
    if (this.value === null || typeof this.value === 'undefined') {
      throw "No value present";
    }

    return this.value as unknown as T;
  }

  /**
   * 如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other
   * 
   * @param other 其它值
   * @return value 不为 null 或 undefined，则返回 value 的值；否则返回 other
   */
  public orElse<T>(other: T): T {
    return Object.isUndefinedOrNull(this.value) ? other as T : this.value as unknown as T;
  }

  /**
   * 如果 value 不为 null 或 undefined，则返回 true；否则返回 false
   * 
   * @return value 不为 null 或 undefined，则返回 true；否则返回 false
   */
  public isPresent(): boolean {
    return Object.isUndefinedOrNull(this.value) === false;
  }
}

interface Window {
	Optional: typeof Optional;
}

window.Optional = Optional;
