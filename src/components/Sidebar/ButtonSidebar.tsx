import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ButtonSidebarType={
  route:string;
  text:string;
  icon:string;
}

const ButtonSidebar = ({route,
text,
icon}:ButtonSidebarType) => {
  return (
    <Link href={route} className='w-16 hover:bg-cyan-400 mt-5 h-20 rounded-2xl border border-slate-300 flex flex-col justify-evenly items-center'>
       <div className='w-9 h-9 bg-[#F4EFFF] rounded-full flex justify-center items-center'>
        <Image src={icon} width={18} height={18} alt='btn-sidebar'/>
       </div>
        <h1 className='text-sm font-bold'>{text}</h1>
    </Link>
  )
}

export default ButtonSidebar