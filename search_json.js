window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "快速入门",
      "content": "TIP\n\n官方指南假设您已了解\"权限\"方面的相关知识，关于 HTML 和 JavaScript 的初级知识。如果您使用 npm 包，那么您需要具备掌握 npm 的基础知识，否则这不是您使用 Buession Prototype 的最佳方式；此种情况下，将建议您使用 script 标签引入 Buession Prototype 的文件。\n\n您可以根据本文档中的示例，快速熟悉 Buession Prototype 的使用方法，本文档中所有示例基于原生 js 和 vue 二者编写。本文档给出了不通方法的安装方式，但是我们始终建议您，直接下载压缩后的文件到您的项目中进行使用，或者直接引用 unpkg 、jsdelivr的资源。",
      "url": "/docs/quickstart.html",
      "children": [
        {
          "title": "下一步可做什么？",
          "url": "/docs/quickstart.html#下一步可做什么？",
          "content": "下一步可做什么？您对 Buession Prototype 大致了解后，您接下来可以做以下事情：了解兼容性：了解 Buession Prototype 对浏览器的兼容性\n安装：安装/引用 Buession Prototype\n使用：开始使用 BuessionPrototype 功能\n"
        }
      ]
    },
    {
      "title": "框架介绍",
      "content": "",
      "url": "/docs/intro.html",
      "children": [
        {
          "title": "Buession Prototype 框架是什么？",
          "url": "/docs/intro.html#buession-prototype-框架是什么？",
          "content": "Buession Prototype 框架是什么？Buession Prototype 是基于对原生 JavaScript 对象（如：String、Array、Date）的扩展，和浏览器兼容性的处理，并添加在实际场景中的一些常用方法。该框架借鉴了其它语言的一些 API 和早期 JavaScript 框架 prototypejs"
        }
      ]
    },
    {
      "title": "开源协议",
      "content": "MIT LicenseCopyright (c) 2021 BuessionPermission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in allcopies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS ORIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.",
      "url": "/docs/license.html",
      "children": []
    },
    {
      "title": "版本说明",
      "content": "该项目基于 GNU 版风格定义项目版本，即：主版本号.子版本号.修正版本号。管理策略主版本号，发生变更时，不保证所有的 API 对上一个版本兼容，但保障大部分能兼容；主版本变更，可能涉及类、接口、枚举、方法的删除，或者包名的变更\n子版本号，发生变更时，完全兼容上一个版本，主要会增加一些小的功能或API，底层逻辑的调整调优\n修正版本号，主要用于修复 BUG、优化性能、安全漏洞修复，不会新增、变更、删除已有 API\n",
      "url": "/docs/version.html",
      "children": []
    },
    {
      "title": "安装及使用",
      "content": "您可以通过 NPM、YARN 或者通过  的方式引入 unpkg.com 上的包；稳定版 。",
      "url": "/docs/installation.html",
      "children": [
        {
          "title": "NPM",
          "url": "/docs/installation.html#npm",
          "content": "NPMnpm install @buession/prototype# or\nyarn add @buession/prototype\n"
        },
        {
          "title": "CDN",
          "url": "/docs/installation.html#cdn",
          "content": "CDN对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏。\n最新版：具体版本：\n"
        }
      ]
    },
    {
      "title": "环境要求",
      "content": "支持环境现代浏览器\nIE9，IE10，IE11\n\n\nIE / Edge\nFirefox\nChrome\nSafari\niOS Safari\nOpera\n\n\n\n\nIE9, IE10, IE11, Edge\nlast 5 versions\nlast 5 versions\nlast 5 versions\nlast 5 versions\nlast 5 versions\n\n\nNodeJsnode v13+，建议使用 v14 及其以上版本TypeScriptTypeScript 4.1.xES支持 ES5、ES6、ES2015、ES2016、ES2017、ES2018、ESNext 的版本。",
      "url": "/docs/requirement.html",
      "children": []
    }
  ],
  "参考手册": [
    {
      "title": "参考手册简介",
      "content": "Buession Prototype 是基于对原生 JavaScript 对象（如：String、Array、Date）的扩展，和浏览器兼容性的处理，并添加在实际场景中的一些常用方法本章节将想您讲解，如何使用 Buession Prototype，为您提供前端原生 JavaScript 对象扩展的最佳实践。",
      "url": "/manual/index.html",
      "children": []
    },
    {
      "title": "参考指南",
      "content": "Buession Prototype Array、Date、Document、Function、Math、Number、String、Window、Location、HTMLElement、Object 等十一个对象扩展以及 Try、Optional 两大原生 API。本文档包含了完整的 Buession Prototype 的参考文档。\n\n版本\n手册\n\n\n\n\n4.1.x\nAPI 手册\n\n\n4.0.x\nAPI 手册\n\n\n3.0.x\nAPI 手册\n\n\n2.2.x\nAPI 手册\n\n\n2.1.x\nAPI 手册\n\n\n2.0.x\nAPI 手册\n\n\n",
      "url": "/manual/overview.html",
      "children": []
    },
    {
      "title": "API",
      "content": "Buession Prototype API 包含以下目录：PrototypeTryOptionalArrayDateDocumentFunctionMathNumberObjectStringWindow",
      "url": "/manual/4.1/index.html",
      "children": []
    },
    {
      "title": "Prototype 参考手册",
      "content": "",
      "url": "/manual/4.1/prototype.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/4.1/prototype.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nversion\n获取 Buession Prototype 版本\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/4.1/prototype.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nemptyFunction\n执行一个空方法\n\n\nK\n返回参数传递的任意值\n\n\n"
        },
        {
          "title": "version",
          "url": "/manual/4.1/prototype.html#version",
          "content": "version\n类型：String\n\n\n功能描述：获取 Buession Prototype 版本\n\n\n返回值：Buession Prototype 版本\n\n示例：原生 JavaScript  var ver = Prototype.version;\n\nvue  \n    Prototype 版本：{Prototype.version}\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "emptyFunction()",
          "url": "/manual/4.1/prototype.html#emptyfunction",
          "content": "emptyFunction()\n类型：Function\n\n\n功能描述：执行一个空方法\n\n\n参数：无\n\n\n返回值：void\n\n示例：原生 JavaScript  Prototype.emptyFunction();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    Prototype.emptyFunction()\n  }\n});\n\n"
        },
        {
          "title": "K(x: any)",
          "url": "/manual/4.1/prototype.html#kx-any",
          "content": "K(x: any)\n类型：Function\n\n\n功能描述：返回参数传递的任意值\n\n\n参数：x - any 任意值\n\n\n返回值：any 参数传递的任意值\n\n示例：原生 JavaScript  var v = Prototype.K(object);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const v: any = Prototype.K(object)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Try 参考手册",
      "content": "",
      "url": "/manual/4.1/try.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/try.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nthese\n接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n"
        },
        {
          "title": "these(args: any[])",
          "url": "/manual/4.1/try.html#theseargs-any[]",
          "content": "these(args: any[])\n类型：Function\n\n\n功能描述：接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n参数：args any[] 一个或多个 function 作为参数\n\n\n返回值：any 任意函数参数执行结果\n\n示例：原生 JavaScript  var result = Try.these(function(){\n\n    },\n\n    function() {\n\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result:any = Try.these(function(){\n\n      },\n\n      function() {\n\n    })\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Optional 参考手册",
      "content": "Optional 类是一个可以为 null 或 undefined 的容器对象，如果值 value 存在则 isPresent() 方法会返回 true，调用 get() 方法会返回 value 的值。其设计思想，参考 java8 的 Optional使用方式，在构造函数中传入任意类型值；Optional 提供很多有用的方法，这样我们就不用显式进行 null 值和 undefined 的检测。",
      "url": "/manual/4.1/optional.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/optional.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nof\n返回一个指定 T 类型的值的 Optional 实例\n\n\nofNullable\n如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\nempty\n返回空的 Optional 实例\n\n\nget\n如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\norElse\n如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\nisPresent\n如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n  var optional = new Optional(any value);\n\n"
        },
        {
          "title": "static of(value: T)",
          "url": "/manual/4.1/optional.html#static-ofvalue-t",
          "content": "static of(value: T)\n类型：Function\n\n\n功能描述：返回一个指定 T 类型的值的 Optional 实例\n\n\n参数：value - any of T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例\n\n示例：原生 JavaScript  Optional.of(11);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(false)\n  }\n});\n\n"
        },
        {
          "title": "static ofNullable(value: T)",
          "url": "/manual/4.1/optional.html#static-ofnullablevalue-t",
          "content": "static ofNullable(value: T)\n类型：Function\n\n\n功能描述：如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\n参数：value - any as T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例，或空的 Optional 实例\n\n示例：原生 JavaScript  Optional.ofNullable('js');\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.ofNullable(11)\n  }\n});\n\n"
        },
        {
          "title": "static empty()",
          "url": "/manual/4.1/optional.html#static-empty",
          "content": "static empty()\n类型：Function\n\n\n功能描述：返回空的 Optional 实例\n\n\n参数：无\n\n\n返回值：Object as Optional 空的 Optional 实例\n\n示例：原生 JavaScript  Optional.empty();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: null Optional.empty()\n  }\n});\n\n"
        },
        {
          "title": "get()",
          "url": "/manual/4.1/optional.html#get",
          "content": "get()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\n参数：无\n\n\n返回值：any as T Optional 中包含这个值\n\n示例：原生 JavaScript  var optional = Optional.of(11);\n  var result = optional.get(); // 11\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.get() // 11\n  }\n});\n\n"
        },
        {
          "title": "orElse(other: T)",
          "url": "/manual/4.1/optional.html#orelseother-t",
          "content": "orElse(other: T)\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\n参数：other - any of T 任意类型的值\n\n\n返回值：any as T value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.orElse(\"abc\"); // abc\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(undefined)\n    const result = optional.orElse(false) // false\n  }\n});\n\n"
        },
        {
          "title": "isPresent()",
          "url": "/manual/4.1/optional.html#ispresent",
          "content": "isPresent()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n参数：无\n\n\n返回值：boolean value 不为 null 或 undefined，则返回 true；否则返回 false\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.isPresent(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.isPresent() // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Array 参考手册",
      "content": "",
      "url": "/manual/4.1/array.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/array.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisEmpty\n判断数组是否为空数组\n\n\nexists\n判断元素 item 是否在数组中\n\n\nfirst\n获取数组第一个元素\n\n\nlast\n获取数组最后一个元素\n\n\neach\n按顺序为数组中的每个元素调用一次函数\n\n\nsize\n获取数组大小\n\n\nmerge\n连接两个或多个数组\n\n\ncompact\n返回一个不包含 null/undefined 值元素的数组的新版本\n\n\nunique\n对数组的元素进行去重\n\n\nwithout\n返回不包括参数中任意一个指定值的数组\n\n\nclone\n克隆数组\n\n\nclear\n清空数组\n\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/4.1/array.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断数组是否为空数组\n\n\n参数：无\n\n\n返回值：boolean 数组为空，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = [].isEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['a', 'b', 'c'].isEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "exists(item: any)",
          "url": "/manual/4.1/array.html#existsitem-any",
          "content": "exists(item: any)\n类型：Function\n\n\n功能描述：判断元素 item 是否在数组中\n\n\n参数：item - any 待检测元素\n\n\n返回值：boolean 元素 item 是否在数组中返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = ['a', 'b'].exists('a'); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['1', '2'].exists(2) // false\n  }\n});\n\n"
        },
        {
          "title": "first()",
          "url": "/manual/4.1/array.html#first",
          "content": "first()\n类型：Function\n\n\n功能描述：获取数组第一个元素\n\n\n参数：无\n\n\n返回值：any 数组第一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].first(); // a\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].first() // 1\n  }\n});\n\n"
        },
        {
          "title": "last()",
          "url": "/manual/4.1/array.html#last",
          "content": "last()\n类型：Function\n\n\n功能描述：获取数组最后一个元素\n\n\n参数：无\n\n\n返回值：any 数组最后一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].last(); // b\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].last() // 2\n  }\n});\n\n"
        },
        {
          "title": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)",
          "url": "/manual/4.1/array.html#eachcallback-value-t,-index-number,-array-readonly-t[]-=>-void,-thisarg?-any",
          "content": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)\n类型：Function\n\n\n功能描述：按顺序为数组中的每个元素调用一次函数，forEach的别名\n\n\n参数：callback - (value: T, index: number, array: readonly T[]) => void as Function callback 为数组中的每个元素运行的函数，其中：value 为前元素的值，index 为当前元素的数组索引，array 为当前元素所属的数组对象\nany thisArg 可选。要传递给函数以用作其 \"this\" 值的值，如果此参数为空，则值 \"undefined\" 将作为其 \"this\" 值传递\n\n\n返回值：void\n\n示例：原生 JavaScript  ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n    })\n  }\n});\n\n"
        },
        {
          "title": "size()",
          "url": "/manual/4.1/array.html#size",
          "content": "size()\n类型：Function\n\n\n功能描述：获取数组大小\n\n\n参数：无\n\n\n返回值：number 数组大小\n\n示例：原生 JavaScript  var result = ['a', 'b'].size(); // 2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = [].size() // 0\n  }\n});\n\n"
        },
        {
          "title": "merge(...items: T[])",
          "url": "/manual/4.1/array.html#merge...items-t[]",
          "content": "merge(...items: T[])\n类型：Function\n\n\n功能描述：连接两个或多个数组\n\n\n参数：items - any as T 待连接的 T 类型的数组\n\n\n返回值：Array 已连接数组的副本\n\n示例：原生 JavaScript  var result = [1, 3].merge(2, 4); // [1, 3, 2, 4]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    console result: string[] = ['a', 'b'].merge('c', 'd') // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "compact()",
          "url": "/manual/4.1/array.html#compact",
          "content": "compact()\n类型：Function\n\n\n功能描述：返回一个不包含 null/undefined 值元素的数组的新版本\n\n\n参数：无\n\n\n返回值：Array 不包含 null/undefined 值元素的数组的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', null, 'c', 'd'].compact(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', null, 'c', 'd', undefined].compact() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "unique()",
          "url": "/manual/4.1/array.html#unique",
          "content": "unique()\n类型：Function\n\n\n功能描述：对数组的元素进行去重\n\n\n参数：无\n\n\n返回值：Array 数组元素进行去重后的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].unique(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'c', 'd'].unique() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "without(values: T[])",
          "url": "/manual/4.1/array.html#withoutvalues-t[]",
          "content": "without(values: T[])\n类型：Function\n\n\n功能描述：返回不包括参数中任意一个指定值的数组\n\n\n参数：values - any as T[] 排除值数组\n\n\n返回值：Array 不包括参数中任意一个指定值的数组\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b'); // [c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b') // [c, d]\n  }\n});\n\n"
        },
        {
          "title": "clone()",
          "url": "/manual/4.1/array.html#clone",
          "content": "clone()\n类型：Function\n\n\n功能描述：克隆数组\n\n\n参数：无\n\n\n返回值：Array 克隆结果\n\n示例：原生 JavaScript  var result = ['a', 'b'].clone(); // [a, b]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clone() // [a, b]\n  }\n});\n\n"
        },
        {
          "title": "clear()",
          "url": "/manual/4.1/array.html#clear",
          "content": "clear()\n类型：Function\n\n\n功能描述：清空数组\n\n\n参数：无\n\n\n返回值：Array 空数组\n\n示例：原生 JavaScript  var result = ['a', 'b'].clear(); // []\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clear() // []\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Date 参考手册",
      "content": "",
      "url": "/manual/4.1/date.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/date.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisLeapYear\n判断是否为闰年\n\n\ngetSeason\n获取季节\n\n\ngetDayOfYear\n获取年份中的第几天\n\n\ngetDaysOfYear\n获取年份总天数\n\n\nformat\n将日期时间格式化为字符串\n\n\n"
        },
        {
          "title": "isLeapYear()",
          "url": "/manual/4.1/date.html#isleapyear",
          "content": "isLeapYear()\n类型：Function\n\n\n功能描述：判断是否为闰年\n\n\n参数：无\n\n\n返回值：boolean 是闰年，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2000-04-11').isLeapYear() // false\n  }\n});\n\n"
        },
        {
          "title": "getSeason()",
          "url": "/manual/4.1/date.html#getseason",
          "content": "getSeason()\n类型：Function\n\n\n功能描述：获取季节\n\n\n参数：无\n\n\n返回值：number 依次返回 0 至 3 的整数，表示春季、夏季、秋季、冬季\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // 0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2022-01-11').isLeapYear() // 3\n  }\n});\n\n"
        },
        {
          "title": "getDayOfYear()",
          "url": "/manual/4.1/date.html#getdayofyear",
          "content": "getDayOfYear()\n类型：Function\n\n\n功能描述：获取年份中的第几天\n\n\n参数：无\n\n\n返回值：number 年份中的第几天\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDayOfYear(); // 42\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2022-03-01').getDayOfYear(); // 61\n  }\n});\n\n"
        },
        {
          "title": "getDaysOfYear()",
          "url": "/manual/4.1/date.html#getdaysofyear",
          "content": "getDaysOfYear()\n类型：Function\n\n\n功能描述：获取年份总天数\n\n\n参数：无\n\n\n返回值：number 年份总天数\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDaysOfYear(); // 365\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2020-02-11').getDaysOfYear() // 366\n  }\n});\n\n"
        },
        {
          "title": "format(format: string)",
          "url": "/manual/4.1/date.html#formatformat-string",
          "content": "format(format: string)\n类型：Function\n\n\n功能描述：将日期时间格式化为字符串\n\n\n参数：format - String format 格式字符串\n  y - 年\n\n  n - 季度（1 到 4）\n\n  N - 季度名称\n\n  A - 季度中文名称\n\n  M - 月\n\n  f - 月（Jan 到 Dec）\n\n  F - 月（January 到 December）\n\n  C - 月，中文名称\n\n  d - 日\n\n  Y - 年份中的第几天（0 到 365）\n\n  T - 月份有几天（28 到 30）\n\n  j - 每月天数后面的英文后缀（st，nd，rd 或者 th）\n\n  e - 星期几，数字表示，0（表示星期天）到 6（表示星期六）\n\n  E - 星期几，数字表示，1（表示星期一）到 7（表示星期天）\n\n  l - 星期几，文本表示，3 个字母（Mon 到 Sun）\n\n  L - 星期几，完整的文本格式（Sunday 到 Saturday）\n\n  w - 星期几，中文名称\n\n  W - 一月中第几个星期几\n\n  i - 月份中的第几周\n\n  o - 年份中的第几周\n\n  h - 小时(1~12)\n\n  H - 小时(0~23)\n\n  m - 分\n\n  s - 秒\n\n  S - 毫秒\n\n  a - 上午/下午标记\n\n  O - 与格林威治时间相差的小时数\n\n  P - 与格林威治时间相差的小时数，小时和分钟之间有冒号分隔\n  \n  Z - 时区\n\n\n\n返回值：string 格式化后的日期时间\n\n示例：原生 JavaScript  var result = new Date('2022-01-11').format(\"f-dd,yyyy\"); // Jan-11,2022\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Date('2022-01-11').format(\"f-dd,yy\"); // Jan-11,22\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Document 参考手册",
      "content": "",
      "url": "/manual/4.1/document.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/4.1/document.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nfullScreenEnabled\n检测当前浏览器是否支持全屏模式\n\n\nfullScreenElement\n检测当前文档中正在以全屏模式显示的 Element 节点\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nhttpCookie\nCookie 对象操作\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/4.1/document.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrequestFullscreen\n请求进入全屏模式\n\n\nexitFullscreen\n退出全屏模式\n\n\n"
        },
        {
          "title": "readonly fullScreen",
          "url": "/manual/4.1/document.html#readonly-fullscreen",
          "content": "readonly fullScreen\n类型：Property\n\n\n功能描述：检测当前文档是否全屏\n\n\n参数：无\n\n\n返回值：boolean 当前文档是否全屏，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreen;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreen;\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenEnabled",
          "url": "/manual/4.1/document.html#readonly-fullscreenenabled",
          "content": "readonly fullScreenEnabled\n类型：Property\n\n\n功能描述：检测当前浏览器是否支持全屏模式\n\n\n返回值：boolean 当前浏览器是否支持全屏模式返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenEnabled;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenEnabled\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenElement",
          "url": "/manual/4.1/document.html#readonly-fullscreenelement",
          "content": "readonly fullScreenElement\n类型：Property\n\n\n功能描述：检测当前文档中正在以全屏模式显示的 Element 节点\n\n\n返回值：boolean 当前文档中正在以全屏模式显示的 Element 节点，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenElement;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenElement\n  }\n});\n\n"
        },
        {
          "title": "requestFullscreen()",
          "url": "/manual/4.1/document.html#requestfullscreen",
          "content": "requestFullscreen()\n类型：Function\n\n\n功能描述：请求进入全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.requestFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.requestFullscreen()\n  }\n});\n\n"
        },
        {
          "title": "exitFullscreen()",
          "url": "/manual/4.1/document.html#exitfullscreen",
          "content": "exitFullscreen()\n类型：Function\n\n\n功能描述：退出全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.exitFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.exitFullscreen()\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Cookie 参考手册",
      "content": "",
      "url": "/manual/4.1/cookie.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/cookie.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\n[set](cookie.html#setname-string,-value-string-\n-null-\n\n\nget\n获取 Cookie\n\n\ndelete\n删除 Cookie\n\n\n"
        },
        {
          "title": "set(name: string, value: string | null | undefined, options?: CookieOptions)",
          "url": "/manual/4.1/cookie.html#setname-string,-value-string-|-null-|-undefined,-options?-cookieoptions",
          "content": "set(name: string, value: string | null | undefined, options?: CookieOptions)\n类型：Function\n\n\n功能描述：设置 Cookie\n\n\n参数：name - string Cookie 名称\n           value - string | null | undefined Cookie 值\n           options - CookieOptions Cookie 选项\n\n\n返回值：string Cookie 字符串\n\n示例：原生 JavaScript  var result = document.httpCookie.set(\"name\", \"测试\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.set(\"name\", \"测试\", {path: '/', domain: '*.test.com'})\n  }\n});\n\n"
        },
        {
          "title": "get(name: string)",
          "url": "/manual/4.1/cookie.html#getname-string",
          "content": "get(name: string)\n类型：Function\n\n\n功能描述：获取 Cookie 值\n\n\n参数：name - string Cookie 名称\n\n\n返回值：string | null Cookie 值\n\n示例：原生 JavaScript  var result = document.httpCookie.get(\"name\")\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.get(\"name\")\n  }\n});\n\n"
        },
        {
          "title": "delete(name: string, options?: CookieOptions)",
          "url": "/manual/4.1/cookie.html#deletename-string,-options?-cookieoptions",
          "content": "delete(name: string, options?: CookieOptions)\n类型：Function\n\n\n功能描述：删除 Cookie\n\n\n参数：name - string Cookie 名称\n           options - CookieOptions Cookie 选项\n\n\n返回值：无\n\n示例：原生 JavaScript  var result = document.httpCookie.delete(\"name\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    document.httpCookie.delete(\"name\", \"测试\", {domain: '*.test.com'})\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/4.1/function.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/function.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nargumentNames\n获取函数参数名称\n\n\ndelay\n延时执行函数\n\n\n"
        },
        {
          "title": "argumentNames(...args: any)",
          "url": "/manual/4.1/function.html#argumentnames...args-any",
          "content": "argumentNames(...args: any)\n类型：Function\n\n\n功能描述：获取函数参数名称\n\n\n参数：args - any 1个或多个任意类型的可变参数可变参数\n\n\n返回值：string[] | null 函数参数名称列表\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n\n  }\n  var result = fn.argumentNames();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: String) {\n\n    }\n    const result: string[] | null = fn.argumentNames()\n  }\n});\n\n"
        },
        {
          "title": "delay(timeout: number)",
          "url": "/manual/4.1/function.html#delaytimeout-number",
          "content": "delay(timeout: number)\n类型：Function\n\n\n功能描述：延时执行函数\n\n\n参数：timeout - number 延时时间（单位：秒）\n\n\n返回值：any 函数返回值\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n    return a + b + c;\n  }\n  var result = fn.delay(3)\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: number) {\n      return a ? b : c\n    }\n    const result: any = fn.delay(3)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/4.1/math.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/math.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrand\n延时执行函数\n\n\n"
        },
        {
          "title": "rand(min: number, max?: number)",
          "url": "/manual/4.1/math.html#randmin-number,-max?-number",
          "content": "rand(min: number, max?: number)\n类型：Function\n\n\n功能描述：产生一个指定范围内的随机数\n\n\n参数：min - number 返回的最低值\n           max - number 返回的最高值\n\n\n返回值：number 随机数\n\n示例：原生 JavaScript  var result = Math.rand(1, 5); //\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = Math.rand(1, 5)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Number 参考手册",
      "content": "",
      "url": "/manual/4.1/number.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/number.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntoPaddedString\n延时执行函数\n\n\nisOdd\n判断数字是否为奇数\n\n\nisEven\n判断数字是否为偶数\n\n\nisBetween\n判断一个数字是否在另两个数字之间\n\n\n"
        },
        {
          "title": "toPaddedString(length: number, radix: number)",
          "url": "/manual/4.1/number.html#topaddedstringlength-number,-radix-number",
          "content": "toPaddedString(length: number, radix: number)\n类型：Function\n\n\n功能描述：数字填充\n\n\n参数：length - number 长度\n           radix - number 进制\n\n\n返回值：string 填充后的字符串数字\n\n示例：原生 JavaScript  var result = new Number(5).toPaddedString(12, 2); // 0000000000101\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Number(5).toPaddedString(12, 8) // 0000000000005\n  }\n});\n\n"
        },
        {
          "title": "isOdd(num: number)",
          "url": "/manual/4.1/number.html#isoddnum-number",
          "content": "isOdd(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为奇数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为奇数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isOdd(255); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // false\n  }\n});\n\n"
        },
        {
          "title": "isEven(num: number)",
          "url": "/manual/4.1/number.html#isevennum-number",
          "content": "isEven(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为偶数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为偶数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isEven(255); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // true\n  }\n});\n\n"
        },
        {
          "title": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)",
          "url": "/manual/4.1/number.html#isbetweennum-number,-min-number,-max-number,-match?-boolean-|-undefined",
          "content": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)\n类型：Function\n\n\n功能描述：判断一个数字是否在另两个数字之间\n\n\n参数：num - number 需要判断的数字\n           min - number 最小值\n           max - number 最大值\n           match - boolean | undefined 是否包含最小值或最大值\n\n\n返回值：boolean 数字是否在另两个数字之间，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isBetween(4, 3, 5); // true\n  var result = Number.isBetween(4, 4, 5); // false\n  var result = Number.isBetween(4, 4, 5, true); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isBetween(4, 3, 5) // true\n    const result: boolean = Number.isBetween(4, 4, 5) // false\n    const result: boolean = Number.isBetween(4, 4, 5, true) // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Object 参考手册",
      "content": "",
      "url": "/manual/4.1/object.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/object.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntype\n获取对象数据类型\n\n\nrawType\n获取对象原始数据类型\n\n\nisObject\n判断对象是否为 object 类型\n\n\nisPlainObject\n判断对象是否为简单 object 类型\n\n\nisMap\n判断对象是否为 Map 类型\n\n\nisSet\n判断对象是否为 Set 类型\n\n\nisSymbol\n判断对象是否为 Symbol\n\n\nisPromise\n判断对象是否为 Promise\n\n\nisPrimitive\n判断对象是否为原始类型\n\n\nisFunction\n判断对象是否为函数\n\n\nisArray\n判断对象是否为数组\n\n\nisString\n判断对象是否为字符串对象\n\n\nisNumber\n判断对象是否为数字对象\n\n\nisBoolean\n判断对象是否为布尔对象\n\n\nisRegExp\n判断对象是否为正则对象\n\n\nisFile\n判断对象是否为文件对象\n\n\nisWindow\n判断对象是否为 windows 对象\n\n\nisElement\n判断对象是否为 Element\n\n\nisEvent\n判断对象是否为事件对象\n\n\nisNull\n判断对象是否为 null 对象\n\n\nisUndefined\n判断对象是否为未定义\n\n\nisUndefinedOrNull\n判断对象是否为未定义或 null\n\n\nequals\n深度判断两个对象是否相等\n\n\nclone\n克隆对象\n\n\nomit\n克隆对象，但支持删除指定属性\n\n\npick\n返回对象指定属性，生成新对象\n\n\n"
        },
        {
          "title": "type(obj: any)",
          "url": "/manual/4.1/object.html#typeobj-any",
          "content": "type(obj: any)\n类型：Function\n\n\n功能描述：获取对象数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 对象数据类型\n\n示例：原生 JavaScript  var result = Object.type(true); // boolean\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // number\n  }\n});\n\n"
        },
        {
          "title": "rawType(obj: any)",
          "url": "/manual/4.1/object.html#rawtypeobj-any",
          "content": "rawType(obj: any)\n类型：Function\n\n\n功能描述：获取对象原始数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 原始数据类型\n\n示例：原生 JavaScript  var result = Object.type(\"4.4\"); // String\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // Number\n  }\n});\n\n"
        },
        {
          "title": "isObject(obj: any)",
          "url": "/manual/4.1/object.html#isobjectobj-any",
          "content": "isObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isObject(\"1\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isObject(new String(\"1\")) // true\n  }\n});\n\n"
        },
        {
          "title": "isPlainObject(obj: any)",
          "url": "/manual/4.1/object.html#isplainobjectobj-any",
          "content": "isPlainObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为简单 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为简单 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPlainObject(new String(\"1\")); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPlainObject({\"a\":\"A\"}) // true\n  }\n});\n\n"
        },
        {
          "title": "isMap(obj: any)",
          "url": "/manual/4.1/object.html#ismapobj-any",
          "content": "isMap(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Map 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isMap(new Map()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isMap({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSet(obj: any)",
          "url": "/manual/4.1/object.html#issetobj-any",
          "content": "isSet(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Set 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSet(new Set()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSet({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSymbol(obj: any)",
          "url": "/manual/4.1/object.html#issymbolobj-any",
          "content": "isSymbol(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Symbol\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Symbol 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSymbol(Symbol('a')); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSymbol({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPromise(obj: any)",
          "url": "/manual/4.1/object.html#ispromiseobj-any",
          "content": "isPromise(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Promise\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Promise 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPromise(new Promise(function(){})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPrimitive(obj: any)",
          "url": "/manual/4.1/object.html#isprimitiveobj-any",
          "content": "isPrimitive(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为原始类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为原始类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPrimitive(11); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isFunction(obj: any)",
          "url": "/manual/4.1/object.html#isfunctionobj-any",
          "content": "isFunction(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为函数\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为函数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFunction(location.href); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isFunction(\"a\".replace) // true\n  }\n});\n\n"
        },
        {
          "title": "isArray(obj: any)",
          "url": "/manual/4.1/object.html#isarrayobj-any",
          "content": "isArray(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数组\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数组返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isArray([1, 2]); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isArray({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isString(obj: any)",
          "url": "/manual/4.1/object.html#isstringobj-any",
          "content": "isString(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为字符串对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为字符串返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isString(1); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isString(\"1\") // true\n  }\n});\n\n"
        },
        {
          "title": "isNumber(obj: any)",
          "url": "/manual/4.1/object.html#isnumberobj-any",
          "content": "isNumber(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数字对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数字对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNumber(1.0); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNumber(\"1.0\") // false\n  }\n});\n\n"
        },
        {
          "title": "isBoolean(obj: any)",
          "url": "/manual/4.1/object.html#isbooleanobj-any",
          "content": "isBoolean(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为布尔对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为布尔对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isBoolean(false); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isBoolean(1) // false\n  }\n});\n\n"
        },
        {
          "title": "isRegExp(obj: any)",
          "url": "/manual/4.1/object.html#isregexpobj-any",
          "content": "isRegExp(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为正则对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为正则对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isRegExp(/^[a-z]$/); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isRegExp('/^[a-z]$/') // false\n  }\n});\n\n"
        },
        {
          "title": "isFile(obj: any)",
          "url": "/manual/4.1/object.html#isfileobj-any",
          "content": "isFile(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为文件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为文件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFile(new File(['text1', 'text2'], 'test.txt', {type: 'text/plain'})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = bject.isFile(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isWindow(obj: any)",
          "url": "/manual/4.1/object.html#iswindowobj-any",
          "content": "isWindow(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 windows 对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 windows 对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isWindow(window); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isWindow(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isElement(obj: any)",
          "url": "/manual/4.1/object.html#iselementobj-any",
          "content": "isElement(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Element\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 Element 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isElement(document); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isElement(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "isEvent(obj: any)",
          "url": "/manual/4.1/object.html#iseventobj-any",
          "content": "isEvent(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为事件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为事件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isEvent(document.onclick); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isEvent(document.onclick) // false\n  }\n});\n\n"
        },
        {
          "title": "isNull(obj: any)",
          "url": "/manual/4.1/object.html#isnullobj-any",
          "content": "isNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNull(null); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNull(\"A\") // false\n  }\n});\n\n"
        },
        {
          "title": "isUndefined(obj: any)",
          "url": "/manual/4.1/object.html#isundefinedobj-any",
          "content": "isUndefined(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefined(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefined(b) // true\n  }\n});\n\n"
        },
        {
          "title": "isUndefinedOrNull(obj: any)",
          "url": "/manual/4.1/object.html#isundefinedornullobj-any",
          "content": "isUndefinedOrNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义或 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义或 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefinedOrNull(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefinedOrNull(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "equals(obj1: any, obj2: any)",
          "url": "/manual/4.1/object.html#equalsobj1-any,-obj2-any",
          "content": "equals(obj1: any, obj2: any)\n类型：Function\n\n\n功能描述：深度判断两个对象是否相等\n\n\n参数：obj1 - any 一个对象\n           obj2 - any 用于和 obj1 比较的对象\n\n\n返回值：boolean 当两个对象相等时，返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = Object.equals(\"a\", \"A\"); // false\n  var result = Object.equals(\"a\", \"a\"); // true\n  var result = Object.equals(1, 1.0); // true\n  var result = Object.equals([1], [1.0]); // true\n  var result = Object.equals([1], [1.0, 1.1]); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  const result: boolean = Object.equals(\"a\", \"A\") // false\n  const result: boolean = Object.equals(\"a\", \"a\") // true\n  const result: boolean = Object.equals(1, 1.0) // true\n  const result: boolean = Object.equals([1], [1.0]) // true\n  const result: boolean = Object.equals([1], [1.0, 1.1]) // false\n  }\n});\n\n"
        },
        {
          "title": "clone(obj: any)",
          "url": "/manual/4.1/object.html#cloneobj-any",
          "content": "clone(obj: any)\n类型：Function\n\n\n功能描述：克隆对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var result = Object.clone({\"a\": \"A\"}); // {\"a\": \"A\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = Object.clone({\"a\":\"A\"}) // {\"a\": \"A\"}\n  }\n});\n\n"
        },
        {
          "title": "omit(obj: T, ...fields: K[])",
          "url": "/manual/4.1/object.html#omit<t-extends-object,-k-extends-keyof-t>obj-t,-...fields-k[]",
          "content": "omit(obj: T, ...fields: K[])\n类型：Function\n\n\n功能描述：克隆对象，但支持删除指定属性\n\n\n参数：obj - object 任意对象\n           fields - K[] 需要删除的属性\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var source = {\n    id: 1,\n    name: 'buession',\n    year: 2023\n  };\n  var result = Object.omit(source, \"id\", \"year\"); // {\"name\": \"buession\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const source = {\n      id: 1,\n      name: 'buession',\n      year: 2023\n    };\n    const result = Object.omit(source, \"id\", \"year\") // {\"name\": \"buession\"}\n  }\n});\n\n"
        },
        {
          "title": "pick(obj: T, ...fields: K[])",
          "url": "/manual/4.1/object.html#pick<t-extends-object,-k-extends-keyof-t>obj-t,-...fields-k[]",
          "content": "pick(obj: T, ...fields: K[])\n类型：Function\n\n\n功能描述：返回对象指定属性，生成新对象\n\n\n参数：obj - object 任意对象\n           fields - K[] 需要返回的属性\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var source = {\n    id: 1,\n    name: 'buession',\n    year: 2023\n  };\n  var result = Object.pick(source, \"id\", \"name\"); // {\"id\": 1, \"name\": \"buession\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const source = {\n      id: 1,\n      name: 'buession',\n      year: 2023\n    };\n    const result = Object.omit(source, \"id\", \"name\") // {\"id\": 1, \"name\": \"buession\"}\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "String 参考手册",
      "content": "",
      "url": "/manual/4.1/string.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/string.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nexists\n判断字符串是否存在\n\n\nequals\n判断字符串是否相等\n\n\nequalsIgnoreCase\n判断字符串是否相等，不考虑大小写\n\n\nisEmpty\n判断是否为空字符串\n\n\nisNotEmpty\n判断是否不为空字符串\n\n\nisBlank\n判断是否为空白字符串\n\n\nrepeat\n重复一个字符串\n\n\nleft\n截取字符串左边边指定数目的字符串\n\n\nright\n截取字符串右边指定数目的字符串\n\n\ntruncation\n截取字符串，超出部分用 truncation 替代\n\n\nltrim\n删除字符串开头的空白字符\n\n\nrtrim\n删除字符串结尾的空白字符\n\n\nstartsWith\n判断字符串是否以给定的字符串开头\n\n\nendsWith\n判断字符串是否以给定的字符串结尾\n\n\nlcfirst\n首字母小写\n\n\nucfirst\n首字母大写\n\n\nescapeHTML\n将 HTML 编码\n\n\nunescapeHTML\n将 HTML 实体字符解码\n\n\nstripTag\n删除 HTML 标签\n\n\nstripTags\n批量删除 HTML 标签\n\n\nstripScripts\n删除 script 标签\n\n\ntoArray\n将字符串转换为数组\n\n\ninspect\n返回一个数组的字符串表示形式\n\n\nhashCode\n获取字符串 hash code\n\n\nrandom\n生成随机字符串\n\n\nguid\n生成 UUID\n\n\n"
        },
        {
          "title": "exists(str: string)",
          "url": "/manual/4.1/string.html#existsstr-string",
          "content": "exists(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否存在\n\n\n参数：str - string 子字符串\n\n\n返回值：boolean 子字符串存在返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"ABC\".exists(\"A\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"ABC\".exists(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equals(str: string | undefined | null)",
          "url": "/manual/4.1/string.html#equalsstr-string-|-undefined-|-null",
          "content": "equals(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equals(new String(\"A\")); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"A\".equals(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equalsIgnoreCase(str: string | undefined | null)",
          "url": "/manual/4.1/string.html#equalsignorecasestr-string-|-undefined-|-null",
          "content": "equalsIgnoreCase(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等，不考虑大小写\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equalsIgnoreCase(\"a\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"a\").equalsIgnoreCase(\"1\") // false\n  }\n});\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/4.1/string.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断是否为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串为空，即长度为 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isEmpty(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isEmpty() // true\n  }\n});\n\n"
        },
        {
          "title": "isNotEmpty()",
          "url": "/manual/4.1/string.html#isnotempty",
          "content": "isNotEmpty()\n类型：Function\n\n\n功能描述：判断是否不为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串不为空，即长度大于 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isNotEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isNotEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "isBlank()",
          "url": "/manual/4.1/string.html#isblank",
          "content": "isBlank()\n类型：Function\n\n\n功能描述：判断是否为空白字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串全为空白字符串（即：空格、回车、Tag 制表位、非打印字符）返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isBlank(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\\t\\n\").isBlank() // true\n  }\n});\n\n"
        },
        {
          "title": "repeat(count: number)",
          "url": "/manual/4.1/string.html#repeatcount-number",
          "content": "repeat(count: number)\n类型：Function\n\n\n功能描述：重复一个字符串\n\n\n参数：count - number 重复次数\n\n\n返回值：string 重复后的字符串\n\n示例：原生 JavaScript  var result = \"A\".repeat(3); // AAA\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".repeat(3) // AbcAbcAbc\n  }\n});\n\n"
        },
        {
          "title": "left(length: number)",
          "url": "/manual/4.1/string.html#leftlength-number",
          "content": "left(length: number)\n类型：Function\n\n\n功能描述：截取字符串左边边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".left(1); // A\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".left(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "right(length: number)",
          "url": "/manual/4.1/string.html#rightlength-number",
          "content": "right(length: number)\n类型：Function\n\n\n功能描述：截截取字符串右边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".right(1); // c\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".right(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "truncation(length: number, truncation?: string = \"...\")",
          "url": "/manual/4.1/string.html#truncationlength-number,-truncation?-string-=-\"...\"",
          "content": "truncation(length: number, truncation?: string = \"...\")\n类型：Function\n\n\n功能描述：截取字符串，超出部分用 truncation 替代\n\n\n参数：length - number 截取长度\n\n             truncation - string 替换字符串返回值：string 截取后的字符串；实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length\n示例：原生 JavaScript  var result = \"Abc\".truncation(1, \"...\"); // A...\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".truncation(6, \"...\") // Abc\n  }\n});\n\n"
        },
        {
          "title": "ltrim()",
          "url": "/manual/4.1/string.html#ltrim",
          "content": "ltrim()\n类型：Function\n\n\n功能描述：删除字符串开头的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最左边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".ltrim(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").ltrim() // \"Abc \"\n  }\n});\n\n"
        },
        {
          "title": "rtrim()",
          "url": "/manual/4.1/string.html#rtrim",
          "content": "rtrim()\n类型：Function\n\n\n功能描述：删除字符串结尾的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最右边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".rtrim(); // \" Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").rtrim() // \" Abc\"\n  }\n});\n\n"
        },
        {
          "title": "startsWith(str: string)",
          "url": "/manual/4.1/string.html#startswithstr-string",
          "content": "startsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串开头\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串开头返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".startsWith(\"a\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").startsWith(\"a\") // true\n  }\n});\n\n"
        },
        {
          "title": "endsWith(str: string)",
          "url": "/manual/4.1/string.html#endswithstr-string",
          "content": "endsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串结尾\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串结尾返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".endsWith(\"C\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").endsWith(\"c\") // true\n  }\n});\n\n"
        },
        {
          "title": "lcfirst()",
          "url": "/manual/4.1/string.html#lcfirst",
          "content": "lcfirst()\n类型：Function\n\n\n功能描述：首字母小写\n\n\n参数：无\n\n\n返回值：string 首字母小写后的字符串\n\n示例：原生 JavaScript  var result = \"Abc\".lcfirst(); // \"abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"abc\"\n  }\n});\n\n"
        },
        {
          "title": "ucfirst()",
          "url": "/manual/4.1/string.html#ucfirst",
          "content": "ucfirst()\n类型：Function\n\n\n功能描述：首字母大写\n\n\n参数：无\n\n\n返回值：string 首字母大写后的字符串\n\n示例：原生 JavaScript  var result = \"abc\".ucfirst(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"Abc\"\n  }\n});\n\n"
        },
        {
          "title": "escapeHTML()",
          "url": "/manual/4.1/string.html#escapehtml",
          "content": "escapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 编码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 编码后的字符串\n\n示例：原生 JavaScript  var result = \"test\".escapeHTML(); // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"test\").lcfirst() // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n  }\n});\n\n"
        },
        {
          "title": "unescapeHTML()",
          "url": "/manual/4.1/string.html#unescapehtml",
          "content": "unescapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 实体字符解码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 解码后的字符串\n\n示例：原生 JavaScript  var result = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML() // test\n  }\n});\n\n"
        },
        {
          "title": "stripTag(tag: string)",
          "url": "/manual/4.1/string.html#striptagtag-string",
          "content": "stripTag(tag: string)\n类型：Function\n\n\n功能描述：删除 HTML 标签\n\n\n参数：tag - string 待删除标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"test\".stripTag(\"a\"); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"test\".stripTag(\"a\") // test\n  }\n});\n\n"
        },
        {
          "title": "stripTags(tag: string)",
          "url": "/manual/4.1/string.html#striptagstag-string",
          "content": "stripTags(tag: string)\n类型：Function\n\n\n功能描述：批量删除 HTML 标签\n\n\n参数：tag - string[] | string 删除指定的标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"testEM\".stripTags([\"a\", \"i\"]); // testEM\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"testEM\".stripTags([\"a\", \"i\"]) // testEM\n  }\n});\n\n"
        },
        {
          "title": "stripScripts()",
          "url": "/manual/4.1/string.html#stripscripts",
          "content": "stripScripts()\n类型：Function\n\n\n功能描述：删除 script 标签\n\n\n参数：无\n\n\n返回值：string 删除 script 标签后的字符串\n\n示例：原生 JavaScript  var result = 'alert(\"test\");test'.stripScripts(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = 'alert(\"test\");test'.stripScripts() // \n"
        },
        {
          "title": "toArray(delimiter: string)",
          "url": "/manual/4.1/string.html#toarraydelimiter-string",
          "content": "toArray(delimiter: string)\n类型：Function\n\n\n功能描述：将字符串转换为数组\n\n\n参数：delimiter - string 分隔字符\n\n\n返回值：string[] 字符串数组\n\n示例：原生 JavaScript  var result = \"a|b|c\".toArray('|'); // [ \"a\", \"b\", \"c\" ]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = \"a|b||c\".toArray('||') // [ \"a|b\", \"c\" ]\n  }\n});\n\n"
        },
        {
          "title": "inspect(useDoubleQuotes: boolean)",
          "url": "/manual/4.1/string.html#inspectusedoublequotes-boolean",
          "content": "inspect(useDoubleQuotes: boolean)\n类型：Function\n\n\n功能描述：返回一个数组的字符串表示形式\n\n\n参数：useDoubleQuotes - boolean 是否使用双引号引住\n\n\n返回值：string 数组的字符串表示形式\n\n示例：原生 JavaScript  var result = \"a|b|c\".inspect(true); // \\\"a|b|c\\\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"a|b|c\".inspect(false) // 'a|b|c'\n  }\n});\n\n"
        },
        {
          "title": "hashCode()",
          "url": "/manual/4.1/string.html#hashcode",
          "content": "hashCode()\n类型：Function\n\n\n功能描述：获取字符串 hash code\n\n\n参数：无\n\n\n返回值：number 字符串的 hash code\n\n示例：原生 JavaScript  var result = \"abc\".hashCode(); // 96354\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = \"abcABC\".hashCode() // 2870546592\n  }\n});\n\n"
        },
        {
          "title": "random(length: number, type?: sring | RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)",
          "url": "/manual/4.1/string.html#randomlength-number,-type?-sring-|-randomtype-=-\"numeric\"-|-\"letter\"-|-\"letter_numeric\"-|-\"chinese\"-|-undefined",
          "content": "random(length: number, type?: sring | RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)\n类型：Function\n\n\n功能描述：生成随机字符串\n\n\n参数：length - number 生成字符串的长度\n\n             type - NUMERIC | LETTER | LETTER_NUMERIC | CHINESE | undefined 生成类型 / 随机字符串范围，可选参数，当未指定时为 LETTER_NUMERIC    NUMERIC      - 数字随机字符串\n    LETTER       - 英文随机字符串\n\n    LETTER_NUMERIC - 英文数字混合随机字符串\n\n    CHINESE      - 中文随机字符串\n返回值：string 随机字符串\n示例：原生 JavaScript  var result = String.random(6); // 1Diim2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = String.random(6, \"NUMERIC\") // 881773\n  }\n});\n\n"
        },
        {
          "title": "guid()",
          "url": "/manual/4.1/string.html#guid",
          "content": "guid()\n类型：Function\n\n\n功能描述：生成 UUID\n\n\n返回值：string UUID\n\n示例：原生 JavaScript  var result = String.guid(); // 0abdd1a1-7909-4f91-a320-6ecbb5c6cb15\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = String.guid(); // 0abdd1a1-7909-4f91-a320-6ecbb5c6cb15\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Window 参考手册",
      "content": "",
      "url": "/manual/4.1/window.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/4.1/window.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nbrowser\n浏览器信息对象\n\n\nlocation\nLocation 对象\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/4.1/window.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ncopy\n将字符串复制到剪贴板\n\n\ndelay\n延时执行方法\n\n\n"
        },
        {
          "title": "copy(str: string)",
          "url": "/manual/4.1/window.html#copystr-string",
          "content": "copy(str: string)\n类型：Function\n\n\n功能描述：将字符串复制到剪贴板\n\n\n参数：str - string 字符串\n\n\n返回值：无\n\n示例：原生 JavaScript  window.copy(\"这是要复制的字符串\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    window.copy(\"这是要复制的字符串\")\n  }\n});\n\n"
        },
        {
          "title": "delay(func: Function, wait?: number, ...args: any)",
          "url": "/manual/4.1/window.html#delayfunc-function,-wait?-number,-...args-any",
          "content": "delay(func: Function, wait?: number, ...args: any)\n类型：Function\n\n\n功能描述：延时执行\n\n\n参数：func - Function 方法\n             wait - number 延时时长（单位：毫秒）\n             args - any[] 方法参数\n\n\n返回值：any\n\n示例：原生 JavaScript  window.delay(function () {\n    location.href = \"/\";\n  }, 3000);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    window.delay(function () {\n      // code\n    });\n  }\n});\n\n"
        },
        {
          "title": "Browser",
          "url": "/manual/4.1/window.html#browser",
          "content": "Browser"
        },
        {
          "title": "Location",
          "url": "/manual/4.1/window.html#location",
          "content": "Location"
        }
      ]
    },
    {
      "title": "HttpCookie 参考手册",
      "content": "",
      "url": "/manual/4.1/browser.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/4.1/browser.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nuserAgent\n获取浏览器 User-Agent\n\n\nname\n获取浏览器应用程序名称\n\n\nisMobile\n是否为移动设备\n\n\nisChrome\n是否为 Chrome 浏览器\n\n\nisFirefox\n是否为 Firefox 浏览器\n\n\nisMozilla\n是否为 Mozilla 浏览器\n\n\nisMSIE\n是否为 IE 浏览器\n\n\nisOpera\n是否为 Opera 浏览器\n\n\nisSafari\n是否为 Safari 浏览器\n\n\nisNetscape\n是否为 Netscape 浏览器\n\n\n"
        },
        {
          "title": "readonly userAgent",
          "url": "/manual/4.1/browser.html#readonly-useragent",
          "content": "readonly userAgent\n类型：Property\n\n\n功能描述：获取浏览器 User-Agent，等价于 navigator.userAgent\n\n\n返回值：string 浏览器 User-Agent\n\n示例：原生 JavaScript  var result = window.browser.userAgent; // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n  }\n});\n\n"
        },
        {
          "title": "readonly name",
          "url": "/manual/4.1/browser.html#readonly-name",
          "content": "readonly name\n类型：Property\n\n\n功能描述：获取浏览器应用程序名称，等价于 navigator.appName\n\n\n返回值：string 浏览器应用程序名称\n\n示例：原生 JavaScript  var result = window.browser.name; // Netscape\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.name // Netscape\n  }\n});\n\n"
        },
        {
          "title": "readonly isMobile",
          "url": "/manual/4.1/browser.html#readonly-ismobile",
          "content": "readonly isMobile\n类型：Property\n\n\n功能描述：是否为移动设备，检测依据：User-Agent 中含有 Android、iPhone、iPod、Windows Phone、Mobile、Coolpad、mmp、SmartPhone、midp、wap、xoom、Symbian、J2ME、Blackberry、Wince 其中任意一个字符串\n\n\n返回值：boolean 是移动设备返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMobile\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMobile\n  }\n});\n\n"
        },
        {
          "title": "readonly isChrome",
          "url": "/manual/4.1/browser.html#readonly-ischrome",
          "content": "readonly isChrome\n类型：Property\n\n\n功能描述：是否为 Chrome 浏览器\n\n\n返回值：boolean 是 Chrome 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isChrome;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isChrome\n  }\n});\n\n"
        },
        {
          "title": "readonly isFirefox",
          "url": "/manual/4.1/browser.html#readonly-isfirefox",
          "content": "readonly isFirefox\n类型：Property\n\n\n功能描述：是否为 Firefox 浏览器\n\n\n返回值：boolean 是 Firefox 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isFirefox;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isFirefox\n  }\n});\n\n"
        },
        {
          "title": "readonly isMSIE",
          "url": "/manual/4.1/browser.html#readonly-ismsie",
          "content": "readonly isMSIE\n类型：Property\n\n\n功能描述：是否为 IE 浏览器\n\n\n返回值：boolean 是 IE 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMSIE;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMSIE\n  }\n});\n\n"
        },
        {
          "title": "readonly isOpera",
          "url": "/manual/4.1/browser.html#readonly-isopera",
          "content": "readonly isOpera\n类型：Property\n\n\n功能描述：是否为 Opera 浏览器\n\n\n返回值：boolean 是 Opera 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isOpera;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isOpera\n  }\n});\n\n"
        },
        {
          "title": "readonly isSafari",
          "url": "/manual/4.1/browser.html#readonly-issafari",
          "content": "readonly isSafari\n类型：Property\n\n\n功能描述：是否为 Safari 浏览器\n\n\n返回值：boolean 是 Safari 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isSafari;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isSafari\n  }\n});\n\n"
        },
        {
          "title": "readonly isNetscape",
          "url": "/manual/4.1/browser.html#readonly-isnetscape",
          "content": "readonly isNetscape\n类型：Property\n\n\n功能描述：是否为 Netscape 浏览器\n\n\n返回值：boolean 是 Netscape 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isNetscape;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isNetscape\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Location 参考手册",
      "content": "",
      "url": "/manual/4.1/location.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.1/location.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ngetParameters\n获取所有的请求参数及值\n\n\ngetParameter\n获取指定请求参数的值\n\n\n"
        },
        {
          "title": "getParameters()",
          "url": "/manual/4.1/location.html#getparameters",
          "content": "getParameters()\n类型：Function\n\n\n功能描述：获取所有的请求参数及值\n\n\n参数：无\n\n\n返回值：Record 当前请求 URL 中的所有的请求参数及值\n\n示例：原生 JavaScript  var result = location.getParameters();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Record = location.getParameters()\n  }\n});\n\n"
        },
        {
          "title": "getParameter(name: string)",
          "url": "/manual/4.1/location.html#getparametername-string",
          "content": "getParameter(name: string)\n类型：Function\n\n\n功能描述：获取指定请求参数的值\n\n\n参数：string 参数名称\n\n\n返回值：any 请求参数的值\n\n示例：原生 JavaScript  var result = location.getParameter(\"action\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = location.getParameter('action');\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "API",
      "content": "Buession Prototype API 包含以下目录：PrototypeTryOptionalArrayDateDocumentFunctionMathNumberObjectStringWindow",
      "url": "/manual/4.0/index.html",
      "children": []
    },
    {
      "title": "Prototype 参考手册",
      "content": "",
      "url": "/manual/4.0/prototype.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/4.0/prototype.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nversion\n获取 Buession Prototype 版本\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/4.0/prototype.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nemptyFunction\n执行一个空方法\n\n\nK\n返回参数传递的任意值\n\n\n"
        },
        {
          "title": "version",
          "url": "/manual/4.0/prototype.html#version",
          "content": "version\n类型：String\n\n\n功能描述：获取 Buession Prototype 版本\n\n\n返回值：Buession Prototype 版本\n\n示例：原生 JavaScript  var ver = Prototype.version;\n\nvue  \n    Prototype 版本：{Prototype.version}\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "emptyFunction()",
          "url": "/manual/4.0/prototype.html#emptyfunction",
          "content": "emptyFunction()\n类型：Function\n\n\n功能描述：执行一个空方法\n\n\n参数：无\n\n\n返回值：void\n\n示例：原生 JavaScript  Prototype.emptyFunction();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    Prototype.emptyFunction()\n  }\n});\n\n"
        },
        {
          "title": "K(x: any)",
          "url": "/manual/4.0/prototype.html#kx-any",
          "content": "K(x: any)\n类型：Function\n\n\n功能描述：返回参数传递的任意值\n\n\n参数：x - any 任意值\n\n\n返回值：any 参数传递的任意值\n\n示例：原生 JavaScript  var v = Prototype.K(object);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const v: any = Prototype.K(object)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Try 参考手册",
      "content": "",
      "url": "/manual/4.0/try.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/try.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nthese\n接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n"
        },
        {
          "title": "these(args: any[])",
          "url": "/manual/4.0/try.html#theseargs-any[]",
          "content": "these(args: any[])\n类型：Function\n\n\n功能描述：接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n参数：args any[] 一个或多个 function 作为参数\n\n\n返回值：any 任意函数参数执行结果\n\n示例：原生 JavaScript  var result = Try.these(function(){\n\n    },\n\n    function() {\n\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result:any = Try.these(function(){\n\n      },\n\n      function() {\n\n    })\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Optional 参考手册",
      "content": "Optional 类是一个可以为 null 或 undefined 的容器对象，如果值 value 存在则 isPresent() 方法会返回 true，调用 get() 方法会返回 value 的值。其设计思想，参考 java8 的 Optional使用方式，在构造函数中传入任意类型值；Optional 提供很多有用的方法，这样我们就不用显式进行 null 值和 undefined 的检测。",
      "url": "/manual/4.0/optional.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/optional.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nof\n返回一个指定 T 类型的值的 Optional 实例\n\n\nofNullable\n如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\nempty\n返回空的 Optional 实例\n\n\nget\n如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\norElse\n如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\nisPresent\n如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n  var optional = new Optional(any value);\n\n"
        },
        {
          "title": "static of(value: T)",
          "url": "/manual/4.0/optional.html#static-ofvalue-t",
          "content": "static of(value: T)\n类型：Function\n\n\n功能描述：返回一个指定 T 类型的值的 Optional 实例\n\n\n参数：value - any of T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例\n\n示例：原生 JavaScript  Optional.of(11);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(false)\n  }\n});\n\n"
        },
        {
          "title": "static ofNullable(value: T)",
          "url": "/manual/4.0/optional.html#static-ofnullablevalue-t",
          "content": "static ofNullable(value: T)\n类型：Function\n\n\n功能描述：如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\n参数：value - any as T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例，或空的 Optional 实例\n\n示例：原生 JavaScript  Optional.ofNullable('js');\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.ofNullable(11)\n  }\n});\n\n"
        },
        {
          "title": "static empty()",
          "url": "/manual/4.0/optional.html#static-empty",
          "content": "static empty()\n类型：Function\n\n\n功能描述：返回空的 Optional 实例\n\n\n参数：无\n\n\n返回值：Object as Optional 空的 Optional 实例\n\n示例：原生 JavaScript  Optional.empty();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: null Optional.empty()\n  }\n});\n\n"
        },
        {
          "title": "get()",
          "url": "/manual/4.0/optional.html#get",
          "content": "get()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\n参数：无\n\n\n返回值：any as T Optional 中包含这个值\n\n示例：原生 JavaScript  var optional = Optional.of(11);\n  var result = optional.get(); // 11\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.get() // 11\n  }\n});\n\n"
        },
        {
          "title": "orElse(other: T)",
          "url": "/manual/4.0/optional.html#orelseother-t",
          "content": "orElse(other: T)\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\n参数：other - any of T 任意类型的值\n\n\n返回值：any as T value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.orElse(\"abc\"); // abc\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(undefined)\n    const result = optional.orElse(false) // false\n  }\n});\n\n"
        },
        {
          "title": "isPresent()",
          "url": "/manual/4.0/optional.html#ispresent",
          "content": "isPresent()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n参数：无\n\n\n返回值：boolean value 不为 null 或 undefined，则返回 true；否则返回 false\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.isPresent(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.isPresent() // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Array 参考手册",
      "content": "",
      "url": "/manual/4.0/array.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/array.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisEmpty\n判断数组是否为空数组\n\n\nexists\n判断元素 item 是否在数组中\n\n\nfirst\n获取数组第一个元素\n\n\nlast\n获取数组最后一个元素\n\n\neach\n按顺序为数组中的每个元素调用一次函数\n\n\nsize\n获取数组大小\n\n\nmerge\n连接两个或多个数组\n\n\ncompact\n返回一个不包含 null/undefined 值元素的数组的新版本\n\n\nunique\n对数组的元素进行去重\n\n\nwithout\n返回不包括参数中任意一个指定值的数组\n\n\nclone\n克隆数组\n\n\nclear\n清空数组\n\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/4.0/array.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断数组是否为空数组\n\n\n参数：无\n\n\n返回值：boolean 数组为空，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = [].isEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['a', 'b', 'c'].isEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "exists(item: any)",
          "url": "/manual/4.0/array.html#existsitem-any",
          "content": "exists(item: any)\n类型：Function\n\n\n功能描述：判断元素 item 是否在数组中\n\n\n参数：item - any 待检测元素\n\n\n返回值：boolean 元素 item 是否在数组中返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = ['a', 'b'].exists('a'); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['1', '2'].exists(2) // false\n  }\n});\n\n"
        },
        {
          "title": "first()",
          "url": "/manual/4.0/array.html#first",
          "content": "first()\n类型：Function\n\n\n功能描述：获取数组第一个元素\n\n\n参数：无\n\n\n返回值：any 数组第一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].first(); // a\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].first() // 1\n  }\n});\n\n"
        },
        {
          "title": "last()",
          "url": "/manual/4.0/array.html#last",
          "content": "last()\n类型：Function\n\n\n功能描述：获取数组最后一个元素\n\n\n参数：无\n\n\n返回值：any 数组最后一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].last(); // b\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].last() // 2\n  }\n});\n\n"
        },
        {
          "title": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)",
          "url": "/manual/4.0/array.html#eachcallback-value-t,-index-number,-array-readonly-t[]-=>-void,-thisarg?-any",
          "content": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)\n类型：Function\n\n\n功能描述：按顺序为数组中的每个元素调用一次函数，forEach的别名\n\n\n参数：callback - (value: T, index: number, array: readonly T[]) => void as Function callback 为数组中的每个元素运行的函数，其中：value 为前元素的值，index 为当前元素的数组索引，array 为当前元素所属的数组对象\nany thisArg 可选。要传递给函数以用作其 \"this\" 值的值，如果此参数为空，则值 \"undefined\" 将作为其 \"this\" 值传递\n\n\n返回值：void\n\n示例：原生 JavaScript  ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n    })\n  }\n});\n\n"
        },
        {
          "title": "size()",
          "url": "/manual/4.0/array.html#size",
          "content": "size()\n类型：Function\n\n\n功能描述：获取数组大小\n\n\n参数：无\n\n\n返回值：number 数组大小\n\n示例：原生 JavaScript  var result = ['a', 'b'].size(); // 2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = [].size() // 0\n  }\n});\n\n"
        },
        {
          "title": "merge(...items: T[])",
          "url": "/manual/4.0/array.html#merge...items-t[]",
          "content": "merge(...items: T[])\n类型：Function\n\n\n功能描述：连接两个或多个数组\n\n\n参数：items - any as T 待连接的 T 类型的数组\n\n\n返回值：Array 已连接数组的副本\n\n示例：原生 JavaScript  var result = [1, 3].merge(2, 4); // [1, 3, 2, 4]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    console result: string[] = ['a', 'b'].merge('c', 'd') // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "compact()",
          "url": "/manual/4.0/array.html#compact",
          "content": "compact()\n类型：Function\n\n\n功能描述：返回一个不包含 null/undefined 值元素的数组的新版本\n\n\n参数：无\n\n\n返回值：Array 不包含 null/undefined 值元素的数组的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', null, 'c', 'd'].compact(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', null, 'c', 'd', undefined].compact() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "unique()",
          "url": "/manual/4.0/array.html#unique",
          "content": "unique()\n类型：Function\n\n\n功能描述：对数组的元素进行去重\n\n\n参数：无\n\n\n返回值：Array 数组元素进行去重后的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].unique(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'c', 'd'].unique() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "without(values: T[])",
          "url": "/manual/4.0/array.html#withoutvalues-t[]",
          "content": "without(values: T[])\n类型：Function\n\n\n功能描述：返回不包括参数中任意一个指定值的数组\n\n\n参数：values - any as T[] 排除值数组\n\n\n返回值：Array 不包括参数中任意一个指定值的数组\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b'); // [c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b') // [c, d]\n  }\n});\n\n"
        },
        {
          "title": "clone()",
          "url": "/manual/4.0/array.html#clone",
          "content": "clone()\n类型：Function\n\n\n功能描述：克隆数组\n\n\n参数：无\n\n\n返回值：Array 克隆结果\n\n示例：原生 JavaScript  var result = ['a', 'b'].clone(); // [a, b]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clone() // [a, b]\n  }\n});\n\n"
        },
        {
          "title": "clear()",
          "url": "/manual/4.0/array.html#clear",
          "content": "clear()\n类型：Function\n\n\n功能描述：清空数组\n\n\n参数：无\n\n\n返回值：Array 空数组\n\n示例：原生 JavaScript  var result = ['a', 'b'].clear(); // []\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clear() // []\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Date 参考手册",
      "content": "",
      "url": "/manual/4.0/date.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/date.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisLeapYear\n判断是否为闰年\n\n\ngetSeason\n获取季节\n\n\ngetDayOfYear\n获取年份中的第几天\n\n\ngetDaysOfYear\n获取年份总天数\n\n\nformat\n将日期时间格式化为字符串\n\n\n"
        },
        {
          "title": "isLeapYear()",
          "url": "/manual/4.0/date.html#isleapyear",
          "content": "isLeapYear()\n类型：Function\n\n\n功能描述：判断是否为闰年\n\n\n参数：无\n\n\n返回值：boolean 是闰年，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2000-04-11').isLeapYear() // false\n  }\n});\n\n"
        },
        {
          "title": "getSeason()",
          "url": "/manual/4.0/date.html#getseason",
          "content": "getSeason()\n类型：Function\n\n\n功能描述：获取季节\n\n\n参数：无\n\n\n返回值：number 依次返回 0 至 3 的整数，表示春季、夏季、秋季、冬季\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // 0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2022-01-11').isLeapYear() // 3\n  }\n});\n\n"
        },
        {
          "title": "getDayOfYear()",
          "url": "/manual/4.0/date.html#getdayofyear",
          "content": "getDayOfYear()\n类型：Function\n\n\n功能描述：获取年份中的第几天\n\n\n参数：无\n\n\n返回值：number 年份中的第几天\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDayOfYear(); // 42\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2022-03-01').getDayOfYear(); // 61\n  }\n});\n\n"
        },
        {
          "title": "getDaysOfYear()",
          "url": "/manual/4.0/date.html#getdaysofyear",
          "content": "getDaysOfYear()\n类型：Function\n\n\n功能描述：获取年份总天数\n\n\n参数：无\n\n\n返回值：number 年份总天数\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDaysOfYear(); // 365\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2020-02-11').getDaysOfYear() // 366\n  }\n});\n\n"
        },
        {
          "title": "format(format: string)",
          "url": "/manual/4.0/date.html#formatformat-string",
          "content": "format(format: string)\n类型：Function\n\n\n功能描述：将日期时间格式化为字符串\n\n\n参数：format - String format 格式字符串\n  y - 年\n\n  n - 季度（1 到 4）\n\n  N - 季度名称\n\n  A - 季度中文名称\n\n  M - 月\n\n  f - 月（Jan 到 Dec）\n\n  F - 月（January 到 December）\n\n  C - 月，中文名称\n\n  d - 日\n\n  Y - 年份中的第几天（0 到 365）\n\n  T - 月份有几天（28 到 30）\n\n  j - 每月天数后面的英文后缀（st，nd，rd 或者 th）\n\n  e - 星期几，数字表示，0（表示星期天）到 6（表示星期六）\n\n  E - 星期几，数字表示，1（表示星期一）到 7（表示星期天）\n\n  l - 星期几，文本表示，3 个字母（Mon 到 Sun）\n\n  L - 星期几，完整的文本格式（Sunday 到 Saturday）\n\n  w - 星期几，中文名称\n\n  W - 一月中第几个星期几\n\n  i - 月份中的第几周\n\n  o - 年份中的第几周\n\n  h - 小时(1~12)\n\n  H - 小时(0~23)\n\n  m - 分\n\n  s - 秒\n\n  S - 毫秒\n\n  a - 上午/下午标记\n\n  O - 与格林威治时间相差的小时数\n\n  P - 与格林威治时间相差的小时数，小时和分钟之间有冒号分隔\n  \n  Z - 时区\n\n\n\n返回值：string 格式化后的日期时间\n\n示例：原生 JavaScript  var result = new Date('2022-01-11').format(\"f-dd,yyyy\"); // Jan-11,2022\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Date('2022-01-11').format(\"f-dd,yy\"); // Jan-11,22\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Document 参考手册",
      "content": "",
      "url": "/manual/4.0/document.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/4.0/document.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nfullScreenEnabled\n检测当前浏览器是否支持全屏模式\n\n\nfullScreenElement\n检测当前文档中正在以全屏模式显示的 Element 节点\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nhttpCookie\nCookie 对象操作\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/4.0/document.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrequestFullscreen\n请求进入全屏模式\n\n\nexitFullscreen\n退出全屏模式\n\n\n"
        },
        {
          "title": "readonly fullScreen",
          "url": "/manual/4.0/document.html#readonly-fullscreen",
          "content": "readonly fullScreen\n类型：Property\n\n\n功能描述：检测当前文档是否全屏\n\n\n参数：无\n\n\n返回值：boolean 当前文档是否全屏，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreen;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreen;\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenEnabled",
          "url": "/manual/4.0/document.html#readonly-fullscreenenabled",
          "content": "readonly fullScreenEnabled\n类型：Property\n\n\n功能描述：检测当前浏览器是否支持全屏模式\n\n\n返回值：boolean 当前浏览器是否支持全屏模式返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenEnabled;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenEnabled\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenElement",
          "url": "/manual/4.0/document.html#readonly-fullscreenelement",
          "content": "readonly fullScreenElement\n类型：Property\n\n\n功能描述：检测当前文档中正在以全屏模式显示的 Element 节点\n\n\n返回值：boolean 当前文档中正在以全屏模式显示的 Element 节点，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenElement;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenElement\n  }\n});\n\n"
        },
        {
          "title": "requestFullscreen()",
          "url": "/manual/4.0/document.html#requestfullscreen",
          "content": "requestFullscreen()\n类型：Function\n\n\n功能描述：请求进入全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.requestFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.requestFullscreen()\n  }\n});\n\n"
        },
        {
          "title": "exitFullscreen()",
          "url": "/manual/4.0/document.html#exitfullscreen",
          "content": "exitFullscreen()\n类型：Function\n\n\n功能描述：退出全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.exitFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.exitFullscreen()\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Cookie 参考手册",
      "content": "",
      "url": "/manual/4.0/cookie.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/cookie.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\n[set](cookie.html#setname-string,-value-string-\n-null-\n\n\nget\n获取 Cookie\n\n\ndelete\n删除 Cookie\n\n\n"
        },
        {
          "title": "set(name: string, value: string | null | undefined, options?: CookieOptions)",
          "url": "/manual/4.0/cookie.html#setname-string,-value-string-|-null-|-undefined,-options?-cookieoptions",
          "content": "set(name: string, value: string | null | undefined, options?: CookieOptions)\n类型：Function\n\n\n功能描述：设置 Cookie\n\n\n参数：name - string Cookie 名称\n           value - string | null | undefined Cookie 值\n           options - CookieOptions Cookie 选项\n\n\n返回值：string Cookie 字符串\n\n示例：原生 JavaScript  var result = document.httpCookie.set(\"name\", \"测试\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.set(\"name\", \"测试\", {path: '/', domain: '*.test.com'})\n  }\n});\n\n"
        },
        {
          "title": "get(name: string)",
          "url": "/manual/4.0/cookie.html#getname-string",
          "content": "get(name: string)\n类型：Function\n\n\n功能描述：获取 Cookie 值\n\n\n参数：name - string Cookie 名称\n\n\n返回值：string | null Cookie 值\n\n示例：原生 JavaScript  var result = document.httpCookie.get(\"name\")\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.get(\"name\")\n  }\n});\n\n"
        },
        {
          "title": "delete(name: string, options?: CookieOptions)",
          "url": "/manual/4.0/cookie.html#deletename-string,-options?-cookieoptions",
          "content": "delete(name: string, options?: CookieOptions)\n类型：Function\n\n\n功能描述：删除 Cookie\n\n\n参数：name - string Cookie 名称\n           options - CookieOptions Cookie 选项\n\n\n返回值：无\n\n示例：原生 JavaScript  var result = document.httpCookie.delete(\"name\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    document.httpCookie.delete(\"name\", \"测试\", {domain: '*.test.com'})\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/4.0/function.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/function.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nargumentNames\n获取函数参数名称\n\n\ndelay\n延时执行函数\n\n\n"
        },
        {
          "title": "argumentNames(...args: any)",
          "url": "/manual/4.0/function.html#argumentnames...args-any",
          "content": "argumentNames(...args: any)\n类型：Function\n\n\n功能描述：获取函数参数名称\n\n\n参数：args - any 1个或多个任意类型的可变参数可变参数\n\n\n返回值：string[] | null 函数参数名称列表\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n\n  }\n  var result = fn.argumentNames();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: String) {\n\n    }\n    const result: string[] | null = fn.argumentNames()\n  }\n});\n\n"
        },
        {
          "title": "delay(timeout: number)",
          "url": "/manual/4.0/function.html#delaytimeout-number",
          "content": "delay(timeout: number)\n类型：Function\n\n\n功能描述：延时执行函数\n\n\n参数：timeout - number 延时时间（单位：秒）\n\n\n返回值：any 函数返回值\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n    return a + b + c;\n  }\n  var result = fn.delay(3)\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: number) {\n      return a ? b : c\n    }\n    const result: any = fn.delay(3)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/4.0/math.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/math.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrand\n延时执行函数\n\n\n"
        },
        {
          "title": "rand(min: number, max?: number)",
          "url": "/manual/4.0/math.html#randmin-number,-max?-number",
          "content": "rand(min: number, max?: number)\n类型：Function\n\n\n功能描述：产生一个指定范围内的随机数\n\n\n参数：min - number 返回的最低值\n           max - number 返回的最高值\n\n\n返回值：number 随机数\n\n示例：原生 JavaScript  var result = Math.rand(1, 5); //\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = Math.rand(1, 5)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Number 参考手册",
      "content": "",
      "url": "/manual/4.0/number.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/number.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntoPaddedString\n延时执行函数\n\n\nisOdd\n判断数字是否为奇数\n\n\nisEven\n判断数字是否为偶数\n\n\nisBetween\n判断一个数字是否在另两个数字之间\n\n\n"
        },
        {
          "title": "toPaddedString(length: number, radix: number)",
          "url": "/manual/4.0/number.html#topaddedstringlength-number,-radix-number",
          "content": "toPaddedString(length: number, radix: number)\n类型：Function\n\n\n功能描述：数字填充\n\n\n参数：length - number 长度\n           radix - number 进制\n\n\n返回值：string 填充后的字符串数字\n\n示例：原生 JavaScript  var result = new Number(5).toPaddedString(12, 2); // 0000000000101\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Number(5).toPaddedString(12, 8) // 0000000000005\n  }\n});\n\n"
        },
        {
          "title": "isOdd(num: number)",
          "url": "/manual/4.0/number.html#isoddnum-number",
          "content": "isOdd(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为奇数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为奇数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isOdd(255); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // false\n  }\n});\n\n"
        },
        {
          "title": "isEven(num: number)",
          "url": "/manual/4.0/number.html#isevennum-number",
          "content": "isEven(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为偶数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为偶数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isEven(255); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // true\n  }\n});\n\n"
        },
        {
          "title": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)",
          "url": "/manual/4.0/number.html#isbetweennum-number,-min-number,-max-number,-match?-boolean-|-undefined",
          "content": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)\n类型：Function\n\n\n功能描述：判断一个数字是否在另两个数字之间\n\n\n参数：num - number 需要判断的数字\n           min - number 最小值\n           max - number 最大值\n           match - boolean | undefined 是否包含最小值或最大值\n\n\n返回值：boolean 数字是否在另两个数字之间，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isBetween(4, 3, 5); // true\n  var result = Number.isBetween(4, 4, 5); // false\n  var result = Number.isBetween(4, 4, 5, true); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isBetween(4, 3, 5) // true\n    const result: boolean = Number.isBetween(4, 4, 5) // false\n    const result: boolean = Number.isBetween(4, 4, 5, true) // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Object 参考手册",
      "content": "",
      "url": "/manual/4.0/object.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/object.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntype\n获取对象数据类型\n\n\nrawType\n获取对象原始数据类型\n\n\nisObject\n判断对象是否为 object 类型\n\n\nisPlainObject\n判断对象是否为简单 object 类型\n\n\nisMap\n判断对象是否为 Map 类型\n\n\nisSet\n判断对象是否为 Set 类型\n\n\nisSymbol\n判断对象是否为 Symbol\n\n\nisPromise\n判断对象是否为 Promise\n\n\nisPrimitive\n判断对象是否为原始类型\n\n\nisFunction\n判断对象是否为函数\n\n\nisArray\n判断对象是否为数组\n\n\nisString\n判断对象是否为字符串对象\n\n\nisNumber\n判断对象是否为数字对象\n\n\nisBoolean\n判断对象是否为布尔对象\n\n\nisRegExp\n判断对象是否为正则对象\n\n\nisFile\n判断对象是否为文件对象\n\n\nisWindow\n判断对象是否为 windows 对象\n\n\nisElement\n判断对象是否为 Element\n\n\nisEvent\n判断对象是否为事件对象\n\n\nisNull\n判断对象是否为 null 对象\n\n\nisUndefined\n判断对象是否为未定义\n\n\nisUndefinedOrNull\n判断对象是否为未定义或 null\n\n\nequals\n深度判断两个对象是否相等\n\n\nclone\n克隆对象\n\n\nomit\n克隆对象，但支持删除指定属性\n\n\n"
        },
        {
          "title": "type(obj: any)",
          "url": "/manual/4.0/object.html#typeobj-any",
          "content": "type(obj: any)\n类型：Function\n\n\n功能描述：获取对象数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 对象数据类型\n\n示例：原生 JavaScript  var result = Object.type(true); // boolean\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // number\n  }\n});\n\n"
        },
        {
          "title": "rawType(obj: any)",
          "url": "/manual/4.0/object.html#rawtypeobj-any",
          "content": "rawType(obj: any)\n类型：Function\n\n\n功能描述：获取对象原始数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 原始数据类型\n\n示例：原生 JavaScript  var result = Object.type(\"4.4\"); // String\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // Number\n  }\n});\n\n"
        },
        {
          "title": "isObject(obj: any)",
          "url": "/manual/4.0/object.html#isobjectobj-any",
          "content": "isObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isObject(\"1\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isObject(new String(\"1\")) // true\n  }\n});\n\n"
        },
        {
          "title": "isPlainObject(obj: any)",
          "url": "/manual/4.0/object.html#isplainobjectobj-any",
          "content": "isPlainObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为简单 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为简单 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPlainObject(new String(\"1\")); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPlainObject({\"a\":\"A\"}) // true\n  }\n});\n\n"
        },
        {
          "title": "isMap(obj: any)",
          "url": "/manual/4.0/object.html#ismapobj-any",
          "content": "isMap(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Map 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isMap(new Map()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isMap({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSet(obj: any)",
          "url": "/manual/4.0/object.html#issetobj-any",
          "content": "isSet(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Set 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSet(new Set()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSet({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSymbol(obj: any)",
          "url": "/manual/4.0/object.html#issymbolobj-any",
          "content": "isSymbol(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Symbol\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Symbol 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSymbol(Symbol('a')); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSymbol({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPromise(obj: any)",
          "url": "/manual/4.0/object.html#ispromiseobj-any",
          "content": "isPromise(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Promise\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Promise 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPromise(new Promise(function(){})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPrimitive(obj: any)",
          "url": "/manual/4.0/object.html#isprimitiveobj-any",
          "content": "isPrimitive(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为原始类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为原始类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPrimitive(11); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isFunction(obj: any)",
          "url": "/manual/4.0/object.html#isfunctionobj-any",
          "content": "isFunction(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为函数\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为函数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFunction(location.href); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isFunction(\"a\".replace) // true\n  }\n});\n\n"
        },
        {
          "title": "isArray(obj: any)",
          "url": "/manual/4.0/object.html#isarrayobj-any",
          "content": "isArray(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数组\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数组返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isArray([1, 2]); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isArray({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isString(obj: any)",
          "url": "/manual/4.0/object.html#isstringobj-any",
          "content": "isString(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为字符串对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为字符串返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isString(1); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isString(\"1\") // true\n  }\n});\n\n"
        },
        {
          "title": "isNumber(obj: any)",
          "url": "/manual/4.0/object.html#isnumberobj-any",
          "content": "isNumber(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数字对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数字对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNumber(1.0); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNumber(\"1.0\") // false\n  }\n});\n\n"
        },
        {
          "title": "isBoolean(obj: any)",
          "url": "/manual/4.0/object.html#isbooleanobj-any",
          "content": "isBoolean(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为布尔对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为布尔对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isBoolean(false); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isBoolean(1) // false\n  }\n});\n\n"
        },
        {
          "title": "isRegExp(obj: any)",
          "url": "/manual/4.0/object.html#isregexpobj-any",
          "content": "isRegExp(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为正则对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为正则对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isRegExp(/^[a-z]$/); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isRegExp('/^[a-z]$/') // false\n  }\n});\n\n"
        },
        {
          "title": "isFile(obj: any)",
          "url": "/manual/4.0/object.html#isfileobj-any",
          "content": "isFile(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为文件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为文件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFile(new File(['text1', 'text2'], 'test.txt', {type: 'text/plain'})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = bject.isFile(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isWindow(obj: any)",
          "url": "/manual/4.0/object.html#iswindowobj-any",
          "content": "isWindow(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 windows 对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 windows 对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isWindow(window); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isWindow(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isElement(obj: any)",
          "url": "/manual/4.0/object.html#iselementobj-any",
          "content": "isElement(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Element\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 Element 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isElement(document); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isElement(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "isEvent(obj: any)",
          "url": "/manual/4.0/object.html#iseventobj-any",
          "content": "isEvent(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为事件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为事件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isEvent(document.onclick); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isEvent(document.onclick) // false\n  }\n});\n\n"
        },
        {
          "title": "isNull(obj: any)",
          "url": "/manual/4.0/object.html#isnullobj-any",
          "content": "isNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNull(null); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNull(\"A\") // false\n  }\n});\n\n"
        },
        {
          "title": "isUndefined(obj: any)",
          "url": "/manual/4.0/object.html#isundefinedobj-any",
          "content": "isUndefined(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefined(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefined(b) // true\n  }\n});\n\n"
        },
        {
          "title": "isUndefinedOrNull(obj: any)",
          "url": "/manual/4.0/object.html#isundefinedornullobj-any",
          "content": "isUndefinedOrNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义或 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义或 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefinedOrNull(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefinedOrNull(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "equals(obj1: any, obj2: any)",
          "url": "/manual/4.0/object.html#equalsobj1-any,-obj2-any",
          "content": "equals(obj1: any, obj2: any)\n类型：Function\n\n\n功能描述：深度判断两个对象是否相等\n\n\n参数：obj1 - any 一个对象\n           obj2 - any 用于和 obj1 比较的对象\n\n\n返回值：boolean 当两个对象相等时，返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = Object.equals(\"a\", \"A\"); // false\n  var result = Object.equals(\"a\", \"a\"); // true\n  var result = Object.equals(1, 1.0); // true\n  var result = Object.equals([1], [1.0]); // true\n  var result = Object.equals([1], [1.0, 1.1]); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  const result: boolean = Object.equals(\"a\", \"A\") // false\n  const result: boolean = Object.equals(\"a\", \"a\") // true\n  const result: boolean = Object.equals(1, 1.0) // true\n  const result: boolean = Object.equals([1], [1.0]) // true\n  const result: boolean = Object.equals([1], [1.0, 1.1]) // false\n  }\n});\n\n"
        },
        {
          "title": "clone(obj: any)",
          "url": "/manual/4.0/object.html#cloneobj-any",
          "content": "clone(obj: any)\n类型：Function\n\n\n功能描述：克隆对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var result = Object.clone({\"a\": \"A\"}); // {\"a\": \"A\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = Object.clone({\"a\":\"A\"}) // {\"a\": \"A\"}\n  }\n});\n\n"
        },
        {
          "title": "omit(obj: T, ...fields: K[])",
          "url": "/manual/4.0/object.html#omit<t-extends-object,-k-extends-keyof-t>obj-t,-...fields-k[]",
          "content": "omit(obj: T, ...fields: K[])\n类型：Function\n\n\n功能描述：克隆对象，但支持删除指定属性\n\n\n参数：obj - object 任意对象\n           fields - K[] 需要删除的属性\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var source = {\n    id: 1,\n    name: 'buession',\n    year: 2023\n  };\n  var result = Object.omit(source, \"id\", \"year\"); // {\"name\": \"buession\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  const source = {\n    id: 1,\n    name: 'buession',\n    year: 2023\n  };\n  const result = Object.omit(source, \"id\", \"year\") // {\"name\": \"buession\"}\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "String 参考手册",
      "content": "",
      "url": "/manual/4.0/string.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/string.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nexists\n判断字符串是否存在\n\n\nequals\n判断字符串是否相等\n\n\nequalsIgnoreCase\n判断字符串是否相等，不考虑大小写\n\n\nisEmpty\n判断是否为空字符串\n\n\nisNotEmpty\n判断是否不为空字符串\n\n\nisBlank\n判断是否为空白字符串\n\n\nrepeat\n重复一个字符串\n\n\nleft\n截取字符串左边边指定数目的字符串\n\n\nright\n截取字符串右边指定数目的字符串\n\n\ntruncation\n截取字符串，超出部分用 truncation 替代\n\n\nltrim\n删除字符串开头的空白字符\n\n\nrtrim\n删除字符串结尾的空白字符\n\n\nstartsWith\n判断字符串是否以给定的字符串开头\n\n\nendsWith\n判断字符串是否以给定的字符串结尾\n\n\nlcfirst\n首字母小写\n\n\nucfirst\n首字母大写\n\n\nescapeHTML\n将 HTML 编码\n\n\nunescapeHTML\n将 HTML 实体字符解码\n\n\nstripTag\n删除 HTML 标签\n\n\nstripTags\n批量删除 HTML 标签\n\n\nstripScripts\n删除 script 标签\n\n\ntoArray\n将字符串转换为数组\n\n\ninspect\n返回一个数组的字符串表示形式\n\n\nhashCode\n获取字符串 hash code\n\n\nrandom\n生成随机字符串\n\n\nguid\n生成 UUID\n\n\n"
        },
        {
          "title": "exists(str: string)",
          "url": "/manual/4.0/string.html#existsstr-string",
          "content": "exists(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否存在\n\n\n参数：str - string 子字符串\n\n\n返回值：boolean 子字符串存在返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"ABC\".exists(\"A\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"ABC\".exists(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equals(str: string | undefined | null)",
          "url": "/manual/4.0/string.html#equalsstr-string-|-undefined-|-null",
          "content": "equals(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equals(new String(\"A\")); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"A\".equals(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equalsIgnoreCase(str: string | undefined | null)",
          "url": "/manual/4.0/string.html#equalsignorecasestr-string-|-undefined-|-null",
          "content": "equalsIgnoreCase(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等，不考虑大小写\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equalsIgnoreCase(\"a\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"a\").equalsIgnoreCase(\"1\") // false\n  }\n});\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/4.0/string.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断是否为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串为空，即长度为 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isEmpty(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isEmpty() // true\n  }\n});\n\n"
        },
        {
          "title": "isNotEmpty()",
          "url": "/manual/4.0/string.html#isnotempty",
          "content": "isNotEmpty()\n类型：Function\n\n\n功能描述：判断是否不为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串不为空，即长度大于 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isNotEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isNotEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "isBlank()",
          "url": "/manual/4.0/string.html#isblank",
          "content": "isBlank()\n类型：Function\n\n\n功能描述：判断是否为空白字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串全为空白字符串（即：空格、回车、Tag 制表位、非打印字符）返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isBlank(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\\t\\n\").isBlank() // true\n  }\n});\n\n"
        },
        {
          "title": "repeat(count: number)",
          "url": "/manual/4.0/string.html#repeatcount-number",
          "content": "repeat(count: number)\n类型：Function\n\n\n功能描述：重复一个字符串\n\n\n参数：count - number 重复次数\n\n\n返回值：string 重复后的字符串\n\n示例：原生 JavaScript  var result = \"A\".repeat(3); // AAA\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".repeat(3) // AbcAbcAbc\n  }\n});\n\n"
        },
        {
          "title": "left(length: number)",
          "url": "/manual/4.0/string.html#leftlength-number",
          "content": "left(length: number)\n类型：Function\n\n\n功能描述：截取字符串左边边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".left(1); // A\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".left(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "right(length: number)",
          "url": "/manual/4.0/string.html#rightlength-number",
          "content": "right(length: number)\n类型：Function\n\n\n功能描述：截截取字符串右边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".right(1); // c\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".right(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "truncation(length: number, truncation?: string = \"...\")",
          "url": "/manual/4.0/string.html#truncationlength-number,-truncation?-string-=-\"...\"",
          "content": "truncation(length: number, truncation?: string = \"...\")\n类型：Function\n\n\n功能描述：截取字符串，超出部分用 truncation 替代\n\n\n参数：length - number 截取长度\n\n             truncation - string 替换字符串返回值：string 截取后的字符串；实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length\n示例：原生 JavaScript  var result = \"Abc\".truncation(1, \"...\"); // A...\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".truncation(6, \"...\") // Abc\n  }\n});\n\n"
        },
        {
          "title": "ltrim()",
          "url": "/manual/4.0/string.html#ltrim",
          "content": "ltrim()\n类型：Function\n\n\n功能描述：删除字符串开头的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最左边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".ltrim(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").ltrim() // \"Abc \"\n  }\n});\n\n"
        },
        {
          "title": "rtrim()",
          "url": "/manual/4.0/string.html#rtrim",
          "content": "rtrim()\n类型：Function\n\n\n功能描述：删除字符串结尾的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最右边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".rtrim(); // \" Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").rtrim() // \" Abc\"\n  }\n});\n\n"
        },
        {
          "title": "startsWith(str: string)",
          "url": "/manual/4.0/string.html#startswithstr-string",
          "content": "startsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串开头\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串开头返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".startsWith(\"a\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").startsWith(\"a\") // true\n  }\n});\n\n"
        },
        {
          "title": "endsWith(str: string)",
          "url": "/manual/4.0/string.html#endswithstr-string",
          "content": "endsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串结尾\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串结尾返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".endsWith(\"C\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").endsWith(\"c\") // true\n  }\n});\n\n"
        },
        {
          "title": "lcfirst()",
          "url": "/manual/4.0/string.html#lcfirst",
          "content": "lcfirst()\n类型：Function\n\n\n功能描述：首字母小写\n\n\n参数：无\n\n\n返回值：string 首字母小写后的字符串\n\n示例：原生 JavaScript  var result = \"Abc\".lcfirst(); // \"abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"abc\"\n  }\n});\n\n"
        },
        {
          "title": "ucfirst()",
          "url": "/manual/4.0/string.html#ucfirst",
          "content": "ucfirst()\n类型：Function\n\n\n功能描述：首字母大写\n\n\n参数：无\n\n\n返回值：string 首字母大写后的字符串\n\n示例：原生 JavaScript  var result = \"abc\".ucfirst(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"Abc\"\n  }\n});\n\n"
        },
        {
          "title": "escapeHTML()",
          "url": "/manual/4.0/string.html#escapehtml",
          "content": "escapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 编码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 编码后的字符串\n\n示例：原生 JavaScript  var result = \"test\".escapeHTML(); // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"test\").lcfirst() // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n  }\n});\n\n"
        },
        {
          "title": "unescapeHTML()",
          "url": "/manual/4.0/string.html#unescapehtml",
          "content": "unescapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 实体字符解码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 解码后的字符串\n\n示例：原生 JavaScript  var result = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML() // test\n  }\n});\n\n"
        },
        {
          "title": "stripTag(tag: string)",
          "url": "/manual/4.0/string.html#striptagtag-string",
          "content": "stripTag(tag: string)\n类型：Function\n\n\n功能描述：删除 HTML 标签\n\n\n参数：tag - string 待删除标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"test\".stripTag(\"a\"); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"test\".stripTag(\"a\") // test\n  }\n});\n\n"
        },
        {
          "title": "stripTags(tag: string)",
          "url": "/manual/4.0/string.html#striptagstag-string",
          "content": "stripTags(tag: string)\n类型：Function\n\n\n功能描述：批量删除 HTML 标签\n\n\n参数：tag - string[] | string 删除指定的标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"testEM\".stripTags([\"a\", \"i\"]); // testEM\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"testEM\".stripTags([\"a\", \"i\"]) // testEM\n  }\n});\n\n"
        },
        {
          "title": "stripScripts()",
          "url": "/manual/4.0/string.html#stripscripts",
          "content": "stripScripts()\n类型：Function\n\n\n功能描述：删除 script 标签\n\n\n参数：无\n\n\n返回值：string 删除 script 标签后的字符串\n\n示例：原生 JavaScript  var result = 'alert(\"test\");test'.stripScripts(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = 'alert(\"test\");test'.stripScripts() // \n"
        },
        {
          "title": "toArray(delimiter: string)",
          "url": "/manual/4.0/string.html#toarraydelimiter-string",
          "content": "toArray(delimiter: string)\n类型：Function\n\n\n功能描述：将字符串转换为数组\n\n\n参数：delimiter - string 分隔字符\n\n\n返回值：string[] 字符串数组\n\n示例：原生 JavaScript  var result = \"a|b|c\".toArray('|'); // [ \"a\", \"b\", \"c\" ]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = \"a|b||c\".toArray('||') // [ \"a|b\", \"c\" ]\n  }\n});\n\n"
        },
        {
          "title": "inspect(useDoubleQuotes: boolean)",
          "url": "/manual/4.0/string.html#inspectusedoublequotes-boolean",
          "content": "inspect(useDoubleQuotes: boolean)\n类型：Function\n\n\n功能描述：返回一个数组的字符串表示形式\n\n\n参数：useDoubleQuotes - boolean 是否使用双引号引住\n\n\n返回值：string 数组的字符串表示形式\n\n示例：原生 JavaScript  var result = \"a|b|c\".inspect(true); // \\\"a|b|c\\\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"a|b|c\".inspect(false) // 'a|b|c'\n  }\n});\n\n"
        },
        {
          "title": "hashCode()",
          "url": "/manual/4.0/string.html#hashcode",
          "content": "hashCode()\n类型：Function\n\n\n功能描述：获取字符串 hash code\n\n\n参数：无\n\n\n返回值：number 字符串的 hash code\n\n示例：原生 JavaScript  var result = \"abc\".hashCode(); // 96354\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = \"abcABC\".hashCode() // 2870546592\n  }\n});\n\n"
        },
        {
          "title": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)",
          "url": "/manual/4.0/string.html#randomlength-number,-type?-randomtype-=-\"numeric\"-|-\"letter\"-|-\"letter_numeric\"-|-\"chinese\"-|-undefined",
          "content": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)\n类型：Function\n\n\n功能描述：生成随机字符串\n\n\n参数：length - number 生成字符串的长度\n\n             type - NUMERIC | LETTER | LETTER_NUMERIC | CHINESE | undefined 生成类型，可选参数，当未指定时为 LETTER_NUMERIC    NUMERIC      - 数字随机字符串\n    LETTER       - 英文随机字符串\n\n    LETTER_NUMERIC - 英文数字混合随机字符串\n\n    CHINESE      - 中文随机字符串\n返回值：string 随机字符串\n示例：原生 JavaScript  var result = String.random(6); // 1Diim2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = String.random(6, \"NUMERIC\") // 881773\n  }\n});\n\n"
        },
        {
          "title": "guid()",
          "url": "/manual/4.0/string.html#guid",
          "content": "guid()\n类型：Function\n\n\n功能描述：生成 UUID\n\n\n返回值：string UUID\n\n示例：原生 JavaScript  var result = String.guid(); // 0abdd1a1-7909-4f91-a320-6ecbb5c6cb15\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = String.guid(); // 0abdd1a1-7909-4f91-a320-6ecbb5c6cb15\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Window 参考手册",
      "content": "",
      "url": "/manual/4.0/window.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/4.0/window.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nbrowser\n浏览器信息对象\n\n\nlocation\nLocation 对象\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/4.0/window.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ncopy\n将字符串复制到剪贴板\n\n\ndelay\n延时执行方法\n\n\n"
        },
        {
          "title": "copy(str: string)",
          "url": "/manual/4.0/window.html#copystr-string",
          "content": "copy(str: string)\n类型：Function\n\n\n功能描述：将字符串复制到剪贴板\n\n\n参数：str - string 字符串\n\n\n返回值：无\n\n示例：原生 JavaScript  window.copy(\"这是要复制的字符串\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    window.copy(\"这是要复制的字符串\")\n  }\n});\n\n"
        },
        {
          "title": "delay(func: Function, wait?: number, ...args: any)",
          "url": "/manual/4.0/window.html#delayfunc-function,-wait?-number,-...args-any",
          "content": "delay(func: Function, wait?: number, ...args: any)\n类型：Function\n\n\n功能描述：延时执行\n\n\n参数：func - Function 方法\n             wait - number 延时时长（单位：毫秒）\n             args - any[] 方法参数\n\n\n返回值：any\n\n示例：原生 JavaScript  window.delay(function () {\n    location.href = \"/\";\n  }, 3000);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    window.delay(function () {\n      // code\n    });\n  }\n});\n\n"
        },
        {
          "title": "Browser",
          "url": "/manual/4.0/window.html#browser",
          "content": "Browser"
        },
        {
          "title": "Location",
          "url": "/manual/4.0/window.html#location",
          "content": "Location"
        }
      ]
    },
    {
      "title": "HttpCookie 参考手册",
      "content": "",
      "url": "/manual/4.0/browser.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/4.0/browser.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nuserAgent\n获取浏览器 User-Agent\n\n\nname\n获取浏览器应用程序名称\n\n\nisMobile\n是否为移动设备\n\n\nisChrome\n是否为 Chrome 浏览器\n\n\nisFirefox\n是否为 Firefox 浏览器\n\n\nisMozilla\n是否为 Mozilla 浏览器\n\n\nisMSIE\n是否为 IE 浏览器\n\n\nisOpera\n是否为 Opera 浏览器\n\n\nisSafari\n是否为 Safari 浏览器\n\n\nisNetscape\n是否为 Netscape 浏览器\n\n\n"
        },
        {
          "title": "readonly userAgent",
          "url": "/manual/4.0/browser.html#readonly-useragent",
          "content": "readonly userAgent\n类型：Property\n\n\n功能描述：获取浏览器 User-Agent，等价于 navigator.userAgent\n\n\n返回值：string 浏览器 User-Agent\n\n示例：原生 JavaScript  var result = window.browser.userAgent; // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n  }\n});\n\n"
        },
        {
          "title": "readonly name",
          "url": "/manual/4.0/browser.html#readonly-name",
          "content": "readonly name\n类型：Property\n\n\n功能描述：获取浏览器应用程序名称，等价于 navigator.appName\n\n\n返回值：string 浏览器应用程序名称\n\n示例：原生 JavaScript  var result = window.browser.name; // Netscape\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.name // Netscape\n  }\n});\n\n"
        },
        {
          "title": "readonly isMobile",
          "url": "/manual/4.0/browser.html#readonly-ismobile",
          "content": "readonly isMobile\n类型：Property\n\n\n功能描述：是否为移动设备，检测依据：User-Agent 中含有 Android、iPhone、iPod、Windows Phone、Mobile、Coolpad、mmp、SmartPhone、midp、wap、xoom、Symbian、J2ME、Blackberry、Wince 其中任意一个字符串\n\n\n返回值：boolean 是移动设备返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMobile\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMobile\n  }\n});\n\n"
        },
        {
          "title": "readonly isChrome",
          "url": "/manual/4.0/browser.html#readonly-ischrome",
          "content": "readonly isChrome\n类型：Property\n\n\n功能描述：是否为 Chrome 浏览器\n\n\n返回值：boolean 是 Chrome 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isChrome;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isChrome\n  }\n});\n\n"
        },
        {
          "title": "readonly isFirefox",
          "url": "/manual/4.0/browser.html#readonly-isfirefox",
          "content": "readonly isFirefox\n类型：Property\n\n\n功能描述：是否为 Firefox 浏览器\n\n\n返回值：boolean 是 Firefox 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isFirefox;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isFirefox\n  }\n});\n\n"
        },
        {
          "title": "readonly isMSIE",
          "url": "/manual/4.0/browser.html#readonly-ismsie",
          "content": "readonly isMSIE\n类型：Property\n\n\n功能描述：是否为 IE 浏览器\n\n\n返回值：boolean 是 IE 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMSIE;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMSIE\n  }\n});\n\n"
        },
        {
          "title": "readonly isOpera",
          "url": "/manual/4.0/browser.html#readonly-isopera",
          "content": "readonly isOpera\n类型：Property\n\n\n功能描述：是否为 Opera 浏览器\n\n\n返回值：boolean 是 Opera 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isOpera;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isOpera\n  }\n});\n\n"
        },
        {
          "title": "readonly isSafari",
          "url": "/manual/4.0/browser.html#readonly-issafari",
          "content": "readonly isSafari\n类型：Property\n\n\n功能描述：是否为 Safari 浏览器\n\n\n返回值：boolean 是 Safari 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isSafari;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isSafari\n  }\n});\n\n"
        },
        {
          "title": "readonly isNetscape",
          "url": "/manual/4.0/browser.html#readonly-isnetscape",
          "content": "readonly isNetscape\n类型：Property\n\n\n功能描述：是否为 Netscape 浏览器\n\n\n返回值：boolean 是 Netscape 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isNetscape;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isNetscape\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Location 参考手册",
      "content": "",
      "url": "/manual/4.0/location.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/4.0/location.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ngetParameters\n获取所有的请求参数及值\n\n\ngetParameter\n获取指定请求参数的值\n\n\n"
        },
        {
          "title": "getParameters()",
          "url": "/manual/4.0/location.html#getparameters",
          "content": "getParameters()\n类型：Function\n\n\n功能描述：获取所有的请求参数及值\n\n\n参数：无\n\n\n返回值：Record 当前请求 URL 中的所有的请求参数及值\n\n示例：原生 JavaScript  var result = location.getParameters();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Record = location.getParameters()\n  }\n});\n\n"
        },
        {
          "title": "getParameter(name: string)",
          "url": "/manual/4.0/location.html#getparametername-string",
          "content": "getParameter(name: string)\n类型：Function\n\n\n功能描述：获取指定请求参数的值\n\n\n参数：string 参数名称\n\n\n返回值：any 请求参数的值\n\n示例：原生 JavaScript  var result = location.getParameter(\"action\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = location.getParameter('action');\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "API",
      "content": "Buession Prototype API 包含以下目录：PrototypeTryOptionalArrayDateDocumentFunctionMathNumberObjectStringWindow",
      "url": "/manual/2.2/index.html",
      "children": []
    },
    {
      "title": "Prototype 参考手册",
      "content": "",
      "url": "/manual/2.2/prototype.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.2/prototype.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nversion\n获取 Buession Prototype 版本\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/2.2/prototype.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nemptyFunction\n执行一个空方法\n\n\nK\n返回参数传递的任意值\n\n\n"
        },
        {
          "title": "version",
          "url": "/manual/2.2/prototype.html#version",
          "content": "version\n类型：String\n\n\n功能描述：获取 Buession Prototype 版本\n\n\n返回值：Buession Prototype 版本\n\n示例：原生 JavaScript  var ver = Prototype.version;\n\nvue  \n    Prototype 版本：{Prototype.version}\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "emptyFunction()",
          "url": "/manual/2.2/prototype.html#emptyfunction",
          "content": "emptyFunction()\n类型：Function\n\n\n功能描述：执行一个空方法\n\n\n参数：无\n\n\n返回值：void\n\n示例：原生 JavaScript  Prototype.emptyFunction();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    Prototype.emptyFunction()\n  }\n});\n\n"
        },
        {
          "title": "K(x: any)",
          "url": "/manual/2.2/prototype.html#kx-any",
          "content": "K(x: any)\n类型：Function\n\n\n功能描述：返回参数传递的任意值\n\n\n参数：x - any 任意值\n\n\n返回值：any 参数传递的任意值\n\n示例：原生 JavaScript  var v = Prototype.K(object);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const v: any = Prototype.K(object)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Try 参考手册",
      "content": "",
      "url": "/manual/2.2/try.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/try.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nthese\n接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n"
        },
        {
          "title": "these(args: any[])",
          "url": "/manual/2.2/try.html#theseargs-any[]",
          "content": "these(args: any[])\n类型：Function\n\n\n功能描述：接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n参数：args any[] 一个或多个 function 作为参数\n\n\n返回值：any 任意函数参数执行结果\n\n示例：原生 JavaScript  var result = Try.these(function(){\n\n    },\n\n    function() {\n\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result:any = Try.these(function(){\n\n      },\n\n      function() {\n\n    })\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Optional 参考手册",
      "content": "Optional 类是一个可以为 null 或 undefined 的容器对象，如果值 value 存在则 isPresent() 方法会返回 true，调用 get() 方法会返回 value 的值。其设计思想，参考 java8 的 Optional使用方式，在构造函数中传入任意类型值；Optional 提供很多有用的方法，这样我们就不用显式进行 null 值和 undefined 的检测。",
      "url": "/manual/2.2/optional.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/optional.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nof\n返回一个指定 T 类型的值的 Optional 实例\n\n\nofNullable\n如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\nempty\n返回空的 Optional 实例\n\n\nget\n如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\norElse\n如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\nisPresent\n如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n  var optional = new Optional(any value);\n\n"
        },
        {
          "title": "static of(value: T)",
          "url": "/manual/2.2/optional.html#static-ofvalue-t",
          "content": "static of(value: T)\n类型：Function\n\n\n功能描述：返回一个指定 T 类型的值的 Optional 实例\n\n\n参数：value - any of T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例\n\n示例：原生 JavaScript  Optional.of(11);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(false)\n  }\n});\n\n"
        },
        {
          "title": "static ofNullable(value: T)",
          "url": "/manual/2.2/optional.html#static-ofnullablevalue-t",
          "content": "static ofNullable(value: T)\n类型：Function\n\n\n功能描述：如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\n参数：value - any as T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例，或空的 Optional 实例\n\n示例：原生 JavaScript  Optional.ofNullable('js');\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.ofNullable(11)\n  }\n});\n\n"
        },
        {
          "title": "static empty()",
          "url": "/manual/2.2/optional.html#static-empty",
          "content": "static empty()\n类型：Function\n\n\n功能描述：返回空的 Optional 实例\n\n\n参数：无\n\n\n返回值：Object as Optional 空的 Optional 实例\n\n示例：原生 JavaScript  Optional.empty();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: null Optional.empty()\n  }\n});\n\n"
        },
        {
          "title": "get()",
          "url": "/manual/2.2/optional.html#get",
          "content": "get()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\n参数：无\n\n\n返回值：any as T Optional 中包含这个值\n\n示例：原生 JavaScript  var optional = Optional.of(11);\n  var result = optional.get(); // 11\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.get() // 11\n  }\n});\n\n"
        },
        {
          "title": "orElse(other: T)",
          "url": "/manual/2.2/optional.html#orelseother-t",
          "content": "orElse(other: T)\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\n参数：other - any of T 任意类型的值\n\n\n返回值：any as T value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.orElse(\"abc\"); // abc\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(undefined)\n    const result = optional.orElse(false) // false\n  }\n});\n\n"
        },
        {
          "title": "isPresent()",
          "url": "/manual/2.2/optional.html#ispresent",
          "content": "isPresent()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n参数：无\n\n\n返回值：boolean value 不为 null 或 undefined，则返回 true；否则返回 false\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.isPresent(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.isPresent() // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Array 参考手册",
      "content": "",
      "url": "/manual/2.2/array.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/array.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisEmpty\n判断数组是否为空数组\n\n\nexists\n判断元素 item 是否在数组中\n\n\nfirst\n获取数组第一个元素\n\n\nlast\n获取数组最后一个元素\n\n\neach\n按顺序为数组中的每个元素调用一次函数\n\n\nsize\n获取数组大小\n\n\nmerge\n连接两个或多个数组\n\n\ncompact\n返回一个不包含 null/undefined 值元素的数组的新版本\n\n\nunique\n对数组的元素进行去重\n\n\nwithout\n返回不包括参数中任意一个指定值的数组\n\n\nclone\n克隆数组\n\n\nclear\n清空数组\n\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/2.2/array.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断数组是否为空数组\n\n\n参数：无\n\n\n返回值：boolean 数组为空，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = [].isEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['a', 'b', 'c'].isEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "exists(item: any)",
          "url": "/manual/2.2/array.html#existsitem-any",
          "content": "exists(item: any)\n类型：Function\n\n\n功能描述：判断元素 item 是否在数组中\n\n\n参数：item - any 待检测元素\n\n\n返回值：boolean 元素 item 是否在数组中返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = ['a', 'b'].exists('a'); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['1', '2'].exists(2) // false\n  }\n});\n\n"
        },
        {
          "title": "first()",
          "url": "/manual/2.2/array.html#first",
          "content": "first()\n类型：Function\n\n\n功能描述：获取数组第一个元素\n\n\n参数：无\n\n\n返回值：any 数组第一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].first(); // a\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].first() // 1\n  }\n});\n\n"
        },
        {
          "title": "last()",
          "url": "/manual/2.2/array.html#last",
          "content": "last()\n类型：Function\n\n\n功能描述：获取数组最后一个元素\n\n\n参数：无\n\n\n返回值：any 数组最后一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].last(); // b\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].last() // 2\n  }\n});\n\n"
        },
        {
          "title": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)",
          "url": "/manual/2.2/array.html#eachcallback-value-t,-index-number,-array-readonly-t[]-=>-void,-thisarg?-any",
          "content": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)\n类型：Function\n\n\n功能描述：按顺序为数组中的每个元素调用一次函数，forEach的别名\n\n\n参数：callback - (value: T, index: number, array: readonly T[]) => void as Function callback 为数组中的每个元素运行的函数，其中：value 为前元素的值，index 为当前元素的数组索引，array 为当前元素所属的数组对象\nany thisArg 可选。要传递给函数以用作其 \"this\" 值的值，如果此参数为空，则值 \"undefined\" 将作为其 \"this\" 值传递\n\n\n返回值：void\n\n示例：原生 JavaScript  ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n    })\n  }\n});\n\n"
        },
        {
          "title": "size()",
          "url": "/manual/2.2/array.html#size",
          "content": "size()\n类型：Function\n\n\n功能描述：获取数组大小\n\n\n参数：无\n\n\n返回值：number 数组大小\n\n示例：原生 JavaScript  var result = ['a', 'b'].size(); // 2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = [].size() // 0\n  }\n});\n\n"
        },
        {
          "title": "merge(...items: T[])",
          "url": "/manual/2.2/array.html#merge...items-t[]",
          "content": "merge(...items: T[])\n类型：Function\n\n\n功能描述：连接两个或多个数组\n\n\n参数：items - any as T 待连接的 T 类型的数组\n\n\n返回值：Array 已连接数组的副本\n\n示例：原生 JavaScript  var result = [1, 3].merge(2, 4); // [1, 3, 2, 4]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    console result: string[] = ['a', 'b'].merge('c', 'd') // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "compact()",
          "url": "/manual/2.2/array.html#compact",
          "content": "compact()\n类型：Function\n\n\n功能描述：返回一个不包含 null/undefined 值元素的数组的新版本\n\n\n参数：无\n\n\n返回值：Array 不包含 null/undefined 值元素的数组的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', null, 'c', 'd'].compact(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', null, 'c', 'd', undefined].compact() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "unique()",
          "url": "/manual/2.2/array.html#unique",
          "content": "unique()\n类型：Function\n\n\n功能描述：对数组的元素进行去重\n\n\n参数：无\n\n\n返回值：Array 数组元素进行去重后的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].unique(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'c', 'd'].unique() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "without(values: T[])",
          "url": "/manual/2.2/array.html#withoutvalues-t[]",
          "content": "without(values: T[])\n类型：Function\n\n\n功能描述：返回不包括参数中任意一个指定值的数组\n\n\n参数：values - any as T[] 排除值数组\n\n\n返回值：Array 不包括参数中任意一个指定值的数组\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b'); // [c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b') // [c, d]\n  }\n});\n\n"
        },
        {
          "title": "clone()",
          "url": "/manual/2.2/array.html#clone",
          "content": "clone()\n类型：Function\n\n\n功能描述：克隆数组\n\n\n参数：无\n\n\n返回值：Array 克隆结果\n\n示例：原生 JavaScript  var result = ['a', 'b'].clone(); // [a, b]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clone() // [a, b]\n  }\n});\n\n"
        },
        {
          "title": "clear()",
          "url": "/manual/2.2/array.html#clear",
          "content": "clear()\n类型：Function\n\n\n功能描述：清空数组\n\n\n参数：无\n\n\n返回值：Array 空数组\n\n示例：原生 JavaScript  var result = ['a', 'b'].clear(); // []\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clear() // []\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Date 参考手册",
      "content": "",
      "url": "/manual/2.2/date.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/date.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisLeapYear\n判断是否为闰年\n\n\ngetSeason\n获取季节\n\n\ngetDayOfYear\n获取年份中的第几天\n\n\ngetDaysOfYear\n获取年份总天数\n\n\nformat\n将日期时间格式化为字符串\n\n\n"
        },
        {
          "title": "isLeapYear()",
          "url": "/manual/2.2/date.html#isleapyear",
          "content": "isLeapYear()\n类型：Function\n\n\n功能描述：判断是否为闰年\n\n\n参数：无\n\n\n返回值：boolean 是闰年，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2000-04-11').isLeapYear() // false\n  }\n});\n\n"
        },
        {
          "title": "getSeason()",
          "url": "/manual/2.2/date.html#getseason",
          "content": "getSeason()\n类型：Function\n\n\n功能描述：获取季节\n\n\n参数：无\n\n\n返回值：number 依次返回 0 至 3 的整数，表示春季、夏季、秋季、冬季\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // 0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2022-01-11').isLeapYear() // 3\n  }\n});\n\n"
        },
        {
          "title": "getDayOfYear()",
          "url": "/manual/2.2/date.html#getdayofyear",
          "content": "getDayOfYear()\n类型：Function\n\n\n功能描述：获取年份中的第几天\n\n\n参数：无\n\n\n返回值：number 年份中的第几天\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDayOfYear(); // 42\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2022-03-01').getDayOfYear(); // 61\n  }\n});\n\n"
        },
        {
          "title": "getDaysOfYear()",
          "url": "/manual/2.2/date.html#getdaysofyear",
          "content": "getDaysOfYear()\n类型：Function\n\n\n功能描述：获取年份总天数\n\n\n参数：无\n\n\n返回值：number 年份总天数\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDaysOfYear(); // 365\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2020-02-11').getDaysOfYear() // 366\n  }\n});\n\n"
        },
        {
          "title": "format(format: string)",
          "url": "/manual/2.2/date.html#formatformat-string",
          "content": "format(format: string)\n类型：Function\n\n\n功能描述：将日期时间格式化为字符串\n\n\n参数：format - String format 格式字符串\n  y - 年\n\n  n - 季度（1 到 4）\n\n  N - 季度名称\n\n  A - 季度中文名称\n\n  M - 月\n\n  f - 月（Jan 到 Dec）\n\n  F - 月（January 到 December）\n\n  C - 月，中文名称\n\n  d - 日\n\n  Y - 年份中的第几天（0 到 365）\n\n  T - 月份有几天（28 到 30）\n\n  j - 每月天数后面的英文后缀（st，nd，rd 或者 th）\n\n  e - 星期几，数字表示，0（表示星期天）到 6（表示星期六）\n\n  E - 星期几，数字表示，1（表示星期一）到 7（表示星期天）\n\n  l - 星期几，文本表示，3 个字母（Mon 到 Sun）\n\n  L - 星期几，完整的文本格式（Sunday 到 Saturday）\n\n  w - 星期几，中文名称\n\n  W - 一月中第几个星期几\n\n  i - 月份中的第几周\n\n  o - 年份中的第几周\n\n  h - 小时(1~12)\n\n  H - 小时(0~23)\n\n  m - 分\n\n  s - 秒\n\n  S - 毫秒\n\n  a - 上午/下午标记\n\n  O - 与格林威治时间相差的小时数\n\n  P - 与格林威治时间相差的小时数，小时和分钟之间有冒号分隔\n  \n  Z - 时区\n\n\n\n返回值：string 格式化后的日期时间\n\n示例：原生 JavaScript  var result = new Date('2022-01-11').format(\"f-dd,yyyy\"); // Jan-11,2022\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Date('2022-01-11').format(\"f-dd,yy\"); // Jan-11,22\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Document 参考手册",
      "content": "",
      "url": "/manual/2.2/document.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.2/document.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nfullScreenEnabled\n检测当前浏览器是否支持全屏模式\n\n\nfullScreenElement\n检测当前文档中正在以全屏模式显示的 Element 节点\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nhttpCookie\nCookie 对象操作\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/2.2/document.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrequestFullscreen\n请求进入全屏模式\n\n\nexitFullscreen\n退出全屏模式\n\n\n"
        },
        {
          "title": "readonly fullScreen",
          "url": "/manual/2.2/document.html#readonly-fullscreen",
          "content": "readonly fullScreen\n类型：Property\n\n\n功能描述：检测当前文档是否全屏\n\n\n参数：无\n\n\n返回值：boolean 当前文档是否全屏，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreen;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreen;\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenEnabled",
          "url": "/manual/2.2/document.html#readonly-fullscreenenabled",
          "content": "readonly fullScreenEnabled\n类型：Property\n\n\n功能描述：检测当前浏览器是否支持全屏模式\n\n\n返回值：boolean 当前浏览器是否支持全屏模式返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenEnabled;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenEnabled\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenElement",
          "url": "/manual/2.2/document.html#readonly-fullscreenelement",
          "content": "readonly fullScreenElement\n类型：Property\n\n\n功能描述：检测当前文档中正在以全屏模式显示的 Element 节点\n\n\n返回值：boolean 当前文档中正在以全屏模式显示的 Element 节点，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenElement;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenElement\n  }\n});\n\n"
        },
        {
          "title": "requestFullscreen()",
          "url": "/manual/2.2/document.html#requestfullscreen",
          "content": "requestFullscreen()\n类型：Function\n\n\n功能描述：请求进入全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.requestFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.requestFullscreen()\n  }\n});\n\n"
        },
        {
          "title": "exitFullscreen()",
          "url": "/manual/2.2/document.html#exitfullscreen",
          "content": "exitFullscreen()\n类型：Function\n\n\n功能描述：退出全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.exitFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.exitFullscreen()\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Cookie 参考手册",
      "content": "",
      "url": "/manual/2.2/cookie.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/cookie.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\n[set](cookie.html#setname-string,-value-string-\n-null-\n\n\nget\n获取 Cookie\n\n\ndelete\n删除 Cookie\n\n\n"
        },
        {
          "title": "set(name: string, value: string | null | undefined, options?: CookieOptions)",
          "url": "/manual/2.2/cookie.html#setname-string,-value-string-|-null-|-undefined,-options?-cookieoptions",
          "content": "set(name: string, value: string | null | undefined, options?: CookieOptions)\n类型：Function\n\n\n功能描述：设置 Cookie\n\n\n参数：name - string Cookie 名称\n           value - string | null | undefined Cookie 值\n           options - CookieOptions Cookie 选项\n\n\n返回值：string Cookie 字符串\n\n示例：原生 JavaScript  var result = document.httpCookie.set(\"name\", \"测试\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.set(\"name\", \"测试\", {path: '/', domain: '*.test.com'})\n  }\n});\n\n"
        },
        {
          "title": "get(name: string)",
          "url": "/manual/2.2/cookie.html#getname-string",
          "content": "get(name: string)\n类型：Function\n\n\n功能描述：获取 Cookie 值\n\n\n参数：name - string Cookie 名称\n\n\n返回值：string | null Cookie 值\n\n示例：原生 JavaScript  var result = document.httpCookie.get(\"name\")\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.get(\"name\")\n  }\n});\n\n"
        },
        {
          "title": "delete(name: string, options?: CookieOptions)",
          "url": "/manual/2.2/cookie.html#deletename-string,-options?-cookieoptions",
          "content": "delete(name: string, options?: CookieOptions)\n类型：Function\n\n\n功能描述：删除 Cookie\n\n\n参数：name - string Cookie 名称\n           options - CookieOptions Cookie 选项\n\n\n返回值：无\n\n示例：原生 JavaScript  var result = document.httpCookie.delete(\"name\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    document.httpCookie.delete(\"name\", \"测试\", {domain: '*.test.com'})\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/2.2/function.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/function.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nargumentNames\n获取函数参数名称\n\n\ndelay\n延时执行函数\n\n\n"
        },
        {
          "title": "argumentNames(...args: any)",
          "url": "/manual/2.2/function.html#argumentnames...args-any",
          "content": "argumentNames(...args: any)\n类型：Function\n\n\n功能描述：获取函数参数名称\n\n\n参数：args - any 1个或多个任意类型的可变参数可变参数\n\n\n返回值：string[] | null 函数参数名称列表\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n\n  }\n  var result = fn.argumentNames();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: String) {\n\n    }\n    const result: string[] | null = fn.argumentNames()\n  }\n});\n\n"
        },
        {
          "title": "delay(timeout: number)",
          "url": "/manual/2.2/function.html#delaytimeout-number",
          "content": "delay(timeout: number)\n类型：Function\n\n\n功能描述：延时执行函数\n\n\n参数：timeout - number 延时时间（单位：秒）\n\n\n返回值：any 函数返回值\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n    return a + b + c;\n  }\n  var result = fn.delay(3)\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: number) {\n      return a ? b : c\n    }\n    const result: any = fn.delay(3)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/2.2/math.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/math.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrand\n延时执行函数\n\n\n"
        },
        {
          "title": "rand(min: number, max?: number)",
          "url": "/manual/2.2/math.html#randmin-number,-max?-number",
          "content": "rand(min: number, max?: number)\n类型：Function\n\n\n功能描述：产生一个指定范围内的随机数\n\n\n参数：min - number 返回的最低值\n           max - number 返回的最高值\n\n\n返回值：number 随机数\n\n示例：原生 JavaScript  var result = Math.rand(1, 5); //\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = Math.rand(1, 5)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Number 参考手册",
      "content": "",
      "url": "/manual/2.2/number.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/number.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntoPaddedString\n延时执行函数\n\n\nisOdd\n判断数字是否为奇数\n\n\nisEven\n判断数字是否为偶数\n\n\nisBetween\n判断一个数字是否在另两个数字之间\n\n\n"
        },
        {
          "title": "toPaddedString(length: number, radix: number)",
          "url": "/manual/2.2/number.html#topaddedstringlength-number,-radix-number",
          "content": "toPaddedString(length: number, radix: number)\n类型：Function\n\n\n功能描述：数字填充\n\n\n参数：length - number 长度\n           radix - number 进制\n\n\n返回值：string 填充后的字符串数字\n\n示例：原生 JavaScript  var result = new Number(5).toPaddedString(12, 2); // 0000000000101\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Number(5).toPaddedString(12, 8) // 0000000000005\n  }\n});\n\n"
        },
        {
          "title": "isOdd(num: number)",
          "url": "/manual/2.2/number.html#isoddnum-number",
          "content": "isOdd(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为奇数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为奇数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isOdd(255); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // false\n  }\n});\n\n"
        },
        {
          "title": "isEven(num: number)",
          "url": "/manual/2.2/number.html#isevennum-number",
          "content": "isEven(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为偶数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为偶数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isEven(255); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // true\n  }\n});\n\n"
        },
        {
          "title": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)",
          "url": "/manual/2.2/number.html#isbetweennum-number,-min-number,-max-number,-match?-boolean-|-undefined",
          "content": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)\n类型：Function\n\n\n功能描述：判断一个数字是否在另两个数字之间\n\n\n参数：num - number 需要判断的数字\n           min - number 最小值\n           max - number 最大值\n           match - boolean | undefined 是否包含最小值或最大值\n\n\n返回值：boolean 数字是否在另两个数字之间，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isBetween(4, 3, 5); // true\n  var result = Number.isBetween(4, 4, 5); // false\n  var result = Number.isBetween(4, 4, 5, true); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isBetween(4, 3, 5) // true\n    const result: boolean = Number.isBetween(4, 4, 5) // false\n    const result: boolean = Number.isBetween(4, 4, 5, true) // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Object 参考手册",
      "content": "",
      "url": "/manual/2.2/object.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/object.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntype\n获取对象数据类型\n\n\nrawType\n获取对象原始数据类型\n\n\nisObject\n判断对象是否为 object 类型\n\n\nisPlainObject\n判断对象是否为简单 object 类型\n\n\nisMap\n判断对象是否为 Map 类型\n\n\nisSet\n判断对象是否为 Set 类型\n\n\nisSymbol\n判断对象是否为 Symbol\n\n\nisPromise\n判断对象是否为 Promise\n\n\nisPrimitive\n判断对象是否为原始类型\n\n\nisFunction\n判断对象是否为函数\n\n\nisArray\n判断对象是否为数组\n\n\nisString\n判断对象是否为字符串对象\n\n\nisNumber\n判断对象是否为数字对象\n\n\nisBoolean\n判断对象是否为布尔对象\n\n\nisRegExp\n判断对象是否为正则对象\n\n\nisFile\n判断对象是否为文件对象\n\n\nisWindow\n判断对象是否为 windows 对象\n\n\nisElement\n判断对象是否为 Element\n\n\nisEvent\n判断对象是否为事件对象\n\n\nisNull\n判断对象是否为 null 对象\n\n\nisUndefined\n判断对象是否为未定义\n\n\nisUndefinedOrNull\n判断对象是否为未定义或 null\n\n\nequals\n深度判断两个对象是否相等\n\n\nclone\n克隆对象\n\n\nomit\n克隆对象，但支持删除指定属性\n\n\n"
        },
        {
          "title": "type(obj: any)",
          "url": "/manual/2.2/object.html#typeobj-any",
          "content": "type(obj: any)\n类型：Function\n\n\n功能描述：获取对象数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 对象数据类型\n\n示例：原生 JavaScript  var result = Object.type(true); // boolean\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // number\n  }\n});\n\n"
        },
        {
          "title": "rawType(obj: any)",
          "url": "/manual/2.2/object.html#rawtypeobj-any",
          "content": "rawType(obj: any)\n类型：Function\n\n\n功能描述：获取对象原始数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 原始数据类型\n\n示例：原生 JavaScript  var result = Object.type(\"4.4\"); // String\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // Number\n  }\n});\n\n"
        },
        {
          "title": "isObject(obj: any)",
          "url": "/manual/2.2/object.html#isobjectobj-any",
          "content": "isObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isObject(\"1\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isObject(new String(\"1\")) // true\n  }\n});\n\n"
        },
        {
          "title": "isPlainObject(obj: any)",
          "url": "/manual/2.2/object.html#isplainobjectobj-any",
          "content": "isPlainObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为简单 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为简单 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPlainObject(new String(\"1\")); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPlainObject({\"a\":\"A\"}) // true\n  }\n});\n\n"
        },
        {
          "title": "isMap(obj: any)",
          "url": "/manual/2.2/object.html#ismapobj-any",
          "content": "isMap(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Map 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isMap(new Map()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isMap({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSet(obj: any)",
          "url": "/manual/2.2/object.html#issetobj-any",
          "content": "isSet(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Set 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSet(new Set()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSet({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSymbol(obj: any)",
          "url": "/manual/2.2/object.html#issymbolobj-any",
          "content": "isSymbol(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Symbol\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Symbol 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSymbol(Symbol('a')); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSymbol({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPromise(obj: any)",
          "url": "/manual/2.2/object.html#ispromiseobj-any",
          "content": "isPromise(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Promise\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Promise 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPromise(new Promise(function(){})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPrimitive(obj: any)",
          "url": "/manual/2.2/object.html#isprimitiveobj-any",
          "content": "isPrimitive(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为原始类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为原始类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPrimitive(11); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isFunction(obj: any)",
          "url": "/manual/2.2/object.html#isfunctionobj-any",
          "content": "isFunction(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为函数\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为函数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFunction(location.href); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isFunction(\"a\".replace) // true\n  }\n});\n\n"
        },
        {
          "title": "isArray(obj: any)",
          "url": "/manual/2.2/object.html#isarrayobj-any",
          "content": "isArray(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数组\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数组返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isArray([1, 2]); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isArray({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isString(obj: any)",
          "url": "/manual/2.2/object.html#isstringobj-any",
          "content": "isString(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为字符串对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为字符串返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isString(1); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isString(\"1\") // true\n  }\n});\n\n"
        },
        {
          "title": "isNumber(obj: any)",
          "url": "/manual/2.2/object.html#isnumberobj-any",
          "content": "isNumber(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数字对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数字对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNumber(1.0); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNumber(\"1.0\") // false\n  }\n});\n\n"
        },
        {
          "title": "isBoolean(obj: any)",
          "url": "/manual/2.2/object.html#isbooleanobj-any",
          "content": "isBoolean(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为布尔对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为布尔对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isBoolean(false); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isBoolean(1) // false\n  }\n});\n\n"
        },
        {
          "title": "isRegExp(obj: any)",
          "url": "/manual/2.2/object.html#isregexpobj-any",
          "content": "isRegExp(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为正则对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为正则对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isRegExp(/^[a-z]$/); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isRegExp('/^[a-z]$/') // false\n  }\n});\n\n"
        },
        {
          "title": "isFile(obj: any)",
          "url": "/manual/2.2/object.html#isfileobj-any",
          "content": "isFile(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为文件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为文件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFile(new File(['text1', 'text2'], 'test.txt', {type: 'text/plain'})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = bject.isFile(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isWindow(obj: any)",
          "url": "/manual/2.2/object.html#iswindowobj-any",
          "content": "isWindow(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 windows 对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 windows 对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isWindow(window); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isWindow(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isElement(obj: any)",
          "url": "/manual/2.2/object.html#iselementobj-any",
          "content": "isElement(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Element\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 Element 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isElement(document); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isElement(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "isEvent(obj: any)",
          "url": "/manual/2.2/object.html#iseventobj-any",
          "content": "isEvent(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为事件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为事件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isEvent(document.onclick); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isEvent(document.onclick) // false\n  }\n});\n\n"
        },
        {
          "title": "isNull(obj: any)",
          "url": "/manual/2.2/object.html#isnullobj-any",
          "content": "isNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNull(null); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNull(\"A\") // false\n  }\n});\n\n"
        },
        {
          "title": "isUndefined(obj: any)",
          "url": "/manual/2.2/object.html#isundefinedobj-any",
          "content": "isUndefined(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefined(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefined(b) // true\n  }\n});\n\n"
        },
        {
          "title": "isUndefinedOrNull(obj: any)",
          "url": "/manual/2.2/object.html#isundefinedornullobj-any",
          "content": "isUndefinedOrNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义或 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义或 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefinedOrNull(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefinedOrNull(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "equals(obj1: any, obj2: any)",
          "url": "/manual/2.2/object.html#equalsobj1-any,-obj2-any",
          "content": "equals(obj1: any, obj2: any)\n类型：Function\n\n\n功能描述：深度判断两个对象是否相等\n\n\n参数：obj1 - any 一个对象\n           obj2 - any 用于和 obj1 比较的对象\n\n\n返回值：boolean 当两个对象相等时，返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = Object.equals(\"a\", \"A\"); // false\n  var result = Object.equals(\"a\", \"a\"); // true\n  var result = Object.equals(1, 1.0); // true\n  var result = Object.equals([1], [1.0]); // true\n  var result = Object.equals([1], [1.0, 1.1]); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  const result: boolean = Object.equals(\"a\", \"A\") // false\n  const result: boolean = Object.equals(\"a\", \"a\") // true\n  const result: boolean = Object.equals(1, 1.0) // true\n  const result: boolean = Object.equals([1], [1.0]) // true\n  const result: boolean = Object.equals([1], [1.0, 1.1]) // false\n  }\n});\n\n"
        },
        {
          "title": "clone(obj: any)",
          "url": "/manual/2.2/object.html#cloneobj-any",
          "content": "clone(obj: any)\n类型：Function\n\n\n功能描述：克隆对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var result = Object.clone({\"a\": \"A\"}); // {\"a\": \"A\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = Object.clone({\"a\":\"A\"}) // {\"a\": \"A\"}\n  }\n});\n\n"
        },
        {
          "title": "omit(obj: T, ...fields: K[])",
          "url": "/manual/2.2/object.html#omit<t-extends-object,-k-extends-keyof-t>obj-t,-...fields-k[]",
          "content": "omit(obj: T, ...fields: K[])\n类型：Function\n\n\n功能描述：克隆对象，但支持删除指定属性\n\n\n参数：obj - object 任意对象\n           fields - K[] 需要删除的属性\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var source = {\n    id: 1,\n    name: 'buession',\n    year: 2023\n  };\n  var result = Object.omit(source, \"id\", \"year\"); // {\"name\": \"buession\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  const source = {\n    id: 1,\n    name: 'buession',\n    year: 2023\n  };\n  const result = Object.omit(source, \"id\", \"year\") // {\"name\": \"buession\"}\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "String 参考手册",
      "content": "",
      "url": "/manual/2.2/string.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/string.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nexists\n判断字符串是否存在\n\n\nequals\n判断字符串是否相等\n\n\nequalsIgnoreCase\n判断字符串是否相等，不考虑大小写\n\n\nisEmpty\n判断是否为空字符串\n\n\nisNotEmpty\n判断是否不为空字符串\n\n\nisBlank\n判断是否为空白字符串\n\n\nrepeat\n重复一个字符串\n\n\nleft\n截取字符串左边边指定数目的字符串\n\n\nright\n截取字符串右边指定数目的字符串\n\n\ntruncation\n截取字符串，超出部分用 truncation 替代\n\n\nltrim\n删除字符串开头的空白字符\n\n\nrtrim\n删除字符串结尾的空白字符\n\n\nstartsWith\n判断字符串是否以给定的字符串开头\n\n\nendsWith\n判断字符串是否以给定的字符串结尾\n\n\nlcfirst\n首字母小写\n\n\nucfirst\n首字母大写\n\n\nescapeHTML\n将 HTML 编码\n\n\nunescapeHTML\n将 HTML 实体字符解码\n\n\nstripTag\n删除 HTML 标签\n\n\nstripTags\n批量删除 HTML 标签\n\n\nstripScripts\n删除 script 标签\n\n\ntoArray\n将字符串转换为数组\n\n\ninspect\n返回一个数组的字符串表示形式\n\n\nhashCode\n获取字符串 hash code\n\n\nrandom\n生成随机字符串\n\n\n"
        },
        {
          "title": "exists(str: string)",
          "url": "/manual/2.2/string.html#existsstr-string",
          "content": "exists(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否存在\n\n\n参数：str - string 子字符串\n\n\n返回值：boolean 子字符串存在返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"ABC\".exists(\"A\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"ABC\".exists(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equals(str: string | undefined | null)",
          "url": "/manual/2.2/string.html#equalsstr-string-|-undefined-|-null",
          "content": "equals(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equals(new String(\"A\")); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"A\".equals(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equalsIgnoreCase(str: string | undefined | null)",
          "url": "/manual/2.2/string.html#equalsignorecasestr-string-|-undefined-|-null",
          "content": "equalsIgnoreCase(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等，不考虑大小写\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equalsIgnoreCase(\"a\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"a\").equalsIgnoreCase(\"1\") // false\n  }\n});\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/2.2/string.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断是否为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串为空，即长度为 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isEmpty(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isEmpty() // true\n  }\n});\n\n"
        },
        {
          "title": "isNotEmpty()",
          "url": "/manual/2.2/string.html#isnotempty",
          "content": "isNotEmpty()\n类型：Function\n\n\n功能描述：判断是否不为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串不为空，即长度大于 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isNotEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isNotEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "isBlank()",
          "url": "/manual/2.2/string.html#isblank",
          "content": "isBlank()\n类型：Function\n\n\n功能描述：判断是否为空白字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串全为空白字符串（即：空格、回车、Tag 制表位、非打印字符）返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isBlank(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\\t\\n\").isBlank() // true\n  }\n});\n\n"
        },
        {
          "title": "repeat(count: number)",
          "url": "/manual/2.2/string.html#repeatcount-number",
          "content": "repeat(count: number)\n类型：Function\n\n\n功能描述：重复一个字符串\n\n\n参数：count - number 重复次数\n\n\n返回值：string 重复后的字符串\n\n示例：原生 JavaScript  var result = \"A\".repeat(3); // AAA\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".repeat(3) // AbcAbcAbc\n  }\n});\n\n"
        },
        {
          "title": "left(length: number)",
          "url": "/manual/2.2/string.html#leftlength-number",
          "content": "left(length: number)\n类型：Function\n\n\n功能描述：截取字符串左边边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".left(1); // A\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".left(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "right(length: number)",
          "url": "/manual/2.2/string.html#rightlength-number",
          "content": "right(length: number)\n类型：Function\n\n\n功能描述：截截取字符串右边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".right(1); // c\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".right(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "truncation(length: number, truncation: string)",
          "url": "/manual/2.2/string.html#truncationlength-number,-truncation-string",
          "content": "truncation(length: number, truncation: string)\n类型：Function\n\n\n功能描述：截取字符串，超出部分用 truncation 替代\n\n\n参数：length - number 截取长度\n\n             truncation - string 替换字符串返回值：string 截取后的字符串；实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length\n示例：原生 JavaScript  var result = \"Abc\".truncation(1, \"...\"); // A...\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".truncation(6, \"...\") // Abc\n  }\n});\n\n"
        },
        {
          "title": "ltrim()",
          "url": "/manual/2.2/string.html#ltrim",
          "content": "ltrim()\n类型：Function\n\n\n功能描述：删除字符串开头的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最左边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".ltrim(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").ltrim() // \"Abc \"\n  }\n});\n\n"
        },
        {
          "title": "rtrim()",
          "url": "/manual/2.2/string.html#rtrim",
          "content": "rtrim()\n类型：Function\n\n\n功能描述：删除字符串结尾的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最右边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".rtrim(); // \" Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").rtrim() // \" Abc\"\n  }\n});\n\n"
        },
        {
          "title": "startsWith(str: string)",
          "url": "/manual/2.2/string.html#startswithstr-string",
          "content": "startsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串开头\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串开头返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".startsWith(\"a\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").startsWith(\"a\") // true\n  }\n});\n\n"
        },
        {
          "title": "endsWith(str: string)",
          "url": "/manual/2.2/string.html#endswithstr-string",
          "content": "endsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串结尾\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串结尾返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".endsWith(\"C\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").endsWith(\"c\") // true\n  }\n});\n\n"
        },
        {
          "title": "lcfirst()",
          "url": "/manual/2.2/string.html#lcfirst",
          "content": "lcfirst()\n类型：Function\n\n\n功能描述：首字母小写\n\n\n参数：无\n\n\n返回值：string 首字母小写后的字符串\n\n示例：原生 JavaScript  var result = \"Abc\".lcfirst(); // \"abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"abc\"\n  }\n});\n\n"
        },
        {
          "title": "ucfirst()",
          "url": "/manual/2.2/string.html#ucfirst",
          "content": "ucfirst()\n类型：Function\n\n\n功能描述：首字母大写\n\n\n参数：无\n\n\n返回值：string 首字母大写后的字符串\n\n示例：原生 JavaScript  var result = \"abc\".ucfirst(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"Abc\"\n  }\n});\n\n"
        },
        {
          "title": "escapeHTML()",
          "url": "/manual/2.2/string.html#escapehtml",
          "content": "escapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 编码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 编码后的字符串\n\n示例：原生 JavaScript  var result = \"test\".escapeHTML(); // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"test\").lcfirst() // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n  }\n});\n\n"
        },
        {
          "title": "unescapeHTML()",
          "url": "/manual/2.2/string.html#unescapehtml",
          "content": "unescapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 实体字符解码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 解码后的字符串\n\n示例：原生 JavaScript  var result = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML() // test\n  }\n});\n\n"
        },
        {
          "title": "stripTag(tag: string)",
          "url": "/manual/2.2/string.html#striptagtag-string",
          "content": "stripTag(tag: string)\n类型：Function\n\n\n功能描述：删除 HTML 标签\n\n\n参数：tag - string 待删除标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"test\".stripTag(\"a\"); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"test\".stripTag(\"a\") // test\n  }\n});\n\n"
        },
        {
          "title": "stripTags(tag: string)",
          "url": "/manual/2.2/string.html#striptagstag-string",
          "content": "stripTags(tag: string)\n类型：Function\n\n\n功能描述：批量删除 HTML 标签\n\n\n参数：tag - string[] | string 删除指定的标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"testEM\".stripTags([\"a\", \"i\"]); // testEM\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"testEM\".stripTags([\"a\", \"i\"]) // testEM\n  }\n});\n\n"
        },
        {
          "title": "stripScripts()",
          "url": "/manual/2.2/string.html#stripscripts",
          "content": "stripScripts()\n类型：Function\n\n\n功能描述：删除 script 标签\n\n\n参数：无\n\n\n返回值：string 删除 script 标签后的字符串\n\n示例：原生 JavaScript  var result = 'alert(\"test\");test'.stripScripts(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = 'alert(\"test\");test'.stripScripts() // \n"
        },
        {
          "title": "toArray(delimiter: string)",
          "url": "/manual/2.2/string.html#toarraydelimiter-string",
          "content": "toArray(delimiter: string)\n类型：Function\n\n\n功能描述：将字符串转换为数组\n\n\n参数：delimiter - string 分隔字符\n\n\n返回值：string[] 字符串数组\n\n示例：原生 JavaScript  var result = \"a|b|c\".toArray('|'); // [ \"a\", \"b\", \"c\" ]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = \"a|b||c\".toArray('||') // [ \"a|b\", \"c\" ]\n  }\n});\n\n"
        },
        {
          "title": "inspect(useDoubleQuotes: boolean)",
          "url": "/manual/2.2/string.html#inspectusedoublequotes-boolean",
          "content": "inspect(useDoubleQuotes: boolean)\n类型：Function\n\n\n功能描述：返回一个数组的字符串表示形式\n\n\n参数：useDoubleQuotes - boolean 是否使用双引号引住\n\n\n返回值：string 数组的字符串表示形式\n\n示例：原生 JavaScript  var result = \"a|b|c\".inspect(true); // \\\"a|b|c\\\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"a|b|c\".inspect(false) // 'a|b|c'\n  }\n});\n\n"
        },
        {
          "title": "hashCode()",
          "url": "/manual/2.2/string.html#hashcode",
          "content": "hashCode()\n类型：Function\n\n\n功能描述：获取字符串 hash code\n\n\n参数：无\n\n\n返回值：number 字符串的 hash code\n\n示例：原生 JavaScript  var result = \"abc\".hashCode(); // 96354\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = \"abcABC\".hashCode() // 2870546592\n  }\n});\n\n"
        },
        {
          "title": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)",
          "url": "/manual/2.2/string.html#randomlength-number,-type?-randomtype-=-\"numeric\"-|-\"letter\"-|-\"letter_numeric\"-|-\"chinese\"-|-undefined",
          "content": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)\n类型：Function\n\n\n功能描述：生成随机字符串\n\n\n参数：length - number 生成字符串的长度\n\n             type - NUMERIC | LETTER | LETTER_NUMERIC | CHINESE | undefined 生成类型，可选参数，当未指定时为 LETTER_NUMERIC    NUMERIC      - 数字随机字符串\n    LETTER       - 英文随机字符串\n\n    LETTER_NUMERIC - 英文数字混合随机字符串\n\n    CHINESE      - 中文随机字符串\n返回值：string 随机字符串\n示例：原生 JavaScript  var result = String.random(6); // 1Diim2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = String.random(6, \"NUMERIC\") // 881773\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Window 参考手册",
      "content": "",
      "url": "/manual/2.2/window.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.2/window.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nbrowser\n浏览器信息对象\n\n\nlocation\nLocation 对象\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/2.2/window.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ncopy\n将字符串复制到剪贴板\n\n\n"
        },
        {
          "title": "copy(str: string)",
          "url": "/manual/2.2/window.html#copystr-string",
          "content": "copy(str: string)\n类型：Function\n\n\n功能描述：将字符串复制到剪贴板\n\n\n参数：str - string 字符串\n\n\n返回值：无\n\n示例：原生 JavaScript  window.copy(\"这是要复制的字符串\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    window.copy(\"这是要复制的字符串\")\n  }\n});\n\n"
        },
        {
          "title": "Browser",
          "url": "/manual/2.2/window.html#browser",
          "content": "Browser"
        },
        {
          "title": "Location",
          "url": "/manual/2.2/window.html#location",
          "content": "Location"
        }
      ]
    },
    {
      "title": "HttpCookie 参考手册",
      "content": "",
      "url": "/manual/2.2/browser.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.2/browser.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nuserAgent\n获取浏览器 User-Agent\n\n\nname\n获取浏览器应用程序名称\n\n\nisMobile\n是否为移动设备\n\n\nisChrome\n是否为 Chrome 浏览器\n\n\nisFirefox\n是否为 Firefox 浏览器\n\n\nisMozilla\n是否为 Mozilla 浏览器\n\n\nisMSIE\n是否为 IE 浏览器\n\n\nisOpera\n是否为 Opera 浏览器\n\n\nisSafari\n是否为 Safari 浏览器\n\n\nisNetscape\n是否为 Netscape 浏览器\n\n\n"
        },
        {
          "title": "readonly userAgent",
          "url": "/manual/2.2/browser.html#readonly-useragent",
          "content": "readonly userAgent\n类型：Property\n\n\n功能描述：获取浏览器 User-Agent，等价于 navigator.userAgent\n\n\n返回值：string 浏览器 User-Agent\n\n示例：原生 JavaScript  var result = window.browser.userAgent; // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n  }\n});\n\n"
        },
        {
          "title": "readonly name",
          "url": "/manual/2.2/browser.html#readonly-name",
          "content": "readonly name\n类型：Property\n\n\n功能描述：获取浏览器应用程序名称，等价于 navigator.appName\n\n\n返回值：string 浏览器应用程序名称\n\n示例：原生 JavaScript  var result = window.browser.name; // Netscape\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.name // Netscape\n  }\n});\n\n"
        },
        {
          "title": "readonly isMobile",
          "url": "/manual/2.2/browser.html#readonly-ismobile",
          "content": "readonly isMobile\n类型：Property\n\n\n功能描述：是否为移动设备，检测依据：User-Agent 中含有 Android、iPhone、iPod、Windows Phone、Mobile、Coolpad、mmp、SmartPhone、midp、wap、xoom、Symbian、J2ME、Blackberry、Wince 其中任意一个字符串\n\n\n返回值：boolean 是移动设备返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMobile\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMobile\n  }\n});\n\n"
        },
        {
          "title": "readonly isChrome",
          "url": "/manual/2.2/browser.html#readonly-ischrome",
          "content": "readonly isChrome\n类型：Property\n\n\n功能描述：是否为 Chrome 浏览器\n\n\n返回值：boolean 是 Chrome 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isChrome;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isChrome\n  }\n});\n\n"
        },
        {
          "title": "readonly isFirefox",
          "url": "/manual/2.2/browser.html#readonly-isfirefox",
          "content": "readonly isFirefox\n类型：Property\n\n\n功能描述：是否为 Firefox 浏览器\n\n\n返回值：boolean 是 Firefox 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isFirefox;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isFirefox\n  }\n});\n\n"
        },
        {
          "title": "readonly isMSIE",
          "url": "/manual/2.2/browser.html#readonly-ismsie",
          "content": "readonly isMSIE\n类型：Property\n\n\n功能描述：是否为 IE 浏览器\n\n\n返回值：boolean 是 IE 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMSIE;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMSIE\n  }\n});\n\n"
        },
        {
          "title": "readonly isOpera",
          "url": "/manual/2.2/browser.html#readonly-isopera",
          "content": "readonly isOpera\n类型：Property\n\n\n功能描述：是否为 Opera 浏览器\n\n\n返回值：boolean 是 Opera 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isOpera;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isOpera\n  }\n});\n\n"
        },
        {
          "title": "readonly isSafari",
          "url": "/manual/2.2/browser.html#readonly-issafari",
          "content": "readonly isSafari\n类型：Property\n\n\n功能描述：是否为 Safari 浏览器\n\n\n返回值：boolean 是 Safari 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isSafari;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isSafari\n  }\n});\n\n"
        },
        {
          "title": "readonly isNetscape",
          "url": "/manual/2.2/browser.html#readonly-isnetscape",
          "content": "readonly isNetscape\n类型：Property\n\n\n功能描述：是否为 Netscape 浏览器\n\n\n返回值：boolean 是 Netscape 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isNetscape;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isNetscape\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Location 参考手册",
      "content": "",
      "url": "/manual/2.2/location.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.2/location.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ngetParameters\n获取所有的请求参数及值\n\n\ngetParameter\n获取指定请求参数的值\n\n\n"
        },
        {
          "title": "getParameters()",
          "url": "/manual/2.2/location.html#getparameters",
          "content": "getParameters()\n类型：Function\n\n\n功能描述：获取所有的请求参数及值\n\n\n参数：无\n\n\n返回值：Record 当前请求 URL 中的所有的请求参数及值\n\n示例：原生 JavaScript  var result = location.getParameters();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Record = location.getParameters()\n  }\n});\n\n"
        },
        {
          "title": "getParameter(name: string)",
          "url": "/manual/2.2/location.html#getparametername-string",
          "content": "getParameter(name: string)\n类型：Function\n\n\n功能描述：获取指定请求参数的值\n\n\n参数：string 参数名称\n\n\n返回值：any 请求参数的值\n\n示例：原生 JavaScript  var result = location.getParameter(\"action\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = location.getParameter('action');\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "API",
      "content": "Buession Prototype API 包含以下目录：PrototypeTryOptionalArrayDateDocumentFunctionMathNumberObjectStringWindow",
      "url": "/manual/2.1/index.html",
      "children": []
    },
    {
      "title": "Prototype 参考手册",
      "content": "",
      "url": "/manual/2.1/prototype.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.1/prototype.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nversion\n获取 Buession Prototype 版本\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/2.1/prototype.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nemptyFunction\n执行一个空方法\n\n\nK\n返回参数传递的任意值\n\n\n"
        },
        {
          "title": "version",
          "url": "/manual/2.1/prototype.html#version",
          "content": "version\n类型：String\n\n\n功能描述：获取 Buession Prototype 版本\n\n\n返回值：Buession Prototype 版本\n\n示例：原生 JavaScript  var ver = Prototype.version;\n\nvue  \n    Prototype 版本：{Prototype.version}\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "emptyFunction()",
          "url": "/manual/2.1/prototype.html#emptyfunction",
          "content": "emptyFunction()\n类型：Function\n\n\n功能描述：执行一个空方法\n\n\n参数：无\n\n\n返回值：void\n\n示例：原生 JavaScript  Prototype.emptyFunction();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    Prototype.emptyFunction()\n  }\n});\n\n"
        },
        {
          "title": "K(x: any)",
          "url": "/manual/2.1/prototype.html#kx-any",
          "content": "K(x: any)\n类型：Function\n\n\n功能描述：返回参数传递的任意值\n\n\n参数：x - any 任意值\n\n\n返回值：any 参数传递的任意值\n\n示例：原生 JavaScript  var v = Prototype.K(object);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const v: any = Prototype.K(object)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Try 参考手册",
      "content": "",
      "url": "/manual/2.1/try.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/try.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nthese\n接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n"
        },
        {
          "title": "these(args: any[])",
          "url": "/manual/2.1/try.html#theseargs-any[]",
          "content": "these(args: any[])\n类型：Function\n\n\n功能描述：接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n参数：args any[] 一个或多个 function 作为参数\n\n\n返回值：any 任意函数参数执行结果\n\n示例：原生 JavaScript  var result = Try.these(function(){\n\n    },\n\n    function() {\n\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result:any = Try.these(function(){\n\n      },\n\n      function() {\n\n    })\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Optional 参考手册",
      "content": "Optional 类是一个可以为 null 或 undefined 的容器对象，如果值 value 存在则 isPresent() 方法会返回 true，调用 get() 方法会返回 value 的值。其设计思想，参考 java8 的 Optional使用方式，在构造函数中传入任意类型值；Optional 提供很多有用的方法，这样我们就不用显式进行 null 值和 undefined 的检测。",
      "url": "/manual/2.1/optional.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/optional.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nof\n返回一个指定 T 类型的值的 Optional 实例\n\n\nofNullable\n如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\nempty\n返回空的 Optional 实例\n\n\nget\n如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\norElse\n如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\nisPresent\n如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n  var optional = new Optional(any value);\n\n"
        },
        {
          "title": "static of(value: T)",
          "url": "/manual/2.1/optional.html#static-ofvalue-t",
          "content": "static of(value: T)\n类型：Function\n\n\n功能描述：返回一个指定 T 类型的值的 Optional 实例\n\n\n参数：value - any of T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例\n\n示例：原生 JavaScript  Optional.of(11);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(false)\n  }\n});\n\n"
        },
        {
          "title": "static ofNullable(value: T)",
          "url": "/manual/2.1/optional.html#static-ofnullablevalue-t",
          "content": "static ofNullable(value: T)\n类型：Function\n\n\n功能描述：如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\n参数：value - any as T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例，或空的 Optional 实例\n\n示例：原生 JavaScript  Optional.ofNullable('js');\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.ofNullable(11)\n  }\n});\n\n"
        },
        {
          "title": "static empty()",
          "url": "/manual/2.1/optional.html#static-empty",
          "content": "static empty()\n类型：Function\n\n\n功能描述：返回空的 Optional 实例\n\n\n参数：无\n\n\n返回值：Object as Optional 空的 Optional 实例\n\n示例：原生 JavaScript  Optional.empty();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: null Optional.empty()\n  }\n});\n\n"
        },
        {
          "title": "get()",
          "url": "/manual/2.1/optional.html#get",
          "content": "get()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\n参数：无\n\n\n返回值：any as T Optional 中包含这个值\n\n示例：原生 JavaScript  var optional = Optional.of(11);\n  var result = optional.get(); // 11\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.get() // 11\n  }\n});\n\n"
        },
        {
          "title": "orElse(other: T)",
          "url": "/manual/2.1/optional.html#orelseother-t",
          "content": "orElse(other: T)\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\n参数：other - any of T 任意类型的值\n\n\n返回值：any as T value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.orElse(\"abc\"); // abc\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(undefined)\n    const result = optional.orElse(false) // false\n  }\n});\n\n"
        },
        {
          "title": "isPresent()",
          "url": "/manual/2.1/optional.html#ispresent",
          "content": "isPresent()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n参数：无\n\n\n返回值：boolean value 不为 null 或 undefined，则返回 true；否则返回 false\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.isPresent(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.isPresent() // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Array 参考手册",
      "content": "",
      "url": "/manual/2.1/array.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/array.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisEmpty\n判断数组是否为空数组\n\n\nexists\n判断元素 item 是否在数组中\n\n\nfirst\n获取数组第一个元素\n\n\nlast\n获取数组最后一个元素\n\n\neach\n按顺序为数组中的每个元素调用一次函数\n\n\nsize\n获取数组大小\n\n\nmerge\n连接两个或多个数组\n\n\ncompact\n返回一个不包含 null/undefined 值元素的数组的新版本\n\n\nunique\n对数组的元素进行去重\n\n\nwithout\n返回不包括参数中任意一个指定值的数组\n\n\nclone\n克隆数组\n\n\nclear\n清空数组\n\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/2.1/array.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断数组是否为空数组\n\n\n参数：无\n\n\n返回值：boolean 数组为空，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = [].isEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['a', 'b', 'c'].isEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "exists(item: any)",
          "url": "/manual/2.1/array.html#existsitem-any",
          "content": "exists(item: any)\n类型：Function\n\n\n功能描述：判断元素 item 是否在数组中\n\n\n参数：item - any 待检测元素\n\n\n返回值：boolean 元素 item 是否在数组中返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = ['a', 'b'].exists('a'); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['1', '2'].exists(2) // false\n  }\n});\n\n"
        },
        {
          "title": "first()",
          "url": "/manual/2.1/array.html#first",
          "content": "first()\n类型：Function\n\n\n功能描述：获取数组第一个元素\n\n\n参数：无\n\n\n返回值：any 数组第一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].first(); // a\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].first() // 1\n  }\n});\n\n"
        },
        {
          "title": "last()",
          "url": "/manual/2.1/array.html#last",
          "content": "last()\n类型：Function\n\n\n功能描述：获取数组最后一个元素\n\n\n参数：无\n\n\n返回值：any 数组最后一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].last(); // b\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].last() // 2\n  }\n});\n\n"
        },
        {
          "title": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)",
          "url": "/manual/2.1/array.html#eachcallback-value-t,-index-number,-array-readonly-t[]-=>-void,-thisarg?-any",
          "content": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)\n类型：Function\n\n\n功能描述：按顺序为数组中的每个元素调用一次函数，forEach的别名\n\n\n参数：callback - (value: T, index: number, array: readonly T[]) => void as Function callback 为数组中的每个元素运行的函数，其中：value 为前元素的值，index 为当前元素的数组索引，array 为当前元素所属的数组对象\nany thisArg 可选。要传递给函数以用作其 \"this\" 值的值，如果此参数为空，则值 \"undefined\" 将作为其 \"this\" 值传递\n\n\n返回值：void\n\n示例：原生 JavaScript  ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n    })\n  }\n});\n\n"
        },
        {
          "title": "size()",
          "url": "/manual/2.1/array.html#size",
          "content": "size()\n类型：Function\n\n\n功能描述：获取数组大小\n\n\n参数：无\n\n\n返回值：number 数组大小\n\n示例：原生 JavaScript  var result = ['a', 'b'].size(); // 2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = [].size() // 0\n  }\n});\n\n"
        },
        {
          "title": "merge(...items: T[])",
          "url": "/manual/2.1/array.html#merge...items-t[]",
          "content": "merge(...items: T[])\n类型：Function\n\n\n功能描述：连接两个或多个数组\n\n\n参数：items - any as T 待连接的 T 类型的数组\n\n\n返回值：Array 已连接数组的副本\n\n示例：原生 JavaScript  var result = [1, 3].merge(2, 4); // [1, 3, 2, 4]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    console result: string[] = ['a', 'b'].merge('c', 'd') // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "compact()",
          "url": "/manual/2.1/array.html#compact",
          "content": "compact()\n类型：Function\n\n\n功能描述：返回一个不包含 null/undefined 值元素的数组的新版本\n\n\n参数：无\n\n\n返回值：Array 不包含 null/undefined 值元素的数组的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', null, 'c', 'd'].compact(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', null, 'c', 'd', undefined].compact() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "unique()",
          "url": "/manual/2.1/array.html#unique",
          "content": "unique()\n类型：Function\n\n\n功能描述：对数组的元素进行去重\n\n\n参数：无\n\n\n返回值：Array 数组元素进行去重后的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].unique(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'c', 'd'].unique() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "without(values: T[])",
          "url": "/manual/2.1/array.html#withoutvalues-t[]",
          "content": "without(values: T[])\n类型：Function\n\n\n功能描述：返回不包括参数中任意一个指定值的数组\n\n\n参数：values - any as T[] 排除值数组\n\n\n返回值：Array 不包括参数中任意一个指定值的数组\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b'); // [c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b') // [c, d]\n  }\n});\n\n"
        },
        {
          "title": "clone()",
          "url": "/manual/2.1/array.html#clone",
          "content": "clone()\n类型：Function\n\n\n功能描述：克隆数组\n\n\n参数：无\n\n\n返回值：Array 克隆结果\n\n示例：原生 JavaScript  var result = ['a', 'b'].clone(); // [a, b]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clone() // [a, b]\n  }\n});\n\n"
        },
        {
          "title": "clear()",
          "url": "/manual/2.1/array.html#clear",
          "content": "clear()\n类型：Function\n\n\n功能描述：清空数组\n\n\n参数：无\n\n\n返回值：Array 空数组\n\n示例：原生 JavaScript  var result = ['a', 'b'].clear(); // []\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clear() // []\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Date 参考手册",
      "content": "",
      "url": "/manual/2.1/date.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/date.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisLeapYear\n判断是否为闰年\n\n\ngetSeason\n获取季节\n\n\ngetDayOfYear\n获取年份中的第几天\n\n\ngetDaysOfYear\n获取年份总天数\n\n\nformat\n将日期时间格式化为字符串\n\n\n"
        },
        {
          "title": "isLeapYear()",
          "url": "/manual/2.1/date.html#isleapyear",
          "content": "isLeapYear()\n类型：Function\n\n\n功能描述：判断是否为闰年\n\n\n参数：无\n\n\n返回值：boolean 是闰年，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2000-04-11').isLeapYear() // false\n  }\n});\n\n"
        },
        {
          "title": "getSeason()",
          "url": "/manual/2.1/date.html#getseason",
          "content": "getSeason()\n类型：Function\n\n\n功能描述：获取季节\n\n\n参数：无\n\n\n返回值：number 依次返回 0 至 3 的整数，表示春季、夏季、秋季、冬季\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // 0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2022-01-11').isLeapYear() // 3\n  }\n});\n\n"
        },
        {
          "title": "getDayOfYear()",
          "url": "/manual/2.1/date.html#getdayofyear",
          "content": "getDayOfYear()\n类型：Function\n\n\n功能描述：获取年份中的第几天\n\n\n参数：无\n\n\n返回值：number 年份中的第几天\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDayOfYear(); // 42\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2022-03-01').getDayOfYear(); // 61\n  }\n});\n\n"
        },
        {
          "title": "getDaysOfYear()",
          "url": "/manual/2.1/date.html#getdaysofyear",
          "content": "getDaysOfYear()\n类型：Function\n\n\n功能描述：获取年份总天数\n\n\n参数：无\n\n\n返回值：number 年份总天数\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDaysOfYear(); // 365\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2020-02-11').getDaysOfYear() // 366\n  }\n});\n\n"
        },
        {
          "title": "format(format: string)",
          "url": "/manual/2.1/date.html#formatformat-string",
          "content": "format(format: string)\n类型：Function\n\n\n功能描述：将日期时间格式化为字符串\n\n\n参数：format - String format 格式字符串\n  y - 年\n\n  n - 季度（1 到 4）\n\n  N - 季度名称\n\n  A - 季度中文名称\n\n  M - 月\n\n  f - 月（Jan 到 Dec）\n\n  F - 月（January 到 December）\n\n  C - 月，中文名称\n\n  d - 日\n\n  Y - 年份中的第几天（0 到 365）\n\n  T - 月份有几天（28 到 30）\n\n  j - 每月天数后面的英文后缀（st，nd，rd 或者 th）\n\n  e - 星期几，数字表示，0（表示星期天）到 6（表示星期六）\n\n  E - 星期几，数字表示，1（表示星期一）到 7（表示星期天）\n\n  l - 星期几，文本表示，3 个字母（Mon 到 Sun）\n\n  L - 星期几，完整的文本格式（Sunday 到 Saturday）\n\n  w - 星期几，中文名称\n\n  W - 一月中第几个星期几\n\n  i - 月份中的第几周\n\n  o - 年份中的第几周\n\n  h - 小时(1~12)\n\n  H - 小时(0~23)\n\n  m - 分\n\n  s - 秒\n\n  S - 毫秒\n\n  a - 上午/下午标记\n\n  O - 与格林威治时间相差的小时数\n\n  P - 与格林威治时间相差的小时数，小时和分钟之间有冒号分隔\n  \n  Z - 时区\n\n\n\n返回值：string 格式化后的日期时间\n\n示例：原生 JavaScript  var result = new Date('2022-01-11').format(\"f-dd,yyyy\"); // Jan-11,2022\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Date('2022-01-11').format(\"f-dd,yy\"); // Jan-11,22\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Document 参考手册",
      "content": "",
      "url": "/manual/2.1/document.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.1/document.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nfullScreenEnabled\n检测当前浏览器是否支持全屏模式\n\n\nfullScreenElement\n检测当前文档中正在以全屏模式显示的 Element 节点\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nhttpCookie\nCookie 对象操作\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/2.1/document.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrequestFullscreen\n请求进入全屏模式\n\n\nexitFullscreen\n退出全屏模式\n\n\n"
        },
        {
          "title": "readonly fullScreen",
          "url": "/manual/2.1/document.html#readonly-fullscreen",
          "content": "readonly fullScreen\n类型：Property\n\n\n功能描述：检测当前文档是否全屏\n\n\n参数：无\n\n\n返回值：boolean 当前文档是否全屏，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreen;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreen;\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenEnabled",
          "url": "/manual/2.1/document.html#readonly-fullscreenenabled",
          "content": "readonly fullScreenEnabled\n类型：Property\n\n\n功能描述：检测当前浏览器是否支持全屏模式\n\n\n返回值：boolean 当前浏览器是否支持全屏模式返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenEnabled;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenEnabled\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenElement",
          "url": "/manual/2.1/document.html#readonly-fullscreenelement",
          "content": "readonly fullScreenElement\n类型：Property\n\n\n功能描述：检测当前文档中正在以全屏模式显示的 Element 节点\n\n\n返回值：boolean 当前文档中正在以全屏模式显示的 Element 节点，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenElement;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenElement\n  }\n});\n\n"
        },
        {
          "title": "requestFullscreen()",
          "url": "/manual/2.1/document.html#requestfullscreen",
          "content": "requestFullscreen()\n类型：Function\n\n\n功能描述：请求进入全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.requestFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.requestFullscreen()\n  }\n});\n\n"
        },
        {
          "title": "exitFullscreen()",
          "url": "/manual/2.1/document.html#exitfullscreen",
          "content": "exitFullscreen()\n类型：Function\n\n\n功能描述：退出全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.exitFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.exitFullscreen()\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Cookie 参考手册",
      "content": "",
      "url": "/manual/2.1/cookie.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/cookie.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\n[set](cookie.html#setname-string,-value-string-\n-null-\n\n\nget\n获取 Cookie\n\n\ndelete\n删除 Cookie\n\n\n"
        },
        {
          "title": "set(name: string, value: string | null | undefined, options?: CookieOptions)",
          "url": "/manual/2.1/cookie.html#setname-string,-value-string-|-null-|-undefined,-options?-cookieoptions",
          "content": "set(name: string, value: string | null | undefined, options?: CookieOptions)\n类型：Function\n\n\n功能描述：设置 Cookie\n\n\n参数：name - string Cookie 名称\n           value - string | null | undefined Cookie 值\n           options - CookieOptions Cookie 选项\n\n\n返回值：string Cookie 字符串\n\n示例：原生 JavaScript  var result = document.httpCookie.set(\"name\", \"测试\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.set(\"name\", \"测试\", {path: '/', domain: '*.test.com'})\n  }\n});\n\n"
        },
        {
          "title": "get(name: string)",
          "url": "/manual/2.1/cookie.html#getname-string",
          "content": "get(name: string)\n类型：Function\n\n\n功能描述：获取 Cookie 值\n\n\n参数：name - string Cookie 名称\n\n\n返回值：string | null Cookie 值\n\n示例：原生 JavaScript  var result = document.httpCookie.get(\"name\")\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.get(\"name\")\n  }\n});\n\n"
        },
        {
          "title": "delete(name: string, options?: CookieOptions)",
          "url": "/manual/2.1/cookie.html#deletename-string,-options?-cookieoptions",
          "content": "delete(name: string, options?: CookieOptions)\n类型：Function\n\n\n功能描述：删除 Cookie\n\n\n参数：name - string Cookie 名称\n           options - CookieOptions Cookie 选项\n\n\n返回值：无\n\n示例：原生 JavaScript  var result = document.httpCookie.delete(\"name\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    document.httpCookie.delete(\"name\", \"测试\", {domain: '*.test.com'})\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/2.1/function.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/function.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nargumentNames\n获取函数参数名称\n\n\ndelay\n延时执行函数\n\n\n"
        },
        {
          "title": "argumentNames(...args: any)",
          "url": "/manual/2.1/function.html#argumentnames...args-any",
          "content": "argumentNames(...args: any)\n类型：Function\n\n\n功能描述：获取函数参数名称\n\n\n参数：args - any 1个或多个任意类型的可变参数可变参数\n\n\n返回值：string[] | null 函数参数名称列表\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n\n  }\n  var result = fn.argumentNames();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: String) {\n\n    }\n    const result: string[] | null = fn.argumentNames()\n  }\n});\n\n"
        },
        {
          "title": "delay(timeout: number)",
          "url": "/manual/2.1/function.html#delaytimeout-number",
          "content": "delay(timeout: number)\n类型：Function\n\n\n功能描述：延时执行函数\n\n\n参数：timeout - number 延时时间（单位：秒）\n\n\n返回值：any 函数返回值\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n    return a + b + c;\n  }\n  var result = fn.delay(3)\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: number) {\n      return a ? b : c\n    }\n    const result: any = fn.delay(3)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/2.1/math.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/math.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrand\n延时执行函数\n\n\n"
        },
        {
          "title": "rand(min: number, max?: number)",
          "url": "/manual/2.1/math.html#randmin-number,-max?-number",
          "content": "rand(min: number, max?: number)\n类型：Function\n\n\n功能描述：产生一个指定范围内的随机数\n\n\n参数：min - number 返回的最低值\n           max - number 返回的最高值\n\n\n返回值：number 随机数\n\n示例：原生 JavaScript  var result = Math.rand(1, 5); //\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = Math.rand(1, 5)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Number 参考手册",
      "content": "",
      "url": "/manual/2.1/number.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/number.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntoPaddedString\n延时执行函数\n\n\nisOdd\n判断数字是否为奇数\n\n\nisEven\n判断数字是否为偶数\n\n\nisBetween\n判断一个数字是否在另两个数字之间\n\n\n"
        },
        {
          "title": "toPaddedString(length: number, radix: number)",
          "url": "/manual/2.1/number.html#topaddedstringlength-number,-radix-number",
          "content": "toPaddedString(length: number, radix: number)\n类型：Function\n\n\n功能描述：数字填充\n\n\n参数：length - number 长度\n           radix - number 进制\n\n\n返回值：string 填充后的字符串数字\n\n示例：原生 JavaScript  var result = new Number(5).toPaddedString(12, 2); // 0000000000101\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Number(5).toPaddedString(12, 8) // 0000000000005\n  }\n});\n\n"
        },
        {
          "title": "isOdd(num: number)",
          "url": "/manual/2.1/number.html#isoddnum-number",
          "content": "isOdd(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为奇数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为奇数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isOdd(255); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // false\n  }\n});\n\n"
        },
        {
          "title": "isEven(num: number)",
          "url": "/manual/2.1/number.html#isevennum-number",
          "content": "isEven(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为偶数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为偶数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isEven(255); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // true\n  }\n});\n\n"
        },
        {
          "title": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)",
          "url": "/manual/2.1/number.html#isbetweennum-number,-min-number,-max-number,-match?-boolean-|-undefined",
          "content": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)\n类型：Function\n\n\n功能描述：判断一个数字是否在另两个数字之间\n\n\n参数：num - number 需要判断的数字\n           min - number 最小值\n           max - number 最大值\n           match - boolean | undefined 是否包含最小值或最大值\n\n\n返回值：boolean 数字是否在另两个数字之间，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isBetween(4, 3, 5); // true\n  var result = Number.isBetween(4, 4, 5); // false\n  var result = Number.isBetween(4, 4, 5, true); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isBetween(4, 3, 5) // true\n    const result: boolean = Number.isBetween(4, 4, 5) // false\n    const result: boolean = Number.isBetween(4, 4, 5, true) // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Object 参考手册",
      "content": "",
      "url": "/manual/2.1/object.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/object.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntype\n获取对象数据类型\n\n\nrawType\n获取对象原始数据类型\n\n\nisObject\n判断对象是否为 object 类型\n\n\nisPlainObject\n判断对象是否为简单 object 类型\n\n\nisMap\n判断对象是否为 Map 类型\n\n\nisSet\n判断对象是否为 Set 类型\n\n\nisSymbol\n判断对象是否为 Symbol\n\n\nisPromise\n判断对象是否为 Promise\n\n\nisPrimitive\n判断对象是否为原始类型\n\n\nisFunction\n判断对象是否为函数\n\n\nisArray\n判断对象是否为数组\n\n\nisString\n判断对象是否为字符串对象\n\n\nisNumber\n判断对象是否为数字对象\n\n\nisBoolean\n判断对象是否为布尔对象\n\n\nisRegExp\n判断对象是否为正则对象\n\n\nisFile\n判断对象是否为文件对象\n\n\nisWindow\n判断对象是否为 windows 对象\n\n\nisElement\n判断对象是否为 Element\n\n\nisEvent\n判断对象是否为事件对象\n\n\nisNull\n判断对象是否为 null 对象\n\n\nisUndefined\n判断对象是否为未定义\n\n\nisUndefinedOrNull\n判断对象是否为未定义或 null\n\n\nclone\n克隆对象\n\n\n"
        },
        {
          "title": "type(obj: any)",
          "url": "/manual/2.1/object.html#typeobj-any",
          "content": "type(obj: any)\n类型：Function\n\n\n功能描述：获取对象数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 对象数据类型\n\n示例：原生 JavaScript  var result = Object.type(true); // boolean\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // number\n  }\n});\n\n"
        },
        {
          "title": "rawType(obj: any)",
          "url": "/manual/2.1/object.html#rawtypeobj-any",
          "content": "rawType(obj: any)\n类型：Function\n\n\n功能描述：获取对象原始数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 原始数据类型\n\n示例：原生 JavaScript  var result = Object.type(\"4.4\"); // String\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // Number\n  }\n});\n\n"
        },
        {
          "title": "isObject(obj: any)",
          "url": "/manual/2.1/object.html#isobjectobj-any",
          "content": "isObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isObject(\"1\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isObject(new String(\"1\")) // true\n  }\n});\n\n"
        },
        {
          "title": "isPlainObject(obj: any)",
          "url": "/manual/2.1/object.html#isplainobjectobj-any",
          "content": "isPlainObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为简单 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为简单 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPlainObject(new String(\"1\")); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPlainObject({\"a\":\"A\"}) // true\n  }\n});\n\n"
        },
        {
          "title": "isMap(obj: any)",
          "url": "/manual/2.1/object.html#ismapobj-any",
          "content": "isMap(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Map 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isMap(new Map()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isMap({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSet(obj: any)",
          "url": "/manual/2.1/object.html#issetobj-any",
          "content": "isSet(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Set 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSet(new Set()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSet({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSymbol(obj: any)",
          "url": "/manual/2.1/object.html#issymbolobj-any",
          "content": "isSymbol(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Symbol\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Symbol 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSymbol(Symbol('a')); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSymbol({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPromise(obj: any)",
          "url": "/manual/2.1/object.html#ispromiseobj-any",
          "content": "isPromise(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Promise\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Promise 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPromise(new Promise(function(){})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPrimitive(obj: any)",
          "url": "/manual/2.1/object.html#isprimitiveobj-any",
          "content": "isPrimitive(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为原始类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为原始类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPrimitive(11); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isFunction(obj: any)",
          "url": "/manual/2.1/object.html#isfunctionobj-any",
          "content": "isFunction(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为函数\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为函数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFunction(location.href); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isFunction(\"a\".replace) // true\n  }\n});\n\n"
        },
        {
          "title": "isArray(obj: any)",
          "url": "/manual/2.1/object.html#isarrayobj-any",
          "content": "isArray(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数组\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数组返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isArray([1, 2]); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isArray({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isString(obj: any)",
          "url": "/manual/2.1/object.html#isstringobj-any",
          "content": "isString(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为字符串对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为字符串返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isString(1); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isString(\"1\") // true\n  }\n});\n\n"
        },
        {
          "title": "isNumber(obj: any)",
          "url": "/manual/2.1/object.html#isnumberobj-any",
          "content": "isNumber(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数字对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数字对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNumber(1.0); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNumber(\"1.0\") // false\n  }\n});\n\n"
        },
        {
          "title": "isBoolean(obj: any)",
          "url": "/manual/2.1/object.html#isbooleanobj-any",
          "content": "isBoolean(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为布尔对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为布尔对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isBoolean(false); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isBoolean(1) // false\n  }\n});\n\n"
        },
        {
          "title": "isRegExp(obj: any)",
          "url": "/manual/2.1/object.html#isregexpobj-any",
          "content": "isRegExp(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为正则对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为正则对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isRegExp(/^[a-z]$/); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isRegExp('/^[a-z]$/') // false\n  }\n});\n\n"
        },
        {
          "title": "isFile(obj: any)",
          "url": "/manual/2.1/object.html#isfileobj-any",
          "content": "isFile(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为文件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为文件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFile(new File(['text1', 'text2'], 'test.txt', {type: 'text/plain'})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = bject.isFile(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isWindow(obj: any)",
          "url": "/manual/2.1/object.html#iswindowobj-any",
          "content": "isWindow(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 windows 对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 windows 对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isWindow(window); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isWindow(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isElement(obj: any)",
          "url": "/manual/2.1/object.html#iselementobj-any",
          "content": "isElement(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Element\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 Element 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isElement(document); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isElement(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "isEvent(obj: any)",
          "url": "/manual/2.1/object.html#iseventobj-any",
          "content": "isEvent(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为事件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为事件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isEvent(document.onclick); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isEvent(document.onclick) // false\n  }\n});\n\n"
        },
        {
          "title": "isNull(obj: any)",
          "url": "/manual/2.1/object.html#isnullobj-any",
          "content": "isNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNull(null); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNull(\"A\") // false\n  }\n});\n\n"
        },
        {
          "title": "isUndefined(obj: any)",
          "url": "/manual/2.1/object.html#isundefinedobj-any",
          "content": "isUndefined(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefined(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefined(b) // true\n  }\n});\n\n"
        },
        {
          "title": "isUndefinedOrNull(obj: any)",
          "url": "/manual/2.1/object.html#isundefinedornullobj-any",
          "content": "isUndefinedOrNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义或 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义或 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefinedOrNull(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefinedOrNull(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "clone(obj: any)",
          "url": "/manual/2.1/object.html#cloneobj-any",
          "content": "clone(obj: any)\n类型：Function\n\n\n功能描述：克隆对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var result = Object.clone({\"a\": \"A\"}); // {\"a\": \"A\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = Object.clone({\"a\":\"A\"}) // {\"a\": \"A\"}\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "String 参考手册",
      "content": "",
      "url": "/manual/2.1/string.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/string.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nexists\n判断字符串是否存在\n\n\nequals\n判断字符串是否相等\n\n\nequalsIgnoreCase\n判断字符串是否相等，不考虑大小写\n\n\nisEmpty\n判断是否为空字符串\n\n\nisNotEmpty\n判断是否不为空字符串\n\n\nisBlank\n判断是否为空白字符串\n\n\nrepeat\n重复一个字符串\n\n\nleft\n截取字符串左边边指定数目的字符串\n\n\nright\n截取字符串右边指定数目的字符串\n\n\ntruncation\n截取字符串，超出部分用 truncation 替代\n\n\nltrim\n删除字符串开头的空白字符\n\n\nrtrim\n删除字符串结尾的空白字符\n\n\nstartsWith\n判断字符串是否以给定的字符串开头\n\n\nendsWith\n判断字符串是否以给定的字符串结尾\n\n\nlcfirst\n首字母小写\n\n\nucfirst\n首字母大写\n\n\nescapeHTML\n将 HTML 编码\n\n\nunescapeHTML\n将 HTML 实体字符解码\n\n\nstripTag\n删除 HTML 标签\n\n\nstripTags\n批量删除 HTML 标签\n\n\nstripScripts\n删除 script 标签\n\n\ntoArray\n将字符串转换为数组\n\n\ninspect\n返回一个数组的字符串表示形式\n\n\nhashCode\n获取字符串 hash code\n\n\nrandom\n生成随机字符串\n\n\n"
        },
        {
          "title": "exists(str: string)",
          "url": "/manual/2.1/string.html#existsstr-string",
          "content": "exists(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否存在\n\n\n参数：str - string 子字符串\n\n\n返回值：boolean 子字符串存在返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"ABC\".exists(\"A\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"ABC\".exists(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equals(str: string | undefined | null)",
          "url": "/manual/2.1/string.html#equalsstr-string-|-undefined-|-null",
          "content": "equals(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equals(new String(\"A\")); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"A\".equals(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equalsIgnoreCase(str: string | undefined | null)",
          "url": "/manual/2.1/string.html#equalsignorecasestr-string-|-undefined-|-null",
          "content": "equalsIgnoreCase(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等，不考虑大小写\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equalsIgnoreCase(\"a\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"a\").equalsIgnoreCase(\"1\") // false\n  }\n});\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/2.1/string.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断是否为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串为空，即长度为 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isEmpty(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isEmpty() // true\n  }\n});\n\n"
        },
        {
          "title": "isNotEmpty()",
          "url": "/manual/2.1/string.html#isnotempty",
          "content": "isNotEmpty()\n类型：Function\n\n\n功能描述：判断是否不为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串不为空，即长度大于 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isNotEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isNotEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "isBlank()",
          "url": "/manual/2.1/string.html#isblank",
          "content": "isBlank()\n类型：Function\n\n\n功能描述：判断是否为空白字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串全为空白字符串（即：空格、回车、Tag 制表位、非打印字符）返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isBlank(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\\t\\n\").isBlank() // true\n  }\n});\n\n"
        },
        {
          "title": "repeat(count: number)",
          "url": "/manual/2.1/string.html#repeatcount-number",
          "content": "repeat(count: number)\n类型：Function\n\n\n功能描述：重复一个字符串\n\n\n参数：count - number 重复次数\n\n\n返回值：string 重复后的字符串\n\n示例：原生 JavaScript  var result = \"A\".repeat(3); // AAA\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".repeat(3) // AbcAbcAbc\n  }\n});\n\n"
        },
        {
          "title": "left(length: number)",
          "url": "/manual/2.1/string.html#leftlength-number",
          "content": "left(length: number)\n类型：Function\n\n\n功能描述：截取字符串左边边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".left(1); // A\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".left(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "right(length: number)",
          "url": "/manual/2.1/string.html#rightlength-number",
          "content": "right(length: number)\n类型：Function\n\n\n功能描述：截截取字符串右边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".right(1); // c\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".right(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "truncation(length: number, truncation: string)",
          "url": "/manual/2.1/string.html#truncationlength-number,-truncation-string",
          "content": "truncation(length: number, truncation: string)\n类型：Function\n\n\n功能描述：截取字符串，超出部分用 truncation 替代\n\n\n参数：length - number 截取长度\n\n             truncation - string 替换字符串返回值：string 截取后的字符串；实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length\n示例：原生 JavaScript  var result = \"Abc\".truncation(1, \"...\"); // A...\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".truncation(6, \"...\") // Abc\n  }\n});\n\n"
        },
        {
          "title": "ltrim()",
          "url": "/manual/2.1/string.html#ltrim",
          "content": "ltrim()\n类型：Function\n\n\n功能描述：删除字符串开头的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最左边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".ltrim(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").ltrim() // \"Abc \"\n  }\n});\n\n"
        },
        {
          "title": "rtrim()",
          "url": "/manual/2.1/string.html#rtrim",
          "content": "rtrim()\n类型：Function\n\n\n功能描述：删除字符串结尾的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最右边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".rtrim(); // \" Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").rtrim() // \" Abc\"\n  }\n});\n\n"
        },
        {
          "title": "startsWith(str: string)",
          "url": "/manual/2.1/string.html#startswithstr-string",
          "content": "startsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串开头\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串开头返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".startsWith(\"a\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").startsWith(\"a\") // true\n  }\n});\n\n"
        },
        {
          "title": "endsWith(str: string)",
          "url": "/manual/2.1/string.html#endswithstr-string",
          "content": "endsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串结尾\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串结尾返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".endsWith(\"C\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").endsWith(\"c\") // true\n  }\n});\n\n"
        },
        {
          "title": "lcfirst()",
          "url": "/manual/2.1/string.html#lcfirst",
          "content": "lcfirst()\n类型：Function\n\n\n功能描述：首字母小写\n\n\n参数：无\n\n\n返回值：string 首字母小写后的字符串\n\n示例：原生 JavaScript  var result = \"Abc\".lcfirst(); // \"abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"abc\"\n  }\n});\n\n"
        },
        {
          "title": "ucfirst()",
          "url": "/manual/2.1/string.html#ucfirst",
          "content": "ucfirst()\n类型：Function\n\n\n功能描述：首字母大写\n\n\n参数：无\n\n\n返回值：string 首字母大写后的字符串\n\n示例：原生 JavaScript  var result = \"abc\".ucfirst(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"Abc\"\n  }\n});\n\n"
        },
        {
          "title": "escapeHTML()",
          "url": "/manual/2.1/string.html#escapehtml",
          "content": "escapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 编码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 编码后的字符串\n\n示例：原生 JavaScript  var result = \"test\".escapeHTML(); // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"test\").lcfirst() // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n  }\n});\n\n"
        },
        {
          "title": "unescapeHTML()",
          "url": "/manual/2.1/string.html#unescapehtml",
          "content": "unescapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 实体字符解码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 解码后的字符串\n\n示例：原生 JavaScript  var result = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML() // test\n  }\n});\n\n"
        },
        {
          "title": "stripTag(tag: string)",
          "url": "/manual/2.1/string.html#striptagtag-string",
          "content": "stripTag(tag: string)\n类型：Function\n\n\n功能描述：删除 HTML 标签\n\n\n参数：tag - string 待删除标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"test\".stripTag(\"a\"); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"test\".stripTag(\"a\") // test\n  }\n});\n\n"
        },
        {
          "title": "stripTags(tag: string)",
          "url": "/manual/2.1/string.html#striptagstag-string",
          "content": "stripTags(tag: string)\n类型：Function\n\n\n功能描述：批量删除 HTML 标签\n\n\n参数：tag - string[] | string 删除指定的标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"testEM\".stripTags([\"a\", \"i\"]); // testEM\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"testEM\".stripTags([\"a\", \"i\"]) // testEM\n  }\n});\n\n"
        },
        {
          "title": "stripScripts()",
          "url": "/manual/2.1/string.html#stripscripts",
          "content": "stripScripts()\n类型：Function\n\n\n功能描述：删除 script 标签\n\n\n参数：无\n\n\n返回值：string 删除 script 标签后的字符串\n\n示例：原生 JavaScript  var result = 'alert(\"test\");test'.stripScripts(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = 'alert(\"test\");test'.stripScripts() // \n"
        },
        {
          "title": "toArray(delimiter: string)",
          "url": "/manual/2.1/string.html#toarraydelimiter-string",
          "content": "toArray(delimiter: string)\n类型：Function\n\n\n功能描述：将字符串转换为数组\n\n\n参数：delimiter - string 分隔字符\n\n\n返回值：string[] 字符串数组\n\n示例：原生 JavaScript  var result = \"a|b|c\".toArray('|'); // [ \"a\", \"b\", \"c\" ]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = \"a|b||c\".toArray('||') // [ \"a|b\", \"c\" ]\n  }\n});\n\n"
        },
        {
          "title": "inspect(useDoubleQuotes: boolean)",
          "url": "/manual/2.1/string.html#inspectusedoublequotes-boolean",
          "content": "inspect(useDoubleQuotes: boolean)\n类型：Function\n\n\n功能描述：返回一个数组的字符串表示形式\n\n\n参数：useDoubleQuotes - boolean 是否使用双引号引住\n\n\n返回值：string 数组的字符串表示形式\n\n示例：原生 JavaScript  var result = \"a|b|c\".inspect(true); // \\\"a|b|c\\\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"a|b|c\".inspect(false) // 'a|b|c'\n  }\n});\n\n"
        },
        {
          "title": "hashCode()",
          "url": "/manual/2.1/string.html#hashcode",
          "content": "hashCode()\n类型：Function\n\n\n功能描述：获取字符串 hash code\n\n\n参数：无\n\n\n返回值：number 字符串的 hash code\n\n示例：原生 JavaScript  var result = \"abc\".hashCode(); // 96354\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = \"abcABC\".hashCode() // 2870546592\n  }\n});\n\n"
        },
        {
          "title": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)",
          "url": "/manual/2.1/string.html#randomlength-number,-type?-randomtype-=-\"numeric\"-|-\"letter\"-|-\"letter_numeric\"-|-\"chinese\"-|-undefined",
          "content": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)\n类型：Function\n\n\n功能描述：生成随机字符串\n\n\n参数：length - number 生成字符串的长度\n\n             type - NUMERIC | LETTER | LETTER_NUMERIC | CHINESE | undefined 生成类型，可选参数，当未指定时为 LETTER_NUMERIC    NUMERIC      - 数字随机字符串\n    LETTER       - 英文随机字符串\n\n    LETTER_NUMERIC - 英文数字混合随机字符串\n\n    CHINESE      - 中文随机字符串\n返回值：string 随机字符串\n示例：原生 JavaScript  var result = String.random(6); // 1Diim2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = String.random(6, \"NUMERIC\") // 881773\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Window 参考手册",
      "content": "",
      "url": "/manual/2.1/window.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.1/window.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nbrowser\n浏览器信息对象\n\n\nlocation\nLocation 对象\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/2.1/window.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ncopy\n将字符串复制到剪贴板\n\n\n"
        },
        {
          "title": "copy(str: string)",
          "url": "/manual/2.1/window.html#copystr-string",
          "content": "copy(str: string)\n类型：Function\n\n\n功能描述：将字符串复制到剪贴板\n\n\n参数：str - string 字符串\n\n\n返回值：无\n\n示例：原生 JavaScript  window.copy(\"这是要复制的字符串\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    window.copy(\"这是要复制的字符串\")\n  }\n});\n\n"
        },
        {
          "title": "Browser",
          "url": "/manual/2.1/window.html#browser",
          "content": "Browser"
        },
        {
          "title": "Location",
          "url": "/manual/2.1/window.html#location",
          "content": "Location"
        }
      ]
    },
    {
      "title": "HttpCookie 参考手册",
      "content": "",
      "url": "/manual/2.1/browser.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.1/browser.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nuserAgent\n获取浏览器 User-Agent\n\n\nname\n获取浏览器应用程序名称\n\n\nisMobile\n是否为移动设备\n\n\nisChrome\n是否为 Chrome 浏览器\n\n\nisFirefox\n是否为 Firefox 浏览器\n\n\nisMozilla\n是否为 Mozilla 浏览器\n\n\nisMSIE\n是否为 IE 浏览器\n\n\nisOpera\n是否为 Opera 浏览器\n\n\nisSafari\n是否为 Safari 浏览器\n\n\nisNetscape\n是否为 Netscape 浏览器\n\n\n"
        },
        {
          "title": "readonly userAgent",
          "url": "/manual/2.1/browser.html#readonly-useragent",
          "content": "readonly userAgent\n类型：Property\n\n\n功能描述：获取浏览器 User-Agent，等价于 navigator.userAgent\n\n\n返回值：string 浏览器 User-Agent\n\n示例：原生 JavaScript  var result = window.browser.userAgent; // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n  }\n});\n\n"
        },
        {
          "title": "readonly name",
          "url": "/manual/2.1/browser.html#readonly-name",
          "content": "readonly name\n类型：Property\n\n\n功能描述：获取浏览器应用程序名称，等价于 navigator.appName\n\n\n返回值：string 浏览器应用程序名称\n\n示例：原生 JavaScript  var result = window.browser.name; // Netscape\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.name // Netscape\n  }\n});\n\n"
        },
        {
          "title": "readonly isMobile",
          "url": "/manual/2.1/browser.html#readonly-ismobile",
          "content": "readonly isMobile\n类型：Property\n\n\n功能描述：是否为移动设备，检测依据：User-Agent 中含有 Android、iPhone、iPod、Windows Phone、Mobile、Coolpad、mmp、SmartPhone、midp、wap、xoom、Symbian、J2ME、Blackberry、Wince 其中任意一个字符串\n\n\n返回值：boolean 是移动设备返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMobile\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMobile\n  }\n});\n\n"
        },
        {
          "title": "readonly isChrome",
          "url": "/manual/2.1/browser.html#readonly-ischrome",
          "content": "readonly isChrome\n类型：Property\n\n\n功能描述：是否为 Chrome 浏览器\n\n\n返回值：boolean 是 Chrome 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isChrome;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isChrome\n  }\n});\n\n"
        },
        {
          "title": "readonly isFirefox",
          "url": "/manual/2.1/browser.html#readonly-isfirefox",
          "content": "readonly isFirefox\n类型：Property\n\n\n功能描述：是否为 Firefox 浏览器\n\n\n返回值：boolean 是 Firefox 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isFirefox;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isFirefox\n  }\n});\n\n"
        },
        {
          "title": "readonly isMSIE",
          "url": "/manual/2.1/browser.html#readonly-ismsie",
          "content": "readonly isMSIE\n类型：Property\n\n\n功能描述：是否为 IE 浏览器\n\n\n返回值：boolean 是 IE 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMSIE;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMSIE\n  }\n});\n\n"
        },
        {
          "title": "readonly isOpera",
          "url": "/manual/2.1/browser.html#readonly-isopera",
          "content": "readonly isOpera\n类型：Property\n\n\n功能描述：是否为 Opera 浏览器\n\n\n返回值：boolean 是 Opera 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isOpera;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isOpera\n  }\n});\n\n"
        },
        {
          "title": "readonly isSafari",
          "url": "/manual/2.1/browser.html#readonly-issafari",
          "content": "readonly isSafari\n类型：Property\n\n\n功能描述：是否为 Safari 浏览器\n\n\n返回值：boolean 是 Safari 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isSafari;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isSafari\n  }\n});\n\n"
        },
        {
          "title": "readonly isNetscape",
          "url": "/manual/2.1/browser.html#readonly-isnetscape",
          "content": "readonly isNetscape\n类型：Property\n\n\n功能描述：是否为 Netscape 浏览器\n\n\n返回值：boolean 是 Netscape 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isNetscape;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isNetscape\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Location 参考手册",
      "content": "",
      "url": "/manual/2.1/location.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.1/location.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ngetParameters\n获取所有的请求参数及值\n\n\ngetParameter\n获取指定请求参数的值\n\n\n"
        },
        {
          "title": "getParameters()",
          "url": "/manual/2.1/location.html#getparameters",
          "content": "getParameters()\n类型：Function\n\n\n功能描述：获取所有的请求参数及值\n\n\n参数：无\n\n\n返回值：Record 当前请求 URL 中的所有的请求参数及值\n\n示例：原生 JavaScript  var result = location.getParameters();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Record = location.getParameters()\n  }\n});\n\n"
        },
        {
          "title": "getParameter(name: string)",
          "url": "/manual/2.1/location.html#getparametername-string",
          "content": "getParameter(name: string)\n类型：Function\n\n\n功能描述：获取指定请求参数的值\n\n\n参数：string 参数名称\n\n\n返回值：any 请求参数的值\n\n示例：原生 JavaScript  var result = location.getParameter(\"action\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = location.getParameter('action');\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "API",
      "content": "Buession Prototype API 包含以下目录：PrototypeTryOptionalArrayDateDocumentFunctionMathNumberObjectStringWindow",
      "url": "/manual/3.0/index.html",
      "children": []
    },
    {
      "title": "Prototype 参考手册",
      "content": "",
      "url": "/manual/3.0/prototype.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/3.0/prototype.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nversion\n获取 Buession Prototype 版本\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/3.0/prototype.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nemptyFunction\n执行一个空方法\n\n\nK\n返回参数传递的任意值\n\n\n"
        },
        {
          "title": "version",
          "url": "/manual/3.0/prototype.html#version",
          "content": "version\n类型：String\n\n\n功能描述：获取 Buession Prototype 版本\n\n\n返回值：Buession Prototype 版本\n\n示例：原生 JavaScript  var ver = Prototype.version;\n\nvue  \n    Prototype 版本：{Prototype.version}\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "emptyFunction()",
          "url": "/manual/3.0/prototype.html#emptyfunction",
          "content": "emptyFunction()\n类型：Function\n\n\n功能描述：执行一个空方法\n\n\n参数：无\n\n\n返回值：void\n\n示例：原生 JavaScript  Prototype.emptyFunction();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    Prototype.emptyFunction()\n  }\n});\n\n"
        },
        {
          "title": "K(x: any)",
          "url": "/manual/3.0/prototype.html#kx-any",
          "content": "K(x: any)\n类型：Function\n\n\n功能描述：返回参数传递的任意值\n\n\n参数：x - any 任意值\n\n\n返回值：any 参数传递的任意值\n\n示例：原生 JavaScript  var v = Prototype.K(object);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const v: any = Prototype.K(object)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Try 参考手册",
      "content": "",
      "url": "/manual/3.0/try.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/try.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nthese\n接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n"
        },
        {
          "title": "these(args: any[])",
          "url": "/manual/3.0/try.html#theseargs-any[]",
          "content": "these(args: any[])\n类型：Function\n\n\n功能描述：接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n参数：args any[] 一个或多个 function 作为参数\n\n\n返回值：any 任意函数参数执行结果\n\n示例：原生 JavaScript  var result = Try.these(function(){\n\n    },\n\n    function() {\n\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result:any = Try.these(function(){\n\n      },\n\n      function() {\n\n    })\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Optional 参考手册",
      "content": "Optional 类是一个可以为 null 或 undefined 的容器对象，如果值 value 存在则 isPresent() 方法会返回 true，调用 get() 方法会返回 value 的值。其设计思想，参考 java8 的 Optional使用方式，在构造函数中传入任意类型值；Optional 提供很多有用的方法，这样我们就不用显式进行 null 值和 undefined 的检测。",
      "url": "/manual/3.0/optional.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/optional.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nof\n返回一个指定 T 类型的值的 Optional 实例\n\n\nofNullable\n如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\nempty\n返回空的 Optional 实例\n\n\nget\n如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\norElse\n如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\nisPresent\n如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n  var optional = new Optional(any value);\n\n"
        },
        {
          "title": "static of(value: T)",
          "url": "/manual/3.0/optional.html#static-ofvalue-t",
          "content": "static of(value: T)\n类型：Function\n\n\n功能描述：返回一个指定 T 类型的值的 Optional 实例\n\n\n参数：value - any of T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例\n\n示例：原生 JavaScript  Optional.of(11);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(false)\n  }\n});\n\n"
        },
        {
          "title": "static ofNullable(value: T)",
          "url": "/manual/3.0/optional.html#static-ofnullablevalue-t",
          "content": "static ofNullable(value: T)\n类型：Function\n\n\n功能描述：如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\n参数：value - any as T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例，或空的 Optional 实例\n\n示例：原生 JavaScript  Optional.ofNullable('js');\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.ofNullable(11)\n  }\n});\n\n"
        },
        {
          "title": "static empty()",
          "url": "/manual/3.0/optional.html#static-empty",
          "content": "static empty()\n类型：Function\n\n\n功能描述：返回空的 Optional 实例\n\n\n参数：无\n\n\n返回值：Object as Optional 空的 Optional 实例\n\n示例：原生 JavaScript  Optional.empty();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: null Optional.empty()\n  }\n});\n\n"
        },
        {
          "title": "get()",
          "url": "/manual/3.0/optional.html#get",
          "content": "get()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\n参数：无\n\n\n返回值：any as T Optional 中包含这个值\n\n示例：原生 JavaScript  var optional = Optional.of(11);\n  var result = optional.get(); // 11\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.get() // 11\n  }\n});\n\n"
        },
        {
          "title": "orElse(other: T)",
          "url": "/manual/3.0/optional.html#orelseother-t",
          "content": "orElse(other: T)\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\n参数：other - any of T 任意类型的值\n\n\n返回值：any as T value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.orElse(\"abc\"); // abc\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(undefined)\n    const result = optional.orElse(false) // false\n  }\n});\n\n"
        },
        {
          "title": "isPresent()",
          "url": "/manual/3.0/optional.html#ispresent",
          "content": "isPresent()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n参数：无\n\n\n返回值：boolean value 不为 null 或 undefined，则返回 true；否则返回 false\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.isPresent(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.isPresent() // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Array 参考手册",
      "content": "",
      "url": "/manual/3.0/array.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/array.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisEmpty\n判断数组是否为空数组\n\n\nexists\n判断元素 item 是否在数组中\n\n\nfirst\n获取数组第一个元素\n\n\nlast\n获取数组最后一个元素\n\n\neach\n按顺序为数组中的每个元素调用一次函数\n\n\nsize\n获取数组大小\n\n\nmerge\n连接两个或多个数组\n\n\ncompact\n返回一个不包含 null/undefined 值元素的数组的新版本\n\n\nunique\n对数组的元素进行去重\n\n\nwithout\n返回不包括参数中任意一个指定值的数组\n\n\nclone\n克隆数组\n\n\nclear\n清空数组\n\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/3.0/array.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断数组是否为空数组\n\n\n参数：无\n\n\n返回值：boolean 数组为空，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = [].isEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['a', 'b', 'c'].isEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "exists(item: any)",
          "url": "/manual/3.0/array.html#existsitem-any",
          "content": "exists(item: any)\n类型：Function\n\n\n功能描述：判断元素 item 是否在数组中\n\n\n参数：item - any 待检测元素\n\n\n返回值：boolean 元素 item 是否在数组中返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = ['a', 'b'].exists('a'); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['1', '2'].exists(2) // false\n  }\n});\n\n"
        },
        {
          "title": "first()",
          "url": "/manual/3.0/array.html#first",
          "content": "first()\n类型：Function\n\n\n功能描述：获取数组第一个元素\n\n\n参数：无\n\n\n返回值：any 数组第一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].first(); // a\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].first() // 1\n  }\n});\n\n"
        },
        {
          "title": "last()",
          "url": "/manual/3.0/array.html#last",
          "content": "last()\n类型：Function\n\n\n功能描述：获取数组最后一个元素\n\n\n参数：无\n\n\n返回值：any 数组最后一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].last(); // b\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].last() // 2\n  }\n});\n\n"
        },
        {
          "title": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)",
          "url": "/manual/3.0/array.html#eachcallback-value-t,-index-number,-array-readonly-t[]-=>-void,-thisarg?-any",
          "content": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)\n类型：Function\n\n\n功能描述：按顺序为数组中的每个元素调用一次函数，forEach的别名\n\n\n参数：callback - (value: T, index: number, array: readonly T[]) => void as Function callback 为数组中的每个元素运行的函数，其中：value 为前元素的值，index 为当前元素的数组索引，array 为当前元素所属的数组对象\nany thisArg 可选。要传递给函数以用作其 \"this\" 值的值，如果此参数为空，则值 \"undefined\" 将作为其 \"this\" 值传递\n\n\n返回值：void\n\n示例：原生 JavaScript  ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n    })\n  }\n});\n\n"
        },
        {
          "title": "size()",
          "url": "/manual/3.0/array.html#size",
          "content": "size()\n类型：Function\n\n\n功能描述：获取数组大小\n\n\n参数：无\n\n\n返回值：number 数组大小\n\n示例：原生 JavaScript  var result = ['a', 'b'].size(); // 2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = [].size() // 0\n  }\n});\n\n"
        },
        {
          "title": "merge(...items: T[])",
          "url": "/manual/3.0/array.html#merge...items-t[]",
          "content": "merge(...items: T[])\n类型：Function\n\n\n功能描述：连接两个或多个数组\n\n\n参数：items - any as T 待连接的 T 类型的数组\n\n\n返回值：Array 已连接数组的副本\n\n示例：原生 JavaScript  var result = [1, 3].merge(2, 4); // [1, 3, 2, 4]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    console result: string[] = ['a', 'b'].merge('c', 'd') // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "compact()",
          "url": "/manual/3.0/array.html#compact",
          "content": "compact()\n类型：Function\n\n\n功能描述：返回一个不包含 null/undefined 值元素的数组的新版本\n\n\n参数：无\n\n\n返回值：Array 不包含 null/undefined 值元素的数组的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', null, 'c', 'd'].compact(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', null, 'c', 'd', undefined].compact() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "unique()",
          "url": "/manual/3.0/array.html#unique",
          "content": "unique()\n类型：Function\n\n\n功能描述：对数组的元素进行去重\n\n\n参数：无\n\n\n返回值：Array 数组元素进行去重后的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].unique(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'c', 'd'].unique() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "without(values: T[])",
          "url": "/manual/3.0/array.html#withoutvalues-t[]",
          "content": "without(values: T[])\n类型：Function\n\n\n功能描述：返回不包括参数中任意一个指定值的数组\n\n\n参数：values - any as T[] 排除值数组\n\n\n返回值：Array 不包括参数中任意一个指定值的数组\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b'); // [c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b') // [c, d]\n  }\n});\n\n"
        },
        {
          "title": "clone()",
          "url": "/manual/3.0/array.html#clone",
          "content": "clone()\n类型：Function\n\n\n功能描述：克隆数组\n\n\n参数：无\n\n\n返回值：Array 克隆结果\n\n示例：原生 JavaScript  var result = ['a', 'b'].clone(); // [a, b]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clone() // [a, b]\n  }\n});\n\n"
        },
        {
          "title": "clear()",
          "url": "/manual/3.0/array.html#clear",
          "content": "clear()\n类型：Function\n\n\n功能描述：清空数组\n\n\n参数：无\n\n\n返回值：Array 空数组\n\n示例：原生 JavaScript  var result = ['a', 'b'].clear(); // []\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clear() // []\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Date 参考手册",
      "content": "",
      "url": "/manual/3.0/date.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/date.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisLeapYear\n判断是否为闰年\n\n\ngetSeason\n获取季节\n\n\ngetDayOfYear\n获取年份中的第几天\n\n\ngetDaysOfYear\n获取年份总天数\n\n\nformat\n将日期时间格式化为字符串\n\n\n"
        },
        {
          "title": "isLeapYear()",
          "url": "/manual/3.0/date.html#isleapyear",
          "content": "isLeapYear()\n类型：Function\n\n\n功能描述：判断是否为闰年\n\n\n参数：无\n\n\n返回值：boolean 是闰年，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2000-04-11').isLeapYear() // false\n  }\n});\n\n"
        },
        {
          "title": "getSeason()",
          "url": "/manual/3.0/date.html#getseason",
          "content": "getSeason()\n类型：Function\n\n\n功能描述：获取季节\n\n\n参数：无\n\n\n返回值：number 依次返回 0 至 3 的整数，表示春季、夏季、秋季、冬季\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // 0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2022-01-11').isLeapYear() // 3\n  }\n});\n\n"
        },
        {
          "title": "getDayOfYear()",
          "url": "/manual/3.0/date.html#getdayofyear",
          "content": "getDayOfYear()\n类型：Function\n\n\n功能描述：获取年份中的第几天\n\n\n参数：无\n\n\n返回值：number 年份中的第几天\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDayOfYear(); // 42\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2022-03-01').getDayOfYear(); // 61\n  }\n});\n\n"
        },
        {
          "title": "getDaysOfYear()",
          "url": "/manual/3.0/date.html#getdaysofyear",
          "content": "getDaysOfYear()\n类型：Function\n\n\n功能描述：获取年份总天数\n\n\n参数：无\n\n\n返回值：number 年份总天数\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDaysOfYear(); // 365\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2020-02-11').getDaysOfYear() // 366\n  }\n});\n\n"
        },
        {
          "title": "format(format: string)",
          "url": "/manual/3.0/date.html#formatformat-string",
          "content": "format(format: string)\n类型：Function\n\n\n功能描述：将日期时间格式化为字符串\n\n\n参数：format - String format 格式字符串\n  y - 年\n\n  n - 季度（1 到 4）\n\n  N - 季度名称\n\n  A - 季度中文名称\n\n  M - 月\n\n  f - 月（Jan 到 Dec）\n\n  F - 月（January 到 December）\n\n  C - 月，中文名称\n\n  d - 日\n\n  Y - 年份中的第几天（0 到 365）\n\n  T - 月份有几天（28 到 30）\n\n  j - 每月天数后面的英文后缀（st，nd，rd 或者 th）\n\n  e - 星期几，数字表示，0（表示星期天）到 6（表示星期六）\n\n  E - 星期几，数字表示，1（表示星期一）到 7（表示星期天）\n\n  l - 星期几，文本表示，3 个字母（Mon 到 Sun）\n\n  L - 星期几，完整的文本格式（Sunday 到 Saturday）\n\n  w - 星期几，中文名称\n\n  W - 一月中第几个星期几\n\n  i - 月份中的第几周\n\n  o - 年份中的第几周\n\n  h - 小时(1~12)\n\n  H - 小时(0~23)\n\n  m - 分\n\n  s - 秒\n\n  S - 毫秒\n\n  a - 上午/下午标记\n\n  O - 与格林威治时间相差的小时数\n\n  P - 与格林威治时间相差的小时数，小时和分钟之间有冒号分隔\n  \n  Z - 时区\n\n\n\n返回值：string 格式化后的日期时间\n\n示例：原生 JavaScript  var result = new Date('2022-01-11').format(\"f-dd,yyyy\"); // Jan-11,2022\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Date('2022-01-11').format(\"f-dd,yy\"); // Jan-11,22\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Document 参考手册",
      "content": "",
      "url": "/manual/3.0/document.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/3.0/document.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nfullScreenEnabled\n检测当前浏览器是否支持全屏模式\n\n\nfullScreenElement\n检测当前文档中正在以全屏模式显示的 Element 节点\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nhttpCookie\nCookie 对象操作\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/3.0/document.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrequestFullscreen\n请求进入全屏模式\n\n\nexitFullscreen\n退出全屏模式\n\n\n"
        },
        {
          "title": "readonly fullScreen",
          "url": "/manual/3.0/document.html#readonly-fullscreen",
          "content": "readonly fullScreen\n类型：Property\n\n\n功能描述：检测当前文档是否全屏\n\n\n参数：无\n\n\n返回值：boolean 当前文档是否全屏，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreen;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreen;\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenEnabled",
          "url": "/manual/3.0/document.html#readonly-fullscreenenabled",
          "content": "readonly fullScreenEnabled\n类型：Property\n\n\n功能描述：检测当前浏览器是否支持全屏模式\n\n\n返回值：boolean 当前浏览器是否支持全屏模式返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenEnabled;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenEnabled\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenElement",
          "url": "/manual/3.0/document.html#readonly-fullscreenelement",
          "content": "readonly fullScreenElement\n类型：Property\n\n\n功能描述：检测当前文档中正在以全屏模式显示的 Element 节点\n\n\n返回值：boolean 当前文档中正在以全屏模式显示的 Element 节点，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenElement;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenElement\n  }\n});\n\n"
        },
        {
          "title": "requestFullscreen()",
          "url": "/manual/3.0/document.html#requestfullscreen",
          "content": "requestFullscreen()\n类型：Function\n\n\n功能描述：请求进入全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.requestFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.requestFullscreen()\n  }\n});\n\n"
        },
        {
          "title": "exitFullscreen()",
          "url": "/manual/3.0/document.html#exitfullscreen",
          "content": "exitFullscreen()\n类型：Function\n\n\n功能描述：退出全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.exitFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.exitFullscreen()\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Cookie 参考手册",
      "content": "",
      "url": "/manual/3.0/cookie.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/cookie.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\n[set](cookie.html#setname-string,-value-string-\n-null-\n\n\nget\n获取 Cookie\n\n\ndelete\n删除 Cookie\n\n\n"
        },
        {
          "title": "set(name: string, value: string | null | undefined, options?: CookieOptions)",
          "url": "/manual/3.0/cookie.html#setname-string,-value-string-|-null-|-undefined,-options?-cookieoptions",
          "content": "set(name: string, value: string | null | undefined, options?: CookieOptions)\n类型：Function\n\n\n功能描述：设置 Cookie\n\n\n参数：name - string Cookie 名称\n           value - string | null | undefined Cookie 值\n           options - CookieOptions Cookie 选项\n\n\n返回值：string Cookie 字符串\n\n示例：原生 JavaScript  var result = document.httpCookie.set(\"name\", \"测试\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.set(\"name\", \"测试\", {path: '/', domain: '*.test.com'})\n  }\n});\n\n"
        },
        {
          "title": "get(name: string)",
          "url": "/manual/3.0/cookie.html#getname-string",
          "content": "get(name: string)\n类型：Function\n\n\n功能描述：获取 Cookie 值\n\n\n参数：name - string Cookie 名称\n\n\n返回值：string | null Cookie 值\n\n示例：原生 JavaScript  var result = document.httpCookie.get(\"name\")\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string | null = document.httpCookie.get(\"name\")\n  }\n});\n\n"
        },
        {
          "title": "delete(name: string, options?: CookieOptions)",
          "url": "/manual/3.0/cookie.html#deletename-string,-options?-cookieoptions",
          "content": "delete(name: string, options?: CookieOptions)\n类型：Function\n\n\n功能描述：删除 Cookie\n\n\n参数：name - string Cookie 名称\n           options - CookieOptions Cookie 选项\n\n\n返回值：无\n\n示例：原生 JavaScript  var result = document.httpCookie.delete(\"name\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    document.httpCookie.delete(\"name\", \"测试\", {domain: '*.test.com'})\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/3.0/function.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/function.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nargumentNames\n获取函数参数名称\n\n\ndelay\n延时执行函数\n\n\n"
        },
        {
          "title": "argumentNames(...args: any)",
          "url": "/manual/3.0/function.html#argumentnames...args-any",
          "content": "argumentNames(...args: any)\n类型：Function\n\n\n功能描述：获取函数参数名称\n\n\n参数：args - any 1个或多个任意类型的可变参数可变参数\n\n\n返回值：string[] | null 函数参数名称列表\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n\n  }\n  var result = fn.argumentNames();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: String) {\n\n    }\n    const result: string[] | null = fn.argumentNames()\n  }\n});\n\n"
        },
        {
          "title": "delay(timeout: number)",
          "url": "/manual/3.0/function.html#delaytimeout-number",
          "content": "delay(timeout: number)\n类型：Function\n\n\n功能描述：延时执行函数\n\n\n参数：timeout - number 延时时间（单位：秒）\n\n\n返回值：any 函数返回值\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n    return a + b + c;\n  }\n  var result = fn.delay(3)\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: number) {\n      return a ? b : c\n    }\n    const result: any = fn.delay(3)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/3.0/math.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/math.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrand\n延时执行函数\n\n\n"
        },
        {
          "title": "rand(min: number, max?: number)",
          "url": "/manual/3.0/math.html#randmin-number,-max?-number",
          "content": "rand(min: number, max?: number)\n类型：Function\n\n\n功能描述：产生一个指定范围内的随机数\n\n\n参数：min - number 返回的最低值\n           max - number 返回的最高值\n\n\n返回值：number 随机数\n\n示例：原生 JavaScript  var result = Math.rand(1, 5); //\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = Math.rand(1, 5)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Number 参考手册",
      "content": "",
      "url": "/manual/3.0/number.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/number.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntoPaddedString\n延时执行函数\n\n\nisOdd\n判断数字是否为奇数\n\n\nisEven\n判断数字是否为偶数\n\n\nisBetween\n判断一个数字是否在另两个数字之间\n\n\n"
        },
        {
          "title": "toPaddedString(length: number, radix: number)",
          "url": "/manual/3.0/number.html#topaddedstringlength-number,-radix-number",
          "content": "toPaddedString(length: number, radix: number)\n类型：Function\n\n\n功能描述：数字填充\n\n\n参数：length - number 长度\n           radix - number 进制\n\n\n返回值：string 填充后的字符串数字\n\n示例：原生 JavaScript  var result = new Number(5).toPaddedString(12, 2); // 0000000000101\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Number(5).toPaddedString(12, 8) // 0000000000005\n  }\n});\n\n"
        },
        {
          "title": "isOdd(num: number)",
          "url": "/manual/3.0/number.html#isoddnum-number",
          "content": "isOdd(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为奇数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为奇数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isOdd(255); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // false\n  }\n});\n\n"
        },
        {
          "title": "isEven(num: number)",
          "url": "/manual/3.0/number.html#isevennum-number",
          "content": "isEven(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为偶数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为偶数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isEven(255); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // true\n  }\n});\n\n"
        },
        {
          "title": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)",
          "url": "/manual/3.0/number.html#isbetweennum-number,-min-number,-max-number,-match?-boolean-|-undefined",
          "content": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)\n类型：Function\n\n\n功能描述：判断一个数字是否在另两个数字之间\n\n\n参数：num - number 需要判断的数字\n           min - number 最小值\n           max - number 最大值\n           match - boolean | undefined 是否包含最小值或最大值\n\n\n返回值：boolean 数字是否在另两个数字之间，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isBetween(4, 3, 5); // true\n  var result = Number.isBetween(4, 4, 5); // false\n  var result = Number.isBetween(4, 4, 5, true); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isBetween(4, 3, 5) // true\n    const result: boolean = Number.isBetween(4, 4, 5) // false\n    const result: boolean = Number.isBetween(4, 4, 5, true) // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Object 参考手册",
      "content": "",
      "url": "/manual/3.0/object.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/object.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntype\n获取对象数据类型\n\n\nrawType\n获取对象原始数据类型\n\n\nisObject\n判断对象是否为 object 类型\n\n\nisPlainObject\n判断对象是否为简单 object 类型\n\n\nisMap\n判断对象是否为 Map 类型\n\n\nisSet\n判断对象是否为 Set 类型\n\n\nisSymbol\n判断对象是否为 Symbol\n\n\nisPromise\n判断对象是否为 Promise\n\n\nisPrimitive\n判断对象是否为原始类型\n\n\nisFunction\n判断对象是否为函数\n\n\nisArray\n判断对象是否为数组\n\n\nisString\n判断对象是否为字符串对象\n\n\nisNumber\n判断对象是否为数字对象\n\n\nisBoolean\n判断对象是否为布尔对象\n\n\nisRegExp\n判断对象是否为正则对象\n\n\nisFile\n判断对象是否为文件对象\n\n\nisWindow\n判断对象是否为 windows 对象\n\n\nisElement\n判断对象是否为 Element\n\n\nisEvent\n判断对象是否为事件对象\n\n\nisNull\n判断对象是否为 null 对象\n\n\nisUndefined\n判断对象是否为未定义\n\n\nisUndefinedOrNull\n判断对象是否为未定义或 null\n\n\nequals\n深度判断两个对象是否相等\n\n\nclone\n克隆对象\n\n\nomit\n克隆对象，但支持删除指定属性\n\n\n"
        },
        {
          "title": "type(obj: any)",
          "url": "/manual/3.0/object.html#typeobj-any",
          "content": "type(obj: any)\n类型：Function\n\n\n功能描述：获取对象数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 对象数据类型\n\n示例：原生 JavaScript  var result = Object.type(true); // boolean\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // number\n  }\n});\n\n"
        },
        {
          "title": "rawType(obj: any)",
          "url": "/manual/3.0/object.html#rawtypeobj-any",
          "content": "rawType(obj: any)\n类型：Function\n\n\n功能描述：获取对象原始数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 原始数据类型\n\n示例：原生 JavaScript  var result = Object.type(\"4.4\"); // String\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // Number\n  }\n});\n\n"
        },
        {
          "title": "isObject(obj: any)",
          "url": "/manual/3.0/object.html#isobjectobj-any",
          "content": "isObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isObject(\"1\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isObject(new String(\"1\")) // true\n  }\n});\n\n"
        },
        {
          "title": "isPlainObject(obj: any)",
          "url": "/manual/3.0/object.html#isplainobjectobj-any",
          "content": "isPlainObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为简单 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为简单 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPlainObject(new String(\"1\")); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPlainObject({\"a\":\"A\"}) // true\n  }\n});\n\n"
        },
        {
          "title": "isMap(obj: any)",
          "url": "/manual/3.0/object.html#ismapobj-any",
          "content": "isMap(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Map 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isMap(new Map()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isMap({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSet(obj: any)",
          "url": "/manual/3.0/object.html#issetobj-any",
          "content": "isSet(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Set 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSet(new Set()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSet({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSymbol(obj: any)",
          "url": "/manual/3.0/object.html#issymbolobj-any",
          "content": "isSymbol(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Symbol\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Symbol 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSymbol(Symbol('a')); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSymbol({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPromise(obj: any)",
          "url": "/manual/3.0/object.html#ispromiseobj-any",
          "content": "isPromise(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Promise\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Promise 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPromise(new Promise(function(){})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPrimitive(obj: any)",
          "url": "/manual/3.0/object.html#isprimitiveobj-any",
          "content": "isPrimitive(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为原始类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为原始类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPrimitive(11); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isFunction(obj: any)",
          "url": "/manual/3.0/object.html#isfunctionobj-any",
          "content": "isFunction(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为函数\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为函数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFunction(location.href); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isFunction(\"a\".replace) // true\n  }\n});\n\n"
        },
        {
          "title": "isArray(obj: any)",
          "url": "/manual/3.0/object.html#isarrayobj-any",
          "content": "isArray(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数组\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数组返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isArray([1, 2]); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isArray({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isString(obj: any)",
          "url": "/manual/3.0/object.html#isstringobj-any",
          "content": "isString(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为字符串对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为字符串返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isString(1); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isString(\"1\") // true\n  }\n});\n\n"
        },
        {
          "title": "isNumber(obj: any)",
          "url": "/manual/3.0/object.html#isnumberobj-any",
          "content": "isNumber(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数字对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数字对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNumber(1.0); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNumber(\"1.0\") // false\n  }\n});\n\n"
        },
        {
          "title": "isBoolean(obj: any)",
          "url": "/manual/3.0/object.html#isbooleanobj-any",
          "content": "isBoolean(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为布尔对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为布尔对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isBoolean(false); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isBoolean(1) // false\n  }\n});\n\n"
        },
        {
          "title": "isRegExp(obj: any)",
          "url": "/manual/3.0/object.html#isregexpobj-any",
          "content": "isRegExp(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为正则对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为正则对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isRegExp(/^[a-z]$/); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isRegExp('/^[a-z]$/') // false\n  }\n});\n\n"
        },
        {
          "title": "isFile(obj: any)",
          "url": "/manual/3.0/object.html#isfileobj-any",
          "content": "isFile(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为文件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为文件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFile(new File(['text1', 'text2'], 'test.txt', {type: 'text/plain'})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = bject.isFile(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isWindow(obj: any)",
          "url": "/manual/3.0/object.html#iswindowobj-any",
          "content": "isWindow(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 windows 对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 windows 对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isWindow(window); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isWindow(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isElement(obj: any)",
          "url": "/manual/3.0/object.html#iselementobj-any",
          "content": "isElement(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Element\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 Element 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isElement(document); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isElement(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "isEvent(obj: any)",
          "url": "/manual/3.0/object.html#iseventobj-any",
          "content": "isEvent(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为事件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为事件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isEvent(document.onclick); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isEvent(document.onclick) // false\n  }\n});\n\n"
        },
        {
          "title": "isNull(obj: any)",
          "url": "/manual/3.0/object.html#isnullobj-any",
          "content": "isNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNull(null); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNull(\"A\") // false\n  }\n});\n\n"
        },
        {
          "title": "isUndefined(obj: any)",
          "url": "/manual/3.0/object.html#isundefinedobj-any",
          "content": "isUndefined(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefined(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefined(b) // true\n  }\n});\n\n"
        },
        {
          "title": "isUndefinedOrNull(obj: any)",
          "url": "/manual/3.0/object.html#isundefinedornullobj-any",
          "content": "isUndefinedOrNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义或 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义或 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefinedOrNull(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefinedOrNull(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "equals(obj1: any, obj2: any)",
          "url": "/manual/3.0/object.html#equalsobj1-any,-obj2-any",
          "content": "equals(obj1: any, obj2: any)\n类型：Function\n\n\n功能描述：深度判断两个对象是否相等\n\n\n参数：obj1 - any 一个对象\n           obj2 - any 用于和 obj1 比较的对象\n\n\n返回值：boolean 当两个对象相等时，返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = Object.equals(\"a\", \"A\"); // false\n  var result = Object.equals(\"a\", \"a\"); // true\n  var result = Object.equals(1, 1.0); // true\n  var result = Object.equals([1], [1.0]); // true\n  var result = Object.equals([1], [1.0, 1.1]); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  const result: boolean = Object.equals(\"a\", \"A\") // false\n  const result: boolean = Object.equals(\"a\", \"a\") // true\n  const result: boolean = Object.equals(1, 1.0) // true\n  const result: boolean = Object.equals([1], [1.0]) // true\n  const result: boolean = Object.equals([1], [1.0, 1.1]) // false\n  }\n});\n\n"
        },
        {
          "title": "clone(obj: any)",
          "url": "/manual/3.0/object.html#cloneobj-any",
          "content": "clone(obj: any)\n类型：Function\n\n\n功能描述：克隆对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var result = Object.clone({\"a\": \"A\"}); // {\"a\": \"A\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = Object.clone({\"a\":\"A\"}) // {\"a\": \"A\"}\n  }\n});\n\n"
        },
        {
          "title": "omit(obj: T, ...fields: K[])",
          "url": "/manual/3.0/object.html#omit<t-extends-object,-k-extends-keyof-t>obj-t,-...fields-k[]",
          "content": "omit(obj: T, ...fields: K[])\n类型：Function\n\n\n功能描述：克隆对象，但支持删除指定属性\n\n\n参数：obj - object 任意对象\n           fields - K[] 需要删除的属性\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var source = {\n    id: 1,\n    name: 'buession',\n    year: 2023\n  };\n  var result = Object.omit(source, \"id\", \"year\"); // {\"name\": \"buession\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  const source = {\n    id: 1,\n    name: 'buession',\n    year: 2023\n  };\n  const result = Object.omit(source, \"id\", \"year\") // {\"name\": \"buession\"}\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "String 参考手册",
      "content": "",
      "url": "/manual/3.0/string.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/string.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nexists\n判断字符串是否存在\n\n\nequals\n判断字符串是否相等\n\n\nequalsIgnoreCase\n判断字符串是否相等，不考虑大小写\n\n\nisEmpty\n判断是否为空字符串\n\n\nisNotEmpty\n判断是否不为空字符串\n\n\nisBlank\n判断是否为空白字符串\n\n\nrepeat\n重复一个字符串\n\n\nleft\n截取字符串左边边指定数目的字符串\n\n\nright\n截取字符串右边指定数目的字符串\n\n\ntruncation\n截取字符串，超出部分用 truncation 替代\n\n\nltrim\n删除字符串开头的空白字符\n\n\nrtrim\n删除字符串结尾的空白字符\n\n\nstartsWith\n判断字符串是否以给定的字符串开头\n\n\nendsWith\n判断字符串是否以给定的字符串结尾\n\n\nlcfirst\n首字母小写\n\n\nucfirst\n首字母大写\n\n\nescapeHTML\n将 HTML 编码\n\n\nunescapeHTML\n将 HTML 实体字符解码\n\n\nstripTag\n删除 HTML 标签\n\n\nstripTags\n批量删除 HTML 标签\n\n\nstripScripts\n删除 script 标签\n\n\ntoArray\n将字符串转换为数组\n\n\ninspect\n返回一个数组的字符串表示形式\n\n\nhashCode\n获取字符串 hash code\n\n\nrandom\n生成随机字符串\n\n\n"
        },
        {
          "title": "exists(str: string)",
          "url": "/manual/3.0/string.html#existsstr-string",
          "content": "exists(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否存在\n\n\n参数：str - string 子字符串\n\n\n返回值：boolean 子字符串存在返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"ABC\".exists(\"A\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"ABC\".exists(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equals(str: string | undefined | null)",
          "url": "/manual/3.0/string.html#equalsstr-string-|-undefined-|-null",
          "content": "equals(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equals(new String(\"A\")); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"A\".equals(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equalsIgnoreCase(str: string | undefined | null)",
          "url": "/manual/3.0/string.html#equalsignorecasestr-string-|-undefined-|-null",
          "content": "equalsIgnoreCase(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等，不考虑大小写\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equalsIgnoreCase(\"a\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"a\").equalsIgnoreCase(\"1\") // false\n  }\n});\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/3.0/string.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断是否为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串为空，即长度为 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isEmpty(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isEmpty() // true\n  }\n});\n\n"
        },
        {
          "title": "isNotEmpty()",
          "url": "/manual/3.0/string.html#isnotempty",
          "content": "isNotEmpty()\n类型：Function\n\n\n功能描述：判断是否不为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串不为空，即长度大于 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isNotEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isNotEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "isBlank()",
          "url": "/manual/3.0/string.html#isblank",
          "content": "isBlank()\n类型：Function\n\n\n功能描述：判断是否为空白字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串全为空白字符串（即：空格、回车、Tag 制表位、非打印字符）返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isBlank(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\\t\\n\").isBlank() // true\n  }\n});\n\n"
        },
        {
          "title": "repeat(count: number)",
          "url": "/manual/3.0/string.html#repeatcount-number",
          "content": "repeat(count: number)\n类型：Function\n\n\n功能描述：重复一个字符串\n\n\n参数：count - number 重复次数\n\n\n返回值：string 重复后的字符串\n\n示例：原生 JavaScript  var result = \"A\".repeat(3); // AAA\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".repeat(3) // AbcAbcAbc\n  }\n});\n\n"
        },
        {
          "title": "left(length: number)",
          "url": "/manual/3.0/string.html#leftlength-number",
          "content": "left(length: number)\n类型：Function\n\n\n功能描述：截取字符串左边边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".left(1); // A\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".left(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "right(length: number)",
          "url": "/manual/3.0/string.html#rightlength-number",
          "content": "right(length: number)\n类型：Function\n\n\n功能描述：截截取字符串右边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".right(1); // c\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".right(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "truncation(length: number, truncation?: string = \"...\")",
          "url": "/manual/3.0/string.html#truncationlength-number,-truncation?-string-=-\"...\"",
          "content": "truncation(length: number, truncation?: string = \"...\")\n类型：Function\n\n\n功能描述：截取字符串，超出部分用 truncation 替代\n\n\n参数：length - number 截取长度\n\n             truncation - string 替换字符串返回值：string 截取后的字符串；实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length\n示例：原生 JavaScript  var result = \"Abc\".truncation(1, \"...\"); // A...\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".truncation(6, \"...\") // Abc\n  }\n});\n\n"
        },
        {
          "title": "ltrim()",
          "url": "/manual/3.0/string.html#ltrim",
          "content": "ltrim()\n类型：Function\n\n\n功能描述：删除字符串开头的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最左边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".ltrim(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").ltrim() // \"Abc \"\n  }\n});\n\n"
        },
        {
          "title": "rtrim()",
          "url": "/manual/3.0/string.html#rtrim",
          "content": "rtrim()\n类型：Function\n\n\n功能描述：删除字符串结尾的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最右边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".rtrim(); // \" Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").rtrim() // \" Abc\"\n  }\n});\n\n"
        },
        {
          "title": "startsWith(str: string)",
          "url": "/manual/3.0/string.html#startswithstr-string",
          "content": "startsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串开头\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串开头返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".startsWith(\"a\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").startsWith(\"a\") // true\n  }\n});\n\n"
        },
        {
          "title": "endsWith(str: string)",
          "url": "/manual/3.0/string.html#endswithstr-string",
          "content": "endsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串结尾\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串结尾返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".endsWith(\"C\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").endsWith(\"c\") // true\n  }\n});\n\n"
        },
        {
          "title": "lcfirst()",
          "url": "/manual/3.0/string.html#lcfirst",
          "content": "lcfirst()\n类型：Function\n\n\n功能描述：首字母小写\n\n\n参数：无\n\n\n返回值：string 首字母小写后的字符串\n\n示例：原生 JavaScript  var result = \"Abc\".lcfirst(); // \"abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"abc\"\n  }\n});\n\n"
        },
        {
          "title": "ucfirst()",
          "url": "/manual/3.0/string.html#ucfirst",
          "content": "ucfirst()\n类型：Function\n\n\n功能描述：首字母大写\n\n\n参数：无\n\n\n返回值：string 首字母大写后的字符串\n\n示例：原生 JavaScript  var result = \"abc\".ucfirst(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"Abc\"\n  }\n});\n\n"
        },
        {
          "title": "escapeHTML()",
          "url": "/manual/3.0/string.html#escapehtml",
          "content": "escapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 编码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 编码后的字符串\n\n示例：原生 JavaScript  var result = \"test\".escapeHTML(); // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"test\").lcfirst() // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n  }\n});\n\n"
        },
        {
          "title": "unescapeHTML()",
          "url": "/manual/3.0/string.html#unescapehtml",
          "content": "unescapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 实体字符解码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 解码后的字符串\n\n示例：原生 JavaScript  var result = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML() // test\n  }\n});\n\n"
        },
        {
          "title": "stripTag(tag: string)",
          "url": "/manual/3.0/string.html#striptagtag-string",
          "content": "stripTag(tag: string)\n类型：Function\n\n\n功能描述：删除 HTML 标签\n\n\n参数：tag - string 待删除标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"test\".stripTag(\"a\"); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"test\".stripTag(\"a\") // test\n  }\n});\n\n"
        },
        {
          "title": "stripTags(tag: string)",
          "url": "/manual/3.0/string.html#striptagstag-string",
          "content": "stripTags(tag: string)\n类型：Function\n\n\n功能描述：批量删除 HTML 标签\n\n\n参数：tag - string[] | string 删除指定的标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"testEM\".stripTags([\"a\", \"i\"]); // testEM\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"testEM\".stripTags([\"a\", \"i\"]) // testEM\n  }\n});\n\n"
        },
        {
          "title": "stripScripts()",
          "url": "/manual/3.0/string.html#stripscripts",
          "content": "stripScripts()\n类型：Function\n\n\n功能描述：删除 script 标签\n\n\n参数：无\n\n\n返回值：string 删除 script 标签后的字符串\n\n示例：原生 JavaScript  var result = 'alert(\"test\");test'.stripScripts(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = 'alert(\"test\");test'.stripScripts() // \n"
        },
        {
          "title": "toArray(delimiter: string)",
          "url": "/manual/3.0/string.html#toarraydelimiter-string",
          "content": "toArray(delimiter: string)\n类型：Function\n\n\n功能描述：将字符串转换为数组\n\n\n参数：delimiter - string 分隔字符\n\n\n返回值：string[] 字符串数组\n\n示例：原生 JavaScript  var result = \"a|b|c\".toArray('|'); // [ \"a\", \"b\", \"c\" ]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = \"a|b||c\".toArray('||') // [ \"a|b\", \"c\" ]\n  }\n});\n\n"
        },
        {
          "title": "inspect(useDoubleQuotes: boolean)",
          "url": "/manual/3.0/string.html#inspectusedoublequotes-boolean",
          "content": "inspect(useDoubleQuotes: boolean)\n类型：Function\n\n\n功能描述：返回一个数组的字符串表示形式\n\n\n参数：useDoubleQuotes - boolean 是否使用双引号引住\n\n\n返回值：string 数组的字符串表示形式\n\n示例：原生 JavaScript  var result = \"a|b|c\".inspect(true); // \\\"a|b|c\\\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"a|b|c\".inspect(false) // 'a|b|c'\n  }\n});\n\n"
        },
        {
          "title": "hashCode()",
          "url": "/manual/3.0/string.html#hashcode",
          "content": "hashCode()\n类型：Function\n\n\n功能描述：获取字符串 hash code\n\n\n参数：无\n\n\n返回值：number 字符串的 hash code\n\n示例：原生 JavaScript  var result = \"abc\".hashCode(); // 96354\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = \"abcABC\".hashCode() // 2870546592\n  }\n});\n\n"
        },
        {
          "title": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)",
          "url": "/manual/3.0/string.html#randomlength-number,-type?-randomtype-=-\"numeric\"-|-\"letter\"-|-\"letter_numeric\"-|-\"chinese\"-|-undefined",
          "content": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)\n类型：Function\n\n\n功能描述：生成随机字符串\n\n\n参数：length - number 生成字符串的长度\n\n             type - NUMERIC | LETTER | LETTER_NUMERIC | CHINESE | undefined 生成类型，可选参数，当未指定时为 LETTER_NUMERIC    NUMERIC      - 数字随机字符串\n    LETTER       - 英文随机字符串\n\n    LETTER_NUMERIC - 英文数字混合随机字符串\n\n    CHINESE      - 中文随机字符串\n返回值：string 随机字符串\n示例：原生 JavaScript  var result = String.random(6); // 1Diim2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = String.random(6, \"NUMERIC\") // 881773\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Window 参考手册",
      "content": "",
      "url": "/manual/3.0/window.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/3.0/window.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nbrowser\n浏览器信息对象\n\n\nlocation\nLocation 对象\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/3.0/window.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ncopy\n将字符串复制到剪贴板\n\n\ndelay\n延时执行方法\n\n\n"
        },
        {
          "title": "copy(str: string)",
          "url": "/manual/3.0/window.html#copystr-string",
          "content": "copy(str: string)\n类型：Function\n\n\n功能描述：将字符串复制到剪贴板\n\n\n参数：str - string 字符串\n\n\n返回值：无\n\n示例：原生 JavaScript  window.copy(\"这是要复制的字符串\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    window.copy(\"这是要复制的字符串\")\n  }\n});\n\n"
        },
        {
          "title": "delay(func: Function, wait?: number, ...args: any)",
          "url": "/manual/3.0/window.html#delayfunc-function,-wait?-number,-...args-any",
          "content": "delay(func: Function, wait?: number, ...args: any)\n类型：Function\n\n\n功能描述：延时执行\n\n\n参数：func - Function 方法\n             wait - number 延时时长（单位：毫秒）\n             args - any[] 方法参数\n\n\n返回值：any\n\n示例：原生 JavaScript  window.delay(function () {\n    location.href = \"/\";\n  }, 3000);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    window.delay(function () {\n      // code\n    });\n  }\n});\n\n"
        },
        {
          "title": "Browser",
          "url": "/manual/3.0/window.html#browser",
          "content": "Browser"
        },
        {
          "title": "Location",
          "url": "/manual/3.0/window.html#location",
          "content": "Location"
        }
      ]
    },
    {
      "title": "HttpCookie 参考手册",
      "content": "",
      "url": "/manual/3.0/browser.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/3.0/browser.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nuserAgent\n获取浏览器 User-Agent\n\n\nname\n获取浏览器应用程序名称\n\n\nisMobile\n是否为移动设备\n\n\nisChrome\n是否为 Chrome 浏览器\n\n\nisFirefox\n是否为 Firefox 浏览器\n\n\nisMozilla\n是否为 Mozilla 浏览器\n\n\nisMSIE\n是否为 IE 浏览器\n\n\nisOpera\n是否为 Opera 浏览器\n\n\nisSafari\n是否为 Safari 浏览器\n\n\nisNetscape\n是否为 Netscape 浏览器\n\n\n"
        },
        {
          "title": "readonly userAgent",
          "url": "/manual/3.0/browser.html#readonly-useragent",
          "content": "readonly userAgent\n类型：Property\n\n\n功能描述：获取浏览器 User-Agent，等价于 navigator.userAgent\n\n\n返回值：string 浏览器 User-Agent\n\n示例：原生 JavaScript  var result = window.browser.userAgent; // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n  }\n});\n\n"
        },
        {
          "title": "readonly name",
          "url": "/manual/3.0/browser.html#readonly-name",
          "content": "readonly name\n类型：Property\n\n\n功能描述：获取浏览器应用程序名称，等价于 navigator.appName\n\n\n返回值：string 浏览器应用程序名称\n\n示例：原生 JavaScript  var result = window.browser.name; // Netscape\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.name // Netscape\n  }\n});\n\n"
        },
        {
          "title": "readonly isMobile",
          "url": "/manual/3.0/browser.html#readonly-ismobile",
          "content": "readonly isMobile\n类型：Property\n\n\n功能描述：是否为移动设备，检测依据：User-Agent 中含有 Android、iPhone、iPod、Windows Phone、Mobile、Coolpad、mmp、SmartPhone、midp、wap、xoom、Symbian、J2ME、Blackberry、Wince 其中任意一个字符串\n\n\n返回值：boolean 是移动设备返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMobile\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMobile\n  }\n});\n\n"
        },
        {
          "title": "readonly isChrome",
          "url": "/manual/3.0/browser.html#readonly-ischrome",
          "content": "readonly isChrome\n类型：Property\n\n\n功能描述：是否为 Chrome 浏览器\n\n\n返回值：boolean 是 Chrome 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isChrome;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isChrome\n  }\n});\n\n"
        },
        {
          "title": "readonly isFirefox",
          "url": "/manual/3.0/browser.html#readonly-isfirefox",
          "content": "readonly isFirefox\n类型：Property\n\n\n功能描述：是否为 Firefox 浏览器\n\n\n返回值：boolean 是 Firefox 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isFirefox;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isFirefox\n  }\n});\n\n"
        },
        {
          "title": "readonly isMSIE",
          "url": "/manual/3.0/browser.html#readonly-ismsie",
          "content": "readonly isMSIE\n类型：Property\n\n\n功能描述：是否为 IE 浏览器\n\n\n返回值：boolean 是 IE 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMSIE;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMSIE\n  }\n});\n\n"
        },
        {
          "title": "readonly isOpera",
          "url": "/manual/3.0/browser.html#readonly-isopera",
          "content": "readonly isOpera\n类型：Property\n\n\n功能描述：是否为 Opera 浏览器\n\n\n返回值：boolean 是 Opera 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isOpera;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isOpera\n  }\n});\n\n"
        },
        {
          "title": "readonly isSafari",
          "url": "/manual/3.0/browser.html#readonly-issafari",
          "content": "readonly isSafari\n类型：Property\n\n\n功能描述：是否为 Safari 浏览器\n\n\n返回值：boolean 是 Safari 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isSafari;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isSafari\n  }\n});\n\n"
        },
        {
          "title": "readonly isNetscape",
          "url": "/manual/3.0/browser.html#readonly-isnetscape",
          "content": "readonly isNetscape\n类型：Property\n\n\n功能描述：是否为 Netscape 浏览器\n\n\n返回值：boolean 是 Netscape 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isNetscape;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isNetscape\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Location 参考手册",
      "content": "",
      "url": "/manual/3.0/location.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/3.0/location.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ngetParameters\n获取所有的请求参数及值\n\n\ngetParameter\n获取指定请求参数的值\n\n\n"
        },
        {
          "title": "getParameters()",
          "url": "/manual/3.0/location.html#getparameters",
          "content": "getParameters()\n类型：Function\n\n\n功能描述：获取所有的请求参数及值\n\n\n参数：无\n\n\n返回值：Record 当前请求 URL 中的所有的请求参数及值\n\n示例：原生 JavaScript  var result = location.getParameters();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Record = location.getParameters()\n  }\n});\n\n"
        },
        {
          "title": "getParameter(name: string)",
          "url": "/manual/3.0/location.html#getparametername-string",
          "content": "getParameter(name: string)\n类型：Function\n\n\n功能描述：获取指定请求参数的值\n\n\n参数：string 参数名称\n\n\n返回值：any 请求参数的值\n\n示例：原生 JavaScript  var result = location.getParameter(\"action\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = location.getParameter('action');\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "API",
      "content": "Buession Prototype API 包含以下目录：PrototypeTryOptionalArrayDateDocumentFunctionMathNumberObjectStringWindow",
      "url": "/manual/2.0/index.html",
      "children": []
    },
    {
      "title": "Prototype 参考手册",
      "content": "",
      "url": "/manual/2.0/prototype.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.0/prototype.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nversion\n获取 Buession Prototype 版本\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/2.0/prototype.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nemptyFunction\n执行一个空方法\n\n\nK\n返回参数传递的任意值\n\n\n"
        },
        {
          "title": "version",
          "url": "/manual/2.0/prototype.html#version",
          "content": "version\n类型：String\n\n\n功能描述：获取 Buession Prototype 版本\n\n\n返回值：Buession Prototype 版本\n\n示例：原生 JavaScript  var ver = Prototype.version;\n\nvue  \n    Prototype 版本：{Prototype.version}\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "emptyFunction()",
          "url": "/manual/2.0/prototype.html#emptyfunction",
          "content": "emptyFunction()\n类型：Function\n\n\n功能描述：执行一个空方法\n\n\n参数：无\n\n\n返回值：void\n\n示例：原生 JavaScript  Prototype.emptyFunction();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    Prototype.emptyFunction()\n  }\n});\n\n"
        },
        {
          "title": "K(x: any)",
          "url": "/manual/2.0/prototype.html#kx-any",
          "content": "K(x: any)\n类型：Function\n\n\n功能描述：返回参数传递的任意值\n\n\n参数：x - any 任意值\n\n\n返回值：any 参数传递的任意值\n\n示例：原生 JavaScript  var v = Prototype.K(object);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const v: any = Prototype.K(object)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Try 参考手册",
      "content": "",
      "url": "/manual/2.0/try.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/try.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nthese\n接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n"
        },
        {
          "title": "these(args: any[])",
          "url": "/manual/2.0/try.html#theseargs-any[]",
          "content": "these(args: any[])\n类型：Function\n\n\n功能描述：接收任意数目的函数作为参数，返回第一个执行成功的函数（未抛出异常的函数）的结果\n\n\n参数：args any[] 一个或多个 function 作为参数\n\n\n返回值：any 任意函数参数执行结果\n\n示例：原生 JavaScript  var result = Try.these(function(){\n\n    },\n\n    function() {\n\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result:any = Try.these(function(){\n\n      },\n\n      function() {\n\n    })\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Optional 参考手册",
      "content": "Optional 类是一个可以为 null 或 undefined 的容器对象，如果值 value 存在则 isPresent() 方法会返回 true，调用 get() 方法会返回 value 的值。其设计思想，参考 java8 的 Optional使用方式，在构造函数中传入任意类型值；Optional 提供很多有用的方法，这样我们就不用显式进行 null 值和 undefined 的检测。",
      "url": "/manual/2.0/optional.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/optional.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nof\n返回一个指定 T 类型的值的 Optional 实例\n\n\nofNullable\n如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\nempty\n返回空的 Optional 实例\n\n\nget\n如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\norElse\n如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\nisPresent\n如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n  var optional = new Optional(any value);\n\n"
        },
        {
          "title": "static of(value: T)",
          "url": "/manual/2.0/optional.html#static-ofvalue-t",
          "content": "static of(value: T)\n类型：Function\n\n\n功能描述：返回一个指定 T 类型的值的 Optional 实例\n\n\n参数：value - any of T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例\n\n示例：原生 JavaScript  Optional.of(11);\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(false)\n  }\n});\n\n"
        },
        {
          "title": "static ofNullable(value: T)",
          "url": "/manual/2.0/optional.html#static-ofnullablevalue-t",
          "content": "static ofNullable(value: T)\n类型：Function\n\n\n功能描述：如果为非 null 或 undefined，返回 Optional 描述的指定值的实例，否则返回空的 Optional 实例\n\n\n参数：value - any as T 任意类型的值\n\n\n返回值：Object T 类型的值的 Optional 实例，或空的 Optional 实例\n\n示例：原生 JavaScript  Optional.ofNullable('js');\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.ofNullable(11)\n  }\n});\n\n"
        },
        {
          "title": "static empty()",
          "url": "/manual/2.0/optional.html#static-empty",
          "content": "static empty()\n类型：Function\n\n\n功能描述：返回空的 Optional 实例\n\n\n参数：无\n\n\n返回值：Object as Optional 空的 Optional 实例\n\n示例：原生 JavaScript  Optional.empty();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: null Optional.empty()\n  }\n});\n\n"
        },
        {
          "title": "get()",
          "url": "/manual/2.0/optional.html#get",
          "content": "get()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则抛出异常\n\n\n参数：无\n\n\n返回值：any as T Optional 中包含这个值\n\n示例：原生 JavaScript  var optional = Optional.of(11);\n  var result = optional.get(); // 11\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.get() // 11\n  }\n});\n\n"
        },
        {
          "title": "orElse(other: T)",
          "url": "/manual/2.0/optional.html#orelseother-t",
          "content": "orElse(other: T)\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n\n参数：other - any of T 任意类型的值\n\n\n返回值：any as T value 不为 null 或 undefined，则返回 value 的值；否则返回 other\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.orElse(\"abc\"); // abc\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: boolean = Optional.of(undefined)\n    const result = optional.orElse(false) // false\n  }\n});\n\n"
        },
        {
          "title": "isPresent()",
          "url": "/manual/2.0/optional.html#ispresent",
          "content": "isPresent()\n类型：Function\n\n\n功能描述：如果 value 不为 null 或 undefined，则返回 true；否则返回 false\n\n\n参数：无\n\n\n返回值：boolean value 不为 null 或 undefined，则返回 true；否则返回 false\n\n示例：原生 JavaScript  var optional = Optional.of(null);\n  var result = optional.isPresent(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const optional: number = Optional.of(11)\n    const result = optional.isPresent() // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Array 参考手册",
      "content": "",
      "url": "/manual/2.0/array.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/array.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisEmpty\n判断数组是否为空数组\n\n\nexists\n判断元素 item 是否在数组中\n\n\nfirst\n获取数组第一个元素\n\n\nlast\n获取数组最后一个元素\n\n\neach\n按顺序为数组中的每个元素调用一次函数\n\n\nsize\n获取数组大小\n\n\nmerge\n连接两个或多个数组\n\n\ncompact\n返回一个不包含 null/undefined 值元素的数组的新版本\n\n\nunique\n对数组的元素进行去重\n\n\nwithout\n返回不包括参数中任意一个指定值的数组\n\n\nclone\n克隆数组\n\n\nclear\n清空数组\n\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/2.0/array.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断数组是否为空数组\n\n\n参数：无\n\n\n返回值：boolean 数组为空，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = [].isEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['a', 'b', 'c'].isEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "exists(item: any)",
          "url": "/manual/2.0/array.html#existsitem-any",
          "content": "exists(item: any)\n类型：Function\n\n\n功能描述：判断元素 item 是否在数组中\n\n\n参数：item - any 待检测元素\n\n\n返回值：boolean 元素 item 是否在数组中返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = ['a', 'b'].exists('a'); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = ['1', '2'].exists(2) // false\n  }\n});\n\n"
        },
        {
          "title": "first()",
          "url": "/manual/2.0/array.html#first",
          "content": "first()\n类型：Function\n\n\n功能描述：获取数组第一个元素\n\n\n参数：无\n\n\n返回值：any 数组第一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].first(); // a\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].first() // 1\n  }\n});\n\n"
        },
        {
          "title": "last()",
          "url": "/manual/2.0/array.html#last",
          "content": "last()\n类型：Function\n\n\n功能描述：获取数组最后一个元素\n\n\n参数：无\n\n\n返回值：any 数组最后一个元素\n\n示例：原生 JavaScript  var result = ['a', 'b'].last(); // b\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = [1, 2].last() // 2\n  }\n});\n\n"
        },
        {
          "title": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)",
          "url": "/manual/2.0/array.html#eachcallback-value-t,-index-number,-array-readonly-t[]-=>-void,-thisarg?-any",
          "content": "each(callback: (value: T, index: number, array: readonly T[]) => void, thisArg?: any)\n类型：Function\n\n\n功能描述：按顺序为数组中的每个元素调用一次函数，forEach的别名\n\n\n参数：callback - (value: T, index: number, array: readonly T[]) => void as Function callback 为数组中的每个元素运行的函数，其中：value 为前元素的值，index 为当前元素的数组索引，array 为当前元素所属的数组对象\nany thisArg 可选。要传递给函数以用作其 \"this\" 值的值，如果此参数为空，则值 \"undefined\" 将作为其 \"this\" 值传递\n\n\n返回值：void\n\n示例：原生 JavaScript  ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n  });\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    ['a', 'b'].each(function (currentValue) {\n      console.log(currentValue)\n    })\n  }\n});\n\n"
        },
        {
          "title": "size()",
          "url": "/manual/2.0/array.html#size",
          "content": "size()\n类型：Function\n\n\n功能描述：获取数组大小\n\n\n参数：无\n\n\n返回值：number 数组大小\n\n示例：原生 JavaScript  var result = ['a', 'b'].size(); // 2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = [].size() // 0\n  }\n});\n\n"
        },
        {
          "title": "merge(...items: T[])",
          "url": "/manual/2.0/array.html#merge...items-t[]",
          "content": "merge(...items: T[])\n类型：Function\n\n\n功能描述：连接两个或多个数组\n\n\n参数：items - any as T 待连接的 T 类型的数组\n\n\n返回值：Array 已连接数组的副本\n\n示例：原生 JavaScript  var result = [1, 3].merge(2, 4); // [1, 3, 2, 4]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    console result: string[] = ['a', 'b'].merge('c', 'd') // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "compact()",
          "url": "/manual/2.0/array.html#compact",
          "content": "compact()\n类型：Function\n\n\n功能描述：返回一个不包含 null/undefined 值元素的数组的新版本\n\n\n参数：无\n\n\n返回值：Array 不包含 null/undefined 值元素的数组的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', null, 'c', 'd'].compact(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', null, 'c', 'd', undefined].compact() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "unique()",
          "url": "/manual/2.0/array.html#unique",
          "content": "unique()\n类型：Function\n\n\n功能描述：对数组的元素进行去重\n\n\n参数：无\n\n\n返回值：Array 数组元素进行去重后的新版本\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].unique(); // [a, b, c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'c', 'd'].unique() // [a, b, c, d]\n  }\n});\n\n"
        },
        {
          "title": "without(values: T[])",
          "url": "/manual/2.0/array.html#withoutvalues-t[]",
          "content": "without(values: T[])\n类型：Function\n\n\n功能描述：返回不包括参数中任意一个指定值的数组\n\n\n参数：values - any as T[] 排除值数组\n\n\n返回值：Array 不包括参数中任意一个指定值的数组\n\n示例：原生 JavaScript  var result = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b'); // [c, d]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b', 'c', 'd', 'b', 'd'].without('a', 'b') // [c, d]\n  }\n});\n\n"
        },
        {
          "title": "clone()",
          "url": "/manual/2.0/array.html#clone",
          "content": "clone()\n类型：Function\n\n\n功能描述：克隆数组\n\n\n参数：无\n\n\n返回值：Array 克隆结果\n\n示例：原生 JavaScript  var result = ['a', 'b'].clone(); // [a, b]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clone() // [a, b]\n  }\n});\n\n"
        },
        {
          "title": "clear()",
          "url": "/manual/2.0/array.html#clear",
          "content": "clear()\n类型：Function\n\n\n功能描述：清空数组\n\n\n参数：无\n\n\n返回值：Array 空数组\n\n示例：原生 JavaScript  var result = ['a', 'b'].clear(); // []\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = ['a', 'b'].clear() // []\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Date 参考手册",
      "content": "",
      "url": "/manual/2.0/date.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/date.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisLeapYear\n判断是否为闰年\n\n\ngetSeason\n获取季节\n\n\ngetDayOfYear\n获取年份中的第几天\n\n\ngetDaysOfYear\n获取年份总天数\n\n\nformat\n将日期时间格式化为字符串\n\n\n"
        },
        {
          "title": "isLeapYear()",
          "url": "/manual/2.0/date.html#isleapyear",
          "content": "isLeapYear()\n类型：Function\n\n\n功能描述：判断是否为闰年\n\n\n参数：无\n\n\n返回值：boolean 是闰年，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2000-04-11').isLeapYear() // false\n  }\n});\n\n"
        },
        {
          "title": "getSeason()",
          "url": "/manual/2.0/date.html#getseason",
          "content": "getSeason()\n类型：Function\n\n\n功能描述：获取季节\n\n\n参数：无\n\n\n返回值：number 依次返回 0 至 3 的整数，表示春季、夏季、秋季、冬季\n\n示例：原生 JavaScript  var result = new Date('2000-04-11').isLeapYear(); // 0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new Date('2022-01-11').isLeapYear() // 3\n  }\n});\n\n"
        },
        {
          "title": "getDayOfYear()",
          "url": "/manual/2.0/date.html#getdayofyear",
          "content": "getDayOfYear()\n类型：Function\n\n\n功能描述：获取年份中的第几天\n\n\n参数：无\n\n\n返回值：number 年份中的第几天\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDayOfYear(); // 42\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2022-03-01').getDayOfYear(); // 61\n  }\n});\n\n"
        },
        {
          "title": "getDaysOfYear()",
          "url": "/manual/2.0/date.html#getdaysofyear",
          "content": "getDaysOfYear()\n类型：Function\n\n\n功能描述：获取年份总天数\n\n\n参数：无\n\n\n返回值：number 年份总天数\n\n示例：原生 JavaScript  var result = new Date('2022-02-11').getDaysOfYear(); // 365\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = new Date('2020-02-11').getDaysOfYear() // 366\n  }\n});\n\n"
        },
        {
          "title": "format(format: string)",
          "url": "/manual/2.0/date.html#formatformat-string",
          "content": "format(format: string)\n类型：Function\n\n\n功能描述：将日期时间格式化为字符串\n\n\n参数：format - String format 格式字符串\n  y - 年\n\n  n - 季度（1 到 4）\n\n  N - 季度名称\n\n  A - 季度中文名称\n\n  M - 月\n\n  f - 月（Jan 到 Dec）\n\n  F - 月（January 到 December）\n\n  C - 月，中文名称\n\n  d - 日\n\n  Y - 年份中的第几天（0 到 365）\n\n  T - 月份有几天（28 到 30）\n\n  j - 每月天数后面的英文后缀（st，nd，rd 或者 th）\n\n  e - 星期几，数字表示，0（表示星期天）到 6（表示星期六）\n\n  E - 星期几，数字表示，1（表示星期一）到 7（表示星期天）\n\n  l - 星期几，文本表示，3 个字母（Mon 到 Sun）\n\n  L - 星期几，完整的文本格式（Sunday 到 Saturday）\n\n  w - 星期几，中文名称\n\n  W - 一月中第几个星期几\n\n  i - 月份中的第几周\n\n  o - 年份中的第几周\n\n  h - 小时(1~12)\n\n  H - 小时(0~23)\n\n  m - 分\n\n  s - 秒\n\n  S - 毫秒\n\n  a - 上午/下午标记\n\n  O - 与格林威治时间相差的小时数\n\n  P - 与格林威治时间相差的小时数，小时和分钟之间有冒号分隔\n  \n  Z - 时区\n\n\n\n返回值：string 格式化后的日期时间\n\n示例：原生 JavaScript  var result = new Date('2022-01-11').format(\"f-dd,yyyy\"); // Jan-11,2022\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Date('2022-01-11').format(\"f-dd,yy\"); // Jan-11,22\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Document 参考手册",
      "content": "",
      "url": "/manual/2.0/document.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.0/document.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nfullScreen\n检测当前文档是否全屏\n\n\nfullScreenEnabled\n检测当前浏览器是否支持全屏模式\n\n\nfullScreenElement\n检测当前文档中正在以全屏模式显示的 Element 节点\n\n\nfullScreen\n检测当前文档是否全屏\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/2.0/document.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrequestFullscreen\n请求进入全屏模式\n\n\nexitFullscreen\n退出全屏模式\n\n\n"
        },
        {
          "title": "readonly fullScreen",
          "url": "/manual/2.0/document.html#readonly-fullscreen",
          "content": "readonly fullScreen\n类型：Property\n\n\n功能描述：检测当前文档是否全屏\n\n\n参数：无\n\n\n返回值：boolean 当前文档是否全屏，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreen;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreen;\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenEnabled",
          "url": "/manual/2.0/document.html#readonly-fullscreenenabled",
          "content": "readonly fullScreenEnabled\n类型：Property\n\n\n功能描述：检测当前浏览器是否支持全屏模式\n\n\n返回值：boolean 当前浏览器是否支持全屏模式返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenEnabled;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenEnabled\n  }\n});\n\n"
        },
        {
          "title": "readonly fullScreenElement",
          "url": "/manual/2.0/document.html#readonly-fullscreenelement",
          "content": "readonly fullScreenElement\n类型：Property\n\n\n功能描述：检测当前文档中正在以全屏模式显示的 Element 节点\n\n\n返回值：boolean 当前文档中正在以全屏模式显示的 Element 节点，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = document.fullScreenElement;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = document.fullScreenElement\n  }\n});\n\n"
        },
        {
          "title": "requestFullscreen()",
          "url": "/manual/2.0/document.html#requestfullscreen",
          "content": "requestFullscreen()\n类型：Function\n\n\n功能描述：请求进入全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.requestFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.requestFullscreen()\n  }\n});\n\n"
        },
        {
          "title": "exitFullscreen()",
          "url": "/manual/2.0/document.html#exitfullscreen",
          "content": "exitFullscreen()\n类型：Function\n\n\n功能描述：退出全屏模式\n\n\n参数：无\n\n\n返回值：Promise Promise\n\n示例：原生 JavaScript  var result = document.exitFullscreen();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Promise = document.exitFullscreen()\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/2.0/function.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/function.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nargumentNames\n获取函数参数名称\n\n\ndelay\n延时执行函数\n\n\n"
        },
        {
          "title": "argumentNames(...args: any)",
          "url": "/manual/2.0/function.html#argumentnames...args-any",
          "content": "argumentNames(...args: any)\n类型：Function\n\n\n功能描述：获取函数参数名称\n\n\n参数：args - any 1个或多个任意类型的可变参数可变参数\n\n\n返回值：string[] | null 函数参数名称列表\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n\n  }\n  var result = fn.argumentNames();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: String) {\n\n    }\n    const result: string[] | null = fn.argumentNames()\n  }\n});\n\n"
        },
        {
          "title": "delay(timeout: number)",
          "url": "/manual/2.0/function.html#delaytimeout-number",
          "content": "delay(timeout: number)\n类型：Function\n\n\n功能描述：延时执行函数\n\n\n参数：timeout - number 延时时间（单位：秒）\n\n\n返回值：any 函数返回值\n\n示例：原生 JavaScript  var fn = function(a, b, c){\n    return a + b + c;\n  }\n  var result = fn.delay(3)\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const fn = function(a: boolean, b: number, c: number) {\n      return a ? b : c\n    }\n    const result: any = fn.delay(3)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Function 参考手册",
      "content": "",
      "url": "/manual/2.0/math.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/math.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nrand\n延时执行函数\n\n\n"
        },
        {
          "title": "rand(min: number, max?: number)",
          "url": "/manual/2.0/math.html#randmin-number,-max?-number",
          "content": "rand(min: number, max?: number)\n类型：Function\n\n\n功能描述：产生一个指定范围内的随机数\n\n\n参数：min - number 返回的最低值\n           max - number 返回的最高值\n\n\n返回值：number 随机数\n\n示例：原生 JavaScript  var result = Math.rand(1, 5); //\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = Math.rand(1, 5)\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Number 参考手册",
      "content": "",
      "url": "/manual/2.0/number.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/number.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntoPaddedString\n延时执行函数\n\n\nisOdd\n判断数字是否为奇数\n\n\nisEven\n判断数字是否为偶数\n\n\nisBetween\n判断一个数字是否在另两个数字之间\n\n\n"
        },
        {
          "title": "toPaddedString(length: number, radix: number)",
          "url": "/manual/2.0/number.html#topaddedstringlength-number,-radix-number",
          "content": "toPaddedString(length: number, radix: number)\n类型：Function\n\n\n功能描述：数字填充\n\n\n参数：length - number 长度\n           radix - number 进制\n\n\n返回值：string 填充后的字符串数字\n\n示例：原生 JavaScript  var result = new Number(5).toPaddedString(12, 2); // 0000000000101\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new Number(5).toPaddedString(12, 8) // 0000000000005\n  }\n});\n\n"
        },
        {
          "title": "isOdd(num: number)",
          "url": "/manual/2.0/number.html#isoddnum-number",
          "content": "isOdd(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为奇数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为奇数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isOdd(255); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // false\n  }\n});\n\n"
        },
        {
          "title": "isEven(num: number)",
          "url": "/manual/2.0/number.html#isevennum-number",
          "content": "isEven(num: number)\n类型：Function\n\n\n功能描述：判断数字是否为偶数\n\n\n参数：num - number 需要判断的数字\n\n\n返回值：boolean 数字是为偶数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isEven(255); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isOdd(256) // true\n  }\n});\n\n"
        },
        {
          "title": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)",
          "url": "/manual/2.0/number.html#isbetweennum-number,-min-number,-max-number,-match?-boolean-|-undefined",
          "content": "isBetween(num: number, min: number, max: number, match?: boolean | undefined)\n类型：Function\n\n\n功能描述：判断一个数字是否在另两个数字之间\n\n\n参数：num - number 需要判断的数字\n           min - number 最小值\n           max - number 最大值\n           match - boolean | undefined 是否包含最小值或最大值\n\n\n返回值：boolean 数字是否在另两个数字之间，返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Number.isBetween(4, 3, 5); // true\n  var result = Number.isBetween(4, 4, 5); // false\n  var result = Number.isBetween(4, 4, 5, true); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Number.isBetween(4, 3, 5) // true\n    const result: boolean = Number.isBetween(4, 4, 5) // false\n    const result: boolean = Number.isBetween(4, 4, 5, true) // true\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Object 参考手册",
      "content": "",
      "url": "/manual/2.0/object.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/object.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ntype\n获取对象数据类型\n\n\nrawType\n获取对象原始数据类型\n\n\nisObject\n判断对象是否为 object 类型\n\n\nisPlainObject\n判断对象是否为简单 object 类型\n\n\nisMap\n判断对象是否为 Map 类型\n\n\nisSet\n判断对象是否为 Set 类型\n\n\nisSymbol\n判断对象是否为 Symbol\n\n\nisPromise\n判断对象是否为 Promise\n\n\nisPrimitive\n判断对象是否为原始类型\n\n\nisFunction\n判断对象是否为函数\n\n\nisArray\n判断对象是否为数组\n\n\nisString\n判断对象是否为字符串对象\n\n\nisNumber\n判断对象是否为数字对象\n\n\nisBoolean\n判断对象是否为布尔对象\n\n\nisRegExp\n判断对象是否为正则对象\n\n\nisFile\n判断对象是否为文件对象\n\n\nisWindow\n判断对象是否为 windows 对象\n\n\nisElement\n判断对象是否为 Element\n\n\nisEvent\n判断对象是否为事件对象\n\n\nisNull\n判断对象是否为 null 对象\n\n\nisUndefined\n判断对象是否为未定义\n\n\nisUndefinedOrNull\n判断对象是否为未定义或 null\n\n\nclone\n克隆对象\n\n\n"
        },
        {
          "title": "type(obj: any)",
          "url": "/manual/2.0/object.html#typeobj-any",
          "content": "type(obj: any)\n类型：Function\n\n\n功能描述：获取对象数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 对象数据类型\n\n示例：原生 JavaScript  var result = Object.type(true); // boolean\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // number\n  }\n});\n\n"
        },
        {
          "title": "rawType(obj: any)",
          "url": "/manual/2.0/object.html#rawtypeobj-any",
          "content": "rawType(obj: any)\n类型：Function\n\n\n功能描述：获取对象原始数据类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：string 原始数据类型\n\n示例：原生 JavaScript  var result = Object.type(\"4.4\"); // String\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = Object.type(4.4) // Number\n  }\n});\n\n"
        },
        {
          "title": "isObject(obj: any)",
          "url": "/manual/2.0/object.html#isobjectobj-any",
          "content": "isObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isObject(\"1\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isObject(new String(\"1\")) // true\n  }\n});\n\n"
        },
        {
          "title": "isPlainObject(obj: any)",
          "url": "/manual/2.0/object.html#isplainobjectobj-any",
          "content": "isPlainObject(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为简单 object 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为简单 object 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPlainObject(new String(\"1\")); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPlainObject({\"a\":\"A\"}) // true\n  }\n});\n\n"
        },
        {
          "title": "isMap(obj: any)",
          "url": "/manual/2.0/object.html#ismapobj-any",
          "content": "isMap(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Map 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isMap(new Map()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isMap({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSet(obj: any)",
          "url": "/manual/2.0/object.html#issetobj-any",
          "content": "isSet(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Map 类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Set 类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSet(new Set()); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSet({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isSymbol(obj: any)",
          "url": "/manual/2.0/object.html#issymbolobj-any",
          "content": "isSymbol(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Symbol\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Symbol 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isSymbol(Symbol('a')); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isSymbol({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPromise(obj: any)",
          "url": "/manual/2.0/object.html#ispromiseobj-any",
          "content": "isPromise(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Promise\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为 Promise 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPromise(new Promise(function(){})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isPrimitive(obj: any)",
          "url": "/manual/2.0/object.html#isprimitiveobj-any",
          "content": "isPrimitive(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为原始类型\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为原始类型返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isPrimitive(11); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isPromise({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isFunction(obj: any)",
          "url": "/manual/2.0/object.html#isfunctionobj-any",
          "content": "isFunction(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为函数\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为函数返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFunction(location.href); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isFunction(\"a\".replace) // true\n  }\n});\n\n"
        },
        {
          "title": "isArray(obj: any)",
          "url": "/manual/2.0/object.html#isarrayobj-any",
          "content": "isArray(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数组\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数组返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isArray([1, 2]); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isArray({\"a\":\"A\"}) // false\n  }\n});\n\n"
        },
        {
          "title": "isString(obj: any)",
          "url": "/manual/2.0/object.html#isstringobj-any",
          "content": "isString(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为字符串对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为字符串返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isString(1); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isString(\"1\") // true\n  }\n});\n\n"
        },
        {
          "title": "isNumber(obj: any)",
          "url": "/manual/2.0/object.html#isnumberobj-any",
          "content": "isNumber(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为数字对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为数字对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNumber(1.0); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNumber(\"1.0\") // false\n  }\n});\n\n"
        },
        {
          "title": "isBoolean(obj: any)",
          "url": "/manual/2.0/object.html#isbooleanobj-any",
          "content": "isBoolean(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为布尔对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象为布尔对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isBoolean(false); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isBoolean(1) // false\n  }\n});\n\n"
        },
        {
          "title": "isRegExp(obj: any)",
          "url": "/manual/2.0/object.html#isregexpobj-any",
          "content": "isRegExp(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为正则对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为正则对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isRegExp(/^[a-z]$/); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isRegExp('/^[a-z]$/') // false\n  }\n});\n\n"
        },
        {
          "title": "isFile(obj: any)",
          "url": "/manual/2.0/object.html#isfileobj-any",
          "content": "isFile(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为文件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为文件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isFile(new File(['text1', 'text2'], 'test.txt', {type: 'text/plain'})); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = bject.isFile(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isWindow(obj: any)",
          "url": "/manual/2.0/object.html#iswindowobj-any",
          "content": "isWindow(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 windows 对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 windows 对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isWindow(window); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isWindow(document) // false\n  }\n});\n\n"
        },
        {
          "title": "isElement(obj: any)",
          "url": "/manual/2.0/object.html#iselementobj-any",
          "content": "isElement(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 Element\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 Element 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isElement(document); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isElement(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "isEvent(obj: any)",
          "url": "/manual/2.0/object.html#iseventobj-any",
          "content": "isEvent(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为事件对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为事件对象返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isEvent(document.onclick); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isEvent(document.onclick) // false\n  }\n});\n\n"
        },
        {
          "title": "isNull(obj: any)",
          "url": "/manual/2.0/object.html#isnullobj-any",
          "content": "isNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isNull(null); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isNull(\"A\") // false\n  }\n});\n\n"
        },
        {
          "title": "isUndefined(obj: any)",
          "url": "/manual/2.0/object.html#isundefinedobj-any",
          "content": "isUndefined(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefined(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefined(b) // true\n  }\n});\n\n"
        },
        {
          "title": "isUndefinedOrNull(obj: any)",
          "url": "/manual/2.0/object.html#isundefinedornullobj-any",
          "content": "isUndefinedOrNull(obj: any)\n类型：Function\n\n\n功能描述：判断对象是否为未定义或 null\n\n\n参数：obj - any 对象变量\n\n\n返回值：boolean 对象是否为未定义或 null 返回 true；否则返回 false\n\n示例：原生 JavaScript  var result = Object.isUndefinedOrNull(a); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = Object.isUndefinedOrNull(document.body) // false\n  }\n});\n\n"
        },
        {
          "title": "clone(obj: any)",
          "url": "/manual/2.0/object.html#cloneobj-any",
          "content": "clone(obj: any)\n类型：Function\n\n\n功能描述：克隆对象\n\n\n参数：obj - any 对象变量\n\n\n返回值：any 新对象实例\n\n示例：原生 JavaScript  var result = Object.clone({\"a\": \"A\"}); // {\"a\": \"A\"}\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = Object.clone({\"a\":\"A\"}) // {\"a\": \"A\"}\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "String 参考手册",
      "content": "",
      "url": "/manual/2.0/string.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/string.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nexists\n判断字符串是否存在\n\n\nequals\n判断字符串是否相等\n\n\nequalsIgnoreCase\n判断字符串是否相等，不考虑大小写\n\n\nisEmpty\n判断是否为空字符串\n\n\nisNotEmpty\n判断是否不为空字符串\n\n\nisBlank\n判断是否为空白字符串\n\n\nrepeat\n重复一个字符串\n\n\nleft\n截取字符串左边边指定数目的字符串\n\n\nright\n截取字符串右边指定数目的字符串\n\n\ntruncation\n截取字符串，超出部分用 truncation 替代\n\n\nltrim\n删除字符串开头的空白字符\n\n\nrtrim\n删除字符串结尾的空白字符\n\n\nstartsWith\n判断字符串是否以给定的字符串开头\n\n\nendsWith\n判断字符串是否以给定的字符串结尾\n\n\nlcfirst\n首字母小写\n\n\nucfirst\n首字母大写\n\n\nescapeHTML\n将 HTML 编码\n\n\nunescapeHTML\n将 HTML 实体字符解码\n\n\nstripTag\n删除 HTML 标签\n\n\nstripTags\n批量删除 HTML 标签\n\n\nstripScripts\n删除 script 标签\n\n\ntoArray\n将字符串转换为数组\n\n\ninspect\n返回一个数组的字符串表示形式\n\n\nhashCode\n获取字符串 hash code\n\n\nrandom\n生成随机字符串\n\n\n"
        },
        {
          "title": "exists(str: string)",
          "url": "/manual/2.0/string.html#existsstr-string",
          "content": "exists(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否存在\n\n\n参数：str - string 子字符串\n\n\n返回值：boolean 子字符串存在返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"ABC\".exists(\"A\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"ABC\".exists(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equals(str: string | undefined | null)",
          "url": "/manual/2.0/string.html#equalsstr-string-|-undefined-|-null",
          "content": "equals(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equals(new String(\"A\")); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = \"A\".equals(\"a\") // false\n  }\n});\n\n"
        },
        {
          "title": "equalsIgnoreCase(str: string | undefined | null)",
          "url": "/manual/2.0/string.html#equalsignorecasestr-string-|-undefined-|-null",
          "content": "equalsIgnoreCase(str: string | undefined | null)\n类型：Function\n\n\n功能描述：判断字符串是否相等，不考虑大小写\n\n\n参数：str - string | undefined | null 与此 String 进行比较的对象\n\n\n返回值：boolean 字符串相等返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"A\".equalsIgnoreCase(\"a\"); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"a\").equalsIgnoreCase(\"1\") // false\n  }\n});\n\n"
        },
        {
          "title": "isEmpty()",
          "url": "/manual/2.0/string.html#isempty",
          "content": "isEmpty()\n类型：Function\n\n\n功能描述：判断是否为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串为空，即长度为 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isEmpty(); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isEmpty() // true\n  }\n});\n\n"
        },
        {
          "title": "isNotEmpty()",
          "url": "/manual/2.0/string.html#isnotempty",
          "content": "isNotEmpty()\n类型：Function\n\n\n功能描述：判断是否不为空字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串不为空，即长度大于 0 返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isNotEmpty(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\").isNotEmpty() // false\n  }\n});\n\n"
        },
        {
          "title": "isBlank()",
          "url": "/manual/2.0/string.html#isblank",
          "content": "isBlank()\n类型：Function\n\n\n功能描述：判断是否为空白字符串\n\n\n参数：无\n\n\n返回值：boolean 字符串全为空白字符串（即：空格、回车、Tag 制表位、非打印字符）返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \" \".isBlank(); // true\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"\\t\\n\").isBlank() // true\n  }\n});\n\n"
        },
        {
          "title": "repeat(count: number)",
          "url": "/manual/2.0/string.html#repeatcount-number",
          "content": "repeat(count: number)\n类型：Function\n\n\n功能描述：重复一个字符串\n\n\n参数：count - number 重复次数\n\n\n返回值：string 重复后的字符串\n\n示例：原生 JavaScript  var result = \"A\".repeat(3); // AAA\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".repeat(3) // AbcAbcAbc\n  }\n});\n\n"
        },
        {
          "title": "left(length: number)",
          "url": "/manual/2.0/string.html#leftlength-number",
          "content": "left(length: number)\n类型：Function\n\n\n功能描述：截取字符串左边边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".left(1); // A\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".left(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "right(length: number)",
          "url": "/manual/2.0/string.html#rightlength-number",
          "content": "right(length: number)\n类型：Function\n\n\n功能描述：截截取字符串右边指定数目的字符串\n\n\n参数：length - number 截取长度\n\n\n返回值：string 子字符串，length 如果为负数，则返回空字符串\n\n示例：原生 JavaScript  var result = \"Abc\".right(1); // c\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".right(-1) // \"\"\n  }\n});\n\n"
        },
        {
          "title": "truncation(length: number, truncation: string)",
          "url": "/manual/2.0/string.html#truncationlength-number,-truncation-string",
          "content": "truncation(length: number, truncation: string)\n类型：Function\n\n\n功能描述：截取字符串，超出部分用 truncation 替代\n\n\n参数：length - number 截取长度\n\n             truncation - string 替换字符串返回值：string 截取后的字符串；实际截取长度：当 length 小于等于 truncation 的长度时为，length；当 length 大于 truncation 的长度时为，length - truncation.length\n示例：原生 JavaScript  var result = \"Abc\".truncation(1, \"...\"); // A...\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"Abc\".truncation(6, \"...\") // Abc\n  }\n});\n\n"
        },
        {
          "title": "ltrim()",
          "url": "/manual/2.0/string.html#ltrim",
          "content": "ltrim()\n类型：Function\n\n\n功能描述：删除字符串开头的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最左边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".ltrim(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").ltrim() // \"Abc \"\n  }\n});\n\n"
        },
        {
          "title": "rtrim()",
          "url": "/manual/2.0/string.html#rtrim",
          "content": "rtrim()\n类型：Function\n\n\n功能描述：删除字符串结尾的空白字符（包括：空格、制表位、换行以及其它非打印字符）\n\n\n参数：无\n\n\n返回值：string 删除了字符串最右边的空白字符的字符串\n\n示例：原生 JavaScript  var result = \" Abc\".rtrim(); // \" Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\" Abc \").rtrim() // \" Abc\"\n  }\n});\n\n"
        },
        {
          "title": "startsWith(str: string)",
          "url": "/manual/2.0/string.html#startswithstr-string",
          "content": "startsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串开头\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串开头返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".startsWith(\"a\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").startsWith(\"a\") // true\n  }\n});\n\n"
        },
        {
          "title": "endsWith(str: string)",
          "url": "/manual/2.0/string.html#endswithstr-string",
          "content": "endsWith(str: string)\n类型：Function\n\n\n功能描述：判断字符串是否以给定的字符串结尾\n\n\n参数：str - string 搜索的字符串\n\n\n返回值：boolean 字符串是否以给定的字符串结尾返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = \"Abc\".endsWith(\"C\"); // false\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = new String(\"aBc\").endsWith(\"c\") // true\n  }\n});\n\n"
        },
        {
          "title": "lcfirst()",
          "url": "/manual/2.0/string.html#lcfirst",
          "content": "lcfirst()\n类型：Function\n\n\n功能描述：首字母小写\n\n\n参数：无\n\n\n返回值：string 首字母小写后的字符串\n\n示例：原生 JavaScript  var result = \"Abc\".lcfirst(); // \"abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"abc\"\n  }\n});\n\n"
        },
        {
          "title": "ucfirst()",
          "url": "/manual/2.0/string.html#ucfirst",
          "content": "ucfirst()\n类型：Function\n\n\n功能描述：首字母大写\n\n\n参数：无\n\n\n返回值：string 首字母大写后的字符串\n\n示例：原生 JavaScript  var result = \"abc\".ucfirst(); // \"Abc\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"abc\").lcfirst() // \"Abc\"\n  }\n});\n\n"
        },
        {
          "title": "escapeHTML()",
          "url": "/manual/2.0/string.html#escapehtml",
          "content": "escapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 编码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 编码后的字符串\n\n示例：原生 JavaScript  var result = \"test\".escapeHTML(); // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = new String(\"test\").lcfirst() // &lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\n  }\n});\n\n"
        },
        {
          "title": "unescapeHTML()",
          "url": "/manual/2.0/string.html#unescapehtml",
          "content": "unescapeHTML()\n类型：Function\n\n\n功能描述：将 HTML 实体字符解码，参考：https://www.w3school.com.cn/html/html_entities.asp\n\n\n参数：无\n\n\n返回值：string 解码后的字符串\n\n示例：原生 JavaScript  var result = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"&lt;a href='https://www.domain.com'&gt;test&lt;/a&gt;\".unescapeHTML() // test\n  }\n});\n\n"
        },
        {
          "title": "stripTag(tag: string)",
          "url": "/manual/2.0/string.html#striptagtag-string",
          "content": "stripTag(tag: string)\n类型：Function\n\n\n功能描述：删除 HTML 标签\n\n\n参数：tag - string 待删除标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"test\".stripTag(\"a\"); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"test\".stripTag(\"a\") // test\n  }\n});\n\n"
        },
        {
          "title": "stripTags(tag: string)",
          "url": "/manual/2.0/string.html#striptagstag-string",
          "content": "stripTags(tag: string)\n类型：Function\n\n\n功能描述：批量删除 HTML 标签\n\n\n参数：tag - string[] | string 删除指定的标签\n\n\n返回值：string 删除标签后的字符串\n\n示例：原生 JavaScript  var result = \"testEM\".stripTags([\"a\", \"i\"]); // testEM\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"testEM\".stripTags([\"a\", \"i\"]) // testEM\n  }\n});\n\n"
        },
        {
          "title": "stripScripts()",
          "url": "/manual/2.0/string.html#stripscripts",
          "content": "stripScripts()\n类型：Function\n\n\n功能描述：删除 script 标签\n\n\n参数：无\n\n\n返回值：string 删除 script 标签后的字符串\n\n示例：原生 JavaScript  var result = 'alert(\"test\");test'.stripScripts(); // test\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = 'alert(\"test\");test'.stripScripts() // \n"
        },
        {
          "title": "toArray(delimiter: string)",
          "url": "/manual/2.0/string.html#toarraydelimiter-string",
          "content": "toArray(delimiter: string)\n类型：Function\n\n\n功能描述：将字符串转换为数组\n\n\n参数：delimiter - string 分隔字符\n\n\n返回值：string[] 字符串数组\n\n示例：原生 JavaScript  var result = \"a|b|c\".toArray('|'); // [ \"a\", \"b\", \"c\" ]\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string[] = \"a|b||c\".toArray('||') // [ \"a|b\", \"c\" ]\n  }\n});\n\n"
        },
        {
          "title": "inspect(useDoubleQuotes: boolean)",
          "url": "/manual/2.0/string.html#inspectusedoublequotes-boolean",
          "content": "inspect(useDoubleQuotes: boolean)\n类型：Function\n\n\n功能描述：返回一个数组的字符串表示形式\n\n\n参数：useDoubleQuotes - boolean 是否使用双引号引住\n\n\n返回值：string 数组的字符串表示形式\n\n示例：原生 JavaScript  var result = \"a|b|c\".inspect(true); // \\\"a|b|c\\\"\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = \"a|b|c\".inspect(false) // 'a|b|c'\n  }\n});\n\n"
        },
        {
          "title": "hashCode()",
          "url": "/manual/2.0/string.html#hashcode",
          "content": "hashCode()\n类型：Function\n\n\n功能描述：获取字符串 hash code\n\n\n参数：无\n\n\n返回值：number 字符串的 hash code\n\n示例：原生 JavaScript  var result = \"abc\".hashCode(); // 96354\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: number = \"abcABC\".hashCode() // 2870546592\n  }\n});\n\n"
        },
        {
          "title": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)",
          "url": "/manual/2.0/string.html#randomlength-number,-type?-randomtype-=-\"numeric\"-|-\"letter\"-|-\"letter_numeric\"-|-\"chinese\"-|-undefined",
          "content": "random(length: number, type?: RandomType = \"NUMERIC\" | \"LETTER\" | \"LETTER_NUMERIC\" | \"CHINESE\" | undefined)\n类型：Function\n\n\n功能描述：生成随机字符串\n\n\n参数：length - number 生成字符串的长度\n\n             type - NUMERIC | LETTER | LETTER_NUMERIC | CHINESE | undefined 生成类型，可选参数，当未指定时为 LETTER_NUMERIC    NUMERIC      - 数字随机字符串\n    LETTER       - 英文随机字符串\n\n    LETTER_NUMERIC - 英文数字混合随机字符串\n\n    CHINESE      - 中文随机字符串\n返回值：string 随机字符串\n示例：原生 JavaScript  var result = String.random(6); // 1Diim2\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: string = String.random(6, \"NUMERIC\") // 881773\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Window 参考手册",
      "content": "",
      "url": "/manual/2.0/window.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.0/window.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nbrowser\n浏览器信息对象\n\n\nlocation\nLocation 对象\n\n\n"
        },
        {
          "title": "方法",
          "url": "/manual/2.0/window.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ncopy\n将字符串复制到剪贴板\n\n\n"
        },
        {
          "title": "copy(str: string)",
          "url": "/manual/2.0/window.html#copystr-string",
          "content": "copy(str: string)\n类型：Function\n\n\n功能描述：将字符串复制到剪贴板\n\n\n参数：str - string 字符串\n\n\n返回值：无\n\n示例：原生 JavaScript  window.copy(\"这是要复制的字符串\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    window.copy(\"这是要复制的字符串\")\n  }\n});\n\n"
        },
        {
          "title": "Browser",
          "url": "/manual/2.0/window.html#browser",
          "content": "Browser"
        },
        {
          "title": "Location",
          "url": "/manual/2.0/window.html#location",
          "content": "Location"
        }
      ]
    },
    {
      "title": "Browser 参考手册",
      "content": "",
      "url": "/manual/2.0/browser.html",
      "children": [
        {
          "title": "属性",
          "url": "/manual/2.0/browser.html#属性",
          "content": "属性\n\n属性\n描述\n\n\n\n\nuserAgent\n获取浏览器 User-Agent\n\n\nname\n获取浏览器应用程序名称\n\n\nisMobile\n是否为移动设备\n\n\nisChrome\n是否为 Chrome 浏览器\n\n\nisFirefox\n是否为 Firefox 浏览器\n\n\nisMozilla\n是否为 Mozilla 浏览器\n\n\nisMSIE\n是否为 IE 浏览器\n\n\nisOpera\n是否为 Opera 浏览器\n\n\nisSafari\n是否为 Safari 浏览器\n\n\nisNetscape\n是否为 Netscape 浏览器\n\n\n"
        },
        {
          "title": "readonly userAgent",
          "url": "/manual/2.0/browser.html#readonly-useragent",
          "content": "readonly userAgent\n类型：Property\n\n\n功能描述：获取浏览器 User-Agent，等价于 navigator.userAgent\n\n\n返回值：string 浏览器 User-Agent\n\n示例：原生 JavaScript  var result = window.browser.userAgent; // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0\n  }\n});\n\n"
        },
        {
          "title": "readonly name",
          "url": "/manual/2.0/browser.html#readonly-name",
          "content": "readonly name\n类型：Property\n\n\n功能描述：获取浏览器应用程序名称，等价于 navigator.appName\n\n\n返回值：string 浏览器应用程序名称\n\n示例：原生 JavaScript  var result = window.browser.name; // Netscape\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: String = window.browser.name // Netscape\n  }\n});\n\n"
        },
        {
          "title": "readonly isMobile",
          "url": "/manual/2.0/browser.html#readonly-ismobile",
          "content": "readonly isMobile\n类型：Property\n\n\n功能描述：是否为移动设备，检测依据：User-Agent 中含有 Android、iPhone、iPod、Windows Phone、Mobile、Coolpad、mmp、SmartPhone、midp、wap、xoom、Symbian、J2ME、Blackberry、Wince 其中任意一个字符串\n\n\n返回值：boolean 是移动设备返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMobile\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMobile\n  }\n});\n\n"
        },
        {
          "title": "readonly isChrome",
          "url": "/manual/2.0/browser.html#readonly-ischrome",
          "content": "readonly isChrome\n类型：Property\n\n\n功能描述：是否为 Chrome 浏览器\n\n\n返回值：boolean 是 Chrome 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isChrome;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isChrome\n  }\n});\n\n"
        },
        {
          "title": "readonly isFirefox",
          "url": "/manual/2.0/browser.html#readonly-isfirefox",
          "content": "readonly isFirefox\n类型：Property\n\n\n功能描述：是否为 Firefox 浏览器\n\n\n返回值：boolean 是 Firefox 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isFirefox;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isFirefox\n  }\n});\n\n"
        },
        {
          "title": "readonly isMSIE",
          "url": "/manual/2.0/browser.html#readonly-ismsie",
          "content": "readonly isMSIE\n类型：Property\n\n\n功能描述：是否为 IE 浏览器\n\n\n返回值：boolean 是 IE 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isMSIE;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isMSIE\n  }\n});\n\n"
        },
        {
          "title": "readonly isOpera",
          "url": "/manual/2.0/browser.html#readonly-isopera",
          "content": "readonly isOpera\n类型：Property\n\n\n功能描述：是否为 Opera 浏览器\n\n\n返回值：boolean 是 Opera 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isOpera;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isOpera\n  }\n});\n\n"
        },
        {
          "title": "readonly isSafari",
          "url": "/manual/2.0/browser.html#readonly-issafari",
          "content": "readonly isSafari\n类型：Property\n\n\n功能描述：是否为 Safari 浏览器\n\n\n返回值：boolean 是 Safari 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isSafari;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isSafari\n  }\n});\n\n"
        },
        {
          "title": "readonly isNetscape",
          "url": "/manual/2.0/browser.html#readonly-isnetscape",
          "content": "readonly isNetscape\n类型：Property\n\n\n功能描述：是否为 Netscape 浏览器\n\n\n返回值：boolean 是 Netscape 浏览器返回 true；否则，返回 false\n\n示例：原生 JavaScript  var result = window.browser.isNetscape;\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: boolean = window.browser.isNetscape\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "Location 参考手册",
      "content": "",
      "url": "/manual/2.0/location.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/2.0/location.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\ngetParameters\n获取所有的请求参数及值\n\n\ngetParameter\n获取指定请求参数的值\n\n\n"
        },
        {
          "title": "getParameters()",
          "url": "/manual/2.0/location.html#getparameters",
          "content": "getParameters()\n类型：Function\n\n\n功能描述：获取所有的请求参数及值\n\n\n参数：无\n\n\n返回值：Record 当前请求 URL 中的所有的请求参数及值\n\n示例：原生 JavaScript  var result = location.getParameters();\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: Record = location.getParameters()\n  }\n});\n\n"
        },
        {
          "title": "getParameter(name: string)",
          "url": "/manual/2.0/location.html#getparametername-string",
          "content": "getParameter(name: string)\n类型：Function\n\n\n功能描述：获取指定请求参数的值\n\n\n参数：string 参数名称\n\n\n返回值：any 请求参数的值\n\n示例：原生 JavaScript  var result = location.getParameter(\"action\");\n\nvue  \n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n    const result: any = location.getParameter('action');\n  }\n});\n\n"
        }
      ]
    }
  ]
}