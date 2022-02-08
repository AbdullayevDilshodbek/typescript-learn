"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var users = new users_1.Users('john', '123');
console.log(users.data());
users.username_ = 'mice';
console.log(users.data());
