class User{
    constructor(id, name, email, password) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }
}


let UserList = [
    new User( 1,"Hiro Hamada", "hirohamada@test.com","123456"),
    new User(2,"Test test", "test@test.com","123456"),
    new User(3,"Random Agriculturer", "random@test.com","123456"),
    new User(4,"TYPW Master", "tywp@test.com","123456"),
]


export {User, UserList}