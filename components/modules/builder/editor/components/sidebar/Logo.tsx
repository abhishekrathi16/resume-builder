import React from 'react'
import ResumeLogo from '../../../../../../assets/logos/Logo-3.jpeg'

const Logo = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src={ResumeLogo.src} alt="logo" className="w-20 h-20 mb-5 mt-5 hover:cursor-pointer" />
    </div>
  )
}

export default Logo