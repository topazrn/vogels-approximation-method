import { stepOfProblem, type Step } from "./stepOfProblem"

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-3.png", () => {
  const input: Step = {
    matrix: [
      [0, 40, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    x: [60, 0, 20, 15],
    y: [10, 60, 25],
    penalty: {
      x: [1, 3, 2, 2],
      y: [1, 1, 2],
    },
    strike: {
      x: [1],
      y: [],
    },
    total: "(40 x 2)",
  }
  const output: Step = {
    matrix: [
      [10, 40, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    x: [50, 0, 20, 15],
    y: [0, 60, 25],
    penalty: {
      x: [1, 2, 2],
      y: [3, 1, 2],
    },
    strike: {
      x: [1],
      y: [0],
    },
    total: "(40 x 2) + (10 x 3)",
  }
  expect(stepOfProblem(input)).toStrictEqual(output)
})
