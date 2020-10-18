
// Array
let fruit: Array<string> = ['🍎', '🍌', '🍍'.toUpperCase(), (() => '🍋')()];
let food: string[] = ['🍕', '🍔', (() => '🍞')()];
let edibles: Array<string> = [... fruit, ... food];

console.log("Got te edibles as: ", edibles);

// Pbject

let user = {
    firstname: "Robert",
    lastname: "T",
    username: "noway"
};

let userDetails = {
    ... user,
    address: "",
    email: ""
};

console.log("Got te user as: ", userDetails);

// Functions

function add(x?: number, y?: number, z?: number): number {
    return x + y + z;
}

let numbers: Array<number> = [1, 2, 3];

console.log("Got the sum of all the numbers as: ", add( ... numbers));

// Backticks

console.log("The user with name: " + user.firstname + ' ' + user.lastname );

console.log(`The user with name: ${user.firstname} ${user.lastname}`);
console.log(`Got the adibles as: ${edibles}`);

// Destructure

let { firstname: fName, lastname: lName } = user;
console.log('Firstname: '+ fName + ', Lastname: ' + lName);

// Array Destructure

let [apple, greenApple, grapes] = fruit;
console.log('apple: '+ apple + ', greenApple: ' + greenApple + ', grapes: ' + grapes);

let [justApple, ... restEdibles] = edibles;
console.log('justApple: '+ justApple + ', restEdibles: ' + restEdibles);

let { firstname, ... restUserDetails } = user;
console.log('firstname: '+ firstname + ', restUserDetails: ' + restUserDetails);

function getEdibles(apple?, ... restEdibles){
    console.log(apple);
    console.log(restEdibles);
}

getEdibles( ... edibles );