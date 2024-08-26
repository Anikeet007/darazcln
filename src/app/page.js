"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


export default function Home() {
  let [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])
  return (
    <>
      <section className='container py-6 flex justify-between' >
        <div className='  p-4 rounded-lg md:flex hidden'>
          
          
        </div>
        <div className="md:w-[75%] w-full">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide><img src="https://img.lazcdn.com/us/domino/a0b67ae8-8abe-4257-a039-b41b75f23159_NP-1976-688.jpg_1200x1200q80.jpg_.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://img.lazcdn.com/us/domino/56837be2-0952-4948-8568-4efa68ae08be_NP-1976-688.jpg_1200x1200q80.jpg_.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://img.lazcdn.com/us/domino/38d8b64c-7ad4-45d3-b972-2e852e575186_NP-1976-688.jpg_1200x1200q80.jpg_.webp" alt="" /></SwiperSlide>

          </Swiper>
        </div>

      </section>

      <section className='container'>
        <h1 className='font-bold text-2xl'>All Products</h1>


        <div className="container grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 p-3 gap-10 ">
          {products.map((a) => (
            <div className="p-4 md:w-full w-[180px] border md:h-[520px] sm:h-[350px] h-[280px]" key={a.id}>
              <img src={a.image} className="md:h-[50vh] sm:h-[25vh] h-[20vh] w-[160px] object-fill " />
              <h1 className="md:font-bold font-extralight truncate   overflow-hidden"> <Link href={`/details/${a.id}`}>{a.title}</Link></h1>
              <p>Price: $ {a.price}</p>
              <button className="bg-orange-600 p-2 rounded hover:bg-slate-600">Order now</button>
            </div>
          ))}
        </div>
      </section>
    </>

  );
}
