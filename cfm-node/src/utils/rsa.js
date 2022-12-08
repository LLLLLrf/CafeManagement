const NodeRSA = require("node-rsa");
const fs=require('fs')
const privateDer=fs.readFileSync('../config/rsa_private_key.pem')
const publicDer=fs.readFileSync('../config/rsa_public_key.pem')
const publicKey = new NodeRSA(publicDer,'pkcs8-public');//导入公钥
const privateKey = new NodeRSA(privateDer,'pkcs1-private');//导入私钥
console.log(privateKey)
function rsa_encrypt(text){
    var encrypted = publicKey.encrypt(text, "base64");
    return encrypted;
}
function rsa_decrypt(encrypted){
    var decrypted = privateKey.decrypt(encrypted, "utf8");
    return decrypted;
}
exports.rsa_decrypt=rsa_decrypt;
exports.rsa_encrypt=rsa_encrypt;