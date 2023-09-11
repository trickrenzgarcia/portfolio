'use client';
import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { renderCanvas } from '@/lib/renderCanvas';
import { useTheme } from 'next-themes'
import { useEffectOnce } from 'usehooks-ts';

type Title = {
  name: string,
  description: string,
  subDescription: string
}

function Banner() {
  const [title, setTitle] = useState<Title>({
    name: 'Patrick Renz Garcia',
    description: 'I\'m a Full Stack Developer',
    subDescription: 'asdawdasdasd'
  })
  useEffectOnce(() => {
    renderCanvas()
    
  })
  return (
    <div className='relative flex flex-col w-full h-screen items-center justify-center'>
      {/* {sentence.map((letter, index) => {
        return (
          <TextSpan key={index}>
            {letter === ' ' ? '\u00A0': letter}
          </TextSpan>
        )
      })} */}
      <h1 className='font-bold text-4xl md:text-8xl hover:scale-[110%] transition-all duration-200 select-none font-secondary fancy-fade-in'>
        {title.name}
      </h1>

      <motion.h2
        className='text-center w-full font-bold font-secondary text-3xl lg:text-4xl my-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.5 }}
      >
        {title.description}
      </motion.h2>

      <canvas
        className='bg-skin-base pointer-events-none absolute inset-0'
        id='canvas'
      ></canvas>
    </div>
    
  );
}

export default memo(Banner);
