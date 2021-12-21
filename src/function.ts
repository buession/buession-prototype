/**
 * Function 对象扩展
 */

interface Function {
    /**
	 * 获取函数参数名称
	 *
	 * @return 函数参数名称列表
	*/
	argumentNames(): string[] | null;

    /**
  	 * 延时执行函数
  	 *
  	 * @param timeout 延时时间（单位：秒）
  	 * @return mixed
  	*/
    delay(timeout: number): any
}

/**
 * 延时执行函数
 *
 * @param timeout 延时时间（单位：秒）
 * @return mixed
*/
Function.prototype.delay = function(timeout: number): any {
    let __method = this,
    args = Array.prototype.slice.call(arguments, 1);

    return window.setTimeout(__method.apply(__method, args), timeout * 1000);
}

/**
 * 获取函数参数名称
 *
 * @return 函数参数名称列表
*/
Function.prototype.argumentNames = function(): string[] | null {
    const method = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/);

    if (method === null) {
        return null;
    }

	const names = method[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, "").replace(/\s+/g, "").split(", ");
	return names.length === 1 && !names[0] ? [] : names;
}
