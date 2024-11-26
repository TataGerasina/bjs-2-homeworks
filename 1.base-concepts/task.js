"use strict"
let a = +prompt;
b = +prompt;
c = +prompt;
function solveEquation(a, b, c) {
let arr = [];
let discr = (a, b, c) => b ** 2 - 4 * a * c;
let d = discr(a, b, c);

    if(d === 0) {
        let x = -b / (2 * a);
        arr.push(x);
        console.log(arr[x])
    }
    else if(d > 0) {   
    let x1 = (-b + Math.sqrt(d)) / (2 * a),
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x1, x2);
        console.log(`${arr[x1]} и ${arr[x2]}`) 
    }
    else if(d < 0) {
        console.log(arr[0])
    }
  return arr;
}