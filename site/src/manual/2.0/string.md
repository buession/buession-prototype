# String 参考手册


### 方法

|  方法                                                                                       | 描述                                 |
|  ----                                                                                       | ----                                |
| [exists](string.html#existsstr-string)                                                      | 判断字符串是否存在                    |
| [equals](string.html#equalsstr-string-&#124;-undefined-&#124;-null)                         | 判断字符串是否相等                    |
| [equalsIgnoreCase](string.html#equalsignorecasestr-string-&#124;-undefined-&#124;-null)     | 判断字符串是否相等，不考虑大小写        |
| [isEmpty](string.html#isempty)                                                              | 判断是否为空字符串                    |
| [isNotEmpty](string.html#isnotempty)                                                        | 判断是否不为空字符串                   |
| [isBlank](string.html#isblank)                                                              | 判断是否为空白字符串                   |
| [repeat](string.html#repeatcount-number)                                                    | 重复一个字符串                        |
| [left](string.html#leftlength-number)                                                       | 截取字符串左边边指定数目的字符串         |
| [right](string.html#rightlength-number)                                                     | 截取字符串右边指定数目的字符串          |
| [truncation](string.html#truncationlength-number,-truncation-string)                        | 截取字符串，超出部分用 truncation 替代  |
| [ltrim](string.html#ltrim)                                                                  | 删除字符串开头的空白字符                |
| [rtrim](string.html#rtrim)                                                                  | 删除字符串结尾的空白字符                |
| [startsWith](string.html#startswithstr-string)                                              | 判断字符串是否以给定的字符串开头         |
| [endsWith](string.html#endswithstr-string)                                                  | 判断字符串是否以给定的字符串结尾         |
| [lcfirst](string.html#lcfirst)                                                              | 首字母小写                            |
| [ucfirst](string.html#ucfirst)                                                              | 首字母大写                            |
| [escapeHTML](string.html#escapehtml)                                                        | 将 HTML 编码                         |
| [unescapeHTML](string.html#unescapehtml)                                                    | 将 HTML 实体字符解码                   |
| [stripTag](string.html#striptagtag-string)                                                  | 删除 HTML 标签                        |
| [stripTags](string.html#striptagstag-string)                                                | 批量删除 HTML 标签                     |
| [stripScripts](string.html#stripscripts)                                                    | 删除 script 标签                      |
| [toArray](string.html#toarraydelimiter-string)                                              | 将字符串转换为数组                      |
| [inspect](string.html#inspectusedoublequotes-boolean)                                       | 返回一个数组的字符串表示形式             |
| [hashCode](string.html#hashcode)                                                            | 获取字符串 hash code                   |
| [random](string.html#randomlength-number,-type?-randomtype-=-"numeric"-&#124;-"letter"-&#124;-"letter_numeric"-&#124;-"chinese"-&#124;-undefined)                       | 生成随机字符串       |

---


### **exists(str: string)**
* 类型：`Function`

* 功能描述：判断字符串是否存在

* 参数：str - `string` 子字符串

* 返回值：`boolean` 子字符串存在返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "ABC".exists("A"); // true
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
    const result: boolean = "ABC".exists("a") // false
  }
});
</script>
```


### **equals(str: string | undefined | null)**
* 类型：`Function`

* 功能描述：判断字符串是否相等

* 参数：str - `string | undefined | null` 与此 String 进行比较的对象

* 返回值：`boolean` 字符串相等返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "A".equals(new String("A")); // true
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
    const result: boolean = "A".equals("a") // false
  }
});
</script>
```


### **equalsIgnoreCase(str: string | undefined | null)**
* 类型：`Function`

* 功能描述：判断字符串是否相等，不考虑大小写

* 参数：str - `string | undefined | null` 与此 String 进行比较的对象

* 返回值：`boolean` 字符串相等返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "A".equalsIgnoreCase("a"); // true
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
    const result: boolean = new String("a").equalsIgnoreCase("1") // false
  }
});
</script>
```


### **isEmpty()**
* 类型：`Function`

* 功能描述：判断是否为空字符串

* 参数：无

* 返回值：`boolean` 字符串为空，即长度为 0 返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = " ".isEmpty(); // false
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
    const result: boolean = new String("").isEmpty() // true
  }
});
</script>
```


### **isNotEmpty()**
* 类型：`Function`

* 功能描述：判断是否不为空字符串

* 参数：无

* 返回值：`boolean` 字符串不为空，即长度大于 0 返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = " ".isNotEmpty(); // true
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
    const result: boolean = new String("").isNotEmpty() // false
  }
});
</script>
```


### **isBlank()**
* 类型：`Function`

* 功能描述：判断是否为空白字符串

* 参数：无

* 返回值：`boolean` 字符串全为空白字符串（即：空格、回车、Tag 制表位、非打印字符）返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = " ".isBlank(); // true
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
    const result: boolean = new String("\t\n").isBlank() // true
  }
});
</script>
```


### **repeat(count: number)**
* 类型：`Function`

* 功能描述：重复一个字符串

* 参数：count - `number` 重复次数

* 返回值：`string` 重复后的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "A".repeat(3); // AAA
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
    const result: string = "Abc".repeat(3) // AbcAbcAbc
  }
});
</script>
```


### **left(length: number)**
* 类型：`Function`

* 功能描述：截取字符串左边边指定数目的字符串

* 参数：length - `number` 截取长度

* 返回值：`string` 子字符串，length 如果为负数，则返回空字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "Abc".left(1); // A
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
    const result: string = "Abc".left(-1) // ""
  }
});
</script>
```


### **right(length: number)**
* 类型：`Function`

* 功能描述：截截取字符串右边指定数目的字符串

* 参数：length - `number` 截取长度

* 返回值：`string` 子字符串，length 如果为负数，则返回空字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "Abc".right(1); // c
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
    const result: string = "Abc".right(-1) // ""
  }
});
</script>
```


### **truncation(length: number, truncation: string)**
* 类型：`Function`

* 功能描述：截取字符串，超出部分用 truncation 替代

* 参数：length - `number` 截取长度

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;truncation - `string` 替换字符串

* 返回值：`string` 截取后的字符串；实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "Abc".truncation(1, "..."); // A...
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
    const result: string = "Abc".truncation(6, "...") // Abc
  }
});
</script>
```


### **ltrim()**
* 类型：`Function`

* 功能描述：删除字符串开头的空白字符（包括：空格、制表位、换行以及其它非打印字符）

* 参数：无

* 返回值：`string` 删除了字符串最左边的空白字符的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = " Abc".ltrim(); // "Abc"
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
    const result: string = new String(" Abc ").ltrim() // "Abc "
  }
});
</script>
```


### **rtrim()**
* 类型：`Function`

* 功能描述：删除字符串结尾的空白字符（包括：空格、制表位、换行以及其它非打印字符）

* 参数：无

* 返回值：`string` 删除了字符串最右边的空白字符的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = " Abc".rtrim(); // " Abc"
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
    const result: string = new String(" Abc ").rtrim() // " Abc"
  }
});
</script>
```


### **startsWith(str: string)**
* 类型：`Function`

* 功能描述：判断字符串是否以给定的字符串开头

* 参数：str - `string` 搜索的字符串

* 返回值：`boolean` 字符串是否以给定的字符串开头返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "Abc".startsWith("a"); // false
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
    const result: boolean = new String("aBc").startsWith("a") // true
  }
});
</script>
```


### **endsWith(str: string)**
* 类型：`Function`

* 功能描述：判断字符串是否以给定的字符串结尾

* 参数：str - `string` 搜索的字符串

* 返回值：`boolean` 字符串是否以给定的字符串结尾返回 true；否则，返回 false

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "Abc".endsWith("C"); // false
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
    const result: boolean = new String("aBc").endsWith("c") // true
  }
});
</script>
```


### **lcfirst()**
* 类型：`Function`

* 功能描述：首字母小写

* 参数：无

* 返回值：`string` 首字母小写后的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "Abc".lcfirst(); // "abc"
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
    const result: string = new String("abc").lcfirst() // "abc"
  }
});
</script>
```


### **ucfirst()**
* 类型：`Function`

* 功能描述：首字母大写

* 参数：无

* 返回值：`string` 首字母大写后的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "abc".ucfirst(); // "Abc"
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
    const result: string = new String("abc").lcfirst() // "Abc"
  }
});
</script>
```


### **escapeHTML()**
* 类型：`Function`

* 功能描述：将 HTML 编码，参考：[https://www.w3school.com.cn/html/html_entities.asp](https://www.w3school.com.cn/html/html_entities.asp)

* 参数：无

* 返回值：`string` 编码后的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "<a href='https://www.domain.com'>test</a>".escapeHTML(); // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;
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
    const result: string = new String("<a href='https://www.domain.com'>test</a>").lcfirst() // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;
  }
});
</script>
```


### **unescapeHTML()**
* 类型：`Function`

* 功能描述：将 HTML 实体字符解码，参考：[https://www.w3school.com.cn/html/html_entities.asp](https://www.w3school.com.cn/html/html_entities.asp)

* 参数：无

* 返回值：`string` 解码后的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;".unescapeHTML(); // <a href='https://www.domain.com'>test</a>
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
    const result: string = "&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;".unescapeHTML() // <a href='https://www.domain.com'>test</a>
  }
});
</script>
```


### **stripTag(tag: string)**
* 类型：`Function`

* 功能描述：删除 HTML 标签

* 参数：tag - `string` 待删除标签

* 返回值：`string` 删除标签后的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "<a href='https://www.domain.com'>test</a><i></i>".stripTag("a"); // test<i></i>
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
    const result: string = "<a href='https://www.domain.com'>test</a><i></i>".stripTag("a") // test<i></i>
  }
});
</script>
```


### **stripTags(tag: string)**
* 类型：`Function`

* 功能描述：批量删除 HTML 标签

* 参数：tag - `string[] | string` 删除指定的标签

* 返回值：`string` 删除标签后的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "<a href='https://www.domain.com'>test</a><i></i><em>EM</em>".stripTags(["a", "i"]); // test<em>EM</em>
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
    const result: string = "<a href='https://www.domain.com'>test</a><i></i><em>EM</em>".stripTags(["a", "i"]) // test<em>EM</em>
  }
});
</script>
```


### **stripScripts()**
* 类型：`Function`

* 功能描述：删除 script 标签

* 参数：无

* 返回值：`string` 删除 script 标签后的字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = '<script type="text/javascript">alert("test");</script>test'.stripScripts(); // test
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
    const result: string = '<script type="text/javascript">alert("test");</script>test'.stripScripts() // <test
  }
});
</script>
```


### **toArray(delimiter: string)**
* 类型：`Function`

* 功能描述：将字符串转换为数组

* 参数：delimiter - `string` 分隔字符

* 返回值：`string[]` 字符串数组

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "a|b|c".toArray('|'); // [ "a", "b", "c" ]
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
    const result: string[] = "a|b||c".toArray('||') // [ "a|b", "c" ]
  }
});
</script>
```


### **inspect(useDoubleQuotes: boolean)**
* 类型：`Function`

* 功能描述：返回一个数组的字符串表示形式

* 参数：useDoubleQuotes - `boolean` 是否使用双引号引住

* 返回值：`string` 数组的字符串表示形式

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "a|b|c".inspect(true); // \"a|b|c\"
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
    const result: string = "a|b|c".inspect(false) // 'a|b|c'
  }
});
</script>
```


### **hashCode()**
* 类型：`Function`

* 功能描述：获取字符串 hash code

* 参数：无

* 返回值：`number` 字符串的 hash code

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = "abc".hashCode(); // 96354
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
    const result: number = "abcABC".hashCode() // 2870546592
  }
});
</script>
```


### **random(length: number, type?: RandomType = "NUMERIC" | "LETTER" | "LETTER_NUMERIC" | "CHINESE" | undefined)**
* 类型：`Function`

* 功能描述：生成随机字符串

* 参数：length - `number` 生成字符串的长度

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type - `NUMERIC | LETTER | LETTER_NUMERIC | CHINESE | undefined` 生成类型，可选参数，当未指定时为 LETTER_NUMERIC

        NUMERIC      - 数字随机字符串

        LETTER       - 英文随机字符串

        LETTER_NUMERIC - 英文数字混合随机字符串

        CHINESE      - 中文随机字符串

* 返回值：`string` 随机字符串

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var result = String.random(6); // 1Diim2
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
    const result: string = String.random(6, "NUMERIC") // 881773
  }
});
</script>
```