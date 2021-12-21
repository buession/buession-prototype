/**
 * Try 对象
 */
declare const Try: {
    /**
     * 接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果
     * @return 任意函数参数执行结果
     */
    these: () => any;
};
interface Window {
    Try: typeof Try;
}
