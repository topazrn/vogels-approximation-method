import { Penalty, penaltyOfMatrix } from "./penaltyOfMatrix"
import { indexOfMax } from "./indexOfMax"
import { indexOfMin } from "./indexOfMin"

export interface Problem extends Penalty {
  matrix: number[][]
}

export interface Step extends Problem {
  strike: Penalty
  penalty: Penalty
  total: string
}

export const stepOfProblem = (problem: Problem): Step => {
  const step: Step = {
    matrix: [],
    x: [...problem.x],
    y: [...problem.y],
    penalty: penaltyOfMatrix(problem.matrix),
    strike: {
      x: [],
      y: []
    },
    total: "",
  }
  for (let y = 0; y < problem.matrix.length; y++) {
    step.matrix.push([])
    for (let x = 0; x < problem.matrix[0].length; x++) {
      step.matrix[y].push(0)
    }
  }

  const xmax = indexOfMax(step.penalty.x)
  const ymax = indexOfMax(step.penalty.y)
  if (step.penalty.x[xmax] > step.penalty.y[ymax]) {
    const ys: number[] = []
    for (let y = 0; y < step.matrix.length; y++) {
      const cost = problem.matrix[y][xmax]
      ys.push(cost)
    }
    const ymin = indexOfMin(ys)
    const min = Math.min(step.y[ymin], step.x[xmax])
    step.matrix[ymin][xmax] = min
    step.y[ymin] -= min
    step.x[xmax] -= min
    if (step.y[ymin] === 0) {
      step.strike.y.push(ymin)
    }
    if (step.x[xmax] === 0) {
      step.strike.x.push(xmax)
    }
    step.total += `(${step.matrix[ymin][xmax]} x ${problem.matrix[ymin][xmax]})`
  } else {
    const xmin = indexOfMin(problem.matrix[ymax])
    const min = Math.min(step.y[ymax], step.x[xmin])
    step.matrix[ymax][xmin] = min
    step.y[ymax] -= min
    step.x[xmin] -= min
    if (step.y[ymax] === 0) {
      step.strike.y.push(ymax)
    }
    if (step.x[xmin] === 0) {
      step.strike.x.push(xmin)
    }
    step.total += `(${step.matrix[ymax][xmin]} x ${problem.matrix[ymax][xmin]})`
  }

  return step
}
