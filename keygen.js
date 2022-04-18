// Create and initialize EC context
// (better do it once and reuse it)
const EC = require('elliptic').ec;
var ec = new EC('secp256k1');

// Generate keys
var key = ec.genKeyPair();
const privatekey = key.getPrivate('hex');
const publickey = key.getPublic('hex'); 

console.log(privatekey,publickey);
