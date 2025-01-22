// Switch - Interest Calculator
/*
    USECASE:
    principal: amount
    rate: rate of interest
    time: years

    => Simple Interest Calculator [fixed interest rate over years]
        FORMULA: simple interest = (principal * rate * time) / 100

    => Compound Interest Calculator [incresing interest rate over years]
        FORMULA: compound interest = principal * Math.pow((1 + rate / 100), time);
        To Understand: principal * (1 + rate / 100) power(time)
*/

// Enter Value Here:
let principal = 10000; // amount
let rate = 5; // rate of interest [in percentage]
let time = 3; // total years

// Change Option Here: ["simple", "compound", "both"]
let option = "both"; // simple/compound or both

// simple interest functionality
const findSimpleInterest = () => {
  let simpleInterest = (principal * rate * time) / 100;
  return simpleInterest;
};

// compound interest functionality
const findcompoundInterest = () => {
  let compoundInterest = principal * Math.pow(1 + rate / 100, time);
  return compoundInterest;
};

switch (option) {
  // simple interest
  case "simple":
    {
      let simpleInterest = findSimpleInterest();
      console.log("Simple Interest:\n");
      console.log(`
                    Principal: ${principal}
                    RateOfInterest: ${rate} %
                    Years: ${time}

                    Simple Interest:
                    TotalInterest: ${simpleInterest.toFixed(2)}
                    TotalAmount: ${(simpleInterest + principal).toFixed(2)}
                `);
    }
    break;

  // compound interest
  case "compound":
    {
      let compoundInterest = findcompoundInterest();
      console.log("Compound Interest:");
      console.log(`
                    Principal: ${principal}
                    RateOfInterest: ${rate} %
                    Years: ${time}

                    Copmound Interest:
                    TotalInterest: ${(compoundInterest - principal).toFixed(2)}
                    TotalAmount: ${compoundInterest.toFixed(2)}
                `);
    }
    break;

  // compound interest
  case "both":
    {
      let simpleInterest = findSimpleInterest();
      let compoundInterest = findcompoundInterest();
      console.log("Simple & Compound Interest:");
      console.log(`
                    Principal: ${principal}
                    RateOfInterest: ${rate} %
                    Years: ${time}

                    Simple Interest:
                    SimpleInterest: ${simpleInterest.toFixed(2)}
                    TotalAmount: ${(simpleInterest + principal).toFixed(2)}

                    Copmound Interest:
                    TotalInterest: ${(compoundInterest - principal).toFixed(2)}
                    TotalAmount: ${compoundInterest.toFixed(2)}
                `);
    }
    break;

  default:
    console.log("Enter Valid Option from simple/compound or both.");
}
