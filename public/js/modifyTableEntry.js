import seeTable from './seeTable.js';

export default function modifyTableEntry(task) {
  const row = task.closest('tr');
  const taskCell = row.querySelector('td:first-child');
  const taskText = taskCell.textContent;
  const newTaskText = prompt('Enter the new task:');
  
  if (newTaskText !== "") {
    taskCell.textContent = newTaskText;
    
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const index = taskList.indexOf(taskText);
    taskList[index] = newTaskText;
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }else{
    alert("no se puede agregar una entrada vacia")
  }
}