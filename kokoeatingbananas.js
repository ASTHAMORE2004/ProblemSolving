/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 function caneat(piles,h,mid){
    let hours=0;
    for(let i=0;i<piles.length;i++){
        hours+=Math.ceil(piles[i]/mid);
    }
    return hours<=h;
 }
var minEatingSpeed = function(piles, h) {
    let lo=1;
    let hi=Math.max(...piles);
    let ans=1;
    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2);
        if(caneat(piles,h,mid)){
            ans=mid;
            hi=mid-1;

        }else{
            lo=mid+1;
        }
    }
    return ans;

    
};
