import { Problem, Step } from "./types";
import { indexOfMax } from "./indexOfMax";
import { indexOfMin } from "./indexOfMin";
import { penaltyOfMatrix } from "./penaltyOfMatrix";

export const nextStep = (problem:Problem, step: Step) : Step => {
  step = JSON.parse(JSON.stringify(step))

  step.penalty = penaltyOfMatrix(problem.matrix, step.strike)
  const xmax = indexOfMax(step.penalty.x, step.strike.x)
  const ymax = indexOfMax(step.penalty.y, step.strike.y)
  if (step.penalty.x[xmax] > step.penalty.y[ymax]) {
    const ys: number[] = []
    for (let y = 0; y < step.matrix.length; y++) {
      const cost = problem.matrix[y][xmax]
      ys.push(cost)
    }
    const ymin = indexOfMin(ys, step.strike.y)
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
    step.calculation1 += ` + (${step.matrix[ymin][xmax]} x ${problem.matrix[ymin][xmax]})`
    const calculation = step.matrix[ymin][xmax] * problem.matrix[ymin][xmax]
    step.calculation2 += " + " + calculation
    step.total += calculation
  } else {
    const xmin = indexOfMin(problem.matrix[ymax], step.strike.x)
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
    step.calculation1 += ` + (${step.matrix[ymax][xmin]} x ${problem.matrix[ymax][xmin]})`
    const calculation = step.matrix[ymax][xmin] * problem.matrix[ymax][xmin]
    step.calculation2 += " + " + calculation
    step.total += calculation
  }

  return step
}