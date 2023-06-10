import seeTable from './seeTable.js';

export default function deleteInTable(task) {
  const taskrow = task.parentNode.parentNode.taskrow - 1;
  const taskList = JSON.parse(localStorage.getItem('taskList')) || [];

  taskList.splice(taskrow, 1);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  seeTable();
}