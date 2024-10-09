let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}
console.log('returnFirstTwoDrivers'(drivers));

function returnLastTwoDrivers(drivers){
        return drivers.slice(-2);
}
console.log('returnLastTwoDrivers'(drivers));

function selectingDrivers(drivers) {
    returnFirstTwoDrivers();
    returnLastTwoDrivers();
}
console.log(selectingDrivers[0](returnFirstTwoDrivers));
console.log(selectingDrivers[1](returnLastTwoDrivers));