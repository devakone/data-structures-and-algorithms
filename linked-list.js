class Node {
	constructor(data){
		this.data = data;
		this.nextElement = null;

	}
}

class LinkedList  {
	constructor(){
		this.head = null; 
	}

	isEmpty() {
		return this.head === null;
	}

	// Big O(1)
	insertAtHead(data) {
		const tempNode = new Node(data);
		tempNode.nextElement = this.head;
		this.head = tempNode;
		return this;
	}

	deleteAtHead() {
		if(this.isEmpty()){
			return this;
		}
		this.head = this.head.nextElement;
	}

	appendAtTail(data){
		const tempNode = new Node(data);
		if(this.isEmpty()){
			this.head = tempNode;
			return this
		}
		let currentNode = this.head
		while(currentNode.nextElement !== null) {
			currentNode = currentNode.nextElement;
		}
		currentNode.nextElement = tempNode;
		return this;
	}

	deleteValue(value){

		let deleted = null; //True or False
 		 //Write code here
		  if(this.isEmpty()){
		    return false
		  }
		  let currentNode = this.head;
		  if (currentNode.data == value) {
		    this.head = currentNode.nextElement;
		    return true;
		  }
		  while(currentNode.nextElement ){
		  	if(currentNode.nextElement.data === value){
		  		currentNode,nextElement = currentNode.nextElement.nextElement
		  		return true;
		  	}
		    currentNode = currentNode.nextElement
		  }
		  
		  return false;

	}
 



}