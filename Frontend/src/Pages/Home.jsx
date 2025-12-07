import React, { Suspense, useEffect, useState } from 'react'
import { FaFile, FaSearch } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import Input from '../Components/ui/Input/Input';
import minecraftData from '../Api/Minecraft.json';
import pluginsData from '../Api/Plugins.json';
import { ToastContainer, toast } from 'react-toastify';
import faqData from '../Api/Faq.json';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from '../Components/ui/Button/Button';



const Home = () => {
  const words = [
    "Roblox game",
    "Garry's Mod server",
    "Discord community",
    "Minecraft server"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const notify = () => toast("Downloading your file!");

  return (
    <div className='bg-gray-900 p-4 space-y-5'>
      {/* Header Section */}
      <div className='flex text-center items-center justify-center text-white mb-4'>
        <h2 className='text-3xl'>Find the best assets to grow your {''}</h2>
        <div className=" h-[2.2em] overflow-hidden align-bottom ml-3">
          <div className="transition-transform duration-500 ease-in-out flex flex-col"
            style={{ transform: `translateY(-${index * 2.6}em)` }}>
            {
              words.map((word, i) => (<span key={i} className="block text-red-500 text-3xl font-bold">{word}</span>))
            }
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='flex items-center justify-center gap-6 text-gray-300'>
        <h5 className='text-center inline-flex items-center'><FaFile className='mr-2' />8000+ uploads</h5>
        <h5 className='text-center inline-flex items-center'><IoMdContacts className='mr-2' />138,644+ members</h5>
        <h5 className='text-center inline-flex items-center'><FaEnvelopeOpenText className='mr-2' />138,644+ members</h5>
      </div>

      {/* Search Section */}
      <div className='flex justify-center w-full'>
        <div className='relative w-full max-w-2xl'>
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
          <Input placeholder='Quick search' className="pl-10 w-full" />
        </div>
      </div>

      {/* Trending Title */}
      <div className='text-center text-white mt-8'>
        <h4 className='font-medium text-xl'>Trending Now:</h4>
      </div>

      {/* Card Section*/}
      <div className='flex justify-center flex-wrap gap-4 p-5'>
        {minecraftData.map((item) => (
          <div
            key={item.id}
            className='group relative w-[250px] h-[140px] rounded-lg overflow-hidden cursor-pointer shadow-lg 
                     transition-all duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500'
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40 z-10'></div>
            <h3 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         text-white text-xl font-bold z-20 drop-shadow-md text-center w-full px-2 hover:text-amber-300'>
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      {/* Plugin sec */}
      <div className='px-5 pb-5'>
        <div className='mb-3'>
          <h2 className='text-2xl font-bold'>Latest Minecraft Plugins</h2>
          <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati, consequatur molestiae quo nulla eius.</p>
        </div>
        {/* plugins card slider sec */}
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          className="w-full px-2"
        >
          {pluginsData.map((item) => (
            <SwiperSlide key={item.id} className="w-[250px]">
              <div className='flex flex-col items-stretch gap-2 bg-gray-700 rounded-2xl'>

                <div className='overflow-hidden p-2'>
                  <img
                    className='w-full h-[150px] object-cover rounded-2xl'
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div>
                  <h2 className='text-2xl font-bold text-amber-600 px-3'>
                    {item.title}
                  </h2>

                  <p className='text-amber-100 mb-3 px-3'>
                    A unique Minecraft plugin to improve your server experience.
                  </p>

                  <div className='flex gap-3 items-center justify-between px-6 mb-4'>
                    <div className='text-center'>
                      <h3 className='text-2xl font-bold'>{item.views}</h3>
                      <h4 className='font-medium'>Views</h4>
                    </div>

                    <div className='text-center'>
                      <h3 className='text-2xl font-bold'>{item.downloads}</h3>
                      <h4 className='font-medium'>Download</h4>
                    </div>

                    <div className='text-center'>
                      <h3 className='text-2xl font-bold'>{item.rating}</h3>
                      <h4 className='font-medium'>Rating</h4>
                    </div>
                  </div>

                  <div className='text-center px-2 mb-3'>
                    <Button
                      onClick={notify}
                      className='bg-amber-600 rounded-2xl p-2 w-full text-white'
                    >
                      Download
                    </Button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* faq sec */}
      <div className='px-5'>
        <div className='mb-3'>
          <h2 className='text-2xl font-bold'>Why Download with Minecraft Temple?</h2>
          <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos placeat doloremque illo esse! Ea, iste eaque. Officiis eius voluptatem quaerat.</p>
        </div>
        <div>
          <div className='grid grid-cols-4 gap-4'>
            {
              faqData.map((faq) => (
                <div className='border bg-gray-800 p-2 rounded-2xl border-gray-600'>
                  <div className='inline-flex items-center justify-center mb-2'>
                    <img className='mr-1' src={faq.icon_description} alt="" />
                    <h3 className='font-semibold'>{faq.title}</h3>
                  </div>
                  <div>
                    <p className='font-medium'>{faq.description}</p>
                  </div>
                </div>

              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home