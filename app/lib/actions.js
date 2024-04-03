import { User, Product } from './models'
import {connectToDB} from './utils'

export const addUser = async (FormData) => {
  'use server'
  const { username, phone, email, password, isAdmin, isActive } = Object.fromEntries(FormData)
  
  try {
    connectToDB()
    const newUser = new User({
      username,
      phone,
      email,
      password,
      isAdmin,
      isActive,
    })
    await newUser.save()
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create user')
  }
}

export const addProduct = async (FormData) => {
  'use server'
  const { title, description, buyingPrice, sellingPrice, stock } = Object.fromEntries(FormData)

  try {
    connectToDB()
    const newProduct = new Product({
      title,
      description,
      buyingPrice,
      sellingPrice,
      stock,
    })
    await newProduct.save()
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create product')
  }
}