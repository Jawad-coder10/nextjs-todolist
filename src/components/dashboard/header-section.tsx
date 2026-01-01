import { ChevronDown, Plus, Search } from 'lucide-react'
import React from 'react'
import { IoMdNotifications } from 'react-icons/io'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import Image from 'next/image';

export default function HeaderSection() {
  return (
    <>
        <div className='flex items-center justify-between mb-6 mt-4'>
            <h1 className='text-2xl font-semibold'>Todo List</h1>
            <div className='flex items-center gap-5'>
                <IoMdNotifications size={24} />
                <Image
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                    alt="Profile"
                    width={32}   // équivalent à w-8 (8 * 4px = 32px)
                    height={32}  // équivalent à h-8
                    className="rounded-full object-cover"
                />
            </div>
        </div>
        <Card className='flex items-center justify-between mb-6 mt-4 px-3 w-full h-16'>
            <div className='flex items-center gap-2'>
                <h1 className='text-xl font-semibold'>21stFeb,2025 </h1> <ChevronDown size={20} />
            </div>
            <div className='flex items-center gap-5'>
                <div className="relative w-full flex items-center gap-5">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search List"
                        className="w-45 h-9 pl-10 pr-4 py-1 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none
                        transition-all duration-200"
                    />
                    <Button variant="outline" className='bg-blue-700 text-white w-[137px] h-[36px] hover:bg-blue-900'><Plus/>Add new List</Button>
                    </div>
            </div>
        </Card>
    </>
  )
}
