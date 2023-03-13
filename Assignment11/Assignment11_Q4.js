const vegetables = ['Cucumber', 'Pumpkin', 'Tomato'];
vegetables.push('Corn','Green Peas','String Beans')
vegetables.unshift('Potato','Onion','Peppers')
console.log(vegetables);

var x=vegetables.slice(0,3)   /*slice first three element*/
console.log(x);

var x=vegetables.slice(7,9)   /*slice last two element*/
console.log(x);

console.log([vegetables[3],vegetables[4],vegetables[8]]);