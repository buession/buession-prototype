/**
 * String 对象扩展
 */

interface String {
  /**
   * 判断字符串是否存在
   *
   * @param str 子字符串
   * @return boolean
   */
  exists(str: string): boolean;

  /**
   * 判断字符串是否相等
   *
   * @param str 与此 String 进行比较的对象
   * @return boolean
   */
  equals(str: any): boolean;

  /**
   * 判断字符串是否相等，不考虑大小写
   *
   * @param str 与此 String 进行比较的对象
   * @return boolean
   */
  equalsIgnoreCase(str: any): boolean;

  /**
   * 判断是否为空字符串
   *
   * @return boolean
   */
  isEmpty(): boolean;

  /**
   * 判断是否为空白字符串
   *
   * @return boolean
   */
  isBlank(): boolean;

  /**
   * 重复一个字符串
   *
   * @papram count 重复次数
   * @return 重复后的字符串
   */
  repeat(count: number): string;

  /**
   * 截取字符串左边边指定数目的字符串
   *
   * @param length 截取长度
   * @return 子字符串
   */
  left(length: number): string;

  /**
   * 截取字符串右边指定数目的字符串
   *
   * @param length 截取长度
   * @return 子字符串
   */
  right(length: number): string;

  /**
   * 截取字符串，超出部分用 truncation 替代
   *
   * @param length 截取长度
   * @param truncation 替换字符串
   * @return 截取后的字符串
   *		 实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length
   */
  truncation(length: number, truncation: string): string;

  /**
   * 删除字符串开头的空白字符
   *
   * @return 删除了字符串最左边的空白字符的字符串
   */
  ltrim(): string;

  /**
   * 删除字符串结尾的空白字符
   *
   * @return 删除了字符串最右边的空白字符的字符串
   */
  rtrim(): string;

  /**
   * 判断字符串是否以给定的字符串开头
   *
   * @param str 搜索的字符串
   * @return boolean
   */
  startsWith(str: string): boolean;

  /**
   * 判断字符串是否以给定的字符串结尾
   *
   * @param str 搜索的字符串
   * @return boolean
   */
  endsWith(str: string): boolean;

  /**
   * 首字母小写
   *
   * @return 结果字符串
   */
  lcfirst(): string;

  /**
   * 首字母大写
   *
   * @return 结果字符串
   */
  ucfirst(): string;

  /**
   * 将 HTML 编码
   *
   * @return 编码后的字符串
   */
  escapeHTML(): string;

  /**
   * 将 HTML 实体字符解码
   *
   * @return 解码后的字符串
   */
  unescapeHTML(): string;

  /**
   * 删除 HTML 标签
   * 
   * @param tag 
   * @returns 删除标签后的字符串
   */
  stripTag(tag: string): string;

  /**
   * 删除标签
   *
   * @param tags 删除指定的标签
   * @return 删除标签后的字符串  
   */
  stripTags(tags: string[]|string): string;

  /**
   * 删除 script 标签
   *
   * @return 删除 script 标签后的字符串
   */
  stripScripts(): string;

  /**
   * 将字符串转换为数组
   *
   * @param delimiter 分隔字符
   * @return 数组
   */
  toArray(delimiter: string): string[];

  /**
   * 返回一个数组的字符串表示形式
   *
   * @param useDoubleQuotes 是否使用双引号引住
   * @return 后的字符串
   */
  inspect(useDoubleQuotes: boolean): string;

  /**
   * 获取字符串 hash code
   *
   * @return 字符串 hash code
  */
  hashCode(): number;
}

type RandomType = "NUMERIC" | "LETTER" | "LETTER_NUMERIC" | "CHINESE" | undefined;

interface StringConstructor {

  /**
   * 生成随机字符串
   *
   * @param length 生成字符串的长度
   * @param type 生成类型
   *        NUMERIC 		 - 数字随机字符串
   *		  LETTER  		 - 英文随机字符串
   *		  LETTER_NUMERIC - 英文数字混合随机字符串
   *		  CHINESE 		 - 中文随机字符串
   *        
   * @return 生成结果
   */
  random(length: number, type?: RandomType): string;
}

/**
 * 判断字符串是否存在
 *
 * @param str 子字符串
 * @return boolean
 */
String.prototype.exists = function(str: string): boolean {
  return this.indexOf(str) >= 0;
}

/**
 * 判断字符串是否相等
 *
 * @param str 与此 String 进行比较的对象
 * @return boolean
 */
String.prototype.equals = function(str: any): boolean {
  return Object.isUndefinedOrNull(str) === false && this === str.toString();
}

/**
 * 判断字符串是否相等，不考虑大小写
 *
 * @param str 与此 String 进行比较的对象
 * @return boolean
 */
String.prototype.equalsIgnoreCase = function(str: any): boolean {
  if (typeof str === 'undefined' || str === null) {
    return false;
  } else {
    return this.toLowerCase() === str.toString().toLowerCase();
  }
}

/**
 * 判断是否为空字符串
 *
 * @return boolean
 */
String.prototype.isEmpty = function(): boolean {
  return this.length === 0;
}

/**
 * 判断是否为空白字符串
 *
 * @return boolean
 */
String.prototype.isBlank = function(): boolean {
  return /^\s*$/.test(this.toString());
}

/**
 * 重复一个字符串
 *
 * @papram count 重复次数
 * @return 重复后的字符串
 */
String.prototype.repeat = function(count: number): string {
  if (count < 1) {
    return "";
  } else {
    let result = this.toString();
 		
    for (let i = 0; i < count; i++) {
      result += this.toString();
    }

    return result;
  }
}

/**
 * 截取字符串左边边指定数目的字符串
 *
 * @param length 截取长度
 * @return 子字符串
 */
String.prototype.left = function(length: number): string {
  return this.substring(0, length);
}

/**
 * 截取字符串右边指定数目的字符串
 *
 * @param length 截取长度
 * @return 子字符串
 */
String.prototype.right = function(length: number): string {
  return this.substring(this.length - length, this.length);
}

/**
 * 截取字符串，超出部分用 truncation 替代
 *
 * @param length 截取长度
 * @param truncation 替换字符串
 * @return 截取后的字符串
 *		   实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length
 */
String.prototype.truncation = function(length: number, truncation: string = '...'): string {
  truncation = truncation || "...";
  return this.length > length ? this.slice(0, length <= truncation.length ? length : length - truncation.length) + truncation : String(this);
}

/**
 * 删除字符串开头的空白字符
 *
 * @return 删除了字符串最左边的空白字符的字符串
 */
String.prototype.ltrim = function(): string {
  return Object.isFunction(this.trimStart) ? this.trimStart() : this.replace(/^\s*/g, "");
}

/**
 * 删除字符串结尾的空白字符
 *
 * @return 删除了字符串最右边的空白字符的字符串
 */
String.prototype.rtrim = function(): string {
  return Object.isFunction(this.trimEnd) ? this.trimEnd() : this.replace(/\s*$/g, "");
}

/**
 * 判断字符串是否以给定的字符串开头
 *
 * @param str 搜索的字符串
 * @return boolean
 */
String.prototype.startsWith = function(str: string): boolean {
  return this.indexOf(str) === 0;
}

/**
 * 判断字符串是否以给定的字符串结尾
 *
 * @param str 搜索的字符串
 * @return boolean
 */
String.prototype.endsWith = function(str: string): boolean {
  const d = this.length - str.length;
  return d >= 0 && this.lastIndexOf(str) === d;
}

/**
 * 首字母小写
 *
 * @return 结果字符串
 */
String.prototype.lcfirst = function(): string {
  return this.charAt(0).toLowerCase() + this.substring(1);
}

/**
 * 首字母大写
 *
 * @return 结果字符串
 */
String.prototype.ucfirst = function(): string {
  return this.charAt(0).toUpperCase() + this.substring(1);
}

/**
 * 将 HTML 编码
 *
 * @return 编码后的字符串
 */
String.prototype.escapeHTML = function(): string{
  return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * 将 HTML 实体字符解码
 *
 * @return 解码后的字符串
 */
String.prototype.unescapeHTML = function(): string {
  return this.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}

/**
 * 删除 HTML 标签
 * 
 * @param tag HTML 标签
 * @returns 删除标签后的字符串
 */
String.prototype.stripTag = function(tag: string): string {
  return this.replace(new RegExp("<" + tag + "(\s+(\"[^\"]*\"|'[^']*'|[^>])+)?>|<\/" + tag + ">", "gi"), "");
}

/**
 * 删除标签
 *
 * @param tags 删除指定的标签
 * @return 删除标签后的字符串
 */
String.prototype.stripTags = function(tags: string[]|string): string {
  if (typeof tags === "string") {
    return this.stripTag(tags);
  } else if (Array.isArray(tags)) {
    let result = this.toString();

    for (let i = 0; i < tags.length; i++) {
      result = result.stripTag(tags[i]);
    }

    return result;
  } else {
    return this.toString();
  }
}

/**
 * 删除 script 标签
 *
 * @return 删除 script 标签后的字符串
 */
String.prototype.stripScripts = function(): string {
  return this.replace(/<script[^>]*>([\S\s]*?)<\/script>/img, "");
}

/**
 * 将字符串转换为数组
 *
 * @param delimiter 分隔字符
 * @return 数组
 */
String.prototype.toArray = function(delimiter: string): string[] {
  return this.split(delimiter || "");
}

/**
 * 返回一个数组的字符串表示形式
 *
 * @param useDoubleQuotes 是否使用双引号引住
 * @return 后的字符串
 */
String.prototype.inspect = function(useDoubleQuotes): string {
  const specialChar: Record<string, string> = {'\b': '\\b', '\t': '\\t', '\r': '\\r', '\n': '\\n', '\f': '\\f', '\\': '\\\\'};
  const escapedString = this.replace(/[\x00-\x1f\\]/g, function (character: string) {
    if (character in specialChar) {
      return specialChar[character];
    }

    return '\\u00' + character.charCodeAt(0).toPaddedString(2, 16);
  });

  if (useDoubleQuotes) {
    return '"' + escapedString.replace(/"/g, '\\"') + '"';
  } else {
    return "'" + escapedString.replace(/'/g, '\\\'') + "'";
  }
 }

/**
 * 获取字符串 hash code
 *
 * @return 字符串 hash code
 */
String.prototype.hashCode = function(): number{
  let result = 0;

  if(result === 0&&this.length > 0){
    for (let i = 0; i < this.length; i++) {
      result = 31 * result + this.charCodeAt(i);
    }
  }

  return result;
 }

/**
 * 生成随机字符串
 *
 * @param length 生成字符串的长度
 * @param type 生成类型
 *        NUMERIC 		 - 数字随机字符串
 *		  LETTER  		 - 英文随机字符串
 *		  LETTER_NUMERIC - 英文数字混合随机字符串
 *		  CHINESE 		 - 中文随机字符串
 *        
 * @return 生成结果
 */
String.random = function(length: number, type: RandomType = "LETTER_NUMERIC"): string {
  let result = "";

  if (type === "CHINESE") {
    for (let i = 0; i < length; i++) {
      result += String.fromCharCode(Math.rand(19968,40891));
    }

    return result;
  }

  const numeric = "0123456789";
  const letter = "abcdefghijklmnopqrstuvwxyz";
  const map = {
    "NUMERIC": numeric,
    "LETTER": letter + letter.toUpperCase(),
    "LETTER_NUMERIC": numeric + letter + letter.toUpperCase()
  };

  if (!map[type]) {
    throw "Invalid argument type value, must be: NUMERIC, LETTER, LETTER_NUMERIC or CHINESE";
  }

  for (let i = 0; i < length; i++) {
    result += map[type].charAt(Math.rand(0, map[type].length-1));
  }

  return result;
}
