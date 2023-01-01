class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null
    // this.tail = null
    this.length = 0
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val)
    newNode.next = this.head
    this.head = newNode
    this.length++

    if(!this.tail){
      this.tail = this.head
    }
  }

  addToTail(val) {
    // Your code here
    const newNode1 =  new LinkedListNode(val)
    let current  = this.head

    if(this.head == null){
      this.head =  newNode1
    }
    else{
      while (current.next) {
        current = current.next
      }
      current.next = newNode1
    }
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
