import { getSingleProudct, getTrendingProducts } from "@/helpers"


const ProductPage = async ({searchParams}) => {

    const _idString = searchParams._id
    const _id = Number(_idString)
    const product = getSingleProudct(_id)
   const data = await getTrendingProducts()
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage