import React, { useEffect } from 'react'
import { setProduct } from '../redux/actions/productActions'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'

export default function ProductListing() {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios
      .get('https://dummyjson.com/products')
      .catch((err) => {
        console.log('error', err)
      })
    dispatch(setProduct(response.data.products))
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  console.log(products)
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}
