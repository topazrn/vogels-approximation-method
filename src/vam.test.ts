import { Problem } from "./stepOfProblem"
import { vam } from "./vam"

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
  expect(vam(problem)).toStrictEqual([])
})
