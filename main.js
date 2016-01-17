var noElements = 1000*50;
var data = [],
    t1,
	arrayTime,
	linkedTime;

t1 = new Date();
// ===================================
for (var i = 0; i < noElements; i++){
    data.splice(0, 0, { name: 'obj' + i, number: i*2 })
}
// ===================================

arrayTime = new Date() - t1;

//---------------------------

t1 = new Date();

var linkedList = new LinkedList();
for (var i = 0; i < noElements; i++){
	linkedList.addFirst(new LinkedListNode(i));
}

linkedTime = new Date() - t1;
console.log(linkedTime, arrayTime);
console.log(linkedList);