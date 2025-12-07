import React, { Suspense, useEffect, useState } from "react";
import { FaFile, FaSearch } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import Input from '../Components/ui/Input/Input';
import minecraftData from '../Api/Minecraft.json';
import { ToastContainer, toast } from 'react-toastify';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



const Home = () => {
  const words = [
    "Roblox game",
    "Garry's Mod server",
    "Discord community",
    "Minecraft server",
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
    <div className="bg-gray-900 p-4 space-y-5">
      {/* Header Section */}
      <div className="flex text-center items-center justify-center text-white mb-4">
        <h2 className="text-3xl">Find the best assets to grow your {""}</h2>
        <div className=" h-[2.2em] overflow-hidden align-bottom ml-3">
          <div
            className="transition-transform duration-500 ease-in-out flex flex-col"
            style={{ transform: `translateY(-${index * 2.6}em)` }}
          >
            {words.map((word, i) => (
              <span key={i} className="block text-red-500 text-3xl font-bold">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex items-center justify-center gap-6 text-gray-300">
        <h5 className="text-center inline-flex items-center">
          <FaFile className="mr-2" />
          8000+ uploads
        </h5>
        <h5 className="text-center inline-flex items-center">
          <IoMdContacts className="mr-2" />
          138,644+ members
        </h5>
        <h5 className="text-center inline-flex items-center">
          <FaEnvelopeOpenText className="mr-2" />
          138,644+ members
        </h5>
      </div>

      {/* Search Section */}
      <div className="flex justify-center w-full">
        <div className="relative w-full max-w-2xl">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
          <Input placeholder="Quick search" className="pl-10 w-full" />
        </div>
      </div>

      {/* Trending Title */}
      <div className="text-center text-white mt-8">
        <h4 className="font-medium text-xl">Trending Now:</h4>
      </div>

      {/* Card Section*/}
      <div className="flex justify-center flex-wrap gap-4 p-5">
        {minecraftData.map((item) => (
          <div
            key={item.id}
            className="group relative w-[250px] h-[140px] rounded-lg overflow-hidden cursor-pointer shadow-lg 
                     transition-all duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40 z-10"></div>
            <h3
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         text-white text-xl font-bold z-20 drop-shadow-md text-center w-full px-2 hover:text-amber-300"
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      {/* Plugin sec */}
      <div className='px-5'>
        <div className='mb-3'>
          <h2 className='text-2xl font-bold'>Latest Minecraft Plugins</h2>
          <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati, consequatur molestiae quo nulla eius.</p>
        </div>
        {/* plugins card sec */}
        <div className='grid grid-cols-4 gap-4'>
          {/* plugins card 1 */}
          <div className='flex flex-col items-stretch gap-2 bg-gray-700 rounded-2xl'>
            <div className='overflow-hidden p-2'>
              <img className='w-full h-full object-cover rounded-2xl' src="/src/Assets/Mc slide 1.jpg" alt="" />
            </div>
            <div>
              <h2 className='text-2xl font-bold text-amber-600 px-3'>Custom Items</h2>
              <p className='text-amber-100 mb-3 px-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, ab.</p>
              <div className='flex gap-3 items-center justify-between px-6 mb-4'>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>200</h3>
                  <h4 className='font-medium'>Views</h4>
                </div>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>200</h3>
                  <h4 className='font-medium'>Download</h4>
                </div>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>2.2</h3>
                  <h4 className='font-medium'>Rating</h4>
                </div>
              </div>
              <div className='text-center px-2 mb-3'>
                <button onClick={notify} className='bg-amber-600 rounded-2xl p-2 w-full text-white'>Download</button>
                <ToastContainer />
              </div>
            </div>
          </div>
          {/* plugins card 2 */}
          <div className='flex flex-col items-stretch gap-2 bg-gray-700 rounded-2xl'>
            <div className='overflow-hidden p-2'>
              <img className='w-full h-full object-cover rounded-2xl' src="/src/Assets/Mc slide 1.jpg" alt="" />
            </div>
            <div>
              <h2 className='text-2xl font-bold text-amber-600 px-3'>Custom Items</h2>
              <p className='text-amber-100 mb-3 px-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, ab.</p>
              <div className='flex gap-3 items-center justify-between px-6 mb-4'>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>200</h3>
                  <h4 className='font-medium'>Views</h4>
                </div>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>200</h3>
                  <h4 className='font-medium'>Download</h4>
                </div>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>2.2</h3>
                  <h4 className='font-medium'>Rating</h4>
                </div>
              </div>
              <div className='text-center px-2 mb-3'>
                <button onClick={notify} className='bg-amber-600 rounded-2xl p-2 w-full text-white'>Download</button>
              </div>
            </div>
          </div>
          {/* plugins card 3 */}
          <div className='flex flex-col items-stretch gap-2  bg-gray-700 rounded-2xl'>
            <div className='overflow-hidden p-2'>
              <img className='w-full h-full object-cover rounded-2xl' src="/src/Assets/Mc slide 1.jpg" alt="" />
            </div>
            <div>
              <h2 className='text-2xl font-bold text-amber-600 px-3'>Custom Items</h2>
              <p className='text-amber-100 mb-3 px-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, ab.</p>
              <div className='flex gap-3 items-center justify-between px-6 mb-4'>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>200</h3>
                  <h4 className='font-medium'>Views</h4>
                </div>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>200</h3>
                  <h4 className='font-medium'>Download</h4>
                </div>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>2.2</h3>
                  <h4 className='font-medium'>Rating</h4>
                </div>
              </div>
              <div className='text-center px-2 mb-3'>
                <button onClick={notify} className='bg-amber-600 rounded-2xl p-2 w-full text-white'>Download</button>
              </div>
            </div>
          </div>
          {/* plugins card 4 */}
          <div className='flex flex-col items-stretch gap-2  bg-gray-700 rounded-2xl'>
            <div className='overflow-hidden p-2'>
              <img className='w-full h-full object-cover rounded-2xl' src="/src/Assets/Mc slide 1.jpg" alt="" />
            </div>
            <div>
              <h2 className='text-2xl font-bold text-amber-600 px-3'>Custom Items</h2>
              <p className='text-amber-100 mb-3 px-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, ab.</p>
              <div className='flex gap-3 items-center justify-between px-6 mb-4'>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>200</h3>
                  <h4 className='font-medium'>Views</h4>
                </div>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>200</h3>
                  <h4 className='font-medium'>Download</h4>
                </div>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold'>2.2</h3>
                  <h4 className='font-medium'>Rating</h4>
                </div>
              </div>
              <div className='text-center px-2 mb-3'>
                <button onClick={notify} className='bg-amber-600 rounded-2xl p-2 w-full text-white'>Download</button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
