var ArrNum = [21, 10, 56, 20, 10, 56, 10, 95, 23, 57, 10, 11, 10];
var count=0;
for(let i=0;i<=ArrNum.length-1;i++){
    if(ArrNum[i] === 10){
        count = count +1;
    }
}
console.log(count);
