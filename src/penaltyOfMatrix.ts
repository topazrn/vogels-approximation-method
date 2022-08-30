import { indexOfMin } from "./indexOfMin"

export interface Penalty {
  x: number[]
  y: number[]
}

export const penaltyOfMatrix = (matrix: number[][], except?: Penalty): Penalty => {
  const penalty: Penalty = {
    x: [],
    y: [],
  }

  for (let y = 0; y < matrix.length; y++) {
    if (except && except?.y.indexOf(y) !== -1) {
      continue
    }
    const xs: number[] = []
    for (let x = 0; x < matrix[y].length; x++) {
      if (except && except?.x.indexOf(x) !== -1) {
        continue
      }
      const cost = matrix[y][x];
      xs.push(cost)
    }
    const min = indexOfMin(xs)
    const secondMin = indexOfMin(xs, [min])
    const difference = secondMin !== -1 ? xs[secondMin] - xs[min] : xs[min]
    penalty.y.push(difference)
  }

  for (let x = 0; x < matrix[0].length; x++) {
    if (except && except?.x.indexOf(x) !== -1) {
      continue
    }
    const ys: number[] = []
    for (let y = 0; y < matrix.length; y++) {
      if (except && except?.y.indexOf(y) !== -1) {
        continue
      }
      const cost = matrix[y][x]
      ys.push(cost)
    }
    const min = indexOfMin(ys)
    const secondMin = indexOfMin(ys, [min])
    const difference = secondMin !== -1 ? ys[secondMin] - ys[min] : ys[min]
    penalty.x.push(difference)
  }

  return penalty
}
