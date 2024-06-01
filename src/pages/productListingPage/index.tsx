import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../components/productCard'
import { DataContext } from '../../context/DataProvider'
import { Link } from 'react-router-dom'





const ProductListingPage = () => {


  const {products}  =useContext(DataContext)

  return (
    <div>
      <h1>Product listing page</h1>

      {
        products?.map((product)=>(
          <Link key={product.id} to={`/products/${product.id}`}>
                   <ProductCard key={product.id} name={product.name} category={product.category} price={product.price} image={product.image} />

        </Link>
        ))
      }
      {/* <ProductCard /> */}
    </div>
  )
}

export default ProductListingPage