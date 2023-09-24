'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar(){
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    const storedCount = localStorage.getItem("page_view");
    const initialCount = Number(storedCount) || 0;
    setCount(initialCount + 1);
    localStorage.setItem("page_view", (initialCount + 1).toString());
  }, [])

  return (
    <nav className='w-full h-[65px] flex fixed z-50 top-0 left-0 backdrop-blur-lg bg-opacity-40 shadow-sm'>
      <div className='w-full 1300:w-[1232px] h-full flex flex-row items-center justify-between 1140:justify-around 1300:justify-between m-auto px-[10px] 400:px-[20px] 500:px-[40px] 1140:p-0'>
        <Link href='/' className='w-auto h-auto flex flex-row items-center'>
          <Image
            src={"/app_icon.png"}
            width={32}
            height={32}
            alt="Icon"
            className="cursor-pointer"
          />
          <span className='font-bold  text-gray-300 ml-[10px] hidden 310:flex'>Patrick Renz</span>
        </Link>
        <ul className='flex justify-center p-4 gap-4'>
          <Link href='/about'><li className='cursor-pointer hover:text-purple-500'>About</li></Link>
          <Link href='/projects'><li className='cursor-pointer hover:text-blue-500'>Projects</li></Link>
          <Link href='/contact'><li className='cursor-pointer hover:text-red-500'>Contact</li></Link>
        </ul>
        <div>
          <span className='text-gray-300'>Page Visits: {count}</span>
        </div>
      </div>
      
    </nav>
  )
}