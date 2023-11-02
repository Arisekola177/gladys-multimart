import SingleProduct from "@/components/SingleProduct";
import { getSingleProudct } from "@/helpers";
import ProductsData from "@/components/ProductsData";
import { trendingProducts } from "@/constants/data";


const page =  ({searchParams}) => {
 const _idString = searchParams._id;
 const _id = Number(_idString);
 const product = getSingleProudct(_id);
 const data = trendingProducts
 
  return (
    <div>
        <SingleProduct product={product} />
                  
  <div>
    {data ? (
      <div>
        <p className="text-xl py-1 font-semibold">Tranding Products</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {data.map((product) => (
            <ProductsData key={product._id} product={product} />
          ))}
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>  
    </div>
  )
}

export default page