/**
 * Prototype 对象
 */
declare const Prototype: {
    /**
     * 版本
     */
    version: string;
    /**
     * 空方法
     *
     * @return void
     */
    emptyFunction: () => void;
    /**
     *
     * @param x 任意参数
     * @return 任意值
    */
    K: (x: any) => any;
};
interface Window {
    Prototype: typeof Prototype;
}
