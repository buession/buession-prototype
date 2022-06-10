/**
 * Prototype 对象
 */

const Prototype = {
	/**
	 * 版本
	 */
	version: "__VERSION__",

	/**
	 * 空方法
	 * 
	 * @return void
	 */
	emptyFunction: function () {

	},

	/**
     * 
     * @param x 任意参数
     * @return 任意值
     */
	K: function (x: any): any {
		return x;
	}
}

interface Window {
	Prototype: typeof Prototype;
}

window.Prototype = Prototype;
