import  addToTable  from './addToTable.js';
import  modifyTableEntry  from './modifyTableEntry.js';
import  deleteInTable  from './deleteInTable.js';
import  seeTable  from './seeTable.js';

window.addToTable = addToTable;
window.modifyTableEntry = modifyTableEntry;
window.deleteInTable = deleteInTable;
window.seeTable = seeTable; 

document.addEventListener("DOMContentLoaded", function() {
    seeTable();
  });