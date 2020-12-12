/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    // 找出 3 個數加總 = 0 , 找出各種類型的答案

    const result = [];

    /*
      解題想法 :
        1. sort
        2. 找到 0 的 index => 當中切值
        3. 找出 a = -c , b = 0
        4. -a = b + c
        5. 三個 0
    */

    // nums is sorted
    const findDuplicates = nums => {

        const result = [];

        nums.reduce((pre, curr) => {

            if (pre === curr) result.push(curr);
            return curr;
        })

        return Array.from(new Set(result));
    }

    const getNoneZeroNums = function (nums) {

        let zeroNums = 0;

        const newNums = nums.filter(item => {

            if (item === 0) ++zeroNums;
            return item !== 0;
        })

        const arr = Array.from(new Set(newNums));
        const positiveIdx = arr.findIndex(item => item > 0);
        const negArr = arr.slice(0, positiveIdx);
        const posArr = arr.slice(positiveIdx);

        if (zeroNums > 0) {

            // 找出  a = -c , b = 0 的相關數值 , 不能重複
            negArr.forEach(neg => {

                const target = neg * (-1);
                posArr.forEach(pos => (pos === target) && result.push([0, neg, pos]))
            })
        }

        // this will occur side effect
        if (zeroNums >= 3) result.push([0, 0, 0]);

        // 找出 -a = b + c 類型的值


        return newNums;
    }

    const twoSum = function (nums, target) {

        const result = [];

        // return exactly two numbers
        for (let i = 0; i < nums.length; i++) {

            for (let j = i + 1; j < nums.length; j++) {

                if (nums[i] + nums[j] === target) {

                    result.push([nums[i], nums[j]]);
                }
            }
        }

        return result;
    }

    const findNoneZeroMatch = (nums, result) => {

        // 找出 -a = b + c 類型的值
        for (let i = 0; i < nums.length; i++) {

            const target = nums[i] * (-1);

            const newArr = nums.slice(i + 1); // subArray

            const twoSumResults = twoSum(newArr, target);

            if (twoSumResults.length > 0) {

                twoSumResults.forEach(ans => {

                    const temp = [ans[0], ans[1], nums[i]];
                    result.push(temp);
                })
            }
        }
    }

    /*
    解題想法 :
      1. 抓出一個值
      2. newArr = nums.slice( currIdx , lastIdx )
      3. twoSum(newArr) = curr * ( -1 )
      4. return [...twoSum(newArr), currIdx ]
    */

    nums.sort((a, b) => a - b);

    const newNum = getNoneZeroNums(nums);

    const duplicates = findDuplicates(nums);

    if (newNum.length < 3) return result;

    findNoneZeroMatch(newNum, result);

    return result;
};

const output = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
console.log(output)


const a = [[1, 3, -4], [-1, 4, -3], [-1, 3, -2]]
const b = [[-4, 1, 3], [-3, -1, 4], [-3, 1, 2], [-2, -1, 3]]