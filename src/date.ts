/**
 * Date 对象扩展
 */

interface Date {
  /**
   * 判断是否为闰年
   *
   * @return boolean
   */
  isLeapYear(): boolean;

  /**
   * 获取季节
   *
   * @return 季节
   */
  getSeason(): number;

  /**
   * 获取年份中的第几天
   *
   * @return 年份中的第几天
   */
  getDayOfYear(): number;

  /**
   * 获取年份总天数
   *
   * @return 年份总天数
   */
  getDaysOfYear(): number;

	/**
	 * 将日期时间格式化为字符串
	 * 
	 * @param  format string - the desired format of the date
	 *
	 * The format can be combinations of the following:
	 *
	 * y - 年
	 * n - 季度（1 到 4）
	 * N - 季度名称
	 * A - 季度中文名称
	 * M - 月
	 * f - 月（Jan 到 Dec）
	 * F - 月（January 到 December）
	 * C - 月，中文名称
	 * d - 日
	 * Y - 年份中的第几天（0 到 365）
	 * T - 月份有几天（28 到 30）
	 * j - 每月天数后面的英文后缀（st，nd，rd 或者 th）
	 * e - 星期几，数字表示，0（表示星期天）到 6（表示星期六）
	 * E - 星期几，数字表示，1（表示星期一）到 7（表示星期天）
	 * l - 星期几，文本表示，3 个字母（Mon 到 Sun）
	 * L - 星期几，完整的文本格式（Sunday 到 Saturday）
	 * w - 星期几，中文名称
	 * W - 一月中第几个星期几
	 * i - 月份中的第几周
	 * o - 年份中的第几周
	 * h - 小时(1~12)
	 * H - 小时(0~23)
	 * m - 分
	 * s - 秒
	 * S - 毫秒
	 * a - 上午/下午标记
	 * O - 与格林威治时间相差的小时数
	 * P - 与格林威治时间相差的小时数，小时和分钟之间有冒号分隔
	 * Z - 时区
	 *
	 * @return 格式化后的日期时间
	 */
  format(format: string): string;
}

declare var Date: DateConstructor;

/**
 * 判断是否为闰年
 *
 * @return boolean
 */
Date.prototype.isLeapYear = function(): boolean {
	const year = this.getFullYear();
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

/**
 * 获取季节
 *
 * @return 季节
 */
Date.prototype.getSeason = function(): number {
  const month = this.getMonth();

	if (month >= 3 && month <= 5) {
		return 0;
	} else if(month >= 6 && month <= 8) {
		return 1;
	} else if(month >= 9 && month <= 11) {
		return 2;
	} else if(month >= 12 || month <= 2) {
		return 3;
	} else {
		return 0;
	}
}

/**
 * 获取年份中的第几天
 *
 * @return 年份中的第几天
 */
Date.prototype.getDayOfYear = function(): number {
	const daysInMonth = [31, this.isLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let days = 0;

	for (let m = 0, month = this.getMonth(); m < month; m++) {
		days += daysInMonth[m];
	}

	return days;
}

/**
 * 获取年份总天数
 *
 * @return 年份总天数
 */
Date.prototype.getDaysOfYear = function(): number {
	return this.isLeapYear() ? 366 : 365;
}

/**
 * Format a date object into a string value.
 * @param  format string - the desired format of the date
 *
 * The format can be combinations of the following:
 *
 * y - 年
 * n - 季度（1 到 4）
 * N - 季度名称
 * A - 季度中文名称
 * M - 月
 * f - 月（Jan 到 Dec）
 * F - 月（January 到 December）
 * C - 月，中文名称
 * d - 日
 * Y - 年份中的第几天（0 到 365）
 * T - 月份有几天（28 到 30）
 * j - 每月天数后面的英文后缀（st，nd，rd 或者 th）
 * e - 星期几，数字表示，0（表示星期天）到 6（表示星期六）
 * E - 星期几，数字表示，1（表示星期一）到 7（表示星期天）
 * l - 星期几，文本表示，3 个字母（Mon 到 Sun）
 * L - 星期几，完整的文本格式（Sunday 到 Saturday）
 * w - 星期几，中文名称
 * W - 一月中第几个星期几
 * i - 月份中的第几周
 * o - 年份中的第几周
 * h - 小时(1~12)
 * H - 小时(0~23)
 * m - 分
 * s - 秒
 * S - 毫秒
 * a - 上午/下午标记
 * O - 与格林威治时间相差的小时数
 * P - 与格林威治时间相差的小时数，小时和分钟之间有冒号分隔
 * Z - 时区
 *
 * @return 格式化后的日期时间
 */
Date.prototype.format = function(format: string): string {
	if (Object.isString(format) === false) {
		throw "Invalid argument format";
	}

	const _season_map = {
		"N": ["Spring", "Summer", "Autumn", "Winter"],
		"A": ["\u6625", "\u590f", "\u79cb", "\u51ac"]
	};
	const _month_map = {
		"f": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		"F": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		"C": ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u5341\u4E00", "\u5341\u4E8C"]
	};
	const _weekday_map = {
		"W": 	["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		"WW": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		"WC":	["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"]
	};
	const seasonFn = () => {
		const month = this.getMonth();

		if (month === 11 || month >= 0 && month <= 1) {
			return 1;
		} else if (month >= 2 && month <= 4) {
			return 2;
		} else if (month >= 5 && month <= 7) {
			return 3;
		} else if (month >= 8 && month <= 10) {
			return 4;
		} else {
			return 0;
		}
	};
	const $funcs: Record<string, Function> = {
		// 年
		"y": (pattern: string): string => {
			return (this.getFullYear() + "").substring(4 - pattern.length);
		},

		// 季度（1 到 4）
		"n": (): number => {
			return seasonFn();
		},

		// 季度名称
		"N": (): string => {
			return _season_map["N"][seasonFn() - 1];
		},

		// 季度中文名称
		"A": (): string => {
			return _season_map["A"][seasonFn() - 1];
		},

		// 月
		"M": (pattern: string): string => {
      const $month = this.getMonth() + 1;
      const result = $month < 10 ? "0" + $month : "" + $month;

      return result.substring(2 - pattern.length);
    },

		// 月（Jan 到 Dec）
		"f": (): string => {
			const $month = this.getMonth();
			return _month_map["f"][$month];
		},

		// 月（January 到 December）
		"F": (): string => {
			const $month = this.getMonth();
			return _month_map["F"][$month];
		},

		// 月，中文名称
		"C": (): string => {
			const $month = this.getMonth();
			return _month_map["C"][$month];
		},

		// 星期数字，0 到 6 表示
		"e": (): number => {
			return this.getDay();
		},

		// 星期数字，1 到 7 表示
		"E": (): number => {
			return this.getDay() + 1;
		},

		// 星期英文缩写
		"l": (): string => {
			const $weekday = this.getDay();
			return _weekday_map["W"][$weekday];
		},

		// 星期英文全称
		"L": (): string => {
			const $weekday = this.getDay();
			return _weekday_map["WC"][$weekday];
		},

		// 星期中文名称
		"w": (): string => {
			const $weekday = this.getDay();
			return _weekday_map["WC"][$weekday];
		},

		// 日
		"d": (pattern: string): string => {
			const $date = this.getDate();
			const result = $date < 10 ? "0" + $date : "" + $date;

			return result.substring(2 - pattern.length);
		},

		// 小时
		"h": (pattern: string): string => {
			const $hour = this.getHours();
			let result = $hour % 12 === 0 ? "12" : $hour % 12;

			result = $hour < 10 ? "0" + $hour : "" + $hour;

			return result.substring(2 - pattern.length);
		},

		// 小时
		"H": (pattern: string): string => {
			const $hour = this.getHours();
			const result = $hour < 10 ? "0" + $hour : "" + $hour;

			return result.substring(2 - pattern.length);
		},

		// 分钟
		"m": (pattern: string): string => {
			const $minutes = this.getMinutes();
			const result = $minutes < 10 ? "0" + $minutes : "" + $minutes;

			return result.substring(2 - pattern.length);
		},

		// 秒钟
		"s": (pattern: string): string => {
			const $seconds = this.getSeconds();
			const result = $seconds < 10 ? "0" + $seconds : "" + $seconds;

			return result.substring(2 - pattern.length);
		},

		// 毫秒
		"S": (pattern: string): string => {
			const $mise = this.getMilliseconds();
			const result = $mise < 10 ? "0" + $mise : "" + $mise;

			return result.substring(2 - pattern.length);
		}
	};

	return format.replace(/([ynNAMfFCdYTjeElLwWiohHmsSaOPZ])+/g, (all: string, t: string): string => {
		const fn = $funcs[t];
		return Object.isFunction(fn) ? fn(all) : all;
	});
}
