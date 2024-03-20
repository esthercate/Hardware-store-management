import { User } from './models'
import {connectToDB} from './utils'

export const fetchUsers = async (q, page) => {

  const regex = new RegExp(q, 'i')
  const ITEM_PER_PAGE = 2
  try {
    connectToDB()
    const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE)
    return JSON.parse(JSON.stringify(users))
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch users!')
  }
}