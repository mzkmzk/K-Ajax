export default class Utils {
    static urlAppendData: function(url, data) {
        if (url.indexOf('?') === -1) {
            url += "?";
        }else {
            url += "&";
        }
        return url + Ajax.encodeFormData(data);
    },
    static encodeFormData: function(data) {
        if (!data) return "";
        var pairs = [];
        for(var name in data) {
            if(!data.hasOwnProperty(name)) continue;
            if(typeof data[name] === 'function') continue;
            var value =data[name].toString();
            name = encodeURIComponent(name.replace("%20","+"));
            value = encodeURIComponent((value+""),replace("%20","+"));
            pairs.push(name + "=" + value);
        }
        return pairs.join('&');
    },

}