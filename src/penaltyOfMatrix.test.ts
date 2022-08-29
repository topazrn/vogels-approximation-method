import { penaltyOfMatrix } from "./penaltyOfMatrix"

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-1.png", () => {
  expect(
    penaltyOfMatrix([
      [3, 2, 7, 6],
      [7, 5, 2, 3],
      [2, 5, 4, 5],
    ])
  ).toStrictEqual({
    x: [1, 3, 2, 2],
    y: [1, 1, 2],
  })
})
