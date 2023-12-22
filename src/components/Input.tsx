import React, { FormEvent } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import '../app/globals.css'

export default function InputBox(
    props: {
        onSubmit: (e: FormEvent<HTMLFormElement>) => void,
        input: string,
        handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        loading: boolean
    }
) {
    return (
        <form onSubmit={props.onSubmit} className='mainBody flex flex-row w-full lg:w-2/3 p-2 rounded-full items-center border border-text bg-main justify-between transition-all focus-within:ring-4 focus-within:ring-yellow-200/30'>
            <input
                value={props.input}
                onChange={props.handleInputChange}
                className='bg-transparent w-full outline-none focus-within:outline focus:outline-none text-text text-sm md:text-xl px-4' placeholder='Enter your query here' />
            <button
                type='submit'
                className='bg-text/75 hover:bg-text transition-all ease-linear text-black text-sm md:text-2xl rounded-full p-4'>
                {!props.loading ?
                    <FaArrowRight />
                    :
                    <ImSpinner2 className='animate-spin' />
                }
            </button>
        </form>
    )
}
