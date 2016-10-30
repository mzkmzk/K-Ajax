import Options from './Options'
import Utils from './Utils'


 class K_Aajax {
  
    getJSON(url, data = {}, callback, errorCallback, async = true) {
        let request = this._setRequest(url,callback,errorCallback)
        
        request.open('GET',Utils.urlAppendData(url,data), async)
        //request.setRequestHeader('Content-Type','application/json') CORS不允许设置头
        request.send(null)
    }

    getJSONP(url, data = {}, callback, async = true) {
        let callbackName = 'K_Ajax' + (new Date()).getTime(),
            _self = this
        data['callback'] = callbackName //这样添加回调方法应该会有问题,当原本的data就有callback这个key的时候
        url = Utils.urlAppendData(url,data)

        var script = document.createElement('script')
        //这里回调时的执行函数作用域应该有问题
        

        window[callbackName] = function(response) {
            try {
                console.log()
                //let response = JSON.parse(JSON.stringify(response))
                callback(response)
            }finally {
                delete window[callbackName]
                script.parentNode.removeChild(script)
            }
        }
        script.src = url
        document.body.appendChild(script)
    }

    post(url, data, callback, errorCallback, async = true) {
         let request = this._setRequest(url,callback,errorCallback)
        
        request.open('POST',url, async)
        //request.setRequestHeader('Content-Type','application/json') CORS不允许设置头
        request.send(Utils.encodeFormData(data))
    }

    useImg(url, data, callback, errorCallback, async = true) {
        var img = new Image()
        img.onload = img.onerror = function() {
            callback && callback()
        }
        img.src = Utils.urlAppendData(url,data)
        
    }

    _setRequest(url,callback,errorCallback) {
        let request = new this._createXHR(url)
        
        request.onreadystatechange = function(){
            
            if (request.readyState === 4 ) {
                if (request.status ===200) {
                    callback && callback(JSON.parse(JSON.stringify(request.responseText)))
                }else {
                    errorCallback && errorCallback()
                } 
            }
        }
        return request
    }

    _createXHR(url) {
        let xhr = new XMLHttpRequest()
        if (Utils.isCORS(url) && !('withCredentials' in xhr) && (typeof XDomainRequest != 'undefined')) { //IE8的跨域
            xhr = new XDomainRequest()
        }
        return xhr
    }
}

export default new K_Aajax()

