class User{
    constructor(id, name, email, password) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }
}


let UserList = [
    new User( 1,"Pierre typw", "pierretypw@type.com","typw"),
    new User(2,"Peter wilfried", "peterwilfried@typw.com","typw"),
]


export {User, UserList}