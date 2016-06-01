toDoApp.controller('ToDoController', function() {
  //2 objects, each with 2 attributes
  self = this;
  self.todos = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false }];

  self.addToDo = function(todoText) {
    self.todos.push({text: todoText, completed: false});
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

});