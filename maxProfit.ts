function maxProfit(prices: number[]): number {
    function getKey(i: number, isBuy: boolean) {
      return i + "." + isBuy;
    }
  
    function maxProfitAt(i: number, isBuy: boolean) {
      if (i >= prices.length) {
         return 0;
      }
      if (dp[getKey(i, isBuy)]) {
        return dp[getKey(i, isBuy)]
      }
  
      let result;
  
      if (isBuy) {
        const buyNowProfit = maxProfitAt(i+1, false) - prices[i];
        const buyLaterProfit = maxProfitAt(i+1, true);
        result = Math.max(buyNowProfit, buyLaterProfit);
      }
      else {
        const sellNowProfit = prices[i] + maxProfitAt(i+2, true);
        const sellLaterProfit = maxProfitAt(i+1, false);
        result = Math.max(sellNowProfit, sellLaterProfit);
      }
      dp[getKey(i, isBuy)] = result;
      return result;
    }
    const dp = {}
    return maxProfitAt(0, true);
  }
  