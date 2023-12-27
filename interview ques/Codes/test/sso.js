var str = `Data is valid against more than one schema from /"oneOf"/: indices 1 and 2`;

/*
var temp = str.slice(0, 48) + "\\";

var temp2 = str.slice(48, 53) + "/";
var temp3 = str.slice(53, str.length);

console.log(temp + temp2 + temp3);
*/

var test = str.slice(0, 48) + `\\"oneOf"\\` + str.slice(57, str.length);
console.log(test);
