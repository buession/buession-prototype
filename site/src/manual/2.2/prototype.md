# Prototype 参考手册


### 属性

|  属性                                                | 描述                        |
|  ----                                               | ----                        |
| [version](prototype.html#version)                   | 获取 Buession Prototype 版本 |


### 方法

|  方法                                                | 描述                    |
|  ----                                               | ----                    |
| [emptyFunction](prototype.html#emptyFunction)       | 执行一个空方法            |
| [K](prototype.html#K)                               | 返回参数传递的任意值       |


---


### **version**
* 类型：`String`

* 功能描述：获取 Buession Prototype 版本

* 返回值：Buession Prototype 版本

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var ver = Prototype.version;
</script>
```

vue
```html
<template>
  <div>
    <div>Prototype 版本：{Prototype.version}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
  }
});
</script>
```


### **emptyFunction()**
* 类型：`Function`

* 功能描述：执行一个空方法

* 参数：无

* 返回值：void

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  Prototype.emptyFunction();
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
    Prototype.emptyFunction()
  }
});
</script>
```


### **K(x: any)**
* 类型：`Function`

* 功能描述：返回参数传递的任意值

* 参数：x - `any` 任意值

* 返回值：`any` 参数传递的任意值

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var v = Prototype.K(object);
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
    const v: any = Prototype.K(object)
  }
});
</script>
```