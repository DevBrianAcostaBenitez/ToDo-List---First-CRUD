import seeTable from './seeTable.js';

export default function addToTable() {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    var addedTask = document.getElementById("addedTask");
    var task = addedTask.value;
    if (task.trim() !== "") {
      taskList.push(task);
      localStorage.setItem('taskList', JSON.stringify(taskList));
      seeTable(); 
      
    }else{
        alert("no se puede agregar una entrada vacia")
    }
  }
