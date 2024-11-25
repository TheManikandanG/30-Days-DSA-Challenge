// Ex
// Input: prices[] = {7, 10, 1, 3, 6, 9, 2}
// Output: 8
// Explanation: Buy for price 1 and sell for price 9. 

function maxProfit(prices){
    let n=prices.length
    let res=0

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            res=Math.max(res,prices[j]-prices[i])
        }
    }
    return res
}

let prices = [7, 10, 1, 3, 6, 9, 2];
console.log(maxProfit(prices));
