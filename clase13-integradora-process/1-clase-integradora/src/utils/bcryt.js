import bcrypt from 'bcrypt'

export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

// passs {pass}
export const isValidPassword = (password, user) => bcrypt.compareSync(password, user.password)
