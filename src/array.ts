/**
 * Array 对象扩展
 */

interface Array<T> {
  /**
   * 判断数组是否为空数组
   *
   * @return boolean
   */
  isEmpty(): boolean;

  /**
   * 判断元素是否在数组中
   *
   * @param item 查找对象
   * @return boolean
   */
  exists(item: any): boolean;

  /**
   * 获取一个元素
   *
   * @return 第一个元素
   */
  first(): T;

  /**
   * 获取最后一个元素
   *
   * @return 最后一个元素
   */
  last(): T

  /**
   * 数组迭代
   *
   * @param callback 回调函数
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;

  /**
   * 获取数组大小
   *
   * @return 数组大小
   */
  size(): number;

  /**
   * 连接两个或多个数组
   *
   * @return 已连接数组的副本
   */
  merge(...items: T[]): Array<T>;

  /**
   * 返回一个不包含 null/undefined 值元素的数组的新版本
   * 
   * @return 不包含 null/undefined 值元素的数组的新版本
   */
  compact(): Array<T>;

  /**
   * 对数组的元素进行去重
   * 
   * @return 数组元素进行去重后的新版本
   */
  unique(): Array<T>;

  /**
   * 返回不包括参数中任意一个指定值的数组
   * 
   * @param values 排除值数组
   * @return 不包括参数中任意一个指定值的数组
   */
  without(values: T[]): Array<T>;

  /**
   * 克隆数组
   *
   * @return 克隆结果
   */
  clone(): Array<T>;

  /**
   * 清空数组
   *
   * @return 空数组
   */
  clear(): Array<T>;
}

declare var Array: ArrayConstructor;

/**
 * 判断数组是否为空数组
 *
 * @return boolean
 */
Array.prototype.isEmpty = function(): boolean {
  return this.length === 0;
}

/**
 * 判断元素是否在数组中
 *
 * @param item 查找对象
 * @return boolean
 */
Array.prototype.exists = function(item: any): boolean {
  return this.indexOf(item) !== -1;
}

/**
 * 获取一个元素
 *
 * @return 第一个元素
 */
Array.prototype.first = function<T>(): T {
	if (this.length === 0) {
		throw "Array index out of range: 0";
	}

  return this[0];
}

/**
 * 获取一个元素
 *
 * @return 第一个元素
 */
Array.prototype.last = function<T>(): T {
	if (this.length === 0) {
		throw "Array index out of range: 0";
	}

  return this[this.length - 1];
}

/**
 * 数组迭代
 *
 * @param callback 回调函数
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
Array.prototype.each = Array.prototype.forEach;

/**
 * 获取数组大小
 *
 * @return 数组大小
 */
Array.prototype.size = function(): number {
  return this.length;
}

/**
 * 克隆数组
 *
 * @return 克隆结果
 */
Array.prototype.merge = Array.prototype.concat;

/**
 * 返回一个不包含 null/undefined 值元素的数组的新版本
 *
 * @return 不包含 null/undefined 值元素的数组的新版本
 */
Array.prototype.compact = function<T>(): Array<T> {
	return this.filter((value)=>Object.isUndefinedOrNull(value) === false);
}

/**
 * 对数组的元素进行去重
 * 
 * @return 数组元素进行去重后的新版本
 */
Array.prototype.unique = function<T>(): Array<T> {
	return Array.from(new Set(this));
}

/**
 * 返回不包括参数中任意一个指定值的数组
 * 
 * @param values 排除值数组
 * @return 不包括参数中任意一个指定值的数组
 */
Array.prototype.without = function<T>(...values: T[]): Array<T> {
  return this.filter(function(v: T) {
    return values.includes(v) === false;
  });
}

/**
 * 克隆数组
 *
 * @return 克隆结果
 */
Array.prototype.clone = function<T>(): Array<T> {
  return this.slice(0);
}

/**
 * 清空数组
 *
 * @return 空数组
 */
Array.prototype.clear = function<T>(): Array<T> {
  this.length = 0;
	return this;
}
