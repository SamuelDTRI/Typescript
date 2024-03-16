type Operation = "Multiply" | "Add" | "Divide" | "Rest";
type Result = number;

const calculatromidudev = (a: number, b: number, op: Operation): Result => {
  if (op == "Multiply") return a * b;
  if (op === "Add") return a + b;
  if (op == "Divide") {
    if (b === 0) throw new Error("can't divide by 0 sorry!");
    return a / b;
  }
  throw new Error("Operation is not valid");
};

console.log(process.argv);

