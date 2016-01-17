function LinkedListNode(value){
	this.value = (typeof(value) !== 'undefined' ? value : null);
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.tail = null;
	this.count = 0;
}

LinkedList.prototype.addFirst = function(node){
	var temp;
	
	if (this.head == null) {
		this.head = node;
	} else {
		temp = this.head;
		
		this.head = node;
		this.head.next = temp;
	}
	if (this.count++ == 0) this.tail = this.head;
}