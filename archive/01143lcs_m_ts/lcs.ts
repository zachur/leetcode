function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;
    const dp: number[][] = [];
  
    // Initialize the dp array
    for (let i = 0; i <= m; i++) {
      dp.push(new Array(n+1).fill(0));
    }
  
    // Fill the dp array
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (text1[i-1] === text2[j-1]) {
          dp[i][j] = dp[i-1][j-1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
      }
    }
  
    return dp[m][n];
  }
  
  console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3 (since the longest common subsequence is "ace")
  console.log(longestCommonSubsequence("abc", "def")); // Output: 0 (since there is no common subsequence)
  