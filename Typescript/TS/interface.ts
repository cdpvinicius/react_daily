interface UserI {
  readonly id?: string;
  email: string;
  userId: number;
  startTrial: () => string;
  //   startTrail():string
  getCoupon(couponname: string): number;
}

interface UserI {
  githubToken: string;
}

interface Admin2 extends UserI {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin2 = {
  email: "h@h.com",
  userId: 2,
  role: "admin",
  githubToken: "ajdbsjbf",
  startTrial: () => {
    return "startTrial";
  },
  getCoupon: (name: "hithesh10") => {
    return 10;
  },
};

hitesh.email = "json.email";
