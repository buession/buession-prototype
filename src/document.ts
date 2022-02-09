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

  /**
   * 获取当前处于全屏模式的 DOM 元素
   * 
   * @return 当前处于全屏模式的 DOM 元素
   */
  readonly fullScreenElement: Element | null;

  /**
   * 获取当前处于全屏模式的 DOM 元素
   * 
   * @return 当前处于全屏模式的 DOM 元素
   */
  readonly fullscreenElement: Element | null;

  /**
   * 获取当前处于全屏模式的 DOM 元素
   * 
   * @return 当前处于全屏模式的 DOM 元素
   */
  readonly mozFullScreenElement: Element | null;

  /**
   * 获取当前处于全屏模式的 DOM 元素
   * 
   * @return 当前处于全屏模式的 DOM 元素
   */
  readonly webkitFullscreenElement: Element | null;

  /**
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

declare var Document: {
  prototype: Document;

  new(): Document;
};

/**
 * 检测当前浏览器是否为全屏
 * 
 * @return 当前浏览器是否为全屏
 */
Object.defineProperty(document, "fullScreen", {
  value: Object.isUndefined(document.fullscreen) === false ? document.fullscreen : (
    Object.isUndefined(document.mozFullScreen) === false ? document.mozFullScreen : (
      Object.isUndefined(document.webkitIsFullScreen) === false ? document.webkitIsFullScreen : (
        Object.isUndefined(document.msFullScreen) === false ? document.msFullScreen : (
          Object.isUndefined(document.fullscreenElement) === false ? document.fullscreenElement !== null : (
            Object.isUndefined(document.mozFullScreenElement) === false ? document.mozFullScreenElement !== null : (
              Object.isUndefined(document.webkitFullscreenElement) === false ? document.webkitFullscreenElement !== null : (
                Object.isUndefined(document.msFullscreenElement) === false ? document.msFullscreenElement !== null : false
              )
            )
          )
        )
      )
    )
  ),
  configurable: true,
  writable: false
});

/**
 * 检测当前浏览器是否支持全屏模式
 * 
 * @return 当前浏览器是否支持全屏模式
 */
Object.defineProperty(document, "fullScreenEnabled", {
  value: Object.isUndefined(document.mozFullScreenEnabled) === false ? document.mozFullScreenEnabled : (
    Object.isUndefined(document.webkitFullscreenEnabled) === false ? document.webkitFullscreenEnabled : (
      Object.isUndefined(document.msFullscreenEnabled) === false ? document.msFullscreenEnabled : (
        Object.isUndefined(document.fullscreenEnabled) === false ? document.fullscreenEnabled : false
      )
    )
  ),
  configurable: true,
  writable: false
});

/**
 * 返回当前文档中正在以全屏模式显示的 Element 节点
 * 
 * @return 当前文档中正在以全屏模式显示的 Element 节点
 */
Object.defineProperty(document, "fullScreenElement", {
  value: Object.isUndefined(document.mozFullScreenElement) === false ? document.mozFullScreenElement : (
    Object.isUndefined(document.webkitFullscreenElement) === false ? document.webkitFullscreenElement : (
      Object.isUndefined(document.msFullscreenElement) === false ? document.msFullscreenElement : (
        Object.isUndefined(document.fullscreenElement) === false ? document.fullscreenElement : null
      )
    )
  ),
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
