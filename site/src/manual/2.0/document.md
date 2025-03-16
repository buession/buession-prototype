# Document 参考手册


### 属性

|  属性                                                              | 描述                                       |
|  ----                                                             | ----                                       |
| [fullScreen](document.html#readonly-fullscreen)                   | 检测当前文档是否全屏                          |
| [fullScreenEnabled](document.html#readonly-fullscreenenabled)     | 检测当前浏览器是否支持全屏模式                 |
| [fullScreenElement](document.html#readonly-fullscreenelement)     | 检测当前文档中正在以全屏模式显示的 Element 节点  |
| [fullScreen](document.html#readonly-fullscreen)                   | 检测当前文档是否全屏                          |


### 方法

|  方法                                                                | 描述              |
|  ----                                                               | ----             |
| [requestFullscreen](document.html#readonly-fullscreenelement)       | 请求进入全屏模式    |
| [exitFullscreen](document.html#exitfullscreen)                      | 退出全屏模式       |


---


### **readonly fullScreen**
* 类型：`Property`

* 功能描述：检测当前文档是否全屏

* 参数：无

* 返回值：`boolean` 当前文档是否全屏，返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = document.fullScreen;
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
    const result: boolean = document.fullScreen;
  }
});
</script>
```


### **readonly fullScreenEnabled**
* 类型：`Property`

* 功能描述：检测当前浏览器是否支持全屏模式

* 返回值：`boolean` 当前浏览器是否支持全屏模式返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = document.fullScreenEnabled;
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
    const result: boolean = document.fullScreenEnabled
  }
});
</script>
```


### **readonly fullScreenElement**
* 类型：`Property`

* 功能描述：检测当前文档中正在以全屏模式显示的 Element 节点

* 返回值：`boolean` 当前文档中正在以全屏模式显示的 Element 节点，返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = document.fullScreenElement;
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
    const result: boolean = document.fullScreenElement
  }
});
</script>
```


### **requestFullscreen()**
* 类型：`Function`

* 功能描述：请求进入全屏模式

* 参数：无

* 返回值：`Promise` Promise

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = document.requestFullscreen();
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
    const result: Promise<void> = document.requestFullscreen()
  }
});
</script>
```


### **exitFullscreen()**
* 类型：`Function`

* 功能描述：退出全屏模式

* 参数：无

* 返回值：`Promise` Promise

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = document.exitFullscreen();
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
    const result: Promise<void> = document.exitFullscreen()
  }
});
</script>
```