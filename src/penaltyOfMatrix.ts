import { indexOfMin } from "./indexOfMin"

export interface Penalty {
  x: number[]
  y: number[]
}

export const penaltyOfMatrix = (matrix: number[][]): Penalty => {
  const penalty: Penalty = {
    x: [],
    y: [],
  }

  for (let x = 0; x < matrix.length; x++) {
    const ys = matrix[x]
    const min = indexOfMin(ys)
    const secondMin = indexOfMin(ys, [min])
    const difference = secondMin !== -1 ? ys[secondMin] - ys[min] : ys[min]
    penalty.y.push(difference)
  }

  for (let y = 0; y < matrix[0].length; y++) {
    const xs: number[] = []
    for (let x = 0; x < matrix.length; x++) {
      const cost = matrix[x][y]
      xs.push(cost)
    }

    const min = indexOfMin(xs)
    const secondMin = indexOfMin(xs, [min])
    const difference = secondMin !== -1 ? xs[secondMin] - xs[min] : xs[min]
    penalty.x.push(difference)
  }

  return penalty
}
