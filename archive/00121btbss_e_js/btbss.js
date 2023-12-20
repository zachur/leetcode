var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

// Example usage
const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log(profit); // Output: 5
