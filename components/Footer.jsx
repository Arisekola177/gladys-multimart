"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full  bg-slate-500 text-white mt-20">
        <div className="w-10/12 mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col gap-y-4">
         <Link  href='/'>
                <h2 className="text-xl font-semibold text-black hover:text-orange-600 duration-200">Gladys-multimart.</h2>
            </Link>
          <p className="text-xs max-w-lg leading-5 text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in
            sint incidunt, minima quos voluptates, nobis autem laborum earum est
            pariatur aperiam. Delectus consectetur maxime quidem veniam,
            corporis.
          </p>
          <div className="flex items-center gap-x-4">
            <a href="/" target="_blank">
              <span className="socialLink">
                <BsYoutube />
              </span>
            </a>
            <a href="/" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a href="/" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
            <a href="/" target="_blank">
              <span className="socialLink">
                <BsFacebook />
              </span>
            </a>
            <a href="/" target="_blank">
              <span className="socialLink">
                <BsReddit />
              </span>
            </a>
          </div>
        </div>
        
        <div className="ml-20">
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className= "text-sm hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="text-sm hover:text-orange-500 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="text-sm hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <li className=" text-sm hover:text-orange-500 cursor-pointer duration-200">
              Newsletter
            </li>
            <li className="text-sm hover:text-orange-500 cursor-pointer duration-200">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm mb-6">Pay us with your trusted services</p>
          <Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
