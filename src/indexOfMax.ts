export const indexOfMax = (array: number[], except?: number[]): number => {
  if (array.length === 0) {
    return -1
  }

  let tempIndex = 0
  let tempValue: number | null = null
  for (let index = 0; index < array.length; index++) {
    if (except && except?.indexOf(index) !== -1) {
      continue
    }
    const value = array[index]
    if (tempValue === null) {
      tempValue = value
    }
    if (value > tempValue) {
      tempValue = value
      tempIndex = index
    }
  }

  return tempIndex
}
