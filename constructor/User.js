var User = /** @class */ (function () {
    function User(username, password, age) {
        this.username = username;
        this.password = password;
        this.age = age;
    }
    User.prototype.data = function () {
        return {
            username: this.username,
            password: this.password,
            age: this.age
        };
    };
    return User;
}());
var user = new User('John', 123456, 20);
console.log(user.data());
