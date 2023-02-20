var num = 4;
var isPrime = true;

for(let i=2;i<num;i++){
    if(num%2 === 0){
        isPrime = false;
    }
}
if(isPrime === true){
    console.log(`${num} is a Prime number`);
}
else{
    console.log(`${num} is Not a Prime number`);
}