/**
 * Object 对象扩展
 */

interface ObjectConstructor {
  /**
   * 获取对象数据类型
   *
   * @param obj 对象变量
   * @return 对象数据类型
   */
  type(obj: any): string;

  /**
   * 获取对象原始数据类型
   *
   * @param obj 对象变量
   * @return 原始数据类型
   */
  rawType(obj: any): string;

  /**
   * 判断对象是否为 object 类型
   *
   * @param obj 任意对象
   * @return boolean
   */
  isObject(obj: any): boolean;

  /**
   * 判断对象是否为简单 object 类型
   *
   * @param obj 任意对象
   * @return boolean
   */
  isPlainObject(obj: any): boolean;

  /**
   * 判断对象是否为 Map 类型
   *
   * @param obj 任意对象
   * @return boolean
   */
  isMap(obj: any): boolean;

  /**
   * 判断对象是否为 Set 类型
   *
   * @param obj 任意对象
   * @return boolean
   */
  isSet(obj: any): boolean;

  /**
   * 判断对象是否为 Symbol
   *
   * @param obj 任意对象
   * @return boolean
   */
  isSymbol(obj: any): boolean;

	/**
	 * 判断对象是否为 Promise
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isPromise(obj: any): boolean;
 
	/**
	 * 判断对象是否为原始类型
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isPrimitive(obj: any): boolean;

	/**
	 * 判断对象是否为函数
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isFunction(obj: any): boolean;

	/**
	 * 判断对象是否为数组
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isArray(obj: any): boolean;

	/**
	 * 判断对象是否为字符串对象
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isString(obj: any): boolean;

	/**
	 * 判断对象是否为数字对象
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isNumber(obj: any): boolean;

	/**
	 * 判断对象是否为布尔对象
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isBoolean(obj: any): boolean;

	/**
	 * 判断对象是否为正则对象
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isRegExp(obj: any): boolean;

	/**
	 * 判断对象是否为文件对象
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isFile(obj: any): boolean;

	/**
	 * 判断对象是否为 windows 对象
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isWindow(obj: any): boolean;

	/**
	 * 判断对象是否为 Element
	 * 
	 * @param obj 任意对象
	 * @return boolean
	 */
	isElement(obj: any): boolean;

	/**
	 * 判断对象是否为事件对象
	 *
	 * @param obj 任意对象
	 * @return boolean
	 */
	isEvent(obj: any): boolean;

  /**
   * 判断对象是否为 null 对象
   *
   * @param obj 任意对象
   * @return boolean
   */
  isNull(obj: any): boolean;

  /**
   * 判断对象是否为未定义
   *
   * @param obj 任意对象
   * @return boolean
   */
  isUndefined(obj: any): boolean;

  /**
   * 判断对象是否为未定义或 null
   *
   * @param obj 任意对象
   * @return boolean
   */
  isUndefinedOrNull(obj: any): boolean;

	/**
	 * 判断两个对象是否相等
	 * 
	 * @param obj1 一个对象
	 * @param obj2 用于和 obj1 比较的对象
	 * @return 当两个对象相等时，返回 true；否则，返回 false
	 */
	equals(obj1: any, obj2: any): boolean;

  /**
   * 克隆对象
   *
   * @param obj 任意对象
   * @return 新对象实例
   */
  clone(obj: any): any;

	/**
	 * 克隆对象，但需要删除指定属性
	 * 
	 * @param obj 任意对象
	 * @param fields 需要删除的属性
   * @return 新对象实例
	 */
	omit<T extends object, K extends keyof T> (obj: T, ...fields: K[]): Omit<T, K>;
}

declare var Object: ObjectConstructor;

/**
 * 获取对象数据类型
 *
 * @param obj 对象变量
 * @return 对象数据类型
 */
Object.type = function(obj: any): string {
  return typeof obj;
}

/**
 * 获取对象数据类型
 *
 * @param obj 对象变量
 * @return 对象数据类型
 */
Object.rawType = function(obj: any): string {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 * 判断对象是否为 object 类型
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isObject = function(obj: any): boolean {
	return obj !== null && typeof obj === "object";
}

/**
 * 判断对象是否为 object 类型
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isPlainObject = function(obj: any): boolean {
	return Object.prototype.toString.call(obj) === "[object Object]";
}

/**
 * 判断对象是否为 Map 类型
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isMap = function(obj: any): boolean {
	return Object.prototype.toString.call(obj) === "[object Map]";
}

/**
 * 判断对象是否为 Set 类型
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isSet = function(obj: any): boolean {
	return Object.prototype.toString.call(obj) === "[object Set]";
}

/**
 * 判断对象是否为函数
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isFunction = function(obj: any): boolean {
	return Object.type(obj) === "function";
}

/**
 * 判断对象是否为 Symbol
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isSymbol = function(obj: any): boolean {
	if (typeof obj === "symbol") {
		return true;
	}

	try {
    const toString = Symbol.prototype.toString;
		if (typeof obj.valueOf() !== "symbol") {
			return false;
		}

		return /^Symbol\(.*\)$/.test(toString.call(obj));
	} catch (e) {
		return false;
	}
}

/**
 * 判断对象是否为 Promise
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isPromise = function(obj: any): boolean {
	return Object.isUndefinedOrNull(obj) === false && Object.isFunction(obj.then) && Object.isFunction(obj.catch);
}

/**
 * 判断对象是否为原始类型
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isPrimitive = function(obj: any): boolean {
	return Object.isBoolean(obj) || Object.isString(obj) || Object.isNumber(obj);
}

/**
 * 判断对象是否为数组
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isArray = function(obj: any): boolean {
	return Array.isArray(obj);
}

/**
 * 判断对象是否为字符串对象
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isString = function(obj: any): boolean {
	return Object.type(obj) === "string";
}
/**
 * 判断对象是否为数字对象
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isNumber = function(obj: any): boolean {
	return Object.type(obj) === "number";
}

/**
 * 判断对象是否为布尔对象
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isBoolean = function(obj: any): boolean {
	return Object.type(obj) === "boolean";
}

/**
 * 判断对象是否为正则对象
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isRegExp = function(obj: any): boolean {
	return Object.rawType(obj) === 'RegExp';
}

/**
 * 判断对象是否为文件对象
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isFile = function(obj: any): boolean {
	return obj instanceof File;
}

/**
 * 判断对象是否为 windows 对象
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isWindow = function(obj: any): boolean {
	return Object.isUndefinedOrNull(obj) && obj == obj.window;
}

/**
 * 判断对象是否为 Element
 * 
 * @param obj 任意对象
 * @return boolean
 */
Object.isElement = function(obj: any): boolean {
	if (Object.isUndefinedOrNull(obj)) {
		return false;
	}

	return !!(obj.nodeType == 1);
}

/**
 * 判断对象是否为事件对象
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isEvent = function(obj: any): boolean {
	return obj instanceof Event;
}

/**
 * 判断对象是否为 null 对象
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isNull = function(obj: any): boolean {
	return obj === null;
}

/**
 * 判断对象是否为未定义
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isUndefined = function(obj: any): boolean {
	return obj === undefined;
}

/**
 * 判断对象是否为未定义或 null
 *
 * @param obj 任意对象
 * @return boolean
 */
Object.isUndefinedOrNull = function(obj: any): boolean {
	return Object.isUndefined(obj) || Object.isNull(obj);
}

/**
 * 判断两个对象是否相等
 * 
 * @param obj1 一个对象
 * @param obj2 用于和 obj1 比较的对象
 * @return 当两个对象相等时，返回 true；否则，返回 false
 */
Object.equals = function(obj1: any, obj2: any): boolean {
	if (obj1 === obj2) {
		return true;
	} else if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
		return false;
	} else if (obj1.constructor !== obj2.constructor) {
		return false;
	} else if (Object.isArray(obj1) && Object.isArray(obj2) && obj1.length === obj2.length) {
		for (let i = 0; i < obj1.length; i++) {
			if (Object.equals(obj1[i], obj2[i]) === false) {
				return false
			}
		}
	}else if (Object.isObject(obj1) && Object.isObject(obj2) && Object.keys(obj1).length === Object.keys(obj2).length) {
		for (const key in obj1) {
			if (obj1.hasOwnProperty.call(key)) {
				if (Object.equals(obj1[key], obj2[key]) === false) {
					return false
				}
			}
		}
	} else {
		return false;
	}

	return true;
}

/**
 * 克隆对象
 *
 * @param obj 任意对象
 * @return 新对象实例
 */
Object.clone = function(obj: any): any {
	if (Object.isString(obj)) {
		return String(obj);
	} else if (Object.isArray(obj)) {
		return Array.prototype.slice.apply(obj);
	} else if (Object.isPlainObject(obj)) {
		const result = {};

		Object.keys(obj).forEach(name => {
			result[name] = Object.clone(obj[name]);
		});

		return result;
	}

	return obj;
}

/**
 * 克隆对象，但需要删除指定属性
 * 
 * @param obj 任意对象
 * @param fields 需要删除的属性
 * @return 新对象实例
 */
Object.omit = function<T extends object, K extends keyof T>(obj: T, ...fields: K[]): Omit<T, K> {
	const result = Object.assign({}, obj);

  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete result[key];
  }
  
  return result;
}
