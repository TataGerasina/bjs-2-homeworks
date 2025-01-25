function parseCount(value) {
	const parsedValue = Number.parseFloat(value);

	if (Number.isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}
	return parsedValue;
}

const parsedValue = parseCount("67,8")
console.log(typeof parsedValue);

function validateCount(value) {
	try {
		const parsedValue = parseCount(value);
		return parsedValue;
	} catch (error) {
		return error;
	}
}
const invalidValue = validateCount("string");
console.log(invalidValue.message);

// онлайн-калькулятор геометрических фигур. Cможет проверять существование треугольника, считать площадь и периметр.

class Triangle {
	constructor(a, b, c) {
		if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	} // возвращает периметр треугольника(сумма длин всех сторон)

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return +area.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c); // вернуть новый объект треугольника.
	} catch (error) {
		console.log(error);
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}

const triangle = getTriangle(8, 9, 10);
console.log(triangle.perimeter); // 27
console.log(triangle.area); // 34.197

const invalidTriangle = getTriangle(1, 2, 3);
console.log(invalidTriangle);

console.log(invalidTriangle.perimeter); // "Ошибка! Треугольник не существует"
console.log(invalidTriangle.area); // "Ошибка! Треугольник не существует"

console.log(invalidTriangle.a, invalidTriangle.b);