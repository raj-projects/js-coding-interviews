/*
    43). Reverse a linked list using recursion
*/


function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}
let head = new LinkedListNode(10)
head.next = new LinkedListNode(25)
head.next.next = new LinkedListNode(46)

// Recursive
const reverse = (head) => {
    if (!head || !head.next) {
        return head;
    }
    let temp = reverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return temp;
}
head = reverse(head)