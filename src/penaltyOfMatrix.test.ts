import { penaltyOfMatrix } from "./penaltyOfMatrix"

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-1.png", () => {
  expect(
    penaltyOfMatrix(
      [
        [3, 2, 7, 6],
        [7, 5, 2, 3],
        [2, 5, 4, 5],
      ],
      {
        x: [],
        y: [],
      }
    )
  ).toStrictEqual({
    x: [1, 3, 2, 2],
    y: [1, 1, 2],
  })
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-2.png", () => {
  expect(
    penaltyOfMatrix(
      [
        [3, 2, 7, 6],
        [7, 5, 2, 3],
        [2, 5, 4, 5],
      ],
      {
        x: [1],
        y: [],
      }
    )
  ).toStrictEqual({
    x: [1, 0, 2, 2],
    y: [3, 1, 2],
  })
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-3.png", () => {
  expect(
    penaltyOfMatrix(
      [
        [3, 2, 7, 6],
        [7, 5, 2, 3],
        [2, 5, 4, 5],
      ],
      {
        x: [1],
        y: [0],
      }
    )
  ).toStrictEqual({
    x: [5, 0, 2, 2],
    y: [0, 1, 2],
  })
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-4.png", () => {
  expect(
    penaltyOfMatrix(
      [
        [3, 2, 7, 6],
        [7, 5, 2, 3],
        [2, 5, 4, 5],
      ],
      {
        x: [1],
        y: [0, 2],
      }
    )
  ).toStrictEqual({
    x: [7, 0, 2, 3],
    y: [0, 1, 0],
  })
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-5.png", () => {
  expect(
    penaltyOfMatrix(
      [
        [3, 2, 7, 6],
        [7, 5, 2, 3],
        [2, 5, 4, 5],
      ],
      {
        x: [1, 0],
        y: [0, 2],
      }
    )
  ).toStrictEqual({
    x: [0, 0, 2, 3],
    y: [0, 1, 0],
  })
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-6.png", () => {
  expect(
    penaltyOfMatrix(
      [
        [3, 2, 7, 6],
        [7, 5, 2, 3],
        [2, 5, 4, 5],
      ],
      {
        x: [1, 0, 3],
        y: [0, 2],
      }
    )
  ).toStrictEqual({
    x: [0, 0, 2, 0],
    y: [0, 2, 0],
  })
})
