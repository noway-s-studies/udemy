// For Objects
var user = {
    firstName: "",
    lastName: "",
    age: 10,
    walk: function () {
        return;
    }
};
// For classes
var Employee = /** @class */ (function () {
    function Employee() {
        this.firstName = "";
        this.age = 10;
        this.lastName = "";
    }
    Employee.prototype.walk = function () {
        return;
    };
    return Employee;
}());
