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
