/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 function canship(weights,mid,d){
    let dayscount=0;
    let tw=0;
    for(let i=0;i<weights.length;i++){
        if(tw+weights[i]>mid){
            dayscount++;
            tw=0;
        }
        tw+=weights[i];

    }dayscount++;
    return dayscount<=d;
 }
var shipWithinDays = function(weights, days) {
    let totalweight=0;
    let maxweight=-1;
    for(let i=0;i<weights.length;i++){
        totalweight+=weights[i];
        maxweight=Math.max(maxweight,weights[i]);
    }
    let lo=maxweight,hi=totalweight;
    let ans=hi;
    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2);
        if(canship(weights,mid,days)){
            ans=mid;
            hi=mid-1;
        } else{
            lo=mid+1;
        }
    }
    return ans
    
};
