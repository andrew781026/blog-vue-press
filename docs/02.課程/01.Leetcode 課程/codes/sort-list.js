/**
 * 問題頁面 : https://leetcode.com/problems/sort-list/
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {

    if (!head) return head;

    let output;
    let curr = head;

    while (curr) {

        if (output) {

            // 4 . 2
            if (output.val > curr.val) {

                output = new ListNode(curr.val, output);

            } else {

                // 1 . 3
                MiddleInsert(output, curr.val)
            }

        } else output = new ListNode(curr.val);

        curr = curr.next;
    }

    return output;
};

function MiddleInsert(listNode, num) {

    let curr = listNode;

    while (curr) {

        const next = curr.next;

        if (num >= curr.val && !next) {

            curr.next = new ListNode(num);
            return listNode;

        } else if (next.val >= num) {

            curr.next = new ListNode(num, curr.next);
            return listNode;

        } else curr = next;
    }

    return listNode;
}

// head = [4, 2, 1, 3];
// output = [1, 2, 3, 4];

function LogListNode(listNode) {

    let curr = listNode;
    let msg = '';

    while (curr) {

        const next = curr.next;
        msg += ` -> ${curr.val}`

        curr = next;
    }

    console.log(msg);
}

let head = ArrayToListNode([4, 2, 1, 3]);
// LogListNode(head);
// console.log('\n----------------\n')

// we need to change from head to output
const output = sortList(head);
// LogListNode(output);

// console.log('\n----------------\n')

const output2 = sortList(null);

// LogListNode(output2);

function ArrayToListNode(arr) {

    if (!(arr && arr.length > 0)) return null;

    let result = new ListNode(arr[0]);
    let curr = result;

    for (let i = 1; i < arr.length; i++) {

        const temp = new ListNode(arr[i]);
        curr.next = temp;
        curr = temp;
    }

    return result;
}

let head3 = ArrayToListNode([-1, 5, 3, 4, 0]);
// const output3 = sortList(head3);
// LogListNode(output3);

var swap = function (i, j) {
    const temp = i.val;
    i.val = j.val;
    j.val = temp;
};

const linkSwap = function (prev, curr) {

    const next = curr.next;
    console.log(`Before : (prev,curr,next)=(${prev.val},${curr.val},${next?.val})`);
    curr.next = prev;
    prev.next = next;
    console.log(`---After : (prev,curr,next)=(${curr.val},${curr.next?.val},${curr.next?.next?.val})`);
};

const findMin = function (head) {

    let min = head;
    let curr = head;

    while (curr) {

        if (curr.val < min.val) min = curr;

        curr = curr.next;
    }

    return min;
}

const selectionSort = function (head) {

    if (!head) return head;

    let curr = head;

    while (curr) {

        const min = findMin(curr);
        swap(curr, min);

        curr = curr.next;
    }

    return head;
};

// LogListNode(selectionSort(head3));

// TODO : 完成 LinkList 版本的 bubbleSort
const bubbleSort = function (head) {

    if (!head) return head;

    let outer = head;
    let inner = head;
    let first = head;
    let last;
    let swapFlag;

    while (outer.next) {

        swapFlag = false;
        inner = outer;

        while (inner.next) {

            const next = inner.next;
            const secondNext = next.next;

            if (next === last) {

                last = inner;
                break;

            } else if (next.val < inner.val) {

                if (inner === first) first = next
                swapFlag = true;
                // swap(inner, next);
                linkSwap(inner, next);
            }

            // console.log(`(next,last)=(${next?.val},${last?.val})`);

            if (!secondNext) {

                last = next;
                break;

            } else inner = next;
        }

        // 如果跑一次 , 都沒有 swap , 可提前結束
        // console.log(`(outer,last)=(${outer.val},${last?.val})`);
        // console.log('\n----------------\n')
        if (!swapFlag) return first;
    }

    return first;
};

LogListNode(bubbleSort(head3));
LogListNode(bubbleSort(ArrayToListNode([96, 96, 76, 31, 83, 22, 31, 27, 36, 72])));