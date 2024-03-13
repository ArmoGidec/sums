const START_POSSIBLE_NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const getSums = (sum: number, n: number) => {  
  return _getSums(sum, n, START_POSSIBLE_NUMS);
};

const MIN = 1;
const MAX = 9;

async function _getSums(
  sum: number,
  n: number,
  possibleNums: number[],
): Promise<number[][]> {
  if (n === 1) {
    return sum <= MAX && possibleNums.includes(sum) ? [[sum]] : [];
  }

  const results: number[][] = [];

  await Promise.all(possibleNums.map(async (possibleNum, idx) => {
    const restSum = sum - possibleNum;
    if (restSum < MIN || restSum <= possibleNum) {
      return;
    }
    
    const nextResults = await _getSums(restSum, n - 1, possibleNums.slice(idx + 1));
    if (nextResults.length) {
      results.push(...nextResults.map((nextResult) => [possibleNum, ...nextResult]));
    }
  }));

  return results;
}
