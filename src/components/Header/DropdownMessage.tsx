//takes to message section

import { useState } from "react";
import { Link } from "lucide-react";
import { MessageCircleMore } from "lucide-react";

const DropdownMessage=()=>{
    const [dropdownOpen, setdropdownOpen]=useState(false);
    const [notifying, setNotifying]=useState(false);
    return(<>
    <li className="relative">
        <Link
        onClick={()=>{
            setNotifying(false);
            setdropdownOpen(!dropdownOpen);
        }}
            className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
             href="/message"
        >
            <span className={`absolute -right-0.5 -top-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${
              notifying === false ? "hidden" : "inline"
            }`}>
                <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
            </span>
            <MessageCircleMore size={20} />
        </Link>
    </li>
    </>)
}

export default DropdownMessage;