const NodeRSA = require("node-rsa");
const fs=require('fs')
const publicDer=fs.readFileSync('../config/rsa_public_key.pem')
const publicKey = new NodeRSA(publicDer,'pkcs8-public');
function rsa_encrypt(text){
    var encrypted = publicKey.encrypt(text, "base64");
    return encrypted;
}
exports.rsa_encrypt=rsa_encrypt;