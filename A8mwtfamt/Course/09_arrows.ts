function greetUser(name: string) {
    console.log(`Hello there, ${name}!`);
}

const greetUserByName = function(name: string) {
    console.log(`Hello there, ${name}!`);
}

greetUser(`John`);
greetUserByName(`Jane`);

// Arrow Functions

const greetUserByNameArrow = (name: string) => {
    console.log(`Hello there, ${name}!`);
}

greetUserByNameArrow(`Jacob`);

const edibles = [
    {
        edible: `🍕`,
        isVegetan: false,
    },
    {
        edible: `🍔`,
        isVegetan: false,
    },
    {
        edible: `🍅`,
        isVegetan: true,
    },
    {
        edible: `🍑`,
        isVegetan: true,
    },
    {
        edible: `🍒`,
        isVegetan: true,
    },
]

console.log(
    edibles.filter(function(item) {
        return item.isVegetan;
    })
)

console.log(
    edibles.filter((item) => {
        return item.isVegetan;
    })
)

console.log(edibles.filter(item => item.isVegetan));

const user = {
    firstName: `John`,
    lastName: `Doe`,
    lazyGreet: function() {
        const that = this;
        setTimeout(function() {
            console.log(`Hey there, ${that.firstName}`)
        }, 1000)
    }
}

user.lazyGreet();

const user2 = {
    firstName: `Jane`,
    lastName: `Doe`,
    lazyGreet: () => setTimeout(() => console.log(`Hey there, ${this.firstName}`), 1000)
}

user2.lazyGreet();
