var a = "Hello World";
// types of typescript: string, number, array, null, undefine, boolean, never,unknown, any
// 
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase("HELLO"));
console.log(getLowerCase(""));
var b = 250;
function add(number1, number2) {
    return number1 + number2;
}
var subtract = function (number1, number2) {
    return number1 - number2;
};
add(23, 3);
subtract(5, 3);
// array <T>
var arr = [23, 34, 45, 56];
var arr1 = ["23", "34", "45", "56"];
var id = 34;
var person1 = {
    name: "Shakib",
    age: 45,
    hobby: "travelling"
};
var colors;
(function (colors) {
    colors["colors1"] = "#ddd3de";
    colors["colors2"] = "#ddd3ee";
    colors["colors3"] = "#fffff";
})(colors || (colors = {}));
console.log(colors.colors2);
