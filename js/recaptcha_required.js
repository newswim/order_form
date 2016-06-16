// 'use strict'
//
// var RC2KEY = '6LcbqyITAAAAAOS-tjljasR0HPYnlCocBJLYB0IY';
// var doSubmit = false;
//
// function reCaptchaVerify(response) {
//     if (response === grecaptcha.getResponse()) {
//         doSubmit = true;
//     }
// }
//
// function reCaptchaExpired () {
//     /* do something when it expires */
// }
//
// function reCaptchaCallback () {
//     grecaptcha.render('id', {
//         'sitekey': RC2KEY,
//         'callback': reCaptchaVerify,
//         'expired-callback': reCaptchaExpired
//     });
// }
//
// document.forms['dealer_application'].addEventListener('submit', function(e){
//     // if (!doSubmit) {
//     //     e.preventDefault()
//     // }
// })
