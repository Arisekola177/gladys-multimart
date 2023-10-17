'use client'
import { calculatePercentage } from '@/helpers'
import Image from 'next/image'
import Link from 'next/link'
import FormattedPrice from './FormattedPrice'
import { FaStar } from 'react-icons/fa'



const ProductsData = ({product}) => {
    const startArray = Array.from({ length: product.rating }, (_, index) => (
        <span key={index} className="text-yellow-400">
          <FaStar />
        </span>
      ))

  return (

    <div className="w-full rounded-lg overflow-hidden">
        <div className=''>
            <Link href={{pathname: '/product', query: {_id:product._id}}}>
            <div className='w-full h-96 group relative   overflow-hidden'>
            <Image src={product.image}  alt='product image' width={500} height={500} className='w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg' />
            {
                product.isNew && (<span className='absolute top-2 right-4 font-medium text-xs py-1 px-3 bg-white rounded-full group-hover:bg-orange-600 group-hover:text-white duration-200'>New Arrival</span>)
            }
            </div>
            </Link>
            <div className='border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg'>
                <p>{product.title}</p>
                <div className='flex justify-between items-center'>
                    <div className='border-[1px] py-1 px-4 rounded-full border-orange-600 text-xs'>
                        <p>{calculatePercentage(product.price, product.oldPrice)}% off</p>
                    </div>
                    <div className='flex items-center gap-x-2'> 
                        <p className='text-xs text-slate-600 line-through'><FormattedPrice amount={product.oldPrice} /></p>
                        <p className='text-xs font-semibold'><FormattedPrice amount={product.price} /></p>
                    </div>
                </div>
                <div className='mt-2 flex justify-between items-center'>
                <button className='bg-orange-600 text-xs border-[1px] tracking-wide rounded-full text-white py-2 px-4 hover:bg-white hover:text-black'>  Add to Cart </button>
                <div className='flex items-center gap-1'>
                   {startArray}
                </div>
                </div>
                
            </div>
               
           
          
        </div>
    </div>
  )
}

export default ProductsData