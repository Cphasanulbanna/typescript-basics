// creating userdata
function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "banna", isPaid: false });

//function that should return object
function getCourse(): {} {
    return {};
}

//function that should return object with specific types and properties
function getInfo(): { name: string; price: number } {
    return { name: "banna", price: 100 };
}

//[type alias] - declaring predefined types
type User = {
    name: string;
    email: string;
    isActive: boolean;
};

function addUser(user: User): User {
    return user;
}

addUser({
    name: "banna",
    email: "banna@e.com",
    isActive: true,
});

//readonly keyword[we cannot manipulate varibale with readonly keyword]
type NewUser = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
};

export {};
