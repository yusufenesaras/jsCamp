import ErrorResult from "../results/errorResult.js";

export default class EmployeeValidation {
  constructor() {
    this.errors = [];
  }
  checkTypeUser(user) {""
    if (user.type === "employee") {
      return true;
    } else {
      new ErrorResult("Wrong user type", user);
    }
  }
  checkUserValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new ErrorResult(`Validation problem. ${field} is required`, user)
        );
      }
    }

    return hasErrors;
  }
  checkUserAge(user) {
    let hasErrorsAge = false;
    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasErrorsAge = true;
      this.errors.push(
        new ErrorResult(`Validation problem. ${user.age} is not a number`, user)
      );
    }
  }
}
