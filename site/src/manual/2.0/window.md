# Window 参考手册


### 属性

|  属性                                              | 描述                         |
|  ----                                             | ----                         |
| [browser](browser.html)                           | 浏览器信息对象                 |
| [location](location.html)                         | Location 对象                 |


### 方法

|  方法                                    | 描述                   |
|  ----                                   | ----                   |
| [copy](window.html#copystr-string)      | 将字符串复制到剪贴板      |


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


### Browser


### Location