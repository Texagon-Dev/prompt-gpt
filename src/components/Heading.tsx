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
        <h1 className="flex flex-row items-center mainBody lg:text-7xl md:text-5xl text-3xl bg-gradient-to-l from-text/70 to-text to- font-bold bg-clip-text text-transparent text-center">
            <span className="text-slate-100">
                <Image src='/logo.png' className='w-16 h-16 mr-8 inline-block' alt='logo' />
            </span>
            Prompt GPT
            <span
                onClick={() => setIsOpen(true)}
            className="lg:text-2xl text-xl ml-8 text-slate-100 cursor-pointer">
                <IoMdInformationCircleOutline className="inline-block" />
            </span>
        </h1>
    )
}
