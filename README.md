# K-Ajax

![image](http://qiniu.404mzk.com/K-Ajax.png)

[![Build Status](https://travis-ci.org/mzkmzk/K-Ajax.png?style=flat)](https://travis-ci.org/mzkmzk/K-Ajax)
[![npm version](https://img.shields.io/npm/v/K--Ajax.svg?style=flat)](https://www.npmjs.com/package/K--Ajax)
[![Downloads](https://img.shields.io/npm/dt/K--Ajax.svg?style=flat)](https://www.npmjs.com/package/K--Ajax)
[![License](https://img.shields.io/npm/l/K--Ajax.svg?style=flat)](https://www.npmjs.com/package/K--Ajax)

Hope is the most useful you used js library of the ajax 

* **Small:** Size as small as possible
* **Easy:** Api as simple as possible

## Examples

```javascript
    //k_ajax.xxx(url,data,success,error,isAsync)

    k_ajax.getJSON('http://qiniu.404mzk.com/example.json',{},function(result){
        document.getElementById('get').innerHTML = result
    })
    k_ajax.getJSONP('http://inner.journey.404mzk.com/jsonp_demo',{},function(result){
        document.getElementById('jsonp').innerHTML = JSON.stringify(result)
    })

    k_ajax.post('http://qiniu.404mzk.com/example.json',{},function(result){
         document.getElementById('post').innerHTML = result
    })
    k_ajax.useImg('http://qiniu.404mzk.com/example.json',{'hello': 'k'})
```

## Installation

```html
<script src="http://qiniu.404mzk.com/K-Ajax_0.0.1.js"></script>
```

And it's just as easy with [npm](http://npmjs.com):

```sh
npm i --save npm install K--Ajax 
```

