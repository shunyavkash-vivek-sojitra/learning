// simple closure
console.log("Simple Closure:");
const simpleClosure = () => {
  let name = "vivek";

  return () => {
    console.log(`Hello ${name}`);
  };
};

let callSimpleClosure = simpleClosure();
callSimpleClosure();

// simple count
console.log("Simple Count:");

const simpleCount = () => {
  let count = 0;

  return () => {
    count++;
    console.log("count: ", count);
  };
};

let callSimpleCount = simpleCount();
callSimpleCount();
callSimpleCount();
callSimpleCount();
callSimpleCount();
