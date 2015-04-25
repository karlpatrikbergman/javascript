"use strict";
/*
var van = new Van("Ford", 9);
console.log(van);

//van.brand = "Gmc";
//console.log(van);

console.log(van.drive());
console.log(van.turnLeft());
console.log(van.turnRight());
console.log(van.stop());
*/
//var add = {}();

var f = (
            function() {
                console.log("run me once immediately");
                return function() {
                    console.log("run me whenever you like")
                }
            }
        )(); //parens makes first function execute once
f();
f();
f();

/*
var add =
    function () {
        var counter = 0;
        return function () {
            console.log(counter);
            return counter += 1;
        }
    }

    ();

add();
add();
add();

*/


