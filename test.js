const { Block, Transaction, Blockchain } = require("./index");

// Create and initialize EC context
// (better do it once and reuse it)
const EC = require('elliptic').ec;
var ec = new EC('secp256k1');

// Generate keys
const key1 = ec.genKeyPair();
const privatekey1 = key1.getPrivate('hex');
const walletNumber1 = key1.getPublic('hex'); 

const key2 = ec.genKeyPair();
const privatekey2 = key2.getPrivate('hex');
const walletNumber2 = key2.getPublic('hex'); 

const josscoin = new Blockchain();

const tx1 = new Transaction(walletNumber1, walletNumber2,15000000);
tx1.signTransaction(key1);
josscoin.addTransaction(tx1);

josscoin.minePendingTransactions(walletNumber1);

console.log(josscoin.getBalanceOfAddress(walletNumber1)) ;
console.log(josscoin.getBalanceOfAddress(walletNumber2)) ;

const tx2 = new Transaction(walletNumber2, walletNumber1,100);
tx2.signTransaction(key2);
josscoin.addTransaction(tx2);

josscoin.minePendingTransactions(walletNumber1);

console.log(josscoin.getBalanceOfAddress(walletNumber1)) ;
console.log(josscoin.getBalanceOfAddress(walletNumber2)) ;


console.log(josscoin.isBlockchainValid());





