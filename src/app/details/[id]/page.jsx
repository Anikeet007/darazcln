"use client"
import React from 'react'
import { useEffect, useState } from "react";

function page({params}) {
    let [products,setProducts]=useState([])
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${params.id}`).then(res=>res.json()).then(json=>setProducts(json))
  },[])
  return (
    <div className='container p-4 '>
      <img src={products.image} alt="" className='md:w-[20%] md:h-[30%] w-[30%] h-[15vh]'/>
    <h1 className='py-3 font-bold flex-wrap'>{products.title}</h1>
    <p className='py-3'>Category: {products.category}</p>
    <p className='py-3'>Description: {products.description}</p>
    <p>Price: $ {products.price}</p>
    <button className="bg-orange-600 p-2 rounded hover:bg-slate-600">Order now</button>
    </div>
  )
}

export default page
