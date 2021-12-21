/**
 * Window 对象扩展
 */
interface Window {
    /**
     * 浏览器信息
     */
    readonly browser: Browser;
    /**
     * 剪贴板对象
     */
    readonly clipboardData: ClipboardData;
    /**
     * 设为首页
     *
     * @param url 设为首页的 URL
     * @param title title
    */
    setHomePage(url?: string, title?: string): void;
    /**
     * 加入收藏夹
     *
     * @param url 加入收藏夹 URL
     * @param title title
    */
    addFavorite(url?: string, title?: string): void;
    /**
     * 字符串复制到剪贴板
     *
     * @param str 字符串
    */
    copy(str: string): void;
}
interface Location {
    /**
     * 获取所有的请求参数及值
     *
     * @return 所有的请求参数及值
    */
    getParameters(): Record<string, any>;
    /**
     * 获取指定请求参数的值
     *
     * @param name 参数名
     * @return 指定请求参数的值
    */
    getParameter(name: string): any;
}
interface Browser {
    /**
     * User-Agent
     */
    readonly userAgent: string;
    /**
     * 浏览器名称
     */
    readonly name: string;
    /**
     * 浏览器版本
     */
    readonly version: string;
    /**
     * 是否为移动设备
     */
    readonly isMobile: boolean;
}
declare type ClipboardDataFormat = "text" | "url" | "file" | "html" | "image";
interface ClipboardData {
    /**
     * 设置粘贴板数据
     *
     * @param format 数据格式
     * @param content 数据内容
     */
    setData(format: ClipboardDataFormat, content: string): void;
}
