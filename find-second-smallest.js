function findSecondSmallest(numbers) {
    if (numbers.length < 2) {
      throw new Error('Array must contain at least two elements.');
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (const num of numbers) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest;
  }
  
  
  const inputArray = [5, 2, 9, 1, 5, 6];
  console.log(findSecondSmallest(inputArray)); 
  