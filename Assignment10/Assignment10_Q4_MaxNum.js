function MaxNum(Num){
    let max =Num[0];
    for(let i=1;i<Num.length;i++){
        if(Num[i]<max){
            max =Num[i];
        }
    }
    return max;
}
const Num = [12, 58, 65, 85, 35, 75, 6, 24];
var result = MaxNum(Num)
console.log(result);s