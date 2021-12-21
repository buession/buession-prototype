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
    /**
     * 将数字转换为十六进制
     *
     * @return 转换结果
    */
    toColorPart(): string;
}
interface NumberConstructor {
    /**
     * 判断数字是否为奇数
     *
     * @param num 需要判断的数字
     * @return boolean
    */
    isOdd(num: number): boolean;
    /**
     * 判断数字是否为偶数
     *
     * @param num 需要判断的数字
     * @return boolean
    */
    isEven(num: number): boolean;
    /**
     * 判断一个数字是否在另两个数字之间
     *
     * @param num 需要判断的数
     * @param min 最小值
     * @param max 最大值
     * @param match 是否包含最小值或最大值
     * @return boolean
    */
    isBetween(num: number, min: number, max: number, match?: boolean | undefined): boolean;
}
