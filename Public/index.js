require('./index.bundle.js')

if ( typeof module != 'undefined' && module.exports ) {
     module.exports = window.k_ajax
      //console.log(JSON.stringify(module.exports))
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return window.k_ajax } )
}