"use strict";
exports.__esModule = true;
exports.Users = void 0;
var Users = /** @class */ (function () {
    function Users(username, password) {
        this.username = username;
        this.password = password;
    }
    Object.defineProperty(Users.prototype, "username_", {
        get: function () {
            return this.username;
        },
        set: function (username) {
            if (username.length == 0)
                throw new Error("Username is required");
            this.username = username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "password_", {
        get: function () {
            return this.password;
        },
        set: function (password) {
            this.password = password;
        },
        enumerable: false,
        configurable: true
    });
    Users.prototype.data = function () {
        return {
            username: this.username,
            password: this.password
        };
    };
    return Users;
}());
exports.Users = Users;
