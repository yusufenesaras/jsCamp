export default class User {
  constructor(id, firstName, lastName, city) {
    console.log("User created");
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.city = city
  }
}
