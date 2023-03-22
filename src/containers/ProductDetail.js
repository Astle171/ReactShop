import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeSelectedProduct,
  selectedProduct,
} from '../redux/actions/productActions'

export default function ProductDetail() {
  const product = useSelector((state) => state.product)
  const { id, thumbnail, title, category, price } = product
  const dispatch = useDispatch()
  const { productId } = useParams()
  console.log(product)
  const fetchProduct = async () => {
    const response = await axios
      .get(`https://dummyjson.com/products/${productId}`)
      .catch((err) => {
        console.log('error', err)
      })
    dispatch(selectedProduct(response.data))
  }
  useEffect(() => {
    if (productId && productId !== '') fetchProduct()
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])
  return (
    <div className='ui grid container'>
      <div className='ui placeholder segment'></div>
    </div>
  )
}
