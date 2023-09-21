"use client"
import Banner from '../partials/Banner';
import Section_2 from './Section_2';

export default function Section_1() {
  return (
    <section className=" w-full h-[940px] shadow-lg shadow-[#030014]/50  relative bg-[url('/main.svg')] bg-cover flex flex-col overflow-hidden  items-center justify-start  px-[15px] ">
      <div className=" w-[1250px]  h-full z-[-10] absolute   top-[-280px]  flex flex-row   items-start justify-center ">
        <video
          className="w-full h-auto  rotate-180  "
          preload="false"
          playsInline
          loop
          muted
          // @ts-ignore
          autoPlay="autoplay"
          src="/q-c3d7becf.webm"
        ></video>
      </div>
      
      <Banner />
      <Section_2 />
    </section>
  )
}