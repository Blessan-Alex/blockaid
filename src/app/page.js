'use client'
import { Button } from "@heroui/button";
import Image from "next/image";
import {  Madimi_One } from 'next/font/google'
import Navbarx from "@/components/ui/Navbarx";
import { useRouter } from "next/navigation";


const  Madimi =  Madimi_One({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  const router = useRouter();
  return (
<div className="h-screen bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(0,0,0,1)_600%)]">

      <div><Navbarx fontname={Madimi.className}/></div>
      
      <div className={`  bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent ${ Madimi.className} hover:cursor-pointer pt-[100px]  text-[200px] p-5 flex justify-center pb-[200px]`}>BLOCKAID !</div>
      <div className=" flex justify-center">
      <Button onPress={() => { router.push('/register') }}
      className="bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-2xl p-8  hover:opacity-70 duration-300 text-white shadow-lg"
      radius="full" disableRipple
    >
      Create
    </Button>
   

      </div>
      <div>
        <div></div>
        
      </div>
    </div>
  );
}


