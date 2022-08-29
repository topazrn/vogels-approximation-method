export const indexOfMin = (array: number[]): number => {
  if (array.length === 0) {
    return -1
  }

  let tempIndex = 0
  let tempValue = array[tempIndex]
  for (let index = 0; index < array.length; index++) {
    const value = array[index]
    if (value < tempValue) {
      tempValue = value
      tempIndex = index
    }
  }

  return tempIndex
}
