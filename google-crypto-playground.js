// demo for using google crypto
// https://www.davidebarranca.com/2012/10/crypto-js-tutorial-cryptography-for-dummies/

var CryptoJS = require("crypto-js");
 
// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
console.log(ciphertext.toString());


// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);
 
console.log(plaintext);

