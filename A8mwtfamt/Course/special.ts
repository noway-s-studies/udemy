// void

function logToConsole(): void {
    console.log("Hello Word!");
    return;
}

// array

let fruits: string[];
fruits = ['🍎', '🍌', '🍍'.toUpperCase(), (() => '🍋')()];

let food: Array<string>;
food = ['🍕', '🍔', (() => '🍞')()];

let genericArrey: Array<string | number | boolean>;
genericArrey = ['🍕', '🍔', (() => '🍞')(), 22, true, 0b10101, undefined];

// Tuple

let coordinates: [number, number, number];
coordinates = [1,2,3];

let getTuble: [number, string, boolean];
getTuble = [11, 'tizenegy', true];

// Objects

let user = {
    firstName: '',
    lastName: '',
    username: '',
    getUserName: (): string => this.username
};

// Enum

enum DaysOfTheWeek {
    MONDAY = 'monday',
    TUESDAY = 'tuesday',
    WEDNESDAY = 'wednesday',
};

let dayToday: DaysOfTheWeek;
dayToday = DaysOfTheWeek.MONDAY;
dayToday = DaysOfTheWeek.WEDNESDAY;

// eny

let autorizedUser0: {
    firstName: string,
    lastName: string,
    username: string
} = {
    firstName: "",
    lastName: "",
    username: ""
}

let autorizedUser1: any = {
    firstName: "",
    lastName: "",
    username: ""
}