const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/


// Your code here
console.log('**************************** ADD TO HEAD FOR DOUBLY LINKED LIST ****************************')
const n = 10000000
let doublyLinkedList = new DoublyLinkedList()
let startDL = Date.now()
    for(i = 0; i < n; i++ ){
        doublyLinkedList.addToHead(i)
    }
let endDL  = Date.now()
console.log(endDL - startDL + 'ms')

console.log('**************************** ADD TO HEAD FOR LINKED LIST ****************************')

let linkedList = new LinkedList()
let startLL = Date.now()
    for(i = 0; i < n; i++ ){
        linkedList.addToHead(i)
    }
let endLL  = Date.now()
console.log(endLL - startLL + 'ms')




console.log('**************************** ADD TO TAIL FOR DOUBLY LINKED LIST ****************************')
// ADDING TO TAIL
let doublyLinkedListTT = new DoublyLinkedList()
let startDLTT  = Date.now()
    for(i = 0; i < n; i++ ){
        doublyLinkedListTT.addToHead(i)
    }
let endDLTT  = Date.now()
console.log(endDLTT - startDLTT + 'ms')

console.log('**************************** ADD TO TAIL FOR LINKED LIST ****************************')

let linkedListTT = new LinkedList()
let startLLTT = Date.now()
    for(i = 0; i < n; i++ ){
        linkedListTT.addToHead(i)
    }
let endLLTT  = Date.now()
console.log(endLLTT - startLLTT + 'ms')


// Add to tail for Linkedlist takes twice as much time to complete compared to Doubly Linked list. This is because for this structure, the computer will have to traverse the entire list to the final node before it adds the newNode to its(finalNode's) next value. Where as DoublyLinkedList has the tail value in memory, hence all it has to do is point to the newNode and store the newNode as the tail Node.
