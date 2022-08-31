import { Problem, Step } from "./types"
import { stepOfProblem } from "./stepOfProblem"
import { nextStep } from "./nextStep"

const sum = (array: number[]): number => {
  let count = 0
  for (let i = array.length; i--; ) {
    count += array[i]
  }
  return count
}

export const vam = (problem: Problem): Step[] => {
  const steps: Step[] = []
  steps.push(stepOfProblem(problem))
  for (let index = 0; sum(steps[index].x); index++) {
    const step = steps[index]
    steps.push(nextStep(problem, step))
  }
  return steps
}
