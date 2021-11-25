import { users } from "../data/users.js";
import CustomerRepository from "../repositories/customerRepository.js";
import CustomerValidation from "../core/validation/customerValidation.js";
import DataResult from "../core/results/DataResult.js";
export default class CustomerService {
  constructor(loggerService) {
    this.loggerService = loggerService;
    this.customerRepository = new CustomerRepository();
    this.customerValidation = new CustomerValidation();
  }
  load() {
    for (const user of users) {
      if (this.customerValidation.checkUserValidityForErrors(user)) {
        this.customerRepository.add(user);
      } else {
        this.customerValidation.errors.push(
          new DataResult("Wrong user type", user)
        );
      }
    }
  }
  listCustomers() {
    return this.customerRepository.listCustomers();
  }
  getCustomersById(id) {
    return this.customerRepository.getCustomersById(id);
  }
  getCustomersSorted() {
    return this.customers.sort((customer1, customer2) => {
      if (customer1.firstName > customer2.firstName) {
        return 1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }
}
