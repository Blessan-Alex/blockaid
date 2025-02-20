import { Button } from "@heroui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-zinc-800 text-white  h-screen ">
      
      <div className="  bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent  text-9xl p-5 flex justify-center pb-[200px]">BLOCKAID</div>
      <div className=" flex justify-center">
      <Button
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


