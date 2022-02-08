class User {
    username: string;
    password: number;
    age: number;

    constructor(username: string, password: number, age?: number){
        this.username = username;
        this.password = password;
        this.age = age;
    }

    data(){
        return {
            username: this.username,
            password: this.password,
            age: this.age
        }
    }
}

let user = new User('John',123456,20)
console.log(user.data());
