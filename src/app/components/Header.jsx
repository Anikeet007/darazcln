"use client"
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlinePerson2 } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
export const metadata = {
    title: "Home page",
    description: "Online shopping",
  };
function Header() {
    return (
        <>
            <header className=' bg-orange-500 text-white'>
                <div className="container md:flex justify-between hidden">
                    <ul className='flex gap-5'>
                        <li><a href="/about">Become a Seller</a></li>
                        <li><a href="">Payments & Recharge</a></li>
                        <li><a href="">Help & Support</a></li>
                        <li><a href=""> Daraz Logistics Partner</a></li>
                    </ul>
                    <button className='bg-orange-800 p-2 rounded-b-2xl'>Save more on app</button>
                </div>

                <div className=' container py-4  flex justify-between items-center '>
                    <div className=''>
                        <a href="/"><img className='w-[120px]' src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="" /></a>
                    </div>
                    <div className='w-[50%]'>
                        <label className="relative text-black">
                           <input type="search" name='search' placeholder='Search in daraz' className='rounded-2xl  md:w-[100%]  p-2' />
                          
                        </label>
                       
                    </div>
                    <nav className=''>
                        <ul className='flex gap-4 items-center'>
                            <li><a href="/login" className='flex items-center'> <MdOutlinePerson2 /> Login</a></li>
                            <li><a href="/register">Sign Up</a></li>
                            <li><a href=""><CiShoppingCart /></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
