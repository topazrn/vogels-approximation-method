export const indexOfMax = (array: number[]): number => {
  if (array.length === 0) {
    return -1
  }

  let tempIndex = 0
  let tempValue = 0
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    if (value > tempValue) {
      tempIndex = index
    }
  }

  return tempIndex
}
