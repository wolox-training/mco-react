import { evenOnly, plusOne, replace, group, validate, sumEven } from '.';

describe('Array functions', () => {
  it('evenOnly returns only the even numbers', () => {
    expect(evenOnly([1,2,3,4])).toEqual([2,4]);
    expect(evenOnly([11,13,15])).toEqual([]);
  });
  it('plusOne adds one to every element on the list', () => {
    expect(plusOne([1, 2, 3])).toEqual([2,3,4]);
    expect(plusOne([-1, 99])).toEqual([0, 100]);
  });
  it('replace can change any element to a certain value', () => {
    expect(replace([25, 66, 78], 1, 99)).toEqual([25, 99, 78]);
    expect(replace([25, 66, 78], 9, 100)).toEqual([25, 66, 78]);
  });
  it('validate only accepts chunks of arrays that have one even number per array', () => {
    expect(validate([[1, 4, 11], [2, 13], [6, 22], [27, 30]])).toBeTruthy();
    expect(validate([[2, 11, 33], [3, 15], [6, 22], [32, 30]])).toBeFalsy();
  });
  it('group joins 3 arrays and returns them in order', () => {
    expect(group([25, 66, 78], [7, 1, 89], [90, 0, 10])).toEqual([0, 1, 10, 25, 66, 7, 78, 89, 90]);
  });
  it('sumEven takes an array and returns the total of all the even numbers', () => {
    expect(sumEven([2, 5, 8, 15, 10])).toEqual(20);
    expect(sumEven([])).toEqual(0);
  });
});
