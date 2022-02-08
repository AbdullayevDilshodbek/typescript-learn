import { Users } from "./users";

let users = new Users('john','123');
console.log(users.data());

users.username_ = 'mice';
console.log(users.data());

