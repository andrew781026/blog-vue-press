/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    const result = []

    // nums 已排序
    // 移除超過 2 次重複的陣列

    let i = 0;

    do {

        if (nums[i] !== nums[i + 1]) {

            result.push(nums[i]);
            i++;

        } else if (nums[i] === nums[i + 1] && nums[i + 1] !== nums[i + 2]) {

            result.push(nums[i]);
            result.push(nums[i]);
            i += 2;

        } else {

            result.push(nums[i]);
            result.push(nums[i]);

            for (let j = i; j < nums.length; j++) {

                if (nums[j] !== nums[j + 1]) {

                    i = j + 1;
                    break;
                }
            }
        }

    } while (i < nums.length)

    return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function (nums) {

    // nums 已排序
    // 移除超過 2 次重複的陣列

    let i = 0;

    do {

        if (nums[i] !== nums[i + 1]) {

            i++;

        } else if (nums[i] === nums[i + 1] && nums[i + 1] !== nums[i + 2]) {

            i += 2;

        } else {

            nums.splice(i, 1);
        }

    } while (i < nums.length)

    return nums.length;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates2(nums))
console.log(nums)

