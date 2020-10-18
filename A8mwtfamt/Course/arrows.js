var _this = this;
function greetUser(name) {
    console.log("Hello there, " + name + "!");
}
var greetUserByName = function (name) {
    console.log("Hello there, " + name + "!");
};
greetUser("John");
greetUserByName("Jane");
// Arrow Functions
var greetUserByNameArrow = function (name) {
    console.log("Hello there, " + name + "!");
};
greetUserByNameArrow("Jacob");
var edibles = [
    {
        edible: "\uD83C\uDF55",
        isVegetan: false,
    },
    {
        edible: "\uD83C\uDF54",
        isVegetan: false,
    },
    {
        edible: "\uD83C\uDF45",
        isVegetan: true,
    },
    {
        edible: "\uD83C\uDF51",
        isVegetan: true,
    },
    {
        edible: "\uD83C\uDF52",
        isVegetan: true,
    },
];
console.log(edibles.filter(function (item) {
    return item.isVegetan;
}));
console.log(edibles.filter(function (item) {
    return item.isVegetan;
}));
console.log(edibles.filter(function (item) { return item.isVegetan; }));
var user = {
    firstName: "John",
    lastName: "Doe",
    lazyGreet: function () {
        var that = this;
        setTimeout(function () {
            console.log("Hey there, " + that.firstName);
        }, 1000);
    }
};
user.lazyGreet();
var user2 = {
    firstName: "Jane",
    lastName: "Doe",
    lazyGreet: function () { return setTimeout(function () { return console.log("Hey there, " + _this.firstName); }, 1000); }
};
user2.lazyGreet();
