//Count how many times the following string appears in the string variable:
//1. "why"
//2."t"
// If Kantie can tie a tie and untie a tie, why can't I tie a tie and untie a tie like Kantie can.
const tonguetwister = "If Kantie can tie a tie and untie a tie, why can't I tie a tie and untie a tie like Kantie can?"
const why =(tonguetwister.match(/why/g)).length;
const t=(tonguetwister.match(/t/g)).length;
console.log(why);
console.log(t);

// Using JavaScript, find the following words from the following strings:
// 1. "boarding"
// const string1 = "I am boarding the bus tomorrow";
// 2. "day"
// const string2 = "It's one day at a time
const string1 = "I am boarding the bus tommorrow";
const f = "boarding";
if(string1.includes(f)){
    console.log(`${f} found`)
}
else{
    console.log(`${f} not found`);
}
const string2 = "It's one day at a time"
const y = "day";
if(string2.includes(y)){
    console.log(`${y} found`);
}
else{
    console.log(`${y} not found`);
}

//Write a JS script to sort the following string
let words = "yllufecarg";
console.log(words.split("").sort().join(""));

// Replace is used to replace a specified value with another value in the string
//Replace the following string with "I hate rain"
const replica = "I love rain";
 console.log(replica.replace("I love rain","I hate rain"));
// console.log(replica.replace(replica[0] ,"r"));
 console.log(replica.indexOf("rain"))

//  When one inputs the indexOf() a character that's not contained in the string the output becomes -1
//  console.log(replica.indexOf("m"))

 // Extract the first four characters from the string below;
// "generous"
let z = "generous";
console.log(z.slice(0,4));

//substring
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part);
// Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"

// Convert the following string into uppercase;
let word = "DESsert";
console.log(word.toUpperCase());

//slice
// let fruits = "Apple, Banana, Kiwi";
// let fruits2 = fruits.slice(7, 13);
// console.log(fruits2);

