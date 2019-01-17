let opener = ['{', '(', '['];
let closer = ['}', ')', ')'];

let stack = [];

function isvalid(str) {
    let x = [...str];
    for (let i = 0; i < x.length; i++) {
        if (opener.includes(x[i])){
            
        }
    }
    return true;
}
let code = "{[()]}";
console.log(isvalid(code));