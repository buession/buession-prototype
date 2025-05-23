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
   * 将字符串复制到剪贴板
   *
   * @param str 字符串
   */
  copy(str: string): void;

  /**
   * 延时执行
   *
   * @param func 延时执行方法
   * @param wait 延时时长（单位：毫秒）
   * @param args 方法参数
   * 
   * @return 方法执行结果
   */
  delay(func: Function, wait: number, ...args: any): any;
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

interface Location {

  search: string;

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

type ClipboardDataFormat = "text" | "url" | "file" | "html" | "image";

declare var Window: {
  prototype: Window;

  new(): Window;
};

declare var Browser: {
  prototype: Browser;

  new(): Browser;
};

declare var Location: {
  prototype: Location;

  new(): Location;
};

interface ClipboardData {
  /**
   * 设置粘贴板数据
   * 
   * @param format 数据格式
   * @param content 数据内容 
   */
  setData(format: ClipboardDataFormat, content: string): void;
}

const isMobile = ["Android", "iPhone", "iPod", "Windows Phone", "Mobile", "Coolpad", "mmp", "SmartPhone", "midp", "wap", "xoom", "Symbian", "J2ME", "Blackberry", "Wince"].some((value)=>navigator.userAgent.exists(value));
const isChrome = /\(KHTML, like Gecko\) Chrome\//.test(navigator.userAgent);
const isFirefox = navigator.userAgent.exists("Firefox");
const isMozilla = navigator.userAgent.exists("Mozilla");
const isEdge = navigator.userAgent.exists("Edge");
const isMSIE = navigator.userAgent.exists("MSIE") && navigator.userAgent.exists("compatible");
const isOpera = navigator.userAgent.exists("Opera");
const isSafari = navigator.userAgent.exists("Safari");
const isNetscape = /Netscape([\d]*)\/([^\s]+)/i.test(navigator.userAgent);

Object.defineProperty(window, "browser", {
  value: {
    userAgent: navigator.userAgent,
    name: navigator.appName,
    version: navigator.appVersion,
    cookieEnabled: navigator.cookieEnabled,
    language: navigator.language,
    languages: navigator.languages,
    isMobile: isMobile,
    isChrome: isChrome,
    isFirefox: isFirefox,
    isMozilla: isMozilla,
    isEdge: isEdge,
    isMSIE: isMSIE,
    isOpera: isOpera,
    isSafari: isSafari,
    isNetscape: isNetscape
  },
  configurable: true,
  writable: false
});

/**
 * 将字符串复制到剪贴板
 *
 * @param str 字符串
 */
Window.prototype.copy = function(str: string): void {
  try {
    if (Object.isObject(this.clipboardData) === true) {
      this.clipboardData.setData("text", str);
    } else {
      const fakeElement = document.createElement("textarea");

      fakeElement.style.border = "none";
      fakeElement.style.margin = "0";
      fakeElement.style.padding = "0";
      fakeElement.style.position = "absolute";
      fakeElement.style.top = "-9999px";
      fakeElement.style.left = "-9999px";
      fakeElement.value = str;
      fakeElement.setAttribute("readonly", "");

      document.body.appendChild(fakeElement);

      fakeElement.setSelectionRange(0, str.length);
      fakeElement.select();

      document.execCommand("copy");

      fakeElement.remove();
    }
  } catch(e) {
    console.error(e);
  }
}

/**
 * 延时执行
 *
 * @param func 延时执行方法
 * @param wait 延时时长（单位：毫秒）
 * @param args 方法参数
 * 
 * @return 方法执行结果
 */
Window.prototype.delay = function(func: Function, wait?: number, ...args: any) {
  const delayFunc = (func: Function, wait: number, ...args: any): NodeJS.Timeout => {
    if (typeof func !== "function") {
      throw new TypeError("Expected a function");
    }
    return setTimeout(function() {
      func.apply(undefined, args);
    }, wait);
  }

  return delayFunc(func, wait || 0, args);
};

/**
 * 获取所有的请求参数及值
 * 
 * @return 所有的请求参数及值
 */
Location.prototype.getParameters = function(): Record<string, any> {
  let queryString = this.search;
  const parameters: Record<string, any> = {};

  if (queryString.indexOf("?") !== -1) {
    queryString = queryString.substring(1);

    const parts = queryString.split("&");

    for (let i = 0; i < parts.length; i++) {
      const temp = parts[i].split("=");
      const val = temp.length == 2 ? encodeURIComponent(temp[1]) : "";

      if (Object.isUndefined(parameters[temp[0]])) {
        parameters[temp[0]] = val;
      } else {
        if (Object.isArray(parameters[temp[0]]) === false) {
          const oldVal = parameters[temp[0]];

          delete parameters[temp[0]];
          parameters[temp[0]] = [oldVal];
        }

        parameters[temp[0]].push(val);
      }
    }
  }

  return parameters;
}

/**
 * 获取指定请求参数的值
 *
 * @param name 参数名
 * @return 指定请求参数的值
 */
Location.prototype.getParameter = function(name: string): any {
  const parameters: Record<string, any> = this.getParameters();
  return parameters[name];
}
