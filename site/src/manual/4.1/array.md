# Array 参考手册


### 方法

|  方法                                    | 描述                                           |
|  ----                                   | ----                                           |
| [isEmpty](array.html#isempty)           | 判断数组是否为空数组                              |
| [exists](array.html#existsitem-any)     | 判断元素 item 是否在数组中                        |
| [first](array.html#first)               | 获取数组第一个元素                                |
| [last](array.html#last)                 | 获取数组最后一个元素                              |
| [each](array.html#eachcallback-value-t,-index-number,-array-readonly-t[]-=>-void,-thisarg?-any)       | 按顺序为数组中的每个元素调用一次函数  |
| [size](array.html#last)                 | 获取数组大小                                     |
| [merge](array.html#merge...items-t[])   | 连接两个或多个数组                                |
| [compact](array.html#compact)           | 返回一个不包含 null/undefined 值元素的数组的新版本  |
| [unique](array.html#unique)             | 对数组的元素进行去重                              |
| [without](array.html#withoutvalues-t[]) | 返回不包括参数中任意一个指定值的数组                 |
| [clone](array.html#clone)               | 克隆数组                                         |
| [clear](array.html#clear)               | 清空数组                                         |


---


### **isEmpty()**
* 类型：`Function`

* 功能描述：判断数组是否为空数组

* 参数：无

* 返回值：`boolean` 数组为空，返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = [].isEmpty(); // true
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
    const result: boolean = ['a', 'b', 'c'].isEmpty() // false
  }
});
</script>
```


### **exists(item: any)**
* 类型：`Function`

* 功能描述：判断元素 item 是否在数组中

* 参数：item - `any` 待检测元素

* 返回值：`boolean` 元素 item 是否在数组中返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = ['a', 'b'].exists('a'); // true
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
    const result: boolean = ['1', '2'].exists(2) // false
  }
});
</script>
```


### **first()**
* 类型：`Function`

* 功能描述：获取数组第一个元素

* 参数：无

* 返回值：`any` 数组第一个元素

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = ['a', 'b'].first(); // a
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
    const result: boolean = [1, 2].first() // 1
  }
});
</script>
```


### **last()**
* 类型：`Function`

* 功能描述：获取数组最后一个元素

* 参数：无

* 返回值：`any` 数组最后一个元素

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = ['a', 'b'].last(); // b
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
    const result: boolean = [1, 2].last() // 2
  }
});
</script>
```


### **each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)**
* 类型：`Function`

* 功能描述：按顺序为数组中的每个元素调用一次函数，[forEach](https://www.w3school.com.cn/jsref/jsref_foreach.asp)的别名

* 参数：callback - `(value: T, index: number, array: readonly T[]) => void as Function` callback 为数组中的每个元素运行的函数，其中：value 为前元素的值，index 为当前元素的数组索引，array 为当前元素所属的数组对象
       `any` thisArg 可选。要传递给函数以用作其 "this" 值的值，如果此参数为空，则值 "undefined" 将作为其 "this" 值传递

* 返回值：`void`

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  ['a', 'b'].each(function (currentValue) {
      console.log(currentValue)
  });
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
    ['a', 'b'].each(function (currentValue) {
      console.log(currentValue)
    })
  }
});
</script>
```


### **size()**
* 类型：`Function`

* 功能描述：获取数组大小

* 参数：无

* 返回值：`number` 数组大小

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = ['a', 'b'].size(); // 2
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
    const result: number = [].size() // 0
  }
});
</script>
```


### **merge(...items: T[])**
* 类型：`Function`

* 功能描述：连接两个或多个数组

* 参数：items - `any as T` 待连接的 T 类型的数组

* 返回值：`Array<T>` 已连接数组的副本

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = [1, 3].merge(2, 4); // [1, 3, 2, 4]
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
    console result: string[] = ['a', 'b'].merge('c', 'd') // [a, b, c, d]
  }
});
</script>
```


### **compact()**
* 类型：`Function`

* 功能描述：返回一个不包含 null/undefined 值元素的数组的新版本

* 参数：无

* 返回值：`Array<T>` 不包含 null/undefined 值元素的数组的新版本

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = ['a', 'b', null, 'c', 'd'].compact(); // [a, b, c, d]
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
    const result: string[] = ['a', 'b', null, 'c', 'd', undefined].compact() // [a, b, c, d]
  }
});
</script>
```


### **unique()**
* 类型：`Function`

* 功能描述：对数组的元素进行去重

* 参数：无

* 返回值：`Array<T>` 数组元素进行去重后的新版本

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = ['a', 'b', 'c', 'd', 'b', 'd'].unique(); // [a, b, c, d]
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
    const result: string[] = ['a', 'b', 'c', 'c', 'd'].unique() // [a, b, c, d]
  }
});
</script>
```


### **without(values: T[])**
* 类型：`Function`

* 功能描述：返回不包括参数中任意一个指定值的数组

* 参数：values - `any as T[]` 排除值数组

* 返回值：`Array<T>` 不包括参数中任意一个指定值的数组

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b'); // [c, d]
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
    const result: string[] = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b') // [c, d]
  }
});
</script>
```


### **clone()**
* 类型：`Function`

* 功能描述：克隆数组

* 参数：无

* 返回值：`Array<T>` 克隆结果

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = ['a', 'b'].clone(); // [a, b]
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
    const result: string[] = ['a', 'b'].clone() // [a, b]
  }
});
</script>
```


### **clear()**
* 类型：`Function`

* 功能描述：清空数组

* 参数：无

* 返回值：`Array<T>` 空数组

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = ['a', 'b'].clear(); // []
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
    const result: string[] = ['a', 'b'].clear() // []
  }
});
</script>
```