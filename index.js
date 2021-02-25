const returnFirstTwoDrivers = function(driversArr) {
    return driversArr.slice(0,2)
}

const returnLastTwoDrivers = function(driversArr) {
    return driversArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(mult) {
    return function(fare) {
        return mult * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, returnDrivers) {
  return returnDrivers(drivers)
}