# 更新日志

## [v2.1.0](https://github.com/buession/buession-prototype/releases/tag/2.1.0)（2023-01-18）

### ⭐ 新特性

- Document 增加 httpCookie 属性，用于操作 cookie


## [v2.0.2](https://github.com/buession/buession-prototype/releases/tag/2.0.2)（2022-10-01）

### 🐞 BUG 修复

- 修复 Date.format 秒钟取值错误的问题
- 修复 Date.format 12 小时时制的 BUG


## [v2.0.1](https://github.com/buession/buession-prototype/releases/tag/2.0.1)（2022-07-08）

### ⭐ 新特性

- String 增加非空判断方法：isNotEmpty

### 🐞 BUG 修复

- 修复 Object.isSymbol 异常
- 修复 String.stripTag 删除标签不准备的 BUG
- 修复 String.equalsIgnoreCase BUG


### 废弃

- 废弃 Number 对象 toColorPart 方法


## [v2.0.0](https://github.com/buession/buession-prototype/releases/tag/2.0.0)（2022-02-09）

### 优化

- 增加 eslint 代码检测
- 修改全局类注册到 window 方式


## [v1.1.2](https://github.com/buession/buession-prototype/releases/tag/1.1.2)（2022-01-07）

### 🐞 BUG 修复

- document、windows Object.defineProperty 定义的属性 can't redefine non-configurable property BUG


## [v1.1.1](https://github.com/buession/buession-prototype/releases/tag/1.1.1)（2021-12-30）


### ⭐ 新特性

- 数组去重方法
- 判断对象是否为 Map 类型方法
- 判断对象是否为 Set 类型方法