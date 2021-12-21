/**
 * String 对象扩展
 */
interface String {
    /**
     * 判断字符串是否存在
     *
     * @param str 子字符串
     * @return boolean
    */
    exists(str: string): boolean;
    /**
     * 判断字符串是否相等
     *
     * @param str 与此 String 进行比较的对象
     * @return boolean
    */
    equals(str: any): boolean;
    /**
     * 判断字符串是否相等，不考虑大小写
     *
     * @param str 与此 String 进行比较的对象
     * @return boolean
    */
    equalsIgnoreCase(str: any): boolean;
    /**
     * 判断是否为空字符串
     *
     * @return boolean
    */
    isEmpty(): boolean;
    /**
     * 判断是否为空白字符串
     *
     * @return boolean
    */
    isBlank(): boolean;
    /**
     * 重复一个字符串
     *
     * @papram count 重复次数
     * @return 重复后的字符串
    */
    repeat(count: number): string;
    /**
     * 截取字符串左边边指定数目的字符串
     *
     * @param length 截取长度
     * @return 子字符串
    */
    left(length: number): string;
    /**
     * 截取字符串右边指定数目的字符串
     *
     * @param length 截取长度
     * @return 子字符串
    */
    right(length: number): string;
    /**
     * 截取字符串，超出部分用 truncation 替代
     *
     * @param length 截取长度
     * @param truncation 替换字符串
     * @return 截取后的字符串
     *		   实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length
    */
    truncation(length: number, truncation: string): string;
    /**
     * 删除字符串开头的空白字符
     *
     * @return 删除了字符串最左边的空白字符的字符串
    */
    ltrim(): string;
    /**
     * 删除字符串结尾的空白字符
     *
     * @return 删除了字符串最右边的空白字符的字符串
    */
    rtrim(): string;
    /**
     * 判断字符串是否以给定的字符串开头
     *
     * @param str 搜索的字符串
     * @return boolean
    */
    startsWith(str: string): boolean;
    /**
     * 判断字符串是否以给定的字符串结尾
     *
     * @param str 搜索的字符串
     * @return boolean
    */
    endsWith(str: string): boolean;
    /**
     * 首字母小写
     *
     * @return 结果字符串
    */
    lcfirst(): string;
    /**
     * 首字母大写
     *
     * @return 结果字符串
    */
    ucfirst(): string;
    /**
     * 将 HTML 编码
     *
     * @return 编码后的字符串
    */
    escapeHTML(): string;
    /**
     * 将 HTML 实体字符解码
     *
     * @return 解码后的字符串
    */
    unescapeHTML(): string;
    /**
     * 删除 HTML 标签
     *
     * @param tag
     * @returns 删除标签后的字符串
     */
    stripTag(tag: string): string;
    /**
     * 删除标签
     *
     * @param tags 删除指定的标签
     * @return 删除标签后的字符串
    */
    stripTags(tags: string[] | string): string;
    /**
     * 删除 script 标签
     *
     * @return 删除 script 标签后的字符串
    */
    stripScripts(): string;
    /**
     * 将字符串转换为数组
     *
     * @param delimiter 分隔字符
     * @return 数组
    */
    toArray(delimiter: string): string[];
    /**
     * 返回一个数组的字符串表示形式
     *
     * @param useDoubleQuotes 是否使用双引号引住
     * @return 后的字符串
    */
    inspect(useDoubleQuotes: boolean): string;
    /**
     * 获取字符串 hash code
     *
     * @return 字符串 hash code
    */
    hashCode(): number;
}
interface StringConstructor {
    /**
     * 生成随机字符串
     *
     * @param length 生成字符串的长度
     * @param type 生成类型
     *        NUMERIC 		 - 数字随机字符串
     *		  LETTER  		 - 英文随机字符串
     *		  LETTER_NUMERIC - 英文数字混合随机字符串
     *		  CHINESE 		 - 中文随机字符串
     *
     * @return 生成结果
    */
    random(length: number, type?: "NUMERIC" | "LETTER" | "LETTER_NUMERIC" | "CHINESE" | undefined): string;
}
