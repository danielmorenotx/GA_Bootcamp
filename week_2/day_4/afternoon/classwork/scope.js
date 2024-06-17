function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log('Outer Variable: ' + outerVariable);
      console.log('Inner Variable: ' + innerVariable);
    };
  }
  
  const newFunction = outerFunction('outside');
  newFunction('inside');


// function factory

function makeMultiplier(x) {
    return function(y) {
        return x * y;
    };
}

const double = makeMultiplier(2);
console.log(double(5)); // 10

const triple = makeMultiplier(3);
console.log(triple(5)); // 15
