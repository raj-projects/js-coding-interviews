/*
    43). Reverse a Doubly linked list using recursion
*/

var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};

var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
    var length = this.length;
    // change code below this line
    this.reverse = function () {
        if (length == 0) {
            return null;
        }
        else if (length > 1) {
            let currNode = this.head;
            let prevNode = null;
            let nextNode = null;
            for (let i = 0; i < length; i++) {
                prevNode = currNode.prev;
                nextNode = currNode.next;
                if (prevNode == null) {
                    this.tail = currNode;
                    currNode.next = null;
                    currNode.prev = nextNode;
                }
                else if (nextNode == null) {
                    this.head = currNode;
                    currNode.prev = null;
                    currNode.next = prevNode;
                }
                else {
                    currNode.next = prevNode;
                    currNode.prev = nextNode;
                }
                currNode = nextNode;
            }
        }
    }
    // change code above this line
};