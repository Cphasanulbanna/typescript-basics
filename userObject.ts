//readonly keyword[we cannot manipulate varibale with readonly keyword]
type User = {
    readonly _id: string; //readonly
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; //optional
};

//we can optionally pass creditCardDetails bcz its optional[bcz there is "? mark"]
const myUser: User = {
    _id: "1",
    name: "banna",
    email: "b@b.com",
    isActive: true,
};

//chaning email
myUser.email = "hasanul#example.com";

//chaning id will show error "cannot assign, bcz it is read only"
myUser._id = "2"; // not possible , will show error

//mixing data types
type cardNumber = {
    cardnumber: string;
};

type cardDate = {
    carddate: string;
};

type cardDetails = cardNumber &
    cardDate & {
        cvv: number;
    };

const myCardDetails: cardDetails = {
    cardnumber: "10",
    carddate: "10/10/200",
    cvv: 777,
};

export {};
