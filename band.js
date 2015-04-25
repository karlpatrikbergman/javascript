//http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html

function Band(name, description, rockFactor) {
    this.name = name;
    this.description = description;
    this.rockFactor = rockFactor;
}

//Shares the method across object instances:
Band.prototype = {
    play: function () {
        return this.name + " is playing";
    },
    rehearse: function () {
        return this.name + " is rehearsing";//DO SOMETHING
    },
    tour: function () {
        return this.name + " is touring";
    }
};




