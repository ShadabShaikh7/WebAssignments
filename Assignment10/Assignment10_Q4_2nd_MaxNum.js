const arr =  [12, 58, 65, 85, 35, 75, 6, 24]; 

let max1 = arr[0];
let max2 = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max1) {
    max2 = max1; 
    max1 = arr[i]; 
    continue;
  }
  if (arr[i] > max2 && arr[i] < max1) {
    max2 = arr[i]; 
    continue;
  }
}

console.log('The second maximum number is:', max2);
