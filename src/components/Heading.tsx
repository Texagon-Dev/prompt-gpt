import React from 'react'
import '../app/globals.css'
import Image from 'next/image';
import { IoMdInformationCircleOutline } from "react-icons/io";


export default function Heading(
    { setIsOpen }: {
        setIsOpen: (isOpen: boolean) => void
    }
) {
    return (
        <div className="flex flex-row items-center mainBody">
            <Image src='/logo.png' width={'60'} height={'60'} className='mr-8' alt='logo' />
            <h1 className="lg:text-7xl md:text-5xl text-3xl bg-gradient-to-l from-text/70 to-text to- font-bold bg-clip-text text-transparent text-center">
                Prompt GPT
            </h1>
            <div
                onClick={() => setIsOpen(true)}
                className="lg:text-2xl text-xl ml-8 text-slate-100 cursor-pointer">
                <IoMdInformationCircleOutline className="inline-block" />
            </div>
        </div>
    )
}
