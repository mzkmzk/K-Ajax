export default class Options {
    
    static repleaceOptions(options) {
        
        if (options == undefined ) return Options.getDefaultOptions()

        let defaultOptions = Options.getDefaultOptions(), //前者为layer时只替换部分属性
            keys = Object.keys(defaultOptions)
        
        for (var i = keys.length - 1; i >= 0; i--) {
            if (options[keys[i]] === undefined) {
                options[keys[i]] = defaultOptions[keys[i]]
            }
        }
        
        return options
    }

    static getDefaultOptions() {
        return   {
           
        }
    }

    
}