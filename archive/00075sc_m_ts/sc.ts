function sortColors(nums: number[]): void {
    let left = 0;
    let right = nums.length - 1;
    let i = 0;
  
    while (i <= right) {
      if (nums[i] === 0) {
        // If nums[i] is 0, swap it with the element at the left index
        [nums[i], nums[left]] = [nums[left], nums[i]];
        left++;
        i++;
      } else if (nums[i] === 2) {
        // If nums[i] is 2, swap it with the element at the right index
        [nums[i], nums[right]] = [nums[right], nums[i]];
        right--;
      } else {
        // If nums[i] is 1, move to the next index
        i++;
      }
    }
  }
  