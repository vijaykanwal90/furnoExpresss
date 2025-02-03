"use client"
import NextLink from 'next/link';
import Image from "next/image";
import React from "react";
import bg from "../public/bg.png";
import { TextGenerateEffect } from './ui/TextGenerationEffect';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import { Button } from './ui/moving-border';
// import Link from "next/link";
import { Separator } from "@/components/ui/separator"

export function About(){
    return (
      <section className='px-6 relative z-0'>
            <div className='w-full h-full flex flex-col flex-between items-center my-32 sm:flex-row '>
             <div className='flex-1 space-y-4 sm:pr-80 px-4 sm:px-0 mt-20 sm:mt-0'>
          <div className='font-generalsans text-center sm:text-left'>
            {/* <h1 className="font_0 wixui-rich-text__text text-4xl sm:text-6xl leading-tight mb-4">
              Ab Furniture Adjust Nahi <br /> Customize Karo!
            </h1> */}
            <TextGenerateEffect words="Ab Furniture Adjust Nahi Explore endless possibilities and create furniture that fits your style. " className="text-4xl sm:text-6xl leading-tight mb-4 "/>

            <p className="text-lg sm:text-xl mb-8">
              
            </p>
            <button className='bg-gradient-to-r from-orange-600 to-amber-800 border-2 rounded-lg w-40 h-14 text-white font-bold '>
              <NextLink href='/customize'><span className="StylableButton2545352419__label wixui-button__label" data-testid="stylablebutton-label">CUSTOMIZE</span></NextLink>
            </button>
          </div>
        </div>
        <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={bg}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transform scale-x-[-1]"
            alt="thumbnail"
          />
        </CardItem>
       
      </CardBody>
      
    </CardContainer>
   
            
            </div>

            <div className=''>

            </div>
            <Separator  className='my-4 bg-black'/>
        </section>
    )
}