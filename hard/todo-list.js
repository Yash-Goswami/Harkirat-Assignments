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
  constructor(){
    this.tasks = [];
  }
  add(todo){
    this.tasks.push(todo);
  }

  remove(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }// else {
    //   throw new Error('Index out of bounds');
    // }
  }

  update(index, updatedTodo){
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1,updatedTodo);
    }// else {
    //   throw new Error('Index out of bounds');
    // }
  }

  get(index){
    if(index>=0 && index < this.tasks.length)
      return this.tasks[index];
    else 
      return null;
  }

  getAll(){
    return this.tasks;
  }

  clear(){
    this.tasks.splice(0);
  }

}

module.exports = Todo;
