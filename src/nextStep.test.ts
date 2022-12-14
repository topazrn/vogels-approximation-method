import { Problem, Step } from "./types";
import { nextStep } from "./nextStep"

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-3.png", () => {
  const problem: Problem = {
    matrix: [
      [3, 2, 7, 6],
      [7, 5, 2, 3],
      [2, 5, 4, 5],
    ],
    x: [60, 40, 20, 15],
    y: [50, 60, 25],
  }
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
    calculation1: "(40 x 2)",
    calculation2: "80",
    total: 80,
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
      x: [1, 0, 2, 2],
      y: [3, 1, 2],
    },
    strike: {
      x: [1],
      y: [0],
    },
    calculation1: "(40 x 2) + (10 x 3)",
    calculation2: "80 + 30",
    total: 110,
  }
  expect(nextStep(problem, input)).toStrictEqual(output)
})

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-4.png", () => {
  const problem: Problem = {
    matrix: [
      [3, 2, 7, 6],
      [7, 5, 2, 3],
      [2, 5, 4, 5],
    ],
    x: [60, 40, 20, 15],
    y: [50, 60, 25],
  }
  const input: Step = {
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
    calculation1: "(40 x 2) + (10 x 3)",
    calculation2: "80 + 30",
    total: 110,
  }
  const output: Step = {
    matrix: [
      [10, 40, 0, 0],
      [0, 0, 0, 0],
      [25, 0, 0, 0],
    ],
    x: [25, 0, 20, 15],
    y: [0, 60, 0],
    penalty: {
      x: [5, 0, 2, 2],
      y: [0, 1, 2],
    },
    strike: {
      x: [1],
      y: [0, 2],
    },
    calculation1: "(40 x 2) + (10 x 3) + (25 x 2)",
    calculation2: "80 + 30 + 50",
    total: 160,
  }
  expect(nextStep(problem, input)).toStrictEqual(output)
})
