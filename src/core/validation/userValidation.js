import ErrorDataResult from "../results/errorDataResult.js";

export default class UserValidation {
  constructor() {
    this.errors = [];
  }

  checkRequiredFields(user) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem ${field} is required`, user)
        );
      }
    }
    return hasErrors;
  }

  checkAgeIsNumber(user) {
    let hasErrors = false;
    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasErrors = true;
      this.errors.push(
        new ErrorDataResult(
          `Validation problem ${user.age} is not a number`,
          user
        )
      );
    }
    return hasErrors;
  }
}
