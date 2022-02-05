/**
 * Math 对象扩展
 */

interface Math {
  /**
	 * 产生一个指定范围内的随机数
	 *
	 * @param min 返回的最低值(默认 0)
	 * @param max 返回的最高值
	 * @return 随机数
	 */
	rand(min: number, max?: number): number;
}

/**
 * 产生一个指定范围内的随机数
 *
 * @param min 返回的最低值(默认 0)
 * @param max 返回的最高值
 * @return 随机数
 */
Math.rand = function(min: number, max?: number): number {
  min = min || 0;
	max = max || Number.MAX_SAFE_INTEGER;

	let result = Math.random() * (max - min + 1) + min;

	result = Math.round(result);

	if (result < min) {
		result = min;
	} else if(result > max) {
		result = max
	}

	return result;
}
