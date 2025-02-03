const arr = [];
let selectedRowIndex = null;

function onFormSubmit() {
  let formData = readFormData();
  console.log(formData);
  if (selectedRowIndex == null) {
    arr.push(formData);
    updateTable();
  } else {
    updateTableData(formData);
  }
  reset();
}

function readFormData() {
  let formData = {};
  formData.fname = document.getElementById("fname").value;
  formData.lname = document.getElementById("lname").value;
  formData.password = document.getElementById("password").value;
  return formData;
}

function updateTable() {
  let table = "";
  document.getElementById("tableBody").innerHTML = "";

  arr.forEach((element, index) => {
    table += `<tr>`;
    table += `<td>${element.fname}</td>`;
    table += `<td>${element.lname}</td>`;
    table += `<td>${element.password}</td>`;
    table += `<td>${`<a onclick=onEdit(${index})>Edit</a> / <a onclick=onDelete(${index})>Delete</a> `}</td>`;
    table += `</tr>`;
  });
  document.getElementById("tableBody").innerHTML = table;
}

function reset() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("password").value = "";
  selectedRowIndex = null;
}

function onEdit(index) {
  selectedRowIndex = index;
  let selectedRow = arr[index];
  document.getElementById("fname").value = selectedRow.fname;
  document.getElementById("lname").value = selectedRow.lname;
  document.getElementById("password").value = selectedRow.password;
}

function updateTableData(formData) {
  arr[selectedRowIndex] = formData;
  updateTable();
  selectedRowIndex = null;
}

function onDelete(index) {
  if (confirm("Are you sure you want to delete")) {
    arr.splice(index, 1);
    updateTableData();
    reset();
  }
}
