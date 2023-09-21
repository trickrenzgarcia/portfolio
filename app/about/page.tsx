import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div className=' pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px] '>
      <div className=' w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0'>
        <Link
          href={'/'}
          className='flex flex-row items-center   justify-start text-slate-200 hover:text-sky-500 cursor-pointer '
        >
          <ArrowLeftIcon className='h-4 w-4  mr-[5px] ' />
          <span className=' text-[14px]'>Back</span>
        </Link>
      </div>
      <div className=' w-full 1250:w-[900px] h-auto m-auto mt-[25px] pb-[100px] '>
        <div className=' text-gray-400 text-[14px]'>Thu Sep 21 2023</div>
        <div className='w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowfade '>
          Hey ☘️, I&apos;m Patrick Renz Garcia
        </div>
        <div className=' text-gray-300    animate-slideright '>
          
        Hello, I'm Patrick, a passionate and versatile web developer with a love for crafting digital experiences that make an impact. 
        My journey into the world of programming began at the age of 17, and since then, I've been on a relentless quest to turn innovative ideas into reality.
        </div>
        <div>
          <div className='text-[20px]  my-[15px]  animate-slideright '>
            <span className='monospace'>I'm a self taught developer and all I learned from</span>
            <span className='text-rose-600'> Youtube</span> ,
            <span className='text-emerald-500'> ChatGPT</span> ,
            <span className='text-green-500'> Google</span> ,
            <span className=' text-[#F48024]'> Stackoverflow</span>
          </div>
        </div>
        <div className='text-gray-300  animate-slideright'>
        I am a dedicated full-stack developer with a passion for creating robust, user-centric web applications that seamlessly blend functionality and aesthetics. 
        With a comprehensive skill set encompassing both front-end and back-end technologies, I bring a holistic approach to every project I undertake.
        </div>
        <div className=' text-gray-300  animate-slideright  '>
          <span className='monospace '>In my free time, I learning</span>
          <span className='text-gray-400'> Solidity</span> ,
          <span className='text-blue-500'> Web3 </span>
          <span className=''>
            For Development of my Thesis Project
          </span>
        </div>
        <div className='w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  '>
          Development Experience ⏳
        </div>
        <div className='mt-4  animate-slideright    leading-[30px] monospace text-[16px] 800:text-[20px]'>
          I&apos;m a skilled web developer with experience in{' '}
          <span className=' text-blue-500 '>TypeScript</span> and{' '}
          <span className=' text-yellow-500'> JavaScript</span>, and expertise
          in frameworks like <span className=' text-cyan-500'>React</span>,{' '}
          <span className='  text-teal-500'> Node.js</span>, and
          <span className='text-[#433a74] '> Next js</span>. I&apos;m a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let&apos;s work together to bring your ideas to life!
        </div>
        <div className='font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade  '>
          Website 🌏
        </div>
        <div className=' text-gray-300  my-[15px]  animate-slideright'>
        My fascination with web development started with basic HTML and CSS, but it didn't stop there. I've evolved my skills to include cutting-edge technologies such as React, Tailwind CSS, and Next.js for front-end development. On the back end, I've delved into the intricacies of server-side programming to create robust, scalable web applications.
        </div>
        <div className='font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  '>
          Backend 🐳
        </div>
        <div className=' text-gray-300  mt-[15px] mb-[10px]  animate-slideright'>
          Node js , Express js , TypeScript , Mongodb , Postger Sql , FireBase ,
          FireStore , Graphql , Payment Stripe , Basic Skill with Prisma ORM and
          Web Scoket , Webhook , Jwt authentication , Docker.
        </div>
        <div className='font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade '>
          Mobile Application 📱
        </div>
        <div className=' text-gray-300  mt-[15px] mb-[10px]  animate-slideright'>
          React Native CLI , React Native Expo + Next js , TypeScript ,
          ReduxTookit , Tailwindcss , Next PWA
        </div>
        <div className='font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade '>
          Desktop Software 🪟🍎
        </div>
        <div className=' text-gray-300  mt-[15px] mb-[10px]  animate-slideright'>
          Tauri With Next js 13 , TypeScript , Tailwind css , ReduxTookit
        </div>
        <Link
          href={'/projects'}
          className=' flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[30px] '
        >
          Go Back To
          <span className=' text-sky-500 ml-[5px] cursor-pointer  hover:underline  '>
            Projects
          </span>
        </Link>
      </div>
    </div>
  );
}
