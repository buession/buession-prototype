/**
 * Number 对象扩展
 */

interface Number {
  /**
   * 数字填充
   * 
   * @param length 长度
   * @param radix 进制
   * @return 填充后的字符串数字
   */
  toPaddedString(length: number, radix: number): string;
}

interface NumberConstructor {
  /**
   * 判断数字是否为奇数
   *
   * @param num 需要判断的数字
   * @return boolean 数字是为奇数返回 true；否则返回 false
   */
  isOdd(num: number): boolean;

  /**
   * 判断数字是否为偶数
   *
   * @param num 需要判断的数字
   * @return boolean 数字是为偶数返回 true；否则返回 false
   */
  isEven(num: number): boolean;

  /**
   * 判断一个数字是否在另两个数字之间
   *
   * @param num 需要判断的数
   * @param min 最小值
   * @param max 最大值
   * @param match 是否包含最小值或最大值
   * @return boolean 数字是否在另两个数字之间，返回 true；否则返回 false
   */
  isBetween(num: number, min: number, max: number, match?: boolean | undefined): boolean;
}

declare var Number: NumberConstructor;

/**
 * 数字填充
 * 
 * @param length 长度
 * @param radix 进制
 * @return 填充后的字符串数字
 */
Number.prototype.toPaddedString = function(length: number, radix: number): string {
	const str = this.toString(radix||10);
	return "0".repeat(length - str.length) + str;
}

/**
 * 判断数字是否为奇数
 *
 * @param num 需要判断的数字
 * @return boolean 数字是为奇数返回 true；否则返回 false
 */
Number.isOdd = function(num: number): boolean {
	return num % 2 === 1;
}

/**
 * 判断数字是否为偶数
 *
 * @param num 需要判断的数字
 * @return boolean 数字是为偶数返回 true；否则返回 false
 */
Number.isEven = function(num: number): boolean {
	return num % 2 === 0;
}

/**
 * 判断一个数字是否在另两个数字之间
 *
 * @param num 需要判断的数
 * @param min 最小值
 * @param max 最大值
 * @param match 是否包含最小值或最大值
 * @return boolean 数字是否在另两个数字之间，返回 true；否则返回 false
 */
Number.isBetween = function(num: number, min: number, max: number, match: boolean | undefined = false): boolean {
	min = min || 0;
	max = max || 0;

	if (min > max) {
		min ^= max;
		max ^= min;
		min ^= max;
	}

	return match == true ? num >= min && num <= max : num > min && num < max;
}
