'use client'

export default function Navbar(){
  
  return (
    <nav className='fixed z-50 top-0 left-0 w-full backdrop-blur-lg bg-opacity-40 shadow-sm'>
      <ul className='flex justify-center p-8 gap-4'>
        <li className='cursor-pointer hover:text-purple-500 hover:border-b-2'>About</li>
        <li className='cursor-pointer hover:text-blue-500'>Projects</li>
        <li className='cursor-pointer hover:text-red-500'>Contact</li>
      </ul>
    </nav>
  )
}