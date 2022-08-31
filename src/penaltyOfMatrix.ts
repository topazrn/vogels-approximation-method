import { indexOfMin } from "./indexOfMin"

export interface Penalty {
  x: number[]
  y: number[]
}

export const penaltyOfMatrix = (matrix: number[][], except: Penalty): Penalty => {
  const penalty: Penalty = {
    x: [],
    y: [],
  }

  for (let y = 0; y < matrix.length; y++) {
    if (except && except.y.indexOf(y) !== -1) {
      penalty.y.push(0)
      continue
    }
    const xs = matrix[y]
    const min = indexOfMin(xs, except.x)
    const secondMin = indexOfMin(xs, [min, ...except.x])
    let difference = 0
    if (secondMin !== -1 && min !== -1) {
      difference = xs[secondMin] - xs[min]
    } else if (secondMin !== -1) {
      difference = xs[secondMin]
    } else if (min !== -1) {
      difference = xs[min]
    }
    penalty.y.push(difference)
  }

  for (let x = 0; x < matrix[0].length; x++) {
    if (except && except.x.indexOf(x) !== -1) {
      penalty.x.push(0)
      continue
    }
    const ys: number[] = []
    for (let y = 0; y < matrix.length; y++) {
      const cost = matrix[y][x]
      ys.push(cost)
    }
    const min = indexOfMin(ys, except.y)
    const secondMin = indexOfMin(ys, [min, ...except.y])
    let difference = 0
    if (secondMin !== -1 && min !== -1) {
      difference = ys[secondMin] - ys[min]
    } else if (secondMin !== -1) {
      difference = ys[secondMin]
    } else if (min !== -1) {
      difference = ys[min]
    }
    penalty.x.push(difference)
  }

  return penalty
}
