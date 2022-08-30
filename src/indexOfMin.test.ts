import { indexOfMin } from "./indexOfMin"

test("indexOfMin([]) is -1", () => {
  expect(indexOfMin([])).toBe(-1)
})

test("indexOfMin([12, 34, 98, 75, 64, 29, 73, 86]) is 0", () => {
  expect(indexOfMin([12, 34, 98, 75, 64, 29, 73, 86])).toBe(0)
})

test("indexOfMin([12, 34, 98, 75, 64, 29, 73, 86], [0, 2, 3]) is 5", () => {
  expect(indexOfMin([12, 34, 98, 75, 64, 29, 73, 86], [0, 2, 3])).toBe(5)
})

test("indexOfMin([2, 5, 5], [0]) is 1", () => {
  expect(indexOfMin([2, 5, 5], [0])).toBe(1)
})
