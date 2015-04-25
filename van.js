function Van(brand, nrOfSeats) {
    "use strict";

    defineProperty(this, "brand", brand);
    defineProperty(this, "nrOfSeats", nrOfSeats);

    function defineProperty(obj, propertyName, value) {
        Object.defineProperty(obj, propertyName, {
            value: value,
            writable: false,
            enumerable: true,
            configurable: true
        });
    }
}

Van.prototype = {
    drive: function () {
        return this.brand + " is driving";
    },
    stop: function () {
        return this.brand + " is stopping";
    },
    turnRight: function () {
        return this.brand + " is turning right";
    },
    turnLeft: function () {
        return this.brand + " is turning left";
    }
};
