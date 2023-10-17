'use client'
import Link from "next/link"
import {FaUser} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import {useSession, signIn, signOut} from 'next-auth/react'
import {FiLogOut} from 'react-icons/fi'
import Image from "next/image";



const Navbar = () => {
 const {data:session} = useSession()

 
    
  return (
    <div className='w-full font-satoshi bg-slate-500 bg-body top-0 sticky z-50'>
        <div className='w-10/12 mx-auto flex justify-between items-center py-6'>
            {/* title div */}
            <Link  href='/'>
                <h2 className="text-xl font-semibold text-black hover:text-orange-600 duration-200">Gladys-multimart.</h2>
            </Link>
            {/* input div */}
            <div className="hidden md:flex flex-1 justify-center items-center relative  focus-within:border-orange-600 ">
                <FiSearch className="absolute left-16" />
                <input  
                 type="text"
                 placeholder="search for products"
                 className="border-[1px] border-black rounded-lg px-10 py-2 w-10/12 outline-none"
                />
            </div>
            {/* Login/register */}
            {!session && (
                 <div className="flex justify-between gap-6 items-center cursor-pointer mr-2" onClick={() => signIn()}>
                 <div className="bg-transparent border rounded-xl py-2 px-4 hover:bg-black hover:text-white">
                  <div className="text-sm flex justify-between items-center gap-3 leading-5">
                     <p><FaUser /></p>
                    <p> Login/Register</p>
                 </div>
               </div>
            </div>
            )}

                {/* Cart div */}
                <div className="relative bg-black border rounded-xl py-2 px-4 text-white hover:bg-transparent hover:text-black">
                    <button className="text-sm flex justify-between items-center gap-3 cursor-pointer">
                        <p><FaShoppingCart /></p> 
                       <p>N0.000</p> 
                    </button>
                    <span className="absolute bg-white text-orange-600 shadow-xl shadow-black  font-semibold rounded-full text-sm -top-[15px] right-[0] p-1">0</span>
                </div>

                    {/*  user Image */}
            {session && (
            <Image
            src={session?.user?.image}  
            alt="user image"
            width={50}
            height={50}
            className="rounded-full object-cover ml-3"
          />
        )} 
           
            
            {/* Logout */}
            {session && (
                <div className=" ml-5 flex justify-between gap-4 items-center bg-transparent border rounded-xl py-2 px-4 hover:bg-black hover:text-white cursor-pointer" onClick={() => signOut()}>
                <FiLogOut />
                <p>LogOut</p>
            </div> 
            )}
              

          

         
          </div>
         
    </div>
    
  )
}

export default Navbar