# Window 参考手册


### 属性

|  属性                                              | 描述                         |
|  ----                                             | ----                         |
| [browser](browser.html)                           | 浏览器信息对象                 |
| [location](location.html)                         | Location 对象                 |


### 方法

|  方法                                                                    | 描述                   |
|  ----                                                                   | ----                   |
| [copy](window.html#copystr-string)                                      | 将字符串复制到剪贴板      |
| [delay](window.html#delayfunc-function,-wait?-number,-...args-any)      | 延时执行方法             |


---


### **copy(str: string)**
* 类型：`Function`

* 功能描述：将字符串复制到剪贴板

* 参数：str - `string` 字符串

* 返回值：无

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  window.copy("这是要复制的字符串");
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
    window.copy("这是要复制的字符串")
  }
});
</script>
```


### **delay(func: Function, wait?: number, ...args: any)**
* 类型：`Function`

* 功能描述：延时执行

* 参数：func - `Function` 方法
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wait - `number` 延时时长（单位：毫秒）
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;args - `any[]` 方法参数

* 返回值：any

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  window.delay(function () {
    location.href = "/";
  }, 3000);
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
    window.delay(function () {
      // code
    });
  }
});
</script>
```


### Browser


### Location