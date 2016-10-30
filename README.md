# K-Aajax

![image](http://qiniu.404mzk.com/K-Logging_logo.png)

[![Build Status](https://travis-ci.org/mzkmzk/K-Aajax.png?style=flat)](https://travis-ci.org/mzkmzk/K-Aajax)
[![npm version](https://img.shields.io/npm/v/k-Aajax.svg?style=flat)](https://www.npmjs.com/package/k-Aajax)
[![Downloads](https://img.shields.io/npm/dt/k-Aajax.svg?style=flat)](https://www.npmjs.com/package/k-Aajax)
[![License](https://img.shields.io/npm/l/k-Aajax.svg?style=flat)](https://www.npmjs.com/package/k-Aajax)

Hope is the most useful you used js library of the log 

* **Configurable:** Can be configured to display your log 
* **Website:** Can be real-time display of your log in other web page

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

The corresponding website page is <http://qiniu.404mzk.com/website.html?app_name=K-Logging>

tips: The corresponding app_name and set consitent

[see exaple.gif](http://qiniu.404mzk.com/k-logging_demo.gif)

## Installation

```html
<script src="http://qiniu.404mzk.com/K-Logging_0.0.1.js"></script>
```

And it's just as easy with [npm](http://npmjs.com):

```sh
npm i --save npm install k-ajax 
```

