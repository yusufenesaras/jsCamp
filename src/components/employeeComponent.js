import { users } from "../data/users.js";
import EmployeeService from "../services/employeeService.js";

let employeService = new EmployeeService();
console.log(employeService.listEmployees())
console.log(employeService.load())

