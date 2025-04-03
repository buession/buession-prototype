# Optional 参考手册


Optional 类是一个可以为 null 或 undefined 的容器对象，如果值 value 存在则 isPresent() 方法会返回 true，调用 get() 方法会返回 value 的值。
其设计思想，参考 [java8 的 Optional](https://blog.51cto.com/turnsole/2120847)


使用方式，在构造函数中传入任意类型值；Optional 提供很多有用的方法，这样我们就不用显式进行 null 值和 undefined 的检测。


### 方法

|  方法                                                  | 描述                                                             |
|  ----                                                 | ----                                                             |
| [of](optional.html#static-ofvalue-t)                  | 返回一个指定 T 类型的值的 Optional 实例                              |
| [ofNullable](optional.html#static-ofnullablevalue-t)  | 如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例       |
| [empty](optional.html#static-empty)                   | 返回空的 Optional 实例                                             |
| [get](optional.html#get)                              | 如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常      |
| [orElse](optional.html#orelseother-t)                 | 如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other  |
| [isPresent](optional.html#ispresent)                  | 如果 value 不为 null 或 undefined，则返回 true；否则返回 false       |


---


```javascript
<script type="text/javascript">
  var optional = new Optional(any value);
</script>
```

### **static of(value: T)**
* 类型：`Function`

* 功能描述：返回一个指定 T 类型的值的 Optional 实例

* 参数：value - `any of T` 任意类型的值

* 返回值：`Object` T 类型的值的 Optional 实例

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  Optional.of(11);
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
    const optional: boolean = Optional.<boolean>of(false)
  }
});
</script>
```

### **static ofNullable(value: T)**
* 类型：`Function`

* 功能描述：如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例

* 参数：value - `any as T` 任意类型的值

* 返回值：`Object` T 类型的值的 Optional 实例，或空的 Optional 实例

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  Optional.ofNullable('js');
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
    const optional: number = Optional.<number>ofNullable(11)
  }
});
</script>
```

### **static empty()**
* 类型：`Function`

* 功能描述：返回空的 Optional 实例

* 参数：无

* 返回值：`Object as Optional` 空的 Optional 实例

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  Optional.empty();
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
    const optional: null Optional.<null>empty()
  }
});
</script>
```

### **get()**
* 类型：`Function`

* 功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常

* 参数：无

* 返回值：`any as T` Optional 中包含这个值

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var optional = Optional.of(11);
  var result = optional.get(); // 11
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
    const optional: number = Optional.<number>of(11)
    const result = optional.get() // 11
  }
});
</script>
```

### **orElse(other: T)**
* 类型：`Function`

* 功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other

* 参数：other - `any of T` 任意类型的值

* 返回值：`any as T` value 不为 null 或 undefined，则返回 value 的值；否则返回 other

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var optional = Optional.of(null);
  var result = optional.orElse("abc"); // abc
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
    const optional: boolean = Optional.<boolean>of(undefined)
    const result = optional.orElse(false) // false
  }
});
</script>
```

### **isPresent()**
* 类型：`Function`

* 功能描述：如果 value 不为 null 或 undefined，则返回 true；否则返回 false

* 参数：无

* 返回值：`boolean` value 不为 null 或 undefined，则返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var optional = Optional.of(null);
  var result = optional.isPresent(); // false
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
    const optional: number = Optional.<number>of(11)
    const result = optional.isPresent() // true
  }
});
</script>
```