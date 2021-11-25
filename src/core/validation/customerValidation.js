import User from "../../models/user.js";
import ErrorResult from "../results/errorResult.js";
import Result from "../results/result.js";
import SuccessResult from "../results/successResult.js";

export default class CustomerValidation {
  constructor() {
    this.errors = [];
  }
  checkUserValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new Result(`Validation problem. ${field} is required`, user)
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
        new Result(`Validation problem. ${user.age} is not a number`, user)
      );
    }
  }
  checkTypeUser(user) {
    if (user.type === "customer") {
      return true;
    } else {
      new Result("Wrong user type", user);
    }
  }
}
