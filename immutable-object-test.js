"use strict";

var band1 = new Band("Accept", "An heavy metal band from Germany famous in the eighties", 8);
var band2 = new Band("Judas priest", "An heavy metal band from England famous the eighties", 9);

//Not immutable object, can be modified
band1.name = "Accept-modified";

console.log(band1.rehearse());
console.log(band1.tour());
console.log(band1.play());

console.log(band2.rehearse());
console.log(band2.tour());
console.log(band2.play());

var immutableBand = Object.freeze(new Band("Beatles", "The most famous band ever", 10));
//will cause "Uncaught TypeError: Cannot assign to read only property 'name' of #<Object>"
//immutableBand.name = "Rolling Stones";

console.log(immutableBand.play());



