import React from 'react'
import CopyRight from '../../assets/icons/copy-right'

export default function Footer() {
  return (
    <div className='flex bg-gray50 justify-center items-center py-6 px-2 text-gray600'>
        <CopyRight/>
        <p className='text-sm pl-1'>2024 | Designed and coded with ❤️️ by <span><a href='https://github.com/rznegrr' target='_blank'>Me</a></span> 😊</p>
    </div>
  )
}
