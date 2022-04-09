const {scryptSync,randomBytes, timingSafeEqual} = require('crypto');

email = document.getElementById("Email").innerText;
password = document.getElementById("Password");

function signup(email, password){
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = {email, password: `$:{salt}:${hashedPassword}`}
}
function login(email, password){
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keybBuffer = Buffer.from(key,'hex');
    const match = timingSafeEqual();

    if(match){return 'Login Success!'}
    else{return 'Login Fail!'}
}

