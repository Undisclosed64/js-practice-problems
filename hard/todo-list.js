/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
    // console.log(this.todoList);
  }
  remove(index) {
    this.todoList.splice(index, 1);
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList[index] = updatedTodo;
    }
    // console.log(this.todoList);
  }
  getAll() {
    return this.todoList;
  }
  get(indexOfTodo) {
    return indexOfTodo >= 0 && indexOfTodo < this.todoList.length
      ? this.todoList[indexOfTodo]
      : null;
  }
  clear() {
    this.todoList = [];
  }
}
// const a = new Todo();
// console.log(a.add("do it"));
// console.log(a.add("do that"));
// // console.log(a.remove(0));
// console.log(a.update(1, "do it by 7"));
// console.log(a.get(0));
// console.log(a.clear());
// console.log(a.getAll());

module.exports = Todo;
