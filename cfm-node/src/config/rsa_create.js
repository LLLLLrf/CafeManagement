const NodeRSA = require("node-rsa");
var key = new NodeRSA();
key.generateKeyPair(1024)
var publicDer = key.exportKey("pkcs8-public-pem");

var privateDer = key.exportKey("pkcs1-private-pem");
console.log("publicDer:", publicDer);
console.log("privateDer:", privateDer);
const fs =require('fs')
fs.writeFileSync('./rsa_private_key.pem',privateDer)
fs.writeFileSync('./rsa_public_key.pem',publicDer)