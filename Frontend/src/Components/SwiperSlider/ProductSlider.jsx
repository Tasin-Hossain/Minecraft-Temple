import React from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import pluginsData from '../../Api/Plugins.json'
import { FaRegEye } from "react-icons/fa6";
import "swiper/css";
import Rating from '../../Pages/Rating';
import Button from '../ui/Button/Button';
import { toast } from 'react-toastify';
const ProductSlider = () => {
    const notify = () => toast("Downloading your file!");
  return (
    
    <>
      <Swiper spaceBetween={15} slidesPerView={4} className="w-[90%] ">
          {pluginsData.map((item) => (
            <SwiperSlide key={item.id} className=" w-full ">
              <div className="flex flex-col items-stretch gap-2 bg-(--accent) border border-(--border-color) rounded-md">
                <div className="overflow-hidden p-1">
                  <img
                    className="w-full h-[150px] object-cover rounded-md"
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div>
                  {/* item title */}
                  <h2 className="text-[15px] font-semibold text-(--custom-color) px-3 capitalize">
                    {item.title}
                  </h2>
                  {/* item username */}

                  <div className='mb-2'>
                    <div className='flex items-center gap-2 px-3'>
                        <h1 className='text-[13px]'>MiniTasin</h1>
                        {/* item category */}
                        <span className='text-[13px] text-(--white-color) '>Minecraft config</span>
                    </div>
                  </div>

                  {/* Item description */}
                  <p className='text-[13px] px-3 mb-2'>
                    {item.description}
                  </p>

                  <div className="flex gap-3 items-center justify-between px-3 mb-4">
                    {/* item views */}
                    <div className="flex items-center gap-1">
                      <FaRegEye/>
                      <h3 className="">{item.views}</h3>
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
                      {item.downloads} Downloads
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