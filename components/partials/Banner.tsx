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
      

      <canvas
        className='bg-skin-base pointer-events-none absolute inset-0'
        id='canvas'
      ></canvas>
    </div>
    
  );
}

export default memo(Banner);
