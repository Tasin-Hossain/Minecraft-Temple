import React from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import pluginsData from '../../Api/Plugins.json'
import { FaRegEye } from "react-icons/fa6";
import "swiper/css";
import Rating from '../../Pages/Rating';
import Button from '../ui/Button/Button';
import { toast } from 'react-toastify';

import products from '../../Api/Product';

const ProductSlider = () => {
    const notify = () => toast("Downloading your file!");
  return (
    
    <>
      <Swiper spaceBetween={15} slidesPerView={4} className="w-[90%] ">
          {products.map((item) => (
            <SwiperSlide key={item.id} className=" w-full cursor-pointer">
              <div className="flex flex-col items-stretch gap-2 bg-(--accent) border border-(--border-color) rounded-md">
                <div className="overflow-hidden p-1">
                  <img
                    className="w-full h-[150px] object-fit rounded-md"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </div>

                <div className='bg-(--accent-fourground)'>
                  {/* item title */}
                  <h2 className="text-[14px] line-clamp-1 mb-2 font-semibold text-(--custom-color) px-3 capitalize">
                    {item.title}
                  
                  </h2>
                  {/* item username */}

                  <div className='mb-3'>
                    <div className='flex items-center gap-2 px-3'>
                        <h1 className='text-[12px] hover:underline'>{item.creator.username}</h1>
                        {/* item category */}
                        <span className='text-[12px] text-(--white-color) '>{item.subCategory}</span>
                    </div>
                  </div>

                  {/* Item description */}
                  <p className='text-[12px] px-3 mb-4 line-clamp-2'>
                    {item.shortDescription}
                  </p>

                  <div className="flex gap-3 items-center justify-between px-3 mb-4">
                    {/* item views */}
                    <div className="flex items-center gap-1">
                      <FaRegEye/>
                      <h3 className="">{item.stats.views}</h3>
                    </div>
                   
                    {/* item reating */}
                    <div className="flex items-baseline-last gap-2">
                      <Rating></Rating>
                      <h4 className="font-medium mt-1">Rating</h4>
                    </div>
                  </div>

                  {/* downloads */}
                  <div className="text-center px-2 mb-3">
                    <Button
                      onClick={notify}
                      className="bg-amber-600 rounded-2xl p-2 w-full text-white"
                    >
                      {item.stats.downloads} Downloads
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  )
}

export default ProductSlider