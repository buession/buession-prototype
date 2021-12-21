/**
 * Function 对象扩展
 */
interface Function {
    /**
     * 获取函数参数名称
     *
     * @return 函数参数名称列表
    */
    argumentNames(): string[] | null;
    /**
     * 延时执行函数
     *
     * @param timeout 延时时间（单位：秒）
     * @return mixed
    */
    delay(timeout: number): any;
}
