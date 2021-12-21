/**
 * Document 对象扩展
 */
interface Document {
    /**
     * 检测当前浏览器是否为全屏
     *
     * @return 当前浏览器是否为全屏
     */
    readonly fullScreen: boolean;
    /**
     * 检测当前浏览器是否为全屏
     *
     * @return 当前浏览器是否为全屏
     */
    readonly fullscreen: boolean;
    /**
     * 检测当前浏览器是否为全屏
     *
     * @return 当前浏览器是否为全屏
     */
    readonly mozFullScreen: boolean;
    /**
     * 检测当前浏览器是否为全屏
     *
     * @return 当前浏览器是否为全屏
     */
    readonly webkitIsFullScreen: boolean;
    /**
     * 检测当前浏览器是否为全屏
     *
     * @return 当前浏览器是否为全屏
     */
    readonly msFullScreen: boolean;
    /**
     * 检测当前浏览器是否支持全屏模式
     *
     * @return 当前浏览器是否支持全屏模式
     */
    readonly mozFullScreenEnabled: boolean;
    /**
     * 检测当前浏览器是否支持全屏模式
     *
     * @return 当前浏览器是否支持全屏模式
     */
    readonly webkitFullscreenEnabled: boolean;
    /**
     * 检测当前浏览器是否支持全屏模式
     *
     * @return 当前浏览器是否支持全屏模式
     */
    readonly msFullscreenEnabled: boolean;
    /***
     * 获取当前处于全屏模式的 DOM 元素
     *
     * @return 当前处于全屏模式的 DOM 元素
     */
    readonly fullScreenElement: Element | null;
    /***
     * 获取当前处于全屏模式的 DOM 元素
     *
     * @return 当前处于全屏模式的 DOM 元素
     */
    readonly fullscreenElement: Element | null;
    /***
     * 获取当前处于全屏模式的 DOM 元素
     *
     * @return 当前处于全屏模式的 DOM 元素
     */
    readonly mozFullScreenElement: Element | null;
    /***
     * 获取当前处于全屏模式的 DOM 元素
     *
     * @return 当前处于全屏模式的 DOM 元素
     */
    readonly webkitFullscreenElement: Element | null;
    /***
     * 获取当前处于全屏模式的 DOM 元素
     *
     * @return 当前处于全屏模式的 DOM 元素
     */
    readonly msFullscreenElement: Element | null;
    /**
     * 请求进入全屏模式
     *
     * @return Promise
     */
    requestFullscreen(): Promise<void>;
    /**
     * 退出全屏模式
     *
     * @return Promise
     */
    exitFullscreen(): Promise<void>;
    /**
     * 退出全屏模式
     *
     * @return Promise
     */
    mozCancelFullScreen(): Promise<void>;
    /**
     * 退出全屏模式
     *
     * @return Promise
     */
    mozExitFullScreen(): Promise<void>;
    /**
     * 退出全屏模式
     *
     * @return Promise
     */
    webkitCancelFullScreen(): Promise<void>;
    /**
     * 请求进入全屏模式
     *
     * @return Promise
     */
    webkitExitFullscreen(): Promise<void>;
    /**
     * 请求进入全屏模式
     *
     * @return Promise
     */
    msExitFullscreen(): Promise<void>;
}
interface HTMLElement {
    /**
     * 请求进入全屏模式
     *
     * @return Promise
     */
    mozRequestFullScreen(): Promise<void>;
    /**
     * 请求进入全屏模式
     *
     * @return Promise
     */
    webkitRequestFullscreen(): Promise<void>;
    /**
     * 请求进入全屏模式
     *
     * @return Promise
     */
    msRequestFullscreen(): Promise<void>;
}
