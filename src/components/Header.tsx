import React from 'react' 
import '../app/globals.css'

export default function Header() {
    return (
        <div className='header flex flex-row justify-between items-center px-4 py-2 bg-light text-text rounded-full mt-12 mb-8'>
            <h1 className='text-sm uppercase tracking-widest font-bold'>
                Texagon Labs
            </h1>
        </div>
    )
}
