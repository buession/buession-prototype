# 更新日志


## [v3.0.1](https://github.com/buession/buession-prototype/releases/tag/3.0.1)（2025-03-17）

### 🐞 BUG 修复

- 修复 Array.compact 返回错误的值


## [v3.0.0](https://github.com/buession/buession-prototype/releases/tag/3.0.0)（2024-11-20）

### ⭐ 新特性

- Windows 增加方法 delay，延时执行方法


### 🔔 变化

- String.truncation truncation 参数为非必须


## [v2.2.2](https://github.com/buession/buession-prototype/releases/tag/2.2.2)（2023-08-24）

### ⏪ 优化
- 代码优化


## [v2.2.1](https://github.com/buession/buession-prototype/releases/tag/2.2.1)（2023-03-31）

### ⏪ 优化
- 代码优化
- 删除 debug 信息


## [v2.2.0](https://github.com/buession/buession-prototype/releases/tag/2.2.0)（2023-02-01）

### ⭐ 新特性

- Object 增加 omit 方法，支持对象拷贝，并剔除指定属性
- Object 增加 equals 方法，深度比较两个对象是否相同


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