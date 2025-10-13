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

class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
    }

    toggleComplete(){
        this.completed = !this.completed;
    }
}

class TaskManager{
    constructor(){
        this.tasks = [];
    }

    addTask(description){
        const task = new Task(description);
        this.tasks.push(task);
        this.displayTask();
    }

    removeTask(index){
        this.tasks.splice(index, 1);
        this.displayTask();
    }

    toggleTaskCompletion(index){
        this.tasks[index].toggleComplete();
        this.displayTask();
    }

    displayTask(){
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';
            //continuei daqui
            const taskDescription = document.createElement('span');
            taskDescription.textContent = taskDescription;
            taskDescription.addEventListener('click', () => this.toggleTaskCompletion(index));

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-btn'
            removeButton.textContent = 'Remove'
            removeButton.addEventListener('click', () => this.removeTask(index));

            taskItem.appendChild(taskDescription);
            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem); // essa é taskList
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const TaskManager = new TaskManager();
    const addTaskBtn = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')

    addTaskBtn.addEventListener('click', () => {
        const taskDescription =  taskInput.value.trim();
        
    })
})
