abstract class TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getRealTime(): number {
    return 8;
  }
}

// abstract nao pode crira objeots
// const viniciusH = new TakePhoto2("test", "tests");

class Instagram2 extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const viniciusH = new Instagram2("test", "tests", 3);

viniciusH.getRealTime();
