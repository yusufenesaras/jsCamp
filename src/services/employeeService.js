import { users } from "../data/users.js";
import EmployeeValidation from "../core/validation/employeeValidation.js";
import EmployeeRepository from "../repositories/employeeRepository.js";
import Result from "../core/results/result.js";
import ErrorResult from "../core/results/errorResult.js";
export default class EmployeeService {
  constructor(loggerService) {
    this.loggerService = loggerService;
    this.employeeRepository = new EmployeeRepository();
    this.employeeValidator = new EmployeeValidation();
  }
  load() {
    for (const user of users) {
      if (this.employeeValidator.checkTypeUser(user)) {
        this.employeeRepository.add(user);
      } else {
        this.employeeValidator.errors.push(new ErrorResult("Wrong user type", user));
      }
    }
  }
  listEmployees() {
    return this.employeeRepository.listEmployees();
  }
  getEmployeesById(id) {
    return this.employeeRepository.getEmployeesById(id);
  }
}
