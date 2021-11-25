import { users } from "../data/users.js";
import UserRepository from '../repositories/userRepository.js'
import UserValidation from "../core/validation/userValidation.js"
export default class UserService {
  constructor(loggerService) {
    this.userRepository = new UserRepository();
    this.userValidation = new UserValidation();
    this.loggerService = loggerService;
  }
  listUsers() {
    return this.userRepository.listUsers();
  }
}
