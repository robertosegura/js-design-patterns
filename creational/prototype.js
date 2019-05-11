/**
 * The Prototype design pattern is one in which a method is used in which through a model object or template
 *
 * we can obtain a clone identical to it, as far as the value of its data is concerned.
 *
 */

 class Human {
    constructor(config) {
        this.hair = config.hair;
        this.height = config.height;
        this.weight = config.weight;
    }

    logHeight() {
        return `my height: ${this.height} cm`;
    }

    logWeight() {
        return `my weight: ${this.weight} kg`;
    }

    clone() {
        return new Human(Object.assign({}, this));
    }
 }

 const myself = new Human({ hair: 'brown', height: 177, weight: 80 });
 const myClone = myself.clone();

console.log(myself);
console.log(myClone);

// Original & clone are not the same but have same data.
console.log(myself == myClone);

// Still able to use class methods (logHeight, logWeight) since the clone implementation returns the same
// type of object, this is not possible just using Object.assign
console.log(myClone.logHeight());
console.log(myClone.logWeight());
