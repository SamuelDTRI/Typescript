const multiplier = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};

const parseArgumetn = (args): Array<number> => {
  console.log(args.length);

  if (args.length != 4) throw new Error("Wrong number of arguments");

  const firstNumber = Number(args[2]);
  const secondNumber = Number(args[3]);
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    return [firstNumber, secondNumber, args[0], args[1]];
  }
  throw new Error("Wrong arguments");
};

const cleanArguments = parseArgumetn(process.argv);

const a: number = Number(cleanArguments[0]);
const b: number = Number(cleanArguments[1]);

multiplier(a, b, `Multiply ${a} and ${b} and the result is: `);
