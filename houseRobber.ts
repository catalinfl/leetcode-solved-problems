function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length <= 2) {
        return Math.max(...nums)
    }
    var dp: number[] = Array(nums.filter).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i=2; i<nums.length; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
        console.log(dp[i])
    }
    return dp[nums.length-1]
}