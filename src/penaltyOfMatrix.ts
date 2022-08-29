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
    const xs = matrix[x]
    const min = indexOfMin(xs)
    const secondMin = indexOfMin(xs, [min])
    const difference = xs[secondMin] - xs[min]
    penalty.y.push(difference)
  }

  
  for (let y = 0; y < matrix[0].length; y++) {
    const ys: number[] = []
    for (let x = 0; x < matrix.length; x++) {
      const cost = matrix[x][y]
      ys.push(cost)
    }
    
    const min = indexOfMin(ys)
    const secondMin = indexOfMin(ys, [min])
    const difference = ys[secondMin] - ys[min]
    penalty.x.push(difference)
  }

  return penalty
}
