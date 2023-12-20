class Solution {
    fun successfulPairs(spells: IntArray, potions: IntArray, success: Long): IntArray {
        potions.sort()

        val result = IntArray(spells.size)
        spells.forEachIndexed { index, value ->
            result[index] = binarySearch(potions, value, success)
        }
        return result
    }

    private fun binarySearch(array: IntArray, value: Int, success: Long): Int {
        var l = 0
        var r = array.size - 1
        while (l <= r) {
            val mid = l + (r - l) / 2
            if (array[mid] * value.toLong() < success) l = mid + 1
            else r = mid - 1
        }
        return array.size - l
    }
}
