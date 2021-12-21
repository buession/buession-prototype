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
    format(format: string): string;
}
