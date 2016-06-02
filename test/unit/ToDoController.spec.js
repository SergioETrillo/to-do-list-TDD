describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory;
  var toDoData = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function($httpBackend, $controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;

    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);
    httpBackend.flush();
  }));

  it('initialises with severals todos', function() {
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);
    // var todos = [
    //   {text: "ToDo1", completed: true},
    //   {text: "ToDo2", completed: false}
    // ];
    expect(ctrl.todos).toEqual([todo1,todo2]);
  });

  it('adds a task', function() {
    ctrl.addToDo("NewToDo");
    // var newtask = { text: "NewToDo", completed: false };
    var newtask = new ToDoFactory("NewToDo");
    expect(ctrl.todos).toContain(newtask);
  });

  it('removes a task', function() {
    // var todo1 = {text: "ToDo1", completed: true};
    // var todo2 = {text: "ToDo2", completed: false};
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);

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