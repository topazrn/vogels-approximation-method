import { Problem, Step } from "./types"
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
  const solution: Step[] = [
    {
      matrix: [
        [0, 40, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
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
      x: [60, 0, 20, 15],
      y: [10, 60, 25],
    },
    {
      matrix: [
        [10, 40, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
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
      x: [50, 0, 20, 15],
      y: [0, 60, 25],
    },
    {
      matrix: [
        [10, 40, 0, 0],
        [0, 0, 0, 0],
        [25, 0, 0, 0],
      ],
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
      x: [25, 0, 20, 15],
      y: [0, 60, 0],
    },
    {
      matrix: [
        [10, 40, 0, 0],
        [25, 0, 0, 0],
        [25, 0, 0, 0],
      ],
      penalty: {
        x: [7, 0, 2, 3],
        y: [0, 1, 0],
      },
      strike: {
        x: [1, 0],
        y: [0, 2],
      },
      calculation1: "(40 x 2) + (10 x 3) + (25 x 2) + (25 x 7)",
      calculation2: "80 + 30 + 50 + 175",
      total: 335,
      x: [0, 0, 20, 15],
      y: [0, 35, 0],
    },
    {
      matrix: [
        [10, 40, 0, 0],
        [25, 0, 0, 15],
        [25, 0, 0, 0],
      ],
      penalty: {
        x: [0, 0, 2, 3],
        y: [0, 1, 0],
      },
      strike: {
        x: [1, 0, 3],
        y: [0, 2],
      },
      calculation1: "(40 x 2) + (10 x 3) + (25 x 2) + (25 x 7) + (15 x 3)",
      calculation2: "80 + 30 + 50 + 175 + 45",
      total: 380,
      x: [0, 0, 20, 0],
      y: [0, 20, 0],
    },
    {
      matrix: [
        [10, 40, 0, 0],
        [25, 0, 20, 15],
        [25, 0, 0, 0],
      ],
      penalty: {
        x: [0, 0, 2, 0],
        y: [0, 2, 0],
      },
      strike: {
        x: [1, 0, 3, 2],
        y: [0, 2, 1],
      },
      calculation1: "(40 x 2) + (10 x 3) + (25 x 2) + (25 x 7) + (15 x 3) + (20 x 2)",
      calculation2: "80 + 30 + 50 + 175 + 45 + 40",
      total: 420,
      x: [0, 0, 0, 0],
      y: [0, 0, 0],
    },
  ]
  expect(vam(problem)).toStrictEqual(solution)
})
