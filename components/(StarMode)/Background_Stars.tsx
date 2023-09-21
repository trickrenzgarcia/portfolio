'use client'
import React from 'react'
import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.cjs'

function Background_Stars(props: any){
  const [color, setColor] = useState<string>("#c2410c")
  const ref: any = useRef()
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  )

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function StarsCanvas(){
  return (
    <div
      className={`w-full h-auto fixed inset-0 z-[-2]`}
    >
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Background_Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}
