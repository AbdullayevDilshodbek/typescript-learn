export class Users{
    private username: string;
    private password: string;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }

    
    get username_() : string {
        return this.username;
    }

    set username_(username: string){
        if(username.length == 0)
            throw new Error("Username is required");
        this.username = username;   
    }

    get password_() : string {
        return this.password;
    }
    set password_(password: string){
        this.password = password
    }

    data(){
        return {
            username: this.username,
            password: this.password
        }
    }  
}