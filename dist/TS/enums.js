"use strict";
// const AISLE = 0
// const MIDLE = 1
// const WINDOW = 2
// if (seat === AISLE){
// }
// default fisrt 0, second 1...
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDLE"] = 11] = "MIDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.AISLE;
