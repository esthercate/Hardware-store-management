import {User} from './models'
export const addUser = async (FormData) => {
  const { username, phone, email, password, isAdmin, isActive } = Object.fromEntries(FormData)
  
  try {
    const newUser = new User({

    })
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create user')
  }
}