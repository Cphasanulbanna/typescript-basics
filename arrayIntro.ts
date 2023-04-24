//example of number array
const superHeros: string[] = [];
superHeros.push("spiderman");

//another syntax
const students: Array<string> = [];
students.push("banna");

type User = {
    name: string;
    isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "banna", isActive: false });

//array inside array
const colors: number[][] = [[255, 255, 255]];
export {};
