# Date 参考手册


### 方法

|  方法                                         | 描述                   |
|  ----                                        | ----                   |
| [isLeapYear](date.html#isleapyear)           | 判断是否为闰年           |
| [getSeason](date.html#getseason)             | 获取季节                |
| [getDayOfYear](date.html#getdayofyear)       | 获取年份中的第几天       |
| [getDaysOfYear](date.html#getdaysofyear)     | 获取年份总天数           |
| [format](date.html#formatformat-string)      | 将日期时间格式化为字符串  |


---


### **isLeapYear()**
* 类型：`Function`

* 功能描述：判断是否为闰年

* 参数：无

* 返回值：`boolean` 是闰年，返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = new Date('2000-04-11').isLeapYear(); // true
</script>
```

vue
```html
<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const result: boolean = new Date('2000-04-11').isLeapYear() // false
  }
});
</script>
```


### **getSeason()**
* 类型：`Function`

* 功能描述：获取季节

* 参数：无

* 返回值：`number` 依次返回 0 至 3 的整数，表示春季、夏季、秋季、冬季

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = new Date('2000-04-11').isLeapYear(); // 0
</script>
```

vue
```html
<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const result: boolean = new Date('2022-01-11').isLeapYear() // 3
  }
});
</script>
```


### **getDayOfYear()**
* 类型：`Function`

* 功能描述：获取年份中的第几天

* 参数：无

* 返回值：`number` 年份中的第几天

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = new Date('2022-02-11').getDayOfYear(); // 42
</script>
```

vue
```html
<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const result: number = new Date('2022-03-01').getDayOfYear(); // 61
  }
});
</script>
```


### **getDaysOfYear()**
* 类型：`Function`

* 功能描述：获取年份总天数

* 参数：无

* 返回值：`number` 年份总天数

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = new Date('2022-02-11').getDaysOfYear(); // 365
</script>
```

vue
```html
<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const result: number = new Date('2020-02-11').getDaysOfYear() // 366
  }
});
</script>
```


### **format(format: string)**
* 类型：`Function`

* 功能描述：将日期时间格式化为字符串

* 参数：format - `String` format 格式字符串

        y - 年

        n - 季度（1 到 4）

        N - 季度名称

        A - 季度中文名称

        M - 月

        f - 月（Jan 到 Dec）

        F - 月（January 到 December）

        C - 月，中文名称

        d - 日

        Y - 年份中的第几天（0 到 365）

        T - 月份有几天（28 到 30）

        j - 每月天数后面的英文后缀（st，nd，rd 或者 th）

        e - 星期几，数字表示，0（表示星期天）到 6（表示星期六）

        E - 星期几，数字表示，1（表示星期一）到 7（表示星期天）

        l - 星期几，文本表示，3 个字母（Mon 到 Sun）

        L - 星期几，完整的文本格式（Sunday 到 Saturday）

        w - 星期几，中文名称

        W - 一月中第几个星期几

        i - 月份中的第几周

        o - 年份中的第几周

        h - 小时(1~12)

        H - 小时(0~23)

        m - 分

        s - 秒

        S - 毫秒

        a - 上午/下午标记

        O - 与格林威治时间相差的小时数

        P - 与格林威治时间相差的小时数，小时和分钟之间有冒号分隔
        
        Z - 时区

* 返回值：`string` 格式化后的日期时间

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = new Date('2022-01-11').format("f-dd,yyyy"); // Jan-11,2022
</script>
```

vue
```html
<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const result: string = new Date('2022-01-11').format("f-dd,yy"); // Jan-11,22
  }
});
</script>
```