/**
 * Object 对象扩展
 */
interface ObjectConstructor {
    /**
     * 获取对象数据类型
     *
     * @param obj 对象变量
     * @return 对象数据类型
     */
    type(obj: any): string;
    /**
     * 获取对象原始数据类型
     *
     * @param obj 对象变量
     * @return 原始数据类型
     */
    rawType(obj: any): string;
    /**
     * 判断对象是否为 object 类型
     *
     * @param obj 任意对象
     * @return boolean
     */
    isObject(obj: any): boolean;
    /**
     * 判断对象是否为简单 object 类型
     *
     * @param obj 任意对象
     * @return boolean
     */
    isPlainObject(obj: any): boolean;
    /**
      * 判断对象是否为 Symbol
      *
      * @param obj 任意对象
      * @return boolean
      */
    isSymbol(obj: any): boolean;
    /**
     * 判断对象是否为 Promise
     *
     * @param obj 任意对象
     * @return boolean
    */
    isPromise(obj: any): boolean;
    /**
      * 判断对象是否为原始类型
      *
      * @param obj 任意对象
      * @return boolean
      */
    isPrimitive(obj: any): boolean;
    /**
     * 判断对象是否为函数
     *
     * @param obj 任意对象
     * @return boolean
    */
    isFunction(obj: any): boolean;
    /**
     * 判断对象是否为数组
     *
     * @param obj 任意对象
     * @return boolean
    */
    isArray(obj: any): boolean;
    /**
     * 判断对象是否为字符串对象
     *
     * @param obj 任意对象
     * @return boolean
    */
    isString(obj: any): boolean;
    /**
     * 判断对象是否为数字对象
     *
     * @param obj 任意对象
     * @return boolean
    */
    isNumber(obj: any): boolean;
    /**
     * 判断对象是否为布尔对象
     *
     * @param obj 任意对象
     * @return boolean
    */
    isBoolean(obj: any): boolean;
    /**
     * 判断对象是否为正则对象
     *
     * @param obj 任意对象
     * @return boolean
    */
    isRegExp(obj: any): boolean;
    /**
     * 判断对象是否为文件对象
     *
     * @param obj 任意对象
     * @return boolean
    */
    isFile(obj: any): boolean;
    /**
     * 判断对象是否为 windows 对象
     *
     * @param obj 任意对象
     * @return boolean
    */
    isWindow(obj: any): boolean;
    /**
     * 判断对象是否为 Element
     *
     * @param obj 任意对象
     * @return boolean
     */
    isElement(obj: any): boolean;
    /**
     * 判断对象是否为事件对象
     *
     * @param obj 任意对象
     * @return boolean
    */
    isEvent(obj: any): boolean;
    /**
     * 判断对象是否为 null 对象
     *
     * @param obj 任意对象
     * @return boolean
    */
    isNull(obj: any): boolean;
    /**
     * 判断对象是否为未定义
     *
     * @param obj 任意对象
     * @return boolean
    */
    isUndefined(obj: any): boolean;
    /**
     * 判断对象是否为未定义或 null
     *
     * @param obj 任意对象
     * @return boolean
    */
    isUndefinedOrNull(obj: any): boolean;
    /**
     * 克隆对象
     *
     * @param obj 任意对象
     * @return 新对象实例
    */
    clone(obj: any): any;
}
