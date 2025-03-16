# Location 参考手册


### 方法

|  方法                                           | 描述                   |
|  ----                                          | ----                   |
| [getParameters](location.html#getParameters)   | 获取所有的请求参数及值    |
| [getParameter](location.html#getseason)        | 获取指定请求参数的值      |


---


### **getParameters()**
* 类型：`Function`

* 功能描述：获取所有的请求参数及值

* 参数：无

* 返回值：`Record<string, any>` 当前请求 URL 中的所有的请求参数及值

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = location.getParameters();
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
    const result: Record<string, any> = location.getParameters()
  }
});
</script>
```


### **getParameter(name: string)**
* 类型：`Function`

* 功能描述：获取指定请求参数的值

* 参数：`string` 参数名称

* 返回值：`any` 请求参数的值

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = location.getParameter("action");
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
    const result: any = location.getParameter('action');
  }
});
</script>
```