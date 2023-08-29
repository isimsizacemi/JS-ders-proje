class User {
    constructor(a,b){
        this.username = a;
        this.mail =b;
    }   

    login() {
        return this; // tum objryi hedef deiyor
    }
    log() {
        return userOne.MAİL + "  mail ile  YAPTI ";
    }
}

userOne = new User("ali","murat ");



class Admin extends User {
    deleteUser(userArrived){
        users = user.filter(user => { user.user !== userArrived.username});
    }
} 

let users = [userOne];

console.log(users);

user.deleteUser(userOne);

console.log(users);


