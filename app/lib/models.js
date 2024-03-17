import mongoose from 'mongoose'
import { type } from 'os'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: String,
      default: false,
    },
    isActive: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
)

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    buyingPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    sellingPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    size: {
      type: String,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model('User', userSchema)
export const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
