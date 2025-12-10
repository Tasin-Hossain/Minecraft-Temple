import React from 'react'
import Button, { ButtonPrimary } from '../ui/Button/Button'

const WelcomeMsg = () => {
  return (
    <div className='py-4 px-6 h-auto bg-(--accent) rounded-sm flex items-center justify-between'>
      <div className='w-[70%] flex flex-col gap-4'>
        <h2 className='text-[16px]'>Hello <span className='text-(--custom-color)'>Minitasin</span> </h2>
        <h3 className='text-[20px]'> Welcome to <span className='text-(--custom-color) font-semibold uppercase'>Minecraft <span className='text-(--white-color)' >Temple</span></span></h3>
        <p className='text-[13px] '> Level up by sharing resources, reviewing content, posting discussions and more. Upgrading will instantly increase your download limitations! so Get more downloads and unlock other features by increasing your level.</p>
        <div className='flex items-center gap-2'>
          <Button>More Information</Button>
          <ButtonPrimary>Go Premium</ButtonPrimary>
        </div>
      </div>
      <div className='w-55'>
        <img className='w-full bg-cover' src="../src/Assets/WelcomeMessage/logo1.png" alt="" />
      </div>
    </div>
  )
}

export default WelcomeMsg