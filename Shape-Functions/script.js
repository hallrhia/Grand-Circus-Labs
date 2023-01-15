function getAreaOfCircleMathRound(radius){
    return Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100;
}

console.log(getAreaOfCircleMathRound(12));
console.log(getAreaOfCircleMathRound(4));
console.log(getAreaOfCircleMathRound(9));
console.log(getAreaOfCircleMathRound(21));

function getAreaOfCircleToFixed(radius){
    return (Math.PI * Math.pow(radius, 2)).toFixed(2);
}

console.log(getAreaOfCircleToFixed(12));
console.log(getAreaOfCircleToFixed(4));
console.log(getAreaOfCircleToFixed(9));
console.log(getAreaOfCircleToFixed(21));

function getCircumferenceOfCircle(radius){
    return (2 * Math.PI * radius).toFixed(2);
}

console.log(getCircumferenceOfCircle(2));
console.log(getCircumferenceOfCircle(4));
console.log(getCircumferenceOfCircle(9));
console.log(getCircumferenceOfCircle(31));

function getAreaOfSquare(side){
    return (Math.pow(side, 2));
}

console.log(getAreaOfSquare(4));
console.log(getAreaOfSquare(12));
console.log(getAreaOfSquare(5));
console.log(getAreaOfSquare(27));

function getAreaOfTriangle(base, height){
    return (base * height) * .5;
}

console.log(getAreaOfTriangle(1, 5));
console.log(getAreaOfTriangle(2, 3));
console.log(getAreaOfTriangle(3, 6));
console.log(getAreaOfTriangle(4, 1));