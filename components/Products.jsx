
import { getProducts } from '@/helpers'
import React from 'react'
import ProductsData from './ProductsData'
 

const Products = async () => {
    const products = await getProducts()
    
  return (
    <div className='w-10/12 mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-5'> 
       {products.map((product) => (<ProductsData  product={product} key={product._id}/>))}
      </div>
   
  )
}

export default Products