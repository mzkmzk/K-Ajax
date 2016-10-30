export default class Utils {
    static urlAppendData(url, data) {
        if (url.indexOf('?') === -1) {
            url += '?'
        }else {
            url += '&'
        }
        return url + Utils.encodeFormData(data)
    }

    static encodeFormData(data) {
        if (!data) return ''
        var pairs = []
        for(var name in data) {
            if(!data.hasOwnProperty(name)) continue
            if(typeof data[name] === 'function') continue
            var value =data[name].toString()
            name = encodeURIComponent(name.replace('%20','+'))
            value = encodeURIComponent(value.replace('%20','+'))
            pairs.push(name + '=' + value)
        }
        return pairs.join('&')
    }

    static isCORS(url) {
        let urlAnchor = document.createElement('a'),
            originAnchor = document.createElement('a')
        urlAnchor.href = url
        originAnchor.href = window.location.href
      // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
      urlAnchor.href = urlAnchor.href
      return !(originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host) 
    }

}