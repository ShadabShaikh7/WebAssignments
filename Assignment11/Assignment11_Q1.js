
function CheckPalindrom(x){
    x =x.toLowerCase();
    
    const reverseStr= x.split('').reverse().join('');
    if(x === reverseStr){

        x =x.toUpperCase();
        const reverseStr= x.split('').reverse().join('');
        console.log(`${x} is a palindrom`);
    }
    else{
        x =x.toUpperCase();
        const reverseStr= x.split('').reverse().join('');
        console.log(`${x} is not palindrom`);
    }
}
var x= "NITIN";
var y="123454321";
var z="madam"
var a="Hello"

let result=CheckPalindrom(x)
let result01=CheckPalindrom(y)
let result02=CheckPalindrom(z)
let result03=CheckPalindrom(a)


