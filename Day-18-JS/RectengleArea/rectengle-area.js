let length = 10;
let width = 5;
let threshold = 40; // Total available area in the sense.

console.log(`Length: ${length}\nWidth: ${width}\nThreshold: ${threshold}\n`);

// area of rectengle : area = length * width
let areaOfRectengle = length * width;

console.log(`Area of Rectengle: ${areaOfRectengle}\n`);

areaOfRectengle > threshold
  ? console.log(
      `Area of Rectengle ${areaOfRectengle} is surpass the limit of threshold is ${threshold}.`
    )
  : console.log(
      `Area of Rectengle ${areaOfRectengle} is covered in the limit of threshold is ${threshold}.`
    );
