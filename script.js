var btn = document.getElementById("addTodoBtn");
var todolist = document.getElementById("todoList");
btn.addEventListener("click", function() {
	var todo = document.getElementById("newTodoInput").value;
	var li = document.createElement("li");
	var todoText = document.createTextNode(todo);
	li.appendChild(todoText);
	todolist.appendChild(li);
});
