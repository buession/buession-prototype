# Number 参考手册


### 方法

|  方法                                                                                    | 描述                   |
|  ----                                                                                   | ----                   |
| [toPaddedString](number.html#topaddedstringlength-number,-radix-number)                 | 延时执行函数             |
| [isOdd](number.html#isoddnum-number)                                                    | 判断数字是否为奇数        |
| [isEven](number.html#isevennum-number)                                                  | 判断数字是否为偶数        |
| [isBetween](number.html#isbetweennum-number,-min-number,-max-number,-match?-boolean)    | 判断一个数字是否在另两个数字之间             |


---


### **toPaddedString(length: number, radix: number)**
* 类型：`Function`

* 功能描述：数字填充

* 参数：length - `number` 长度  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;radix - `number` 进制

* 返回值：`string` 填充后的字符串数字

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = new Number(5).toPaddedString(12, 2); // 0000000000101
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
    const result: string = new Number(5).toPaddedString(12, 8) // 0000000000005
  }
});
</script>
```


### **isOdd(num: number)**
* 类型：`Function`

* 功能描述：判断数字是否为奇数

* 参数：num - `number` 需要判断的数字

* 返回值：`boolean` 数字是为奇数返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Number.isOdd(255); // true
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
    const result: boolean = Number.isOdd(256) // false
  }
});
</script>
```


### **isEven(num: number)**
* 类型：`Function`

* 功能描述：判断数字是否为偶数

* 参数：num - `number` 需要判断的数字

* 返回值：`boolean` 数字是为偶数返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Number.isEven(255); // false
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
    const result: boolean = Number.isOdd(256) // true
  }
});
</script>
```


### **isBetween(num: number, min: number, max: number, match?: boolean | undefined)**
* 类型：`Function`

* 功能描述：判断一个数字是否在另两个数字之间

* 参数：num - `number` 需要判断的数字  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min - `number` 最小值  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max - `number` 最大值  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;match - `boolean | undefined` 是否包含最小值或最大值

* 返回值：`boolean` 数字是否在另两个数字之间，返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Number.isBetween(4, 3, 5); // true
  var result = Number.isBetween(4, 4, 5); // false
  var result = Number.isBetween(4, 4, 5, true); // true
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
    const result: boolean = Number.isBetween(4, 3, 5) // true
    const result: boolean = Number.isBetween(4, 4, 5) // false
    const result: boolean = Number.isBetween(4, 4, 5, true) // true
  }
});
</script>
```