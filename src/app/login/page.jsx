"use client"
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


function page() {
  return (
    <>
    <section className='container py-3  md:w-[30%] w-[20%]'>
      <div className=' text-center items-center '>
      <div className='flex justify-between p-3'>
      <div><h1 className='text-orange-600'>Welcome to daraz</h1></div>
      <div><p className='text-sm'>New Member,<a href='/register' className='text-orange-400'>Register Here</a></p> </div>
      </div>
          
            <form action="" className='shadow'>
                <label htmlFor="" className='text-black my-5'>
                <h2 className='font-bold py-3'>Phone or Email</h2>
               
                <input type="text" name="text" id="" placeholder='Enter your phone or email' className='border w-[80%] text-sm p-3' required/>
                
                <p className='py-3 text-sm '> <span className='font-bold'>Password</span> <a href="" className='text-orange-400'>Forget password?</a></p>
                <input type="password" name="text" id="" placeholder='Enter your password' className='border w-[80%] text-sm p-3' required/>
                <div className='py-3 '>
                <button type="submit" className='bg-orange-600 rounded w-[19%] p-2'>Login</button>
                
                </div>
                
                
                </label>
            </form>
      </div>
      </section> 
    </>
  )
}

export default page
