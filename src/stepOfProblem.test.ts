import { stepOfProblem, type Problem, type Step } from "./stepOfProblem"

test("https://cdn1.byjus.com/wp-content/uploads/2022/04/Vogels-Approximation-Method-2.png", () => {
  const problem: Problem = {
    matrix: [
      [3, 2, 7, 6],
      [7, 5, 2, 3],
      [2, 5, 4, 5],
    ],
    x: [60, 40, 20, 15],
    y: [50, 60, 25],
  }
  const step: Step = {
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
  expect(stepOfProblem(problem)).toStrictEqual(step)
})

test("https://businessjargons.com/wp-content/uploads/2015/12/VAM-2.jpg", () => {
  const problem: Problem = {
    matrix: [
      [6, 4, 1],
      [3, 8, 7],
      [4, 4, 2],
    ],
    x: [20, 95, 35],
    y: [50, 40, 60],
  }
  const step: Step = {
    matrix: [
      [0, 0, 0],
      [20, 0, 0],
      [0, 0, 0],
    ],
    x: [0, 95, 35],
    y: [50, 20, 60],
    penalty: {
      x: [1, 0, 1],
      y: [3, 4, 2],
    },
    strike: {
      x: [0],
      y: [],
    },
    total: "(20 x 3)",
  }
  expect(stepOfProblem(problem)).toStrictEqual(step)
})
