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
   * 获取 Cookie 对象
   * 
   * @return Cookie 对象
   */
  readonly httpCookie: Cookie;

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

enum SameSite {
  NONE = 'None',

  LAX = 'Lax',

  STRICT = 'Strict'
}

interface CookieOptions {
  /**
   * Cookie 作用域
   */
  domain?: String;

  /**
   * Cookie 作用路径
   */
  path?: String;

  /**
   * Cookie 过期时间
   */
  expires?: Number | Date;

  /**
   * 是否启用安全 Cookie
   */
  secure?: Boolean;

  /**
   * 是否为 HttpOnly
   */
  httpOnly?: Boolean;

  /**
   * SameSite
   */
  sameSite?: SameSite;
}

interface Cookie {
  /**
   * 设置 Cookie 值
   * 
   * @param name Cookie 名称
   * @param value Cookie 值
   * @param options Cookie 选项
   * @return Cookie 值
   */
  set(name: string, value: string | null | undefined, options?: CookieOptions): string;

  /**
   * 获取 Cookie 值
   * 
   * @param name Cookie 名称
   * @return Cookie 值；不存在时，返回 null
   */
  get(name: string): string | null;

  /**
   * 删除 Cookie
   * 
   * @param name Cookie 名称
   * @param options Cookie 选项
   */
  delete(name: string, options?: CookieOptions): void;
}

class CookieInstance implements Cookie {
  public constructor () {
  }

  public set(name: string, value: string | null | undefined, options?: CookieOptions): string {
    const $name = name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent);
    const $value = value ? encodeURIComponent(value)
      .replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) : '';

    let stringifiedAttributes = '';

    if (options) {
      stringifiedAttributes += options.domain  ? '; domain=' + options.domain : '';
      stringifiedAttributes += options.path  ? '; path=' + options.path : '';

      if (options.expires) {
        const $expiresDate = options.expires instanceof Date ? options.expires : new Date(Date.now() + (options.expires as number) * 864e5);

        stringifiedAttributes += options.expires  ? '; expires=' + $expiresDate.toUTCString() : '';
      }

      stringifiedAttributes += options.sameSite  ? '; sameSite=' + options.sameSite : '';

      if (Object.isBoolean(options.secure) && options.secure) {
        stringifiedAttributes += options.expires  ? '; secure' : '';
      }

      if (Object.isBoolean(options.httpOnly) && options.httpOnly) {
        stringifiedAttributes += options.httpOnly  ? '; httpOnly' : '';
      }
    }

    return document.cookie = $name + '=' + $value + stringifiedAttributes;
  }

  public get(name: string): string | null {
    const cookies = document.cookie ? document.cookie.split('; ') : [];

    for (let i = 0; i < cookies.length; i++) {
      const parts = cookies[i].split('=');
      const $name = decodeURIComponent(parts[0]);
      let $value = parts.slice(1).join('=');

      if ($name === name) {
        if ($value[0] === '"') {
          $value = $value.slice(1, -1)
        }

        return $value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
      }
    }
  
    return null;
  }

  public delete(name: string, options?: CookieOptions): void {
    const $options = options ? options : {};

    $options.expires = -1;

    this.set(name, '', $options);
  }
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
 * 返回 Cookie 对象
 * 
 * @return Cookie 对象
 */
Object.defineProperty(document, "httpCookie", {
  value: new CookieInstance(),
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
