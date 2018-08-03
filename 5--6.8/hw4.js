
const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
//(?=.*[!@#\$%\^&\*])  at least special character
let password = 'Dj12224004'
let res = regex.test(password);
console.log(res);

//email address