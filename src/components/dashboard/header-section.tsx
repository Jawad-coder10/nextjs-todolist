"use client"

import { FiChevronDown, FiPlus, FiSearch } from 'react-icons/fi'
import { IoMdNotifications } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ROUTES } from '@/src/utils/route'

interface HeaderSectionProps {
    title: string;
    searchPlaceholder: string;
    buttonLabel: string;
    profileImage: string;
}

export default function HeaderSection({
    title,
    searchPlaceholder,
    buttonLabel,
    profileImage
}: HeaderSectionProps) {
    const router = useRouter()
    const today = new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })

    const handleAddNewList = () => {
        router.push(ROUTES.DASHBOARD_CREATE)
    }

    return (
        <>
            <div className='flex items-center justify-between mb-6 mt-4'>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <div className='flex items-center gap-5'>
                    <IoMdNotifications size={24} />
                    <Image
                        src={profileImage}
                        alt="Profile"
                        width={32}   // équivalent à w-8 (8 * 4px = 32px)
                        height={32}  // équivalent à h-8
                        className="rounded-full object-cover"
                    />
                </div>
            </div>
            <Card className='flex items-center justify-between mb-6 mt-4 px-3 w-full h-16'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-xl font-semibold'>{today}</h1> <FiChevronDown size={20} />
                </div>
                <div className='flex items-center gap-5'>
                    <div className="relative w-full flex items-center gap-5">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder={searchPlaceholder} className="w-45 h-10 pl-10 pr-4 py-1 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none
                        transition-all duration-200"
                        />
                        <Button variant="outline" size="sm" className='bg-blue-700 text-white hover:bg-blue-900 mr-3 h-10' onClick={handleAddNewList}>
                            <FiPlus />
                            {buttonLabel}</Button>
                    </div>
                </div>
            </Card>
        </>
    )
}
