export interface Penalty {
  x: number[]
  y: number[]
}

export interface Problem extends Penalty {
  matrix: number[][]
}

export interface Step extends Problem {
  strike: Penalty
  penalty: Penalty
  calculation1: string
  calculation2: string
  total: number
}
