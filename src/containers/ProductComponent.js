import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products)

  const renderList = products.map((product) => {
    const { id, title, price, category, thumbnail } = product
    return (
      <div className='four column wide ' key={id}>
        <Link to={`/product/${id}`}>
          <div className='ui link card'>
            <div className='card'>
              <div className='image'>
                <img src={thumbnail} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })
  return <>{renderList}</>
}
