//unions syntax
let score: number | string = 10;
score = "50";

//arrays with either all numbers or strings
const data1: string[] | number[] = [1, 2, 3];

//array with mixed data types
const data2: (string | number)[] = ["one", "two", 3, 4];

//with specific values only
let seatAllotment: "left" | "middle" | "window";
seatAllotment = "left"; //allowed
// seatAllotment = "crew"; //not allowed

//changing type/ switching type
type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let banna: User | Admin = { name: "banna", id: 1 };
banna = { username: "banna admin", id: 1 };
export {};
