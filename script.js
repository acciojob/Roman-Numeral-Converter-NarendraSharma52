const symbol = [
    ['M',1000],
    ['CM',900],
    ['D', 500], 
    ['CD', 400], 
    ['C', 100], 
    ['XC', 90], 
    ['L', 50], 
    ['XL', 40], 
    ['X', 10], 
    ['IX', 9], 
    ['V', 5], 
    ['IV', 4], 
    ['I', 1]
]

let num = 18; 
// 700 + 90 + 8
// 500 + 100 + 100 + 90 + 5 + 1 + 1 + 1
//DCCXCVIII

let result = "";

symbol.forEach((item) => {
    // console.log(item);
    // let val1 = item[0];
    // let val2 = item[1];
    // console.log(val1, val2);
    const [key, val] = item; //destructuring of array
    // console.log(key, val);

    while(num >= val) {
        num -= val;
        result += key;
    }
})

console.log(result);