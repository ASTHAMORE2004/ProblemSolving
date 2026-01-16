import java.util.Arrays;

public class Solution {
    
    public static int[] c; // global coins array
    public static int[] dp;
    
    public int f(int amount) {
        if(amount < 0) return Integer.MAX_VALUE; 
        if(amount == 0) return 0; 
        if(dp[amount] != -1) return dp[amount];
        
        int ans = Integer.MAX_VALUE;
        int n = c.length; 
        for(int i = 0; i < n; i++) {
            if(amount >= c[i]) {
                ans = Math.min(ans, f(amount - c[i]));
            } else {
                break;
            }
        }
        
        if(ans == Integer.MAX_VALUE) {
            return dp[amount] = Integer.MAX_VALUE;
        }
        return dp[amount] = 1 + ans;
    }
    
    public int numSquares(int n) {
        c = new int[100];
        int j = 0;
        for(int i = 1; i * i <= 10000; i++) {
            c[j] = i * i;
            j++;
        }
        dp = new int[10005];
        Arrays.fill(dp, -1);
        return f(n);
    }
}
