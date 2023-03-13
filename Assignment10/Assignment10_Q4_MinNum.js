function MinNum(Num){
    let min = Num[0]
    for(let i=0;i<Num.length;i++){
        if(Num[i]<min){
            min =Num[i];
        }
    }
    return min;
}
const Num = [12, 58, 65, 85, 35, 75, 6, 24];
var result = MinNum(Num);
console.log(result);