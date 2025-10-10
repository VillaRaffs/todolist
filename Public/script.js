class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
    }

    toggleComplete(){
        this.completed = !this.completed;
    }
}

//class TaskManager{
    //constructor(){
        //this.tasks = [];
    //}

    //addTask(description){
       // const task = new Task(description);
       // this.tasks.push(task);
       // this.displayTask();
  //  }

   // removeTask(index){
     //   this.tasks.splice(index, 1);
      //  this.displayTask();
    //}

    //toggleTaskCompletion(index){
     //   this.tasks[index].toggleComplete();
    //    this.displayTask();
    //}

    //displayTask(){
        //const taskList = document.getElementById('task-list');
        //taskList.innerHTML = '';

        //this.tasks.forEach((task, index) => {
            //const taskItem = document.createElement('li');
            //taskItem.className = task.completed ? 'completed' : '';

            //const taskDescription = document.createElement('span');
           // taskDescription.textContent = taskDescription;
           // taskDescription.addEventListener('click', () => this.toggleTaskCompletion(index));

           // const removeButton = document.createElement('button');
           // removeButton.className ='remove-btn'
           // removeButton.textContent = 'Remove'
           // removeButton.addEventListener('click', () => this.removeTask(index));

           // taskItem.oppendChild(taskDescription);
           // taskItem.oppendChild(removeButton);
           // taskItem.oppendChild(taskItem);
            
       // })
  //  }
//}

class TaskManager {
    constructor(){
        this.tasklist = document.getElementById('task-list');
        this.loadtasks();
    }

    async loadtasks(){
        const response = await fetch('/tasks');
        const tasks = await response.json();
        this.render(tasks);
    }

    async addTask(description){
        await fetch('/tasks', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({description})
        });
        this.loadtasks();
    }

    async removeTask (id){
        await fetch(`/tasks/${id}`, {method: 'DELETE'});
        this.loadtasks();
    }

     async togggleTask (id){
        await fetch(`/tasks/${id}/toggle`, {method: 'PATCH'});
     }

     render(tasks){
        this.tasklist.innerHTML = '';

        tasks.forEach(task => {
            const li = document. createElement('li');
        })
     }
}

document.addEventListener('DOMContentLoaded', () => {
    const TaskManager = new TaskManager();
    const addTaskBtn = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')

    addTaskBtn.addEventListener('click', () => {
        const taskDescription = taskInput.ariaValueMax.trim();
    })
})