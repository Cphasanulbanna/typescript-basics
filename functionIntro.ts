//second no is for controlling return statement
//function that return accurate type value
function addTwo(num: number): number {
    // return num + 2;
    return 10;
}

addTwo(10);

//adding default parameters
let loginuser = (name: string, email: string, isPaid: boolean = false) => {};
loginuser("banna", "banna@example.com");

//arrow function syntax
const getHello = (s: string): string => {
    return "hello";
};

//type checking in map function
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
    return `hero is ${hero}`;
});

//function that doesnot return any value [but return  void, ie no value]
function consoleError(errormsg: string): void {
    console.log(errormsg);
}

//forceful termination of program, never return anything
function handleError(errormsg: string): never {
    throw new Error(errormsg);
}

export {};
