class wallet{
    constructor(public username:string,public password:string){
        this.username = username;
        this.password = password;
    }
}
export class Wallet {
    static create(event: { username: string,password: string }) {
        return new wallet(event.username,event.password);
    }
}
