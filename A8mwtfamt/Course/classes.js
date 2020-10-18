var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    ;
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var PersonPrivate = /** @class */ (function () {
    function PersonPrivate(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    ;
    PersonPrivate.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return PersonPrivate;
}());
var person = new Person("John", "Doe", 25);
var personPrivate = new PersonPrivate("Jane", "Doe", 24);
console.log(person.getFullName());
console.log(personPrivate.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, midleName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.midleName = midleName;
        return _this;
    }
    Employee.prototype.getFullName = function () {
        var nameSegments = _super.prototype.getFullName.call(this).split(' ');
        nameSegments.splice(1, 0, this.midleName);
        var fullName = nameSegments.join(' ');
        return "" + fullName;
    };
    return Employee;
}(PersonPrivate));
var manager = new Employee(1, "Josef", "Patrick", "Doe", 30);
console.log("" + manager.getFullName());
var PersonProtected = /** @class */ (function () {
    function PersonProtected(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    ;
    PersonProtected.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return PersonProtected;
}());
var EmployeeProtected = /** @class */ (function (_super) {
    __extends(EmployeeProtected, _super);
    function EmployeeProtected(id, firstName, midleName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.midleName = midleName;
        return _this;
    }
    Object.defineProperty(EmployeeProtected.prototype, "employeeId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeProtected.prototype, "empliyeeId", {
        set: function (employeeId) {
            this.id = employeeId;
        },
        enumerable: false,
        configurable: true
    });
    EmployeeProtected.prototype.getFullName = function () {
        return this.firstName + " " + this.midleName + " " + this.lastName;
    };
    return EmployeeProtected;
}(PersonProtected));
var managerProtected = new EmployeeProtected(1, "Josefina", "Patrick", "Doe", 30);
console.log("" + managerProtected.getFullName());
console.log(managerProtected.empliyeeId);
managerProtected.empliyeeId = 20;
console.log(managerProtected.empliyeeId);
