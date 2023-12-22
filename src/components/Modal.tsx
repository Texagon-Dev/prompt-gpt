import React from 'react'
import '../app/globals.css'
import { IoMdClose } from 'react-icons/io'

export default function Modal(
    { isOpen, setIsOpen }: {
        isOpen: boolean,
        setIsOpen: (isOpen: boolean) => void
    }
) {
    const listOfStack = [
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "Vercel AI SDK",
    ]
    return (
        isOpen &&
        <div className='modal py-12 px-12 flex flex-col justify-center items-start bg-main/80 relative border border-white/20 text-text rounded-lg p-4 prose prose-lg space-y-4 filter backdrop-blur-2xl'>
            <button 
                onClick={() => setIsOpen(false)}
                className='bg-text hover:bg-white transition-all ease-linear border border-white/40 text-sm text-main uppercase tracking-widest md:text-sm rounded-full px-3 py-1 absolute -top-4 flex flex-row items-center'>
                <IoMdClose className='inline-block text-md' />
                close
            </button>
            <h1 className='text-sm uppercase tracking-widest font-bold prose prose-xl text-white'>
                What is Prompt GPT?
            </h1>
            <p className='prose md:prose-md prose-sm text-white/70'>
                Prompt GPT is a web application that uses OpenAI&apos;s GPT-4 API to generate text based on a prompt. It is a simple interface that allows you to quickly generate text based on a prompt that will generate powerful responses based on the prompt.
            </p>
            <h1 className='text-sm uppercase tracking-widest font-bold prose prose-xl text-white'>
                Tech Stack:
            </h1>
            {listOfStack.map((item, index) => {
                return (
                    <li key={index} className='prose ml-4 prose-sm md:prose-md text-white/90'>
                        {item}
                    </li>
                )
            })}
        </div>
    )
}