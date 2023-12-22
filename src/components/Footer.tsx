import React from 'react'

export default function Footer() {
    return (
        <footer className='flex flex-row justify-center items-center bg-light text-white h-12 w-full'>
            <p className='text-center'>
                Made with <span className='text-red-600'>
                    💛
                    </span> by <a href='https://texagon.io/' target='_blank' rel='noreferrer' className='text-text hover:text-blue-600'>Texagon</a>
            </p>
        </footer>
    )
}
