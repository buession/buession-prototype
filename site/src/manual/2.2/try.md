# Try 参考手册


### 方法

|  方法                                        | 描述                                                                 |
|  ----                                        | ----                                                                |
| [these](try.html#theseargs-any[])       | 接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果  |


---


### **these(args: any[])**
* 类型：`Function`

* 功能描述：接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果

* 参数：args `any[]` 一个或多个 `function` 作为参数

* 返回值：`any` 任意函数参数执行结果

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Try.these(function(){

    },

    function() {

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
    const result:any = Try.these(function(){

      },

      function() {

    })
  }
});
</script>
```