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
var sortList = function (head) {

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

    while (curr) {

        const next = curr.next;
        console.log(curr.val);

        curr = next;
    }
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
const output3 = sortList(head3);
LogListNode(output3);

