import CustomerRepository from "../repositories/customerRepository.js";
import CustomerService from "../services/customerService.js";

let customerSerivce = new CustomerService()

console.log(customerSerivce.load());

