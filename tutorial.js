const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class MathObjectSample {
    constructor() {
        console.log('Object created');
    }
}
//either export below way
//module.exports.sum = sum ;
//module.exports.PI = PI;
//module.exports.MathObjectSample = MathObjectSample;

//or do it like this
module.exports = {sum : sum, PI : PI, MathObjectSample : MathObjectSample};