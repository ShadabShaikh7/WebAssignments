
// Write a first approach using for loop with if…else ladde...........................[ First Approach ]

// function DivisibleNum(NumS){
//         for(let i=0;i<NumS.length;i++){
//             if(NumS[i]%3 === 0 && NumS[i]%8 ===0){
//                 console.log(`${NumS[i]} is Divisible by 3 And 8`);
//             }
//             else if(NumS[i]%3 === 0){
//                 console.log(`${NumS[i]} is Divisible By 3`);
//             }
//             else if(NumS[i]%8 === 0){
//                 console.log(`${NumS[i]} is Divisible By 8`);
//             }
//             else{
//                 console.log(`${NumS[i]} is not Divisible By 3 and 8`);
//             }
//         }
// }
// const NumS = [12, 56, 755, 27, 16, 2, 1104, 65, 88];
// DivisibleNum(NumS)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------


// Write a second approach using while loop with switch statemen......................[ 2nd Approach ] 


// const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];
// let i=0;

// while(i <= InputtedNumbers.length-1){

//     switch(true){

//         case (InputtedNumbers[i]%3 == 0 && InputtedNumbers[i]%8 == 0):
//             console.log(`${InputtedNumbers[i]} is Divisible By Both`);
//             break;

//         case (InputtedNumbers[i]%3 == 0):
//             console.log(`${InputtedNumbers[i]} is Divisible By 3`);
//             break;

//         case (InputtedNumbers[i]%8 == 0):
//             console.log(`${InputtedNumbers[i]} is Divisible By 3`);
//             break;

//         default:
//             console.log(`${InputtedNumbers[i]} is Not Divisible By Both`);
//             break;

//     }
//     i++;
// }

// ----------------------------------------------------------------------------------------------------------------------------------


// Write a third approach using for of loop with switch statement---------------------------[ 3rd Approach ] 

// const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];

// for(const InputtedNumber of InputtedNumbers){

//     switch(true){


//         case (InputtedNumber%3 ==0 && InputtedNumber%8 ==0):
//             console.log(`${InputtedNumber} is Divisible By Both`);
//             break;
        
//         case (InputtedNumber%3 ==0):
//             console.log(`${InputtedNumber} is Divisible By 3`);
//             break;
        
//         case (InputtedNumber%8 ==0):
//             console.log(`${InputtedNumber} is Divisible By 8`);
//             break;
        
//         default:
//             console.log(`${InputtedNumber} is Not divisible Both Number`);
//             break;
//     }
    
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// Write a fourth approach using for in loop with switch statement--------------------------[4th Approach]

const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];

for(const x in InputtedNumbers){

    switch(true){


        case (InputtedNumbers[x] % 3 ==0 && InputtedNumbers[x]%8 ==0):
            console.log(`${InputtedNumbers[x]} is Divisible By Both`);
            break;
        
        case (InputtedNumbers[x]%3 ==0):
            console.log(`${InputtedNumbers[x]} is Divisible By 3`);
            break;
        
        case (InputtedNumbers[x]%8 ==0):
            console.log(`${InputtedNumbers[x]} is Divisible By 8`);
            break;
        
        default:
            console.log(`${InputtedNumbers[x]} is Not divisible Both Number`);
            break;
    }
    
}


