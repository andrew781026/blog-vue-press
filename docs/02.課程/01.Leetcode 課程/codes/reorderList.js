function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function LogListNode(listNode) {

    let curr = listNode;

    while (curr) {

        const next = curr.next;
        console.log(curr.val);

        curr = next;
    }
}

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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

    let curr = head;
    let last;

    while (curr) {

        const next = curr.next;
        if (!next) last = curr;
        else next.prev = curr;
        curr = next;
    }

    let leftP = head;
    let rightP = last;

    while (leftP) {

        const next = leftP.next;
        // console.log(`leftP.val=${leftP.val},rightP.val=${rightP.val},next.val=${next.val},`);

        if (next === rightP) {

            rightP.next = null;
            break;

        } else if (leftP === rightP) {

            leftP.next = null;
            break;

        } else {

            leftP.next = rightP;
            rightP.next = next;
            leftP = next;
            rightP = rightP.prev;
        }
    }

    return head;
};


// Given 1->2->3->4, reorder it to 1->4->2->3.

LogListNode(reorderList(ArrayToListNode([1, 2, 3, 4,5])))