import {productData} from "@/constants/data";

export const getProducts = async () => {
 try {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
  const data = await res.json()
  return (data)  || []
 } catch (error) {
   console.log(error)
 }

};

export const getTrendingProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/smarttrending");
    const data = await res.json();
    return (data) || []
  } catch (error) {
     console.log(error)
  }
 
 
};

export const calculatePercentage = (oldPrice, price) => {
  return !!parseFloat(price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / price) * 100).toFixed(0)
    : 0;
};

export const getSingleProudct = (_id) => {
  const item = productData.find((product) => product._id === _id);

  return item;
};

