class Person {
    firstName: string;
    lastName: string;
    age: number;
    
    constructor( firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class PersonPrivate {
    constructor( 
        private firstName: string, 
        private lastName: string, 
        private age: number){
    };

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person: Person = new Person(`John`, `Doe`, 25)
const personPrivate: PersonPrivate = new PersonPrivate(`Jane`, `Doe`, 24)

console.log(person.getFullName());
console.log(personPrivate.getFullName());

class Employee extends PersonPrivate {
    constructor(
        private id: number,
        firstName: string,
        private midleName: string,
        lastName: string,
        age: number
    ){
        super(firstName, lastName, age);
    }

    getFullName(): string {
        const nameSegments: Array<string> = super.getFullName().split(' ');
        nameSegments.splice(1, 0, this.midleName);
        const fullName = nameSegments.join(' ');
        return `${fullName}`;
    }
}

const manager: PersonPrivate = new Employee(1, `Josef`, `Patrick`, `Doe`, 30);
console.log(`${manager.getFullName()}`);

class PersonProtected {
    protected firstName: string;
    protected lastName: string;
    protected age: number;
    
    constructor( firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class EmployeeProtected extends PersonProtected {

    get employeeId(): number {
        return this.id;
    }

    set empliyeeId(employeeId: number) {
        this.id = employeeId;
    }

    constructor(
        private id: number,
        firstName: string,
        private midleName: string,
        lastName: string,
        age: number
    ){
        super(firstName, lastName, age);
    }

    getFullName(): string {
        return `${this.firstName} ${this.midleName} ${this.lastName}`;
    }
}

const managerProtected: EmployeeProtected = new EmployeeProtected(1, `Josefina`, `Patrick`, `Doe`, 30);
console.log(`${managerProtected.getFullName()}`);
console.log(managerProtected.empliyeeId);
managerProtected.empliyeeId = 20;
console.log(managerProtected.empliyeeId);