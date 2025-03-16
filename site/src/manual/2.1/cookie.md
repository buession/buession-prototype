# Cookie 参考手册


### 方法

|  方法                                                                                           | 描述                   |
|  ----                                                                                           | ----                   |
| [set](cookie.html#setname-string,-value-string-|-null-|-undefined,-options?-cookieoptions)      | 设置 Cookie             |
| [get](cookie.html#getname-string)                                                               | 获取 Cookie             |
| [delete](cookie.html#ddeletename-string,-options?-cookieoptions)                                | 删除 Cookie             |


---


### **set(name: string, value: string | null | undefined, options?: CookieOptions)**
* 类型：`Function`

* 功能描述：设置 Cookie

* 参数：name - `string` Cookie 名称
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value - `string | null | undefined` Cookie 值
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options - `CookieOptions` Cookie 选项

* 返回值：`string` Cookie 字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = document.httpCookie.set("name", "测试");
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
    const result: string | null = document.httpCookie.set("name", "测试", {path: '/', domain: '*.test.com'})
  }
});
</script>
```


### **get(name: string)**
* 类型：`Function`

* 功能描述：获取 Cookie 值

* 参数：name - `string` Cookie 名称

* 返回值：`string | null` Cookie 值

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = document.httpCookie.get("name")
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
    const result: string | null = document.httpCookie.get("name")
  }
});
</script>
```


### **delete(name: string, options?: CookieOptions)**
* 类型：`Function`

* 功能描述：删除 Cookie

* 参数：name - `string` Cookie 名称
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options - `CookieOptions` Cookie 选项

* 返回值：无

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = document.httpCookie.delete("name");
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
    document.httpCookie.delete("name", "测试", {domain: '*.test.com'})
  }
});
</script>
```