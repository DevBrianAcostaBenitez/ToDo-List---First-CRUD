export default function seeTable() {
  const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
  const tableBody = document.querySelector('#data-table tbody');
  tableBody.innerHTML = '';
  console.log(taskList)
  
  taskList.forEach((task) => {
      const row = tableBody.insertRow();
      const taskCell = row.insertCell();
      const optionsCell = row.insertCell();
  
      taskCell.textContent = task;
      optionsCell.innerHTML ="<button onclick='modifyTableEntry(this)'>Modificar</button> <button onclick='deleteInTable(this)'>Eliminar</button>";
  })
  
  }