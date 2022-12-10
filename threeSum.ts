export var threeSum = function (nums: number[]): number[][] {
    let result: number[][] = [];
    if (nums.length < 3) return result;
    nums.sort((a, b) => { return a - b});
    for (let i=0; i<nums.length; i++) {
      if (i > 0 && nums[i] === nums[i+1]) continue;
      var left: number = i+1;
      var right: number = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right]
        if (sum > 0) {
          right--;
        }
        else if (sum < 0) {
          left--;
        }
        else {
          result.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right + 1]) right--;
          right--;
          left++;
        }
      }
    } 
    return result;
  }
