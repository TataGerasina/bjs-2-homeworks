"use strict"
let a = +prompt;
let b = +prompt;
let c = +prompt;

function solveEquation(a, b, c) {
	let arr = [];
	let discr = (a, b, c) => b ** 2 - 4 * a * c;
	let d = discr(a, b, c);

	if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
		console.log(arr[x])
	} else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a),
			x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
		console.log(`${arr[x1]} и ${arr[x2]}`)
	} else if (d < 0) {
		console.log(arr[0])
	}
	return arr;
}

let percent = +prompt;
let contribution = +prompt;
let amount = +prompt;
let countMonths = +prompt;

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let monthlyPercent = percent / 100 / 12;
	let bodyCredit = amount - contribution;
	let monthlyPayment = bodyCredit * (monthlyPercent + (monthlyPercent / ((Math.pow((1 + monthlyPercent)) - 1))));
	let totalAmount = monthlyPayment * countMonths;
  totalAmount.toFixed(2);
  console.log(parseInt(totalAmount))
  return totalAmount;
}