/**
 * Try 对象
 */

const Try = {
	/**
	 * 接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果
	 * @return 任意函数参数执行结果
	 */
	these: function(): any {
		let result;

		for (let i = 0; i < arguments.length; i++) {
			const lambda = arguments[i];

			if (Object.isFunction(lambda)) {
				try {
					result = lambda();
					break;
				} catch(e) {
					console.error(e);
				}
			}
		}

		return result;
	}
}

interface Window {
	Try: typeof Try
}

window.Try = Try;
