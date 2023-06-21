import squareDigits from "./skeleton";

test("would work with numbers", () => {
  expect(squareDigits(2137)).toBe(41949);
  expect(squareDigits(27)).toBe(449);
  expect(squareDigits(0)).toBe(0);
  expect(squareDigits(189)).toBe(16481);
  expect(squareDigits(33)).toBe(99);
});
