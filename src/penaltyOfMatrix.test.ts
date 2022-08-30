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

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-2.png", () => {
  expect(
    penaltyOfMatrix([
      [3, 7, 6],
      [7, 2, 3],
      [2, 4, 5],
    ])
  ).toStrictEqual({
    x: [1, 2, 2],
    y: [3, 1, 2],
  })
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-3.png", () => {
  expect(
    penaltyOfMatrix([
      [7, 2, 3],
      [2, 4, 5],
    ])
  ).toStrictEqual({
    x: [5, 2, 2],
    y: [1, 2],
  })
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-4.png", () => {
  expect(
    penaltyOfMatrix([
      [7, 2, 3],
    ])
  ).toStrictEqual({
    x: [7, 2, 3],
    y: [1],
  })
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-5.png", () => {
  expect(
    penaltyOfMatrix([
      [2, 3],
    ])
  ).toStrictEqual({
    x: [2, 3],
    y: [1],
  })
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-6.png", () => {
  expect(
    penaltyOfMatrix([
      [2],
    ])
  ).toStrictEqual({
    x: [2],
    y: [2],
  })
})
