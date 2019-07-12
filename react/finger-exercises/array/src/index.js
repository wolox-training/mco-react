const isEven = value => !(value % 2)

export const evenOnly = array =>array.filter(num => isEven(num));

export const plusOne = array => array.map(num => num + 1);

export const replace = (array, index, value) => {
  if (array[index]) array[index] = value
  return array
}

export const validate = (array) => array.every(elem => elem.some(subElem => isEven(subElem)))

export const group = (array1, array2, array3) => array1.concat(array2, array3).sort()

export const sumEven = array => 
  array.reduce((total, num) => {
    if (isEven(num)) return total + num;
    return total
}, 0)