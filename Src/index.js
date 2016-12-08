
import singleKAjax from './singleKAjax'

/*
if ( typeof module != 'undefined' && module.exports ) {
   
     module.exports = singleKAjax
      console.log(JSON.stringify(module.exports))
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return singleKAjax } )
} else {
    window.k_ajax = singleKAjax
}*/

window.k_ajax = singleKAjax


export default singleKAjax
//window.K_Logging = K_Logging
