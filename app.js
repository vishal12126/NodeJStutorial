const tutorial = require('./tutorial');
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.MathObjectSample());

//*****************EventModules ie event driven classes**************************

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log('tutorial Event has occured');
    console.log(num1 + num2);
})

eventEmitter.emit('tutorial',2,3);

//create a custom object
//const name = 'hello';
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let newName = new Person('vishal');
let newName2 = new Person('ABC');

newName.on('name',() => {
    console.log('my name is '+ newName.name);
})

newName2.on('name', () => {
    console.log('my name is '+ newName2.name);
})

newName.emit('name');
newName2.emit('name');