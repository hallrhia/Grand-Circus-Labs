let name1 = "Jenn";
let name2 = "Beth";
let name3 = "Henn";


if(name1.length > name2.length && name1.length > name3.length) {
    console.log(`${name1} has the longest name.`);
} 
else if(name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} has the longest name.`);
} 
else if(name3.length > name1.length && name3.length > name2.length ) {
    console.log(`${name3} has the longest name.`);
} 
else if(name1.length === name2.length && name1.length !== name3.length) {
    console.log(`${name1} and ${name2} tie for the longest length.`);
} 
else if(name2.length === name3.length && name2.length !== name1.length) {
    console.log(`${name2} and ${name3} tie for the longest length.`);
} 
else if(name1.length === name3.length && name1.length !== name2.length) {
    console.log(`${name1} and ${name3} tie for the longest length.`)
} 
else {
    console.log(`${name1} and ${name2} and ${name3}, are the same length.`);
}
