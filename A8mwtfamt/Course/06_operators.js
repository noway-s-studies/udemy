var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Array
var fruit = ['🍎', '🍌', '🍍'.toUpperCase(), (function () { return '🍋'; })()];
var food = ['🍕', '🍔', (function () { return '🍞'; })()];
var edibles = __spreadArrays(fruit, food);
console.log("Got te edibles as: ", edibles);
// Pbject
var user = {
    firstname: "Robert",
    lastname: "T",
    username: "noway"
};
var userDetails = __assign(__assign({}, user), { address: "", email: "" });
console.log("Got te user as: ", userDetails);
// Functions
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log("Got the sum of all the numbers as: ", add.apply(void 0, numbers));
// Backticks
console.log("The user with name: " + user.firstname + ' ' + user.lastname);
console.log("The user with name: " + user.firstname + " " + user.lastname);
console.log("Got the adibles as: " + edibles);
// Destructure
var fName = user.firstname, lName = user.lastname;
console.log('Firstname: ' + fName + ', Lastname: ' + lName);
// Array Destructure
var apple = fruit[0], greenApple = fruit[1], grapes = fruit[2];
console.log('apple: ' + apple + ', greenApple: ' + greenApple + ', grapes: ' + grapes);
var justApple = edibles[0], restEdibles = edibles.slice(1);
console.log('justApple: ' + justApple + ', restEdibles: ' + restEdibles);
var firstname = user.firstname, restUserDetails = __rest(user, ["firstname"]);
console.log('firstname: ' + firstname + ', restUserDetails: ' + restUserDetails);
function getEdibles(apple) {
    var restEdibles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restEdibles[_i - 1] = arguments[_i];
    }
    console.log(apple);
    console.log(restEdibles);
}
getEdibles.apply(void 0, edibles);
