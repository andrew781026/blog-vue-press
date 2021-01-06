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
 * @return {ListNode}
 */
var reverseList = function (head) {

    let curr = head;
    let prev = null;

    while (curr) {

        const next = curr.next;

        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};


// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

LogListNode(reverseList(ArrayToListNode([1, 2, 3, 4, 5])))