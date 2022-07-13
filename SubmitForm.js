let employeeID=localStorage.getItem('employeeID');
let submit=localStorage.getItem('sumbit')

let statusResponse=document.getElementById('status');
statusResponse.innerHTML=submit;
let empId=document.getElementById('empId');
empId.innerHTML="Employee Id:"+ employeeID;