var missingNumber = function (nums) {

    // 題目 : 數字 0 ~ n , 找出缺失的那個數
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {

        if (!nums.includes(i)) return i;
    }
};


var findDuplicates = function (nums) {

    const result = [];

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] === nums[i + 1]) result.push(nums[i])
    }

    return Array.from(new Set(result));
};


var thirdMax = function (nums) {

    // 題目 : 第三大的數字
    const arr = Array.from(new Set(nums));
    arr.sort((a, b) => a - b);
    if (arr.length >= 3) return arr[arr.length - 3];
    else return arr[0];
};

// console.log(thirdMax([3, 2, 1]))

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    /*
     只有現存數值需要被驗證
     1.現存數值 row 沒有重複
     2.現存數值 column 沒有重複
     3.現存數值九宮格中沒有重複
    */

    var findDuplicate = function (nums) {

        // 排序
        nums.sort((a, b) => a - b)

        for (let i = 0; i < nums.length - 1; i++) {

            // 確認數字跟下一個是否相同 , 相同者放入 result 陣列中
            if (nums[i] === nums[i + 1]) return nums[i];
        }

        // 將重複值拿掉
        return null;
    };

    const validRow = rowNo => {

        const newArr = board[rowNo].filter(item => item !== ".");

        return !(findDuplicate(newArr))
    }

    const validColumn = columnNo => {

        const newArr = [];

        // [0][0] . [1][0] . [2][0] ...

        for (let i = 0; i < board.length; i++) {

            if (board[i][columnNo] !== ".") newArr.push(board[i][columnNo])
        }

        return !(findDuplicate(newArr))
    }

    const validSquare = point => {

        const newArr = [];

        const {x, y} = point;

        for (let i = x; i <= x + 2; i++) {

            for (let j = y; j <= y + 2; j++) {

                if (board[i][j] !== ".") newArr.push(board[i][j])
            }
        }

        return !(findDuplicate(newArr))
    }

    const rowNo = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const columnNo = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const leftTopPoints = [
        {x: 0, y: 0},
        {x: 3, y: 0},
        {x: 6, y: 0},
        {x: 0, y: 3},
        {x: 3, y: 3},
        {x: 6, y: 3},
        {x: 0, y: 6},
        {x: 3, y: 6},
        {x: 6, y: 6},
    ];

    for (let i = 0; i < rowNo.length; i++) {

        // console.log('i=', i);
        if (!validRow(rowNo[i])) return false;
    }


    for (let j = 0; j < columnNo.length; j++) {

        // console.log('j=', j);
        if (!validColumn(columnNo[j])) return false;
    }


    for (let k = 0; k < leftTopPoints.length; k++) {

        console.log('k=', k);
        if (!validSquare(leftTopPoints[k])) return false;
    }

    return true;
};

const board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

// console.log(isValidSudoku(board))


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {

    // 連續數字 1 => 找出最長的連續有幾個 1
    let maxLength = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {

        // 遇到 1 時讓 current +1
        if (nums[i] === 1) current++;

        // 遇到 0 時將目前 current 數值放入 result
        else if (nums[i] === 0 && current > 0) {
            if (maxLength < current) maxLength = current;
            current = 0;
        }
    }

    // 如果最後一個也是 1 , 需要多做處理
    if (current > 0 && maxLength < current) maxLength = current;

    return maxLength;
};


// 最佳解答
var findDuplicates = function (nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            res.push(Math.abs(index + 1));
        }
        nums[index] = -nums[index];
    }
    return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))