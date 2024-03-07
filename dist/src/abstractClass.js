"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getRealTime() {
        return 8;
    }
}
// abstract nao pode crira objeots
// const viniciusH = new TakePhoto2("test", "tests");
class Instagram2 extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const viniciusH = new Instagram2("test", "tests", 3);
viniciusH.getRealTime();
