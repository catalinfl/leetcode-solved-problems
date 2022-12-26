function twoSum(numbers: number[], target: number): number[] {
    var sum: number = 0;
    for (let i=0; i<numbers.length; i++) {
      var j = i+1;
      if (numbers[i] > target && target > 0) {
        return []
      }
      else { 
        while (j <= numbers.length) {
          if (numbers[i] + numbers[j] === target) {
            return [i+1, j+1]
          }
          j++;
        }
      }
    }
  };