export default function seeTable() {
  const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
  const tableBody = document.querySelector('#data-table tbody');
  tableBody.innerHTML = '';
  console.log(taskList)
  
  taskList.forEach((task) => {
      const row = tableBody.insertRow();
      const taskCell = row.insertCell();
      const optionsCell = row.insertCell();
      row.classList.add("bg-dark");
      row.classList.add("border-secondary");
      row.classList.add("border-3");
      taskCell.classList.add("ps-3");
      taskCell.classList.add("border-secondary");
      taskCell.classList.add("border-3");
      optionsCell.classList.add("ps-5");
      optionsCell.classList.add("border-secondary");
      optionsCell.classList.add("border-3");
      taskCell.textContent = task;
      optionsCell.innerHTML ="<div class='d-flex'><button class='btn btn-primary' onclick='modifyTableEntry(this)'><i class='bi bi-pencil'></i></button>" + 
      "<button class='btn btn-danger ms-5' onclick='deleteInTable(this)'><i class='bi bi-trash'></i></button></div>";
  })
  
  }