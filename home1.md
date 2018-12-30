---
title: home1使用Front-matter设置标题
---
# 这是home1文件

# 1. 一级标题
## 1.1 二级标题

### 1.1.1 三级标题

#### 1.1.1.1 四级标题

#### 1.1.1.1 dddd

# 2. 一级标题
## 2.1 二级标题

### 2.1.1 三级标题
#### 2.1.1.1 四级标题

## 1. 模拟数据

getAuth.ajax.js:

```javascript
export default {
    "status": 200,
    "data": {
        a:11,
    }
}
```

### 1.1 三级标题

getAuth.ajax.js:

```javascript
export default {
    "status": 200,
    "data": {
        a:11,
    }
}
```

getAuth.ajax.js:

```javascript
export default {
    "status": 200,
    "data": {
        a:11,
    }
}
```

getAuth.ajax.js:

```javascript
export default {
    "status": 200,
    "data": {
        a:11,
    }
}
```

#### 1.1.1 四级标题

getAuth.ajax.js:

```javascript
export default {
    "status": 200,
    "data": {
        a:11,
    }
}
```
getAuth.ajax.js:

```javascript
export default {
    "status": 200,
    "data": {
        a:11,
    }
}
```
getAuth.ajax.js:

```javascript
export default {
    "status": 200,
    "data": {
        a:11,
    }
}
```
getAuth.ajax.js:

```javascript
export default {
    "status": 200,
    "data": {
        a:11,
    }
}
```

## 2. mock配置文件

mockAPI.js:

```javascript
/**
 * 本地模拟数据
 */
import Mock from 'mockjs';
// 只有本地开发才引入Mock
// const Mock = process.env.NODE_ENV === 'development' && require('mockjs')
import auth from './getAuth.ajax.js';

if (Mock) {
  // 拦截获取用户信息API
  Mock.mock('/ac/getAuth.ajax','post', auth);
}
```

## 3. 只有在开发环境下才引入这个配置文件

process.env.NODE_ENV === 'development' && require('./mockAPI')







## 参考资料

http://mockjs.com/

https://github.com/nuysoft/Mock/wiki