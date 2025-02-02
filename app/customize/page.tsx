"use client"
import Image from "next/image";
export default function Customize() {
  return (
    <div className=' h-screen w-full bg-cover bg-center opacity-90'  > 
    <div className='flex m-23 justify-between bg-opacity-50'>
    <div className="text-black ">
        <h1 className="text-4xl font-bold">Welcome to the Customize Page</h1>
        <p className="mt-4 text-lg">
          Here you can customize your settings or preferences.
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-auto object-cover transform scale-x-[-1]">
        <Image src={"./assets/bg.png"}  alt='Hero Background'
           />
      </div>
      </div> 
 
        </div>
  )
}