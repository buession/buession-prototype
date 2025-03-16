# HttpCookie 参考手册


### 属性

|  属性                                                              | 描述                          |
|  ----                                                              | ----                         |
| [userAgent](browser.html#readonly-userAgent)                       | 获取浏览器 User-Agent         |
| [name](browser.html#readonly-name)                                 | 获取浏览器应用程序名称          |
| [isMobile](browser.html#readonly-isMobile)                         | 是否为移动设备                 |
| [isChrome](browser.html#readonly-isChrome)                         | 是否为 Chrome 浏览器           |
| [isFirefox](browser.html#readonly-isFirefox)                       | 是否为 Firefox 浏览器          |
| [isMozilla](browser.html#readonly-isMozilla)                       | 是否为 Mozilla 浏览器          |
| [isMSIE](browser.html#readonly-isMSIE)                             | 是否为 IE 浏览器               |
| [isOpera](browser.html#readonly-isOpera)                           | 是否为 Opera 浏览器            |
| [isSafari](browser.html#readonly-Safari)                           | 是否为 Safari 浏览器           |
| [isNetscape](browser.html#readonly-Netscape)                       | 是否为 Netscape 浏览器         |


---


### **readonly userAgent**
* 类型：`Property`

* 功能描述：获取浏览器 User-Agent，等价于 `navigator.userAgent`

* 返回值：`string` 浏览器 User-Agent

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = window.browser.userAgent; // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0
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
    const result: String = window.browser.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0
  }
});
</script>
```

### **readonly name**
* 类型：`Property`

* 功能描述：获取浏览器应用程序名称，等价于 `navigator.appName`

* 返回值：`string` 浏览器应用程序名称

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = window.browser.name; // Netscape
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
    const result: String = window.browser.name // Netscape
  }
});
</script>
```

### **readonly isMobile**
* 类型：`Property`

* 功能描述：是否为移动设备，检测依据：User-Agent 中含有 Android、iPhone、iPod、Windows Phone、Mobile、Coolpad、mmp、SmartPhone、midp、wap、xoom、Symbian、J2ME、Blackberry、Wince 其中任意一个字符串

* 返回值：`boolean` 是移动设备返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = window.browser.isMobile
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
    const result: boolean = window.browser.isMobile
  }
});
</script>
```

### **readonly isChrome**
* 类型：`Property`

* 功能描述：是否为 Chrome 浏览器

* 返回值：`boolean` 是 Chrome 浏览器返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = window.browser.isChrome;
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
    const result: boolean = window.browser.isChrome
  }
});
</script>
```

### **readonly isFirefox**
* 类型：`Property`

* 功能描述：是否为 Firefox 浏览器

* 返回值：`boolean` 是 Firefox 浏览器返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = window.browser.isFirefox;
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
    const result: boolean = window.browser.isFirefox
  }
});
</script>
```

### **readonly isMSIE**
* 类型：`Property`

* 功能描述：是否为 IE 浏览器

* 返回值：`boolean` 是 IE 浏览器返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = window.browser.isMSIE;
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
    const result: boolean = window.browser.isMSIE
  }
});
</script>
```

### **readonly isOpera**
* 类型：`Property`

* 功能描述：是否为 Opera 浏览器

* 返回值：`boolean` 是 Opera 浏览器返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = window.browser.isOpera;
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
    const result: boolean = window.browser.isOpera
  }
});
</script>
```

### **readonly isSafari**
* 类型：`Property`

* 功能描述：是否为 Safari 浏览器

* 返回值：`boolean` 是 Safari 浏览器返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = window.browser.isSafari;
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
    const result: boolean = window.browser.isSafari
  }
});
</script>
```

### **readonly isNetscape**
* 类型：`Property`

* 功能描述：是否为 Netscape 浏览器

* 返回值：`boolean` 是 Netscape 浏览器返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = window.browser.isNetscape;
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
    const result: boolean = window.browser.isNetscape
  }
});
</script>
```