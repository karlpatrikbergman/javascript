debugger;

var bands = [
    Object.freeze(new Band("Saxon", "Saxon description", 6)),
    Object.freeze(new Band("Accept", "Accept description", 6)),
    Object.freeze(new Band("Judas Priest", "Judas Priest description", 8)),
    Object.freeze(new Band("Iron Maiden", "Iron Maiden description", 9)),
];

function logElement(element, index, array) {
    "use strict";
    console.log(element);
}

console.log("Array of band objects:")
bands.forEach(logElement)

console.log("\n")

function reverse (s) {
    "use strict";
    return s.split('').reverse().join('');
}

function reverseBandName(band) {
    "use strict";
    return new Band(reverse(band.name), band.description, band.rockFactor);
}

var bandsReversedName = bands.map(reverseBandName);
console.log("Array of band objects with reversed name:")
bandsReversedName.forEach(logElement);

console.log("\n")

var bandsSortedByRockFactor = bands.sort(function (a, b) { return b.rockFactor - a.rockFactor})
console.log("Array of band objects sorted by rockFactor:")
bandsSortedByRockFactor.forEach(logElement);