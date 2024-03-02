

class UserDto {
    constructor(user){
        this.full_name  = `${user.first_name} ${user.last_name}`
        this.first_name = user.first_name
        this.last_name  = user.last_name
        this.email      = user.email
        this.password   = user.password
        
    }
}



module.exports = {
    UserDto
}