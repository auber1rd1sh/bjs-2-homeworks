"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let d = ((b ** 2) - 4 * a * c);

    if (d < 0) {
        alert("Корней нет");
    } else if (d === 0) {
        let x = -b / (2 * a);
        arr.push(x);
        alert("Найден один корень уравнения: " + x);
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x1, x2);
        alert("Найдено два корня уравнения: " + x1 + "и " + x2);
    } else {
        alert("Что-то пошло не так...");
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyPercent = (percent / 100) / 12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
    let generalPayment = monthlyPayment * countMonths;

    return Number(generalPayment.toFixed(2));
    }
