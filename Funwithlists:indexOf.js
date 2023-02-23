// Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.


function indexOf(head, value) {
  
  let count = 0;
  
  while(head){
    if(head.data === value){
      return count
    }
    head = head.next
    //track of the index
    count++
  }
  return - 1
}

// Rafactor

const indexOf = (head, value, i=0) => (
  head == null? -1 : head.data === value? i : indexOf(head.next, value, i+1)
)
