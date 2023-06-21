/**
 * Squares every digit of a number and concatenates them.
 * @param n - the number
 * @returns squared n with squared digits
 */
function squareDigits(n: number): number {
  const num = String(n);
  let squared = "";

  for (let char of num) {
    squared += String(parseInt(char)**2);
  }

  return parseInt(squared);
}

export default squareDigits;
