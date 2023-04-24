interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId: string;
    // startTrail : () => string //one method
    startTrail(): string; //2nd method
    getCoupon(couponname: string): number;
}

const banna: Admin = {
    dbId: 1,
    email: "b@b.com",
    startTrail: () => {
        return "yes";
    },
    getCoupon: (name: "my coupon") => {
        return 100;
    },
    githubId: "abcd",
    role: "admin",
};

//reopening interfaces

interface User {
    githubId: string;
}

//inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

export {};
