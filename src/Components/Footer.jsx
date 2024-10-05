import React from 'react'

function Footer({ footerAPI: { titles, links } }) {
  return (
    <div className=' bg-theme pt-7 pb-5'>
        <footer>
        <div className=' nike-container text-slate-200'>
            <div className=' grid items-center grid-cols-3 max-w-2xl w-full m-auto md:max-w-none'>
                {
                    titles.map((item ,i)=>{
                        return(
                        <div className=' gid items-center '>
                               <h1 className=' text-lg lg:text-base md:text-sm uppercase font-semibold'>{item.titles}</h1>
                        </div>
                        )
                    })
                }
                {
                    links.map((list , i)=>{
                        return (
                            <ul key={i} className=' grid items-center gap-1'>
                                {
                                    list.map((link ,i)=>{
                                        return(
                                          <li key={i} className=' text-sm sm:text-xs'>
                                            {link.link}
                                          </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </div>
            <div className='mt-5 text-center'>
            <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>React js DEVELOPERS </span></p>
          </div>
        </div>

        </footer>
    </div>
  )
}

export default Footer