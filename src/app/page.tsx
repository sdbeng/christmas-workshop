import Image from "next/image";
import {  SignedIn, SignedOut } from '@clerk/nextjs'
import Guest from "@/components/guest";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const user = await currentUser();
  

  return (
    <div className="flex flex-col items-center justify-center p-8">
      
      <h1 className="text-4xl font-bold text-green-700 mt-2">
          🎄 Welcome to Ai Tech Hub Community! 🎄
        </h1>
        <p className="text-xl text-red-600">
          Enjoy the holiday season with us! 🎅🤶
        </p>
        <Image src="/images/holiday-season2.jpg" alt="Holiday Cheer" className="w-1/2 rounded-lg shadow-lg" width={250} height={250} priority/>
        
        
        
        <SignedIn>
        <div>
            <h1 className="text-2xl font-semibold text-green-700">Merry Christmas {user?.firstName}! </h1>
            
          </div>
        </SignedIn>
        <div className="bg-green-200 p-4 rounded-lg shadow-md text-green-900">
          <p className="text-lg">
            Go ahead signup and visit <strong>&quot;Santa&apos;s Workshop&quot;</strong> where elves are busy creating holiday magic! 🎁✨
          </p>
        </div>
        <Link href="/christmas" className="mt-4 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300" prefetch={false}>          
            Santa&apos;s Workshop          
        </Link>      
     
    </div>
  );
}
