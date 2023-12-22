import React from 'react'
import Markdown from 'react-markdown'
import Modal from './Modal'

export default function OutputBox({
    ...props
}: {
    output: Message[],
    onCopy: () => void
}) {
    return (
        <div className='flex flex-col w-full h-full p-4 bg-light border border-white/50 rounded-2xl relative'>
            <div className='flex rounded-full bg-text absolute -top-3'>
                <h1 className='text-black font-bold px-2'>
                    prompt
                </h1>
            </div>
            <div className='flex text-sm md:text-lg whitespace-pre-wrap flex-col h-full mt-4 overflow-y-auto'>
                {props.output.map((message, index) => {
                    return (
                        <div key={index} className='flex flex-row items-center'>
                            <div className='flex flex-col items-start'>
                                {message.role === 'assistant' ? 
                                    <Markdown className='text-text bg-main p-4 mt-5 rounded-xl border border-white/30 break-words font-mono'>
                                        {message.content}
                                    </Markdown>
                                :
                                    message.role === 'user' && 
                                    <Markdown className='text-white break-words'>
                                        {message.content}
                                    </Markdown>
                                }
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <div className='flex flex-row items-center mt-8'>
                <button
                    onClick={props.onCopy}
                    className='bg-light hover:bg-white/20 transition-all ease-linear border border-white/40 text-sm text-white md:text-md rounded-full px-3 py-1'>
                    copy
                </button>
            </div>
        </div>
    )
}