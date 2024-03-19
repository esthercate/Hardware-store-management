import { User } from './models'
import {connectToDB} from './utils'

export const fetchUsers = async (q) => {
  try {
    connectToDB()
    const users = await User.find({username})
    return JSON.parse(JSON.stringify(users))
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch users!')
  }
}