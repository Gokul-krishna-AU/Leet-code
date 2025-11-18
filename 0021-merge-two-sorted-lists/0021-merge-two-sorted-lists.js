/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(a, b) {
    if (!a || !b) return a || b;
    if (a.val < b.val) {
        a.next = mergeTwoLists(a.next, b);
        return a;
    } else {
        b.next = mergeTwoLists(a, b.next);
        return b;
    }
};
