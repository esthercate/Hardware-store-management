'use server'
  
import { User, Product } from './models'
import { connectToDB } from './utils'
import { revalidatePath } from 'next/cache'
import redirect from 'next/navigation' 
import bcrypt from 'bcrypt'
import { signIn } from '@/auth'

export const addUser = async (FormData) => {
  const { username, phone, email, password, isAdmin, isActive } = Object.fromEntries(FormData)
  try {
    connectToDB()
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      phone,
      email,
      password:hashedPassword,
      isAdmin,
      isActive,
    })
    await newUser.save()
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create user')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/user')
}

export const updateUser = async (FormData) => {
  const { id, username, phone, email, password, isAdmin, isActive } = Object.fromEntries(FormData)
  try {
    connectToDB()
    const updateFields = {
      username, phone, email, password, isAdmin, isActive,
    }

    object.keys(updateFields).forEach(
      (key) => (updatedFields[key] === '' || undefined) && delete updateFields[key]
    )
      
    await User.findByIdAndUpdate(id, updateFields)
  } catch (error) {
    console.log(error)
    throw new Error('Failed to update user')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/user')
}

export const addProduct = async (FormData) => {
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
  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export const updateProduct = async (FormData) => {
  const { id, title, description, buyingPrice, sellingPrice, stock } = Object.fromEntries(FormData)
  try {
    connectToDB()
    const updateFields = {
      title,
      description,
      buyingPrice,
      sellingPrice,
      stock,
    }

    object.keys(updateFields).forEach(
      (key) => (updatedFields[key] === '' || undefined) && delete updateFields[key]
    )
      
    await Product.findByIdAndUpdate(id, updateFields)
  } catch (error) {
    console.log(error)
    throw new Error('Failed to update product')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export const deleteProduct = async (FormData) => {
  const { id } = Object.fromEntries(FormData)
  try {
    connectToDB()
    await Product.findByIdAndDelete(id)
  } catch (error) {
    console.log(error)
    throw new Error('Failed to delete product')
  }
  revalidatePath('/dashboard/products')
}

export const deleteUser = async (FormData) => {
  const { id } = Object.fromEntries(FormData)
  try {
    connectToDB()
    await User.findByIdAndDelete(id)
  } catch (error) {
    console.log(error)
    throw new Error('Failed to delete user')
  }
  revalidatePath('/dashboard/users')
}

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(FormData)

  try {
    await signIn('credentials', {username, password})
  } catch (error) {
    console.log(error)
    throw error
  }
}