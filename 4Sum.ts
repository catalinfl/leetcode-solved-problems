function fourSum(nums: number[], target: number) {
    var result: number[][] = [];
    if (nums.length < 4) {
      return result;
    }
    nums.sort((a, b) => a - b)
    for (let i=0; i<nums.length-3; i++) {
      if (i > 0 && nums[i] === nums[i-1]) continue;
      if (nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) {
        break;
      }
      for (let j=i+1; j<nums.length-2; j++) {
        if (j > i+1 && nums[j] === nums[j-1]) continue;
        let left = j+1;
        let right = nums.length - 1;
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
          if (sum === target) {
            result.push([nums[i], nums[j], nums[right], nums[left]]);
            while (nums[left] === nums[left+1]) left++;
            while (nums[right] === nums[right+1]) right--;
            left++;
            right--;
          }
          else if (sum < target) {
            left++;
          }
          else right--;
        }
      }
    }
    return result;
  }