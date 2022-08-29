export const indexOfMax = (array: number[], except?: number[]): number => {
  if (array.length === 0) {
    return -1
  }

  let tempIndex: number = -1
  let tempValue: number = -1
  for (let index = 0; index < array.length; index++) {
    if (except && except?.indexOf(index) !== -1) {
      continue
    }
    const value = array[index]
    if (tempValue === -1) {
      tempValue = value
      tempIndex = index
    }
    if (value > tempValue) {
      tempValue = value
      tempIndex = index
    }
  }

  return tempIndex
}
