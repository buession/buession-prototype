# Object 参考手册


### 方法

|  方法                                                                              | 描述                           |
|  ----                                                                              | ----                           |
| [type](object.html#typeobj-any)                                                    | 获取对象数据类型                 |
| [rawType](object.html#rawtypeobj-any)                                              | 获取对象原始数据类型              |
| [isObject](object.html#isobjectobj-any)                                            | 判断对象是否为 object 类型        |
| [isPlainObject](object.html#isplainobjectobj-any)                                  | 判断对象是否为简单 object 类型    |
| [isMap](object.html#ismapobj-any)                                                  | 判断对象是否为 Map 类型           |
| [isSet](object.html#issetobj-any)                                                  | 判断对象是否为 Set 类型           |
| [isSymbol](object.html#issymbolobj-any)                                            | 判断对象是否为 Symbol            |
| [isPromise](object.html#ispromiseobj-any)                                          | 判断对象是否为 Promise           |
| [isPrimitive](object.html#isprimitiveobj-any)                                      | 判断对象是否为原始类型            |
| [isFunction](object.html#isfunctionobj-any)                                        | 判断对象是否为函数                |
| [isArray](object.html#isarrayobj-any)                                              | 判断对象是否为数组                |
| [isString](object.html#isstringobj-any)                                            | 判断对象是否为字符串对象           |
| [isNumber](object.html#isnumberobj-any)                                            | 判断对象是否为数字对象             |
| [isBoolean](object.html#isbooleanobj-any)                                          | 判断对象是否为布尔对象             |
| [isRegExp](object.html#isregexpobj-any)                                            | 判断对象是否为正则对象             |
| [isFile](object.html#isfileobj-any)                                                | 判断对象是否为文件对象             |
| [isWindow](object.html#iswindowobj-any)                                            | 判断对象是否为 windows 对象        |
| [isElement](object.html#iselementobj-any)                                          | 判断对象是否为 Element            |
| [isEvent](object.html#iseventobj-any)                                              | 判断对象是否为事件对象             |
| [isNull](object.html#isnullobj-any)                                                | 判断对象是否为 null 对象           |
| [isUndefined](object.html#isundefinedobj-any)                                      | 判断对象是否为未定义               |
| [isUndefinedOrNull](object.html#isundefinedornullobj-any)                          | 判断对象是否为未定义或 null        |
| [equals](object.html#equalsobj1-any,-obj2-any)                                     | 深度判断两个对象是否相等            |
| [clone](object.html#cloneobj-any)                                                  | 克隆对象                          |
| [omit](object.html#omit<t-extends-object,-k-extends-keyof-t>obj-t,-...fields-k[])  | 克隆对象，但支持删除指定属性         |


---


### **type(obj: any)**
* 类型：`Function`

* 功能描述：获取对象数据类型

* 参数：obj - `any` 对象变量

* 返回值：`string` 对象数据类型

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.type(true); // boolean
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
    const result: string = Object.type(4.4) // number
  }
});
</script>
```


### **rawType(obj: any)**
* 类型：`Function`

* 功能描述：获取对象原始数据类型

* 参数：obj - `any` 对象变量

* 返回值：`string` 原始数据类型

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.type("4.4"); // String
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
    const result: string = Object.type(4.4) // Number
  }
});
</script>
```


### **isObject(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为 object 类型

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为 object 类型返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isObject("1"); // false
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
    const result: boolean = Object.isObject(new String("1")) // true
  }
});
</script>
```


### **isPlainObject(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为简单 object 类型

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为简单 object 类型返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isPlainObject(new String("1")); // false
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
    const result: boolean = Object.isPlainObject({"a":"A"}) // true
  }
});
</script>
```


### **isMap(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为 Map 类型

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为 Map 类型返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isMap(new Map()); // true
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
    const result: boolean = Object.isMap({"a":"A"}) // false
  }
});
</script>
```


### **isSet(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为 Map 类型

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为 Set 类型返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isSet(new Set()); // true
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
    const result: boolean = Object.isSet({"a":"A"}) // false
  }
});
</script>
```


### **isSymbol(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为 Symbol

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为 Symbol 返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isSymbol(Symbol('a')); // true
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
    const result: boolean = Object.isSymbol({"a":"A"}) // false
  }
});
</script>
```


### **isPromise(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为 Promise

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为 Promise 返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isPromise(new Promise(function(){})); // true
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
    const result: boolean = Object.isPromise({"a":"A"}) // false
  }
});
</script>
```


### **isPrimitive(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为原始类型

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为原始类型返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isPrimitive(11); // true
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
    const result: boolean = Object.isPromise({"a":"A"}) // false
  }
});
</script>
```


### **isFunction(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为函数

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为函数返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isFunction(location.href); // false
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
    const result: boolean = Object.isFunction("a".replace) // true
  }
});
</script>
```


### **isArray(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为数组

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为数组返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isArray([1, 2]); // true
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
    const result: boolean = Object.isArray({"a":"A"}) // false
  }
});
</script>
```


### **isString(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为字符串对象

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为字符串返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isString(1); // false
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
    const result: boolean = Object.isString("1") // true
  }
});
</script>
```


### **isNumber(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为数字对象

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为数字对象返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isNumber(1.0); // true
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
    const result: boolean = Object.isNumber("1.0") // false
  }
});
</script>
```


### **isBoolean(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为布尔对象

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象为布尔对象返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isBoolean(false); // true
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
    const result: boolean = Object.isBoolean(1) // false
  }
});
</script>
```


### **isRegExp(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为正则对象

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象是否为正则对象返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isRegExp(/^[a-z]$/); // true
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
    const result: boolean = Object.isRegExp('/^[a-z]$/') // false
  }
});
</script>
```


### **isFile(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为文件对象

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象是否为文件对象返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isFile(new File(['text1', 'text2'], 'test.txt', {type: 'text/plain'})); // true
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
    const result: boolean = bject.isFile(document) // false
  }
});
</script>
```


### **isWindow(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为 windows 对象

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象是否为 windows 对象返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isWindow(window); // true
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
    const result: boolean = Object.isWindow(document) // false
  }
});
</script>
```


### **isElement(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为 Element

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象是否为 Element 返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isElement(document); // false
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
    const result: boolean = Object.isElement(document.body) // false
  }
});
</script>
```


### **isEvent(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为事件对象

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象是否为事件对象返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isEvent(document.onclick); // false
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
    const result: boolean = Object.isEvent(document.onclick) // false
  }
});
</script>
```


### **isNull(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为 null

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象是否为 null 返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isNull(null); // true
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
    const result: boolean = Object.isNull("A") // false
  }
});
</script>
```


### **isUndefined(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为未定义

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象是否为未定义返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isUndefined(a); // true
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
    const result: boolean = Object.isUndefined(b) // true
  }
});
</script>
```


### **isUndefinedOrNull(obj: any)**
* 类型：`Function`

* 功能描述：判断对象是否为未定义或 null

* 参数：obj - `any` 对象变量

* 返回值：`boolean` 对象是否为未定义或 null 返回 true；否则返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.isUndefinedOrNull(a); // true
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
    const result: boolean = Object.isUndefinedOrNull(document.body) // false
  }
});
</script>
```


### **equals(obj1: any, obj2: any)**
* 类型：`Function`

* 功能描述：深度判断两个对象是否相等

* 参数：obj1 - `any` 一个对象
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj2 - `any` 用于和 obj1 比较的对象

* 返回值：`boolean` 当两个对象相等时，返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.equals("a", "A"); // false
  var result = Object.equals("a", "a"); // true
  var result = Object.equals(1, 1.0); // true
  var result = Object.equals([1], [1.0]); // true
  var result = Object.equals([1], [1.0, 1.1]); // false
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
  const result: boolean = Object.equals("a", "A") // false
  const result: boolean = Object.equals("a", "a") // true
  const result: boolean = Object.equals(1, 1.0) // true
  const result: boolean = Object.equals([1], [1.0]) // true
  const result: boolean = Object.equals([1], [1.0, 1.1]) // false
  }
});
</script>
```


### **clone(obj: any)**
* 类型：`Function`

* 功能描述：克隆对象

* 参数：obj - `any` 对象变量

* 返回值：`any` 新对象实例

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = Object.clone({"a": "A"}); // {"a": "A"}
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
    const result: any = Object.clone({"a":"A"}) // {"a": "A"}
  }
});
</script>
```


### **omit<T extends object, K extends keyof T>(obj: T, ...fields: K[])**
* 类型：`Function`

* 功能描述：克隆对象，但支持删除指定属性

* 参数：obj - `object` 任意对象
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fields - `K[]` 需要删除的属性

* 返回值：`any` 新对象实例

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var source = {
    id: 1,
    name: 'buession',
    year: 2023
  };
  var result = Object.omit(source, "id", "year"); // {"name": "buession"}
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
  const source = {
    id: 1,
    name: 'buession',
    year: 2023
  };
  const result = Object.omit(source, "id", "year") // {"name": "buession"}
  }
});
</script>
```