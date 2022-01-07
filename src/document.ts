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

/**
 * 检测当前浏览器是否为全屏
 * 
 * @return 当前浏览器是否为全屏
 */
Object.defineProperty(document, "fullScreen", {
    value: function (): boolean {
        if (Object.isUndefined(document.fullscreen) == false) {
            return document.fullscreen;
        }

        if (Object.isUndefined(document.mozFullScreen) == false) {
            return document.mozFullScreen;
        }

        if (Object.isUndefined(document.webkitIsFullScreen) == false) {
            return document.webkitIsFullScreen;
        }

        if (Object.isUndefined(document.msFullScreen) == false) {
            return document.msFullScreen;
        }

        if (Object.isUndefined(document.fullscreenElement) == false) {
            return document.fullscreenElement !== null;
        }

        if (Object.isUndefined(document.mozFullScreenElement) == false) {
            return document.mozFullScreenElement !== null;
        }

        if (Object.isUndefined(document.webkitFullscreenElement) == false) {
            return document.webkitFullscreenElement !== null;
        }

        if (Object.isUndefined(document.msFullscreenElement) == false) {
            return document.msFullscreenElement !== null;
        }

        return false;
    },
    configurable: true,
    writable: false
});

/**
 * 检测当前浏览器是否支持全屏模式
 * 
 * @return 当前浏览器是否支持全屏模式
 */
Object.defineProperty(document, "fullScreenEnabled", {
    value: function (): boolean {
        if (Object.isUndefined(document.mozFullScreenEnabled) == false) {
            return document.mozFullScreenEnabled;
        }

        if (Object.isUndefined(document.webkitFullscreenEnabled) == false) {
            return document.webkitFullscreenEnabled;
        }

        if (Object.isUndefined(document.msFullscreenEnabled) == false) {
            return document.msFullscreenEnabled;
        }

        if (Object.isUndefined(document.fullscreenEnabled) == false) {
            return document.fullscreenEnabled;
        }

        return false;
    },
    configurable: true,
    writable: false
});

/**
 * 返回当前文档中正在以全屏模式显示的 Element 节点
 * 
 * @return 当前文档中正在以全屏模式显示的 Element 节点
 */
Object.defineProperty(document, "fullScreenElement", {
    value: function (): Element | null {
        if (Object.isUndefined(document.mozFullScreenElement) == false) {
            return document.mozFullScreenElement;
        }

        if (Object.isUndefined(document.webkitFullscreenElement) == false) {
            return document.webkitFullscreenElement;
        }

        if (Object.isUndefined(document.msFullscreenElement) == false) {
            return document.msFullscreenElement;
        }

        if (Object.isUndefined(document.fullscreenElement) == false) {
            return document.fullscreenElement;
        }

        return null;
    },
    configurable: true,
    writable: false
});

/**
 * 请求进入全屏模式
 * 
 * @return Promise
 */

Document.prototype.requestFullscreen = function(): Promise<void> {
    const doc: HTMLElement = document.documentElement;

    if (Object.isFunction(doc.mozRequestFullScreen)) {
        return doc.mozRequestFullScreen();
    } else if (Object.isFunction(doc.webkitRequestFullscreen)) {
        return doc.webkitRequestFullscreen();
    } else if (Object.isFunction(doc.msRequestFullscreen)) {
        return doc.msRequestFullscreen();
    } else {
        return doc.requestFullscreen();
    }
}

/**
 * 退出全屏模式
 * 
 * @return Promise
 */
Document.prototype.exitFullscreen = function(): Promise<void> {
    if (Object.isFunction(document.mozCancelFullScreen)) {
        return document.mozCancelFullScreen();
    } else if (Object.isFunction(document.mozExitFullScreen)) {
        return document.mozExitFullScreen();
    } else if (Object.isFunction(document.webkitCancelFullScreen)) {
        return document.webkitCancelFullScreen();
    } else if (Object.isFunction(document.webkitExitFullscreen)) {
        return document.webkitExitFullscreen();
    } else if (Object.isFunction(document.msExitFullscreen)) {
        return document.msExitFullscreen();
    } else {
        return document.exitFullscreen();
    }
}
