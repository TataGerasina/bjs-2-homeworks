"use strict"
let a = +prompt("Введите A:"),
b = +prompt("Введите B:"),
c = +prompt("Введите C:"),
arr = solveEquation(a, b, c),
d = arr[0];
console.log("Дискриминант: " + d);
console.log(
d < 0
    ? "Корней нет"
    : d === 0
        ? "Один корень: " + arr[1]
        : `Два корня: ${arr[1]} и ${arr[2]}`
);

function solveEquation(a, b, c) {
let discr = (a, b, c) => Math.pow(b, 2) - 4*a*c;

let d = discr(a, b, c);
if (d < 0) return [d];

let x1 = (-b + Math.sqrt(d)) / (2 * a),
    x2 = (-b - Math.sqrt(d)) / (2 * a);

return [d, x1, x2];
}