const calculator = (
  x: number,
  y: number,
  text: string,
  z: number,
  flums: string
) => {
  console.log(text, x + y, flums, x + y * z);
};

calculator(
  4,
  8,
  "The result of this operations x and y is: ",
  100,
  "and the multplication x z is: "
);
