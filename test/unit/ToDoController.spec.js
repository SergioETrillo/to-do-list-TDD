describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with severals todos', function() {
    var todos = [
      {text: "ToDo1", completed: true},
      {text: "ToDo2", completed: false}
    ];
    expect(ctrl.todos).toEqual(todos);
  });

  it('adds a task', function() {
    ctrl.addToDo("NewToDo");
    var newtask = { text: "NewToDo", completed: false };
    expect(ctrl.todos).toContain(newtask);
  });

  it('removes a task', function() {
    var todo1 = {text: "ToDo1", completed: true};
    var todo2 = {text: "ToDo2", completed: false};
    ctrl.addToDo("NewToDo");
    ctrl.removeToDo();
    expect(ctrl.todos).toContain(todo1);
    expect(ctrl.todos).toContain(todo2);
    expect(ctrl.todos).not.toContain("NewToDo");
  });

  it('removes a task - different approach', function(){
    var initialCount = ctrl.todos.length;
    ctrl.removeToDo();
    expect(ctrl.todos.length).toEqual(initialCount-1);
  });
});