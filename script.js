
var btn = document.getElementById("addTodoBtn");
var todolist = document.getElementById("todoList");
btn.addEventListener("click", function() {
	var todo = document.getElementById("newTodoInput").value;
	
  todolist.innerHTML += `<li>${todo}</li>`;
});
