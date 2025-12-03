import React, { useEffect, useState } from 'react'
import { FaFile } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaEnvelopeOpenText } from "react-icons/fa6";

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

  return (
    <div className='bg-gray-900 p-4'>
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
      <div className='flex items-center justify-center gap-2'>
        <h5 className='text-center inline-flex'><FaFile className='mr-1' />8000+ uploads</h5>
        <h5 className='text-center inline-flex'><IoMdContacts className='mr-1' />138,644+ members</h5>
        <h5 className='text-center inline-flex'><FaEnvelopeOpenText className='mr-1' />138,644+ members</h5>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home