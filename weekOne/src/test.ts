function multiplyNums(...nums: number[]): number {
  let result: number = 1;

  for (const num of nums) {
    result *= num;
  }

  return result;
}

console.log(multiplyNums(5, 6, 5));
