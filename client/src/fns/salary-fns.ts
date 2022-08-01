export function findAverageSalary(salariesArr: number[]) {
  const sum = salariesArr.reduce(
    (prev: number, curr: number) => prev + curr,
    0
  );
  let average = sum / salariesArr.length;
  average = Number(average.toFixed(0));
  return average;
}
