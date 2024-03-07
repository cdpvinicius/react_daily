const User = {
  name: "John",
  email: "john@example.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "John", isPaid: false });

function createCouse(): { name: string; price: number } {
  return { name: "react", price: 9.99 };
}

// type Aliases
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
};

function createUser2(user: User): User {
  return { _id: "", name: "", email: "", isActive: false };
}

createUser2({ _id: "", name: "", email: "", isActive: false });

let myUser: User = {
  _id: "12",
  name: "hani",
  email: "h@h.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cadDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cadDate & {
    cvv: number;
  };

myUser.email = "h@gmail.com";
// myUser._id = "1";

export {};
