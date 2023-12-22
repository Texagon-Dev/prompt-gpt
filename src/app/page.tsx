'use client'
import { useState } from 'react'
import Heading from '@/components/Heading'
import InputBox from '@/components/Input'
import OutputBox from '@/components/OutputBox'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useChat } from 'ai/react';
import toast, { Toaster } from 'react-hot-toast';
import { SYSTEM_PROMPT } from './prompts'
import Modal from '@/components/Modal'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const system_message: Message[] = [
    {
      id: 'axv3q',
      role: 'system',
      content: SYSTEM_PROMPT,
    }
  ]

  const ai = useChat({
    initialMessages: system_message,
  })

  const onCopy = () => {
    const lastMessage = ai.messages[ai.messages.length - 1]
    const lastMessageContent = lastMessage.content

    // markdown regex
    const regex = /(?:__|[*#])|\[(.*?)\]\(.*?\)/g
    const markdownRemoved = lastMessageContent.replace(regex, '$1')
    const copyText = markdownRemoved.replace(/(\r\n|\n|\r)/gm, '')
    navigator.clipboard.writeText(copyText)

    toast('Copied to clipboard', {
      icon: '✅',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  }

  return (
    <main className="flex min-h-screen bg-main justify-between flex-col items-center">
      <Toaster />
      <Header />
      <div className={`px-4 flex z-50 flex-row items-center justify-center absolute ${isOpen ? "w-full h-full" : "w-auto h-auto"}`}>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={`w-full h-full flex flex-col items-center space-y-12 lg:px-24 md:px-12 ${isOpen ? "blur-xl" : "blur-none"} px-4`}>
        <Heading setIsOpen={setIsOpen} />
        <InputBox
          onSubmit={ai.handleSubmit}
          input={ai.input}
          loading={ai.isLoading}
          handleInputChange={ai.handleInputChange}
        />
        {ai.messages.length > 1 && (
          <OutputBox
            output={ai.messages}
            onCopy={onCopy}
          />
        )}
      </div>
      <div className='mb-8'></div>
      <Footer />
    </main>
  )
}