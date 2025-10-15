const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let employees = [];
function showMenu() {
  console.log("\n===== Employee Management System =====");
  console.log("1. Add Employee");
  console.log("2. List All Employees");
  console.log("3. Remove Employee by ID");
  console.log("4. Exit");
  rl.question("Enter your choice: ", handleMenu);
}
function handleMenu(choice) {
  switch (choice.trim()) {
    case "1": addEmployee(); break;
    case "2": listEmployees(); break;
    case "3": removeEmployee(); break;
    case "4": console.log("Exiting... Goodbye!"); rl.close(); break;
    default: console.log("Invalid choice."); showMenu();
  }
}
function addEmployee() {
  rl.question("Enter Employee ID: ", (id) => {
    if (employees.find(emp => emp.id === id)) { console.log("Employee with this ID already exists!"); return showMenu(); }
    rl.question("Enter Employee Name: ", (name) => {
      employees.push({ id, name });
      console.log(`Employee Added: ID=${id}, Name=${name}`);
      showMenu();
    });
  });
}
function listEmployees() {
  if (employees.length === 0) console.log("No employees found.");
  else employees.forEach((emp, i) => console.log(`${i + 1}. ID: ${emp.id}, Name: ${emp.name}`));
  showMenu();
}
function removeEmployee() {
  rl.question("Enter Employee ID to remove: ", (id) => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) { employees.splice(index, 1); console.log(`Employee with ID ${id} removed.`); }
    else console.log("No employee found with that ID.");
    showMenu();
  });
}
showMenu();