import { BaseLogger, ElasticLogger, MongoLogger } from "../../crossCuttingConcerns/logging/logger.js";
import User from "../models/User.js";
import UserService from "../services/userService.js";

console.log("user component loaded");

let logger1 = new MongoLogger()
let userService = new UserService(logger1);

let user1 = new User(1, "Yusuf", "Aras", "Edirne");
let user2 = new User(2, "Baran", "Aras", "Izmir");

userService.add(user1.firstName);
userService.add(user2.firstName);
console.log(userService.list());
console.log(userService.getById(2))

e
// let customer = {id:1,firstName:"Yusuf"}

// //prototyping
// customer.lastName = "Aras"

// console.log(customer.lastName)
