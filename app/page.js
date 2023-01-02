'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {Image1, Image2, Image3} from '../data/imges'

export default function Home() {
  return (
    <>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {/* images will go here */}
          {Image1.map((img,index)=>(
            <BlurImage key={index} img={img} />

          ))}
          {Image2.map((img,index)=>(
            <BlurImage key={index} img={img} />

          ))}
          {Image3.map((img,index)=>(
            <BlurImage key={index} img={img} />

          ))}
        
       
         
         
        </div>
      </div>
    </>
  );
}

function BlurImage({img}) {
  const [isLoading, setLoading] = useState(true);
  return (
    <a href='#' className='group'>
      <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
        
        <Image
          src={img.url}
          width={700}
          height={600}
          alt='sss'
          className={`group-hover:opacity-75 object-cover duration-700 ease-in-out ${
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          } `}
          onLoadingComplete={()=>setLoading(false)}
        />
      </div>
      <h3 className='mt-4 text-sm text-gray-700'>Ali Next</h3>
      <p className='mt-1 text-lg font-medium text-gray-900'>alibcbv</p>
    </a>
  );
}
