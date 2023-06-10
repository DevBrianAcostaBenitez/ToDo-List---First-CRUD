import seeTable from './seeTable.js';

export default function modifyTableEntry(task) {
  const rowIndex = task.parentNode.parentNode.rowIndex - 1;
  const taskList = JSON.parse(localStorage.getItem('taskList')) || [];

  const newTask = prompt("introduzca la tarea por la que remplazaremos la anterior");
  if (newTask.trim() !== "") {
    taskList[rowIndex] = newTask;
    localStorage.setItem('taskList', JSON.stringify(taskList));
    seeTable();
  } else {
    alert("No se puede agregar una entrada vacía");
  }
}
