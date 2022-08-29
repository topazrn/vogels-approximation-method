import { indexOfMax } from "./indexOfMax"

test("indexOfMax([12, 34, 98, 75, 64, 29, 73, 86]) is 2", () => {
  expect(indexOfMax([12, 34, 98, 75, 64, 29, 73, 86])).toBe(2)
})

test("indexOfMax([12, 34, 98, 75, 64, 29, 73, 86], [2, 3]) is 7", () => {
  expect(indexOfMax([12, 34, 98, 75, 64, 29, 73, 86], [2, 3])).toBe(7)
})
