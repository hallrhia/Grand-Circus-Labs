// let actualTemp = 68;

// let desiredTemp = 68;

// if(actualTemp < desiredTemp) {
//     console.log("Run heat");
// }
// else if (actualTemp > desiredTemp ){
//     console.log("Run A/C");
// }
// else{
//     console.log("Standby");
// }

// variable tempCelsius = number
// variable targetUnit = "C", "F", "K";
//check targetUnit and log temperature converted to that unit
//K stands for Kelvin
//C requires no conversion, print original temp
let convertedTemp;
let tempCelsius = 0;
let targetUnit = 'K';

switch (targetUnit){
    case 'C':
        convertedTemp = tempCelsius;
        break;
    case 'K':
        convertedTemp = tempCelsius + 273.15;
        break;
    case 'F':
        convertedTemp = (tempCelsius * (9/5)) + 32;
        break;
}

console.log(convertedTemp);