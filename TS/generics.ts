const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("3");
identityThree(3);

// shortcut

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "bootle", type: 4 });

function getSeachProduct<T>(product: T[]): T {
  const index = 3;
  return product[index];
}

// same function as arrow function

const getModeSearchProducts = <T>(products: T[]): T => {
  const index = 4;
  return products[index];
};

interface DataBase {
  conection: string;
  username: string;
  password: string;
}

function anotherone<T, U extends DataBase>(valOne: T, ValTwo: U): object {
  return {
    valOne,
    ValTwo,
  };
}

// anotherone(3, "5");
// anotherone(3, {});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

// ????????????????
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
