

const {createHash} = require('crypto');

//Create a string hash
function hash(input){
    return createHash('sha256').update(input).digest('hex');
}

// Compare 2 hashed funcs
let password = "BloodWorks";
const hash1 = hash(password);
console.log(hash1);

password="BloodWorks";
const hash2 = hash(password);
const match = hash1===hash2;
console.log(hash2);
console.log(match ? 'Good Password' : 'Password does not match');


var app = {
    '
}