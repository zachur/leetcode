function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i+1]) {
        i--;
    }
    if (i < 0) {
        nums.reverse();
        return;
    }
    let j = nums.length - 1;
    while (j > i && nums[j] <= nums[i]) {
        j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
    let left = i+1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}
