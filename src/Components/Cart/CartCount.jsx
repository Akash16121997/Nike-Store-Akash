import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import {  XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

function CartCount({onCartToggle,totalQTY}) {
  return (
    <div className=' bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className=' flex items-center gap-3'> 
             <div onClick={onCartToggle}>
                <ChevronLeftIcon className=' w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2] cursor-pointer'/>
             </div>
             <div className=' flex items-center'>
                <h1 className=' text-base font-medium text-slate-900'>Your cart</h1><span className=' bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm ml-3'>{totalQTY}</span>
             </div>
        </div>
        <div className=' flex items-start'>
            <button onClick={onCartToggle} type='button' className=' rounded bg-theme-cart active:scale-90 p-0.5'>  
            <XMarkIcon className=' w-5 h-5 text-white stroke-[2]' />

            </button>
        </div>
    </div>
  )
}

export default CartCount