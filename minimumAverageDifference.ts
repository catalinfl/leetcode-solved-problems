export function minimumAverageDifference(nums: number[]): number {
    let ans: number = 0;
    let minDiff: number = Math.pow(2, 32);
    if (nums.length === 0) {
      return 0;
    }
    const total = nums.reduce((a, b) => a + b);
    var suma: number = 0;
    for (let i=0; i < nums.length; i++) {
      suma += nums[i];
      const rightSum = total - suma;
      const leftAvg = Math.floor(suma / (i+1));
      const rightAvg = Math.floor(rightSum / ((i === nums.length - 1) ? 1 : nums.length - i - 1));
      const diff = Math.abs(leftAvg - rightAvg);
      
      if (diff < minDiff) {
      minDiff = diff;
      ans = i;
      }
    }
    return ans;
  }
