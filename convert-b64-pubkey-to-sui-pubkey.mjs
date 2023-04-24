import { Ed25519PublicKey } from '@mysten/sui.js';

var _appendBuffer = function(buffer1, buffer2) {
  var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  var concat_array = new Uint8Array(tmp.buffer);
  return concat_array;
};

var args = process.argv.slice(2);
const b64_pubkey = args[0]
console.log("raw pubkey (32 bytes): " + args[0]);

const pubkey = new Ed25519PublicKey(b64_pubkey);
//const pubkey = new Ed25519PublicKey("l0thgob8JMj3IWXryZ6g7yAcpRxMumKnoBhFexLQfeA=");

let pubkey_bytes = pubkey.toBytes();

const key_flag =new Uint8Array(1);
key_flag[0] = 0;



const flag_and_pk = _appendBuffer(key_flag, pubkey_bytes);

//console.log(pubkey.toBytes());
//console.log(pubkey_bytes);
//console.log(flag_and_pk);
const b64 = Buffer.from(flag_and_pk).toString('base64');
console.log("sui pubkey: " + b64);
console.log("sui address: " + pubkey.toSuiAddress());

