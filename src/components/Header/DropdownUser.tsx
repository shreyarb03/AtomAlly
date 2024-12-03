'use client'

import { useState } from "react"
import { ChevronDown, Link as link, LogOut, Settings, User2 } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useUser } from "@/app/context/UserContext"
import { signOut } from "next-auth/react"
const DropdownUser=()=>{
    const [dropdownOpen, setDropdownOpen]=useState(false)
    const router=useRouter();

    const user=useUser();

    const handleLogout=async()=>{
      await signOut({redirect:false});
      router.push('/auth-page/signin');
    }


    //# prevents default behaviour of link (what is default behaviour read)
    return (
        <div className="relative">
            <Link 
            onClick={()=> setDropdownOpen(!dropdownOpen)}
            href={'#'}
            className="flex items-center gap-4"
            >
                <span className="hidden text-right lg:block">
                    
                    <span className="block text-sm font-medium text-black dark:text-white">
                        {user.firstName}{user.lastName}
                    </span>
                    <span className="block text-xs">Student</span>
                  </span>
                    <span className="h-11 h-11 rounded-full">
                        <Image
                        src={user.photo}
                        width={44}
                        height={44}
                        
                       /* style={{
                            width:'auto',
                            height:'auto',
                        }}*/
                        className="object-contain rounded-full"
                        alt="user"
                        />
                    </span>

                
                <ChevronDown/>
            </Link>

            {dropdownOpen && (
                <div className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                    >
                      <User2 />
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/settings"
                      className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                    >
                      <Settings />
                      Account Settings
                    </Link>
                  </li>
                </ul>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                >
                  <LogOut />
                  Log Out
                </button>
              </div>
            )}
          

        </div>
    )
}

export default DropdownUser;