# Function 参考手册


### 方法

|  方法                                                 | 描述                   |
|  ----                                                | ----                   |
| [rand](math.html#randmin-number,-max?-number)        | 延时执行函数             |


---


### **rand(min: number, max?: number)**
* 类型：`Function`

* 功能描述：产生一个指定范围内的随机数

* 参数：min - `number` 返回的最低值
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max - `number` 返回的最高值

* 返回值：`number` 随机数

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Math.rand(1, 5); //
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
    const result: number = Math.rand(1, 5)
  }
});
</script>
```