class TreeNode {
	constructor(value){
		this.value = value;
		this.leftChild = null;
		this.rightChild = null;
	}
}

class BinarySearchTree {
	constructor(value) {
		this,root = new TreeNode(value)
	}


	insert(newValue) {
		if(!this.root){
			this.root = new TreeNode(newValue);
			return
		}
		//start from the root;
		let currentNode = this.root;
		let parent;
		while(currentNode) {
			parent = currentNode;
			if(newValue < currentNode.value) {
				currentNode.leftCHild = currentNode.leftChild;

			} else {
				currentNode = currentNode.rightChild
			}

		}
		// At this point we have the parent of null null node
		if(newValue < parent.value){
			parent,leftChild = new TreeNode(newValue)
		} else {
			parent.rightChild = new TreeNode(newValue);
		}

	}

	insertRec(currentNode, newValue){
		if(!currentNode){
			return new TreeNode(newValue);
		}
		else if(newValue < currentNode.val){
			currentNode.leftChild = this.insertRec(currentNode.leftChild, newValue);
		} else i{
			currentNode.rightChild = this.insertRec(currentNode.rightChild, value)
		}
		return currentNode;

	}

	insertBST(Value){
		if(!this.root){
			this.root = new TreeNode(newValue);
			return;
		}
		this.insertRec(root, newValue)
	}

	preOrderPrint(currentNode){
		if(currentNode !== null){
			console.log(currentNode.value);
			this.preOrderPrint(leftChild);
			this.preOrderPrint(rightChild)
		}
	}

	inOrderPrint(currentNode){
		if(currentNode !== null){
			this.inOrderPrint(currentNode.leftChild);
			this.console.log(currentNode.value);
			this.inOrderPrint(currentNode.rightChild)
		}
	}

	postOrderPrint(ccurrentNode) {
		if(currentNode !== null){
			
			this.postOrderPrint(currentNode.leftChild)
			this.postOrderPrint(currentNode.rightChild)
			console.log(currentNode.value);
		}
	}
}

