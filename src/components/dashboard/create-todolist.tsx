"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { FiChevronLeft } from 'react-icons/fi'
import { ROUTES } from '@/utils/route'
import { createTodoList } from '@/lib/services/todolist.service'

interface CreateTodolistProps {
    pageTitle: string;
    title: string;
    titlePlaceholder: string;
    description: string;
    descriptionPlaceholder: string;
    colorLabel: string;
    cancelButtonText: string;
    submitButtonText: string;
    submitLoadingText: string;
    errorTitleRequired: string;
    errorCreation: string;
}

export default function CreateTodolistPage({
    pageTitle,
    title,
    titlePlaceholder,
    description,
    descriptionPlaceholder,
    cancelButtonText,
    submitButtonText,
    submitLoadingText,
    errorTitleRequired,
    errorCreation,
}: CreateTodolistProps) {
    const router = useRouter()
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!titleValue.trim()) {
            setError(errorTitleRequired)
            return
        }
        setLoading(true)
        setError('')
        try {
            await createTodoList({ title: titleValue, description: descriptionValue });
            router.push(ROUTES.DASHBOARD);
        } catch (err) {
            setError(errorCreation);
        } finally {
            setLoading(false)
        }
    }

    const handleCancel = () => {
        router.push(ROUTES.DASHBOARD)
    }
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6'>
            <div className='flex items-center gap-3 mb-8 w-full max-w-2xl'>
                <button
                    onClick={handleCancel}
                    className='p-2 hover:bg-gray-200 rounded-lg transition-colors'
                    aria-label="Retour"
                >
                    <FiChevronLeft size={24} />
                </button>
                <h1 className='text-3xl font-semibold'>{pageTitle}</h1>
            </div>
            <Card className='w-full max-w-2xl rounded-2xl border-0 shadow-lg'>
                <form onSubmit={handleSubmit} className='p-8 space-y-6'>
                    {error && (
                        <div className='p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg'>
                            {error}
                        </div>
                    )}
                    <div>
                        <label htmlFor='title' className='block text-sm font-semibold text-gray-700 mb-2'>
                            {title} <span className='text-red-500'>*</span>
                        </label>
                        <input
                            id='title'
                            name='title'
                            type='text'
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                            placeholder={titlePlaceholder}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                            maxLength={50}
                        />
                        <p className='text-xs text-gray-500 mt-1'>{titleValue.length}/50</p>
                    </div>
                    <div>
                        <label htmlFor='description' className='block text-sm font-semibold text-gray-700 mb-2'>
                            {description}
                        </label>
                        <textarea
                            id='description'
                            name='description'
                            value={descriptionValue}
                            onChange={(e) => setDescriptionValue(e.target.value)}
                            placeholder={descriptionPlaceholder}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none'
                            rows={4}
                            maxLength={200}
                        />
                        <p className='text-xs text-gray-500 mt-1'>{descriptionValue.length}/200</p>
                    </div>
                    <div className='flex gap-3 justify-end pt-6'>
                        <Button
                            type='button'
                            variant='outline'
                            onClick={handleCancel}
                            className='px-6 py-2'
                        >
                            {cancelButtonText}
                        </Button>
                        <Button
                            type='submit'
                            disabled={loading}
                            className='bg-blue-600 text-white hover:bg-blue-700 px-6 py-2'
                        >
                            {loading ? submitLoadingText : submitButtonText}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}
