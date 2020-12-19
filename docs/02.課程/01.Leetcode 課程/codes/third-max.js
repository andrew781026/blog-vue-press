/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {

    // 題目 : 第三大的數字 , 第三大的數字數字不存在時 , 回傳最大值

    let first = nums[0];
    let second = third = -Infinity;

    for (let i = 0; i < nums.length; i++) {

        const curr = nums[i];

        if (curr === first || curr === second || curr === third) {
            continue;
        }

        if (curr > first) {

            third = second;
            second = first;
            first = curr;

        } else if (curr > second) {

            third = second;
            second = curr;

        } else if (curr > third) {

            third = curr;
        }
    }

    return (third === -Infinity) ? first : third;
};
