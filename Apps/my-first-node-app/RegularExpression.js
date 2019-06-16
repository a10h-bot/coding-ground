//regular expression are powerful tool to work with string data stucture
let regExp1 = new RegExp("abc");
let regExp2 = /abc/;
let eighteenPlus = /eighteen\+/;
console.log(/abc/.test("abcdeh"));
console.log(/[0789]/.test("231889"));
console.log(/[8-9]/.test("238"));
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
console.log(/\d\d\-\d\d-\d\d\d\d \d\d:\d\d/.test("04-02-1990 13:90"));
let notMoreThan6 = /[^0-6]/;
console.log(notMoreThan6.test("12"));

l;
