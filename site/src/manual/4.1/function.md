# Function 参考手册


### 方法

|  方法                                                         | 描述                   |
|  ----                                                        | ----                   |
| [argumentNames](function.html#argumentnames...args-any)      | 获取函数参数名称         |
| [delay](function.html#delaytimeout-number)                   | 延时执行函数             |


---


### **argumentNames(...args: any)**
* 类型：`Function`

* 功能描述：获取函数参数名称

* 参数：args - `any` 1个或多个任意类型的可变参数可变参数

* 返回值：`string[] | null` 函数参数名称列表

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var fn = function(a, b, c){

  }
  var result = fn.argumentNames();
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
    const fn = function(a: boolean, b: number, c: String) {

    }
    const result: string[] | null = fn.argumentNames()
  }
});
</script>
```


### **delay(timeout: number)**
* 类型：`Function`

* 功能描述：延时执行函数

* 参数：timeout - `number` 延时时间（单位：秒）

* 返回值：`any` 函数返回值

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var fn = function(a, b, c){
    return a + b + c;
  }
  var result = fn.delay(3)
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
    const fn = function(a: boolean, b: number, c: number) {
      return a ? b : c
    }
    const result: any = fn.delay(3)
  }
});
</script>
```