"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { ROUTES } from '@/src/utils/route'
import { getTodoListById, deleteTodoList } from '@/src/lib/services/todolist.service'

interface DeleteTodolistProps {
    id: number
    pageTitle: string
    descriptionTemplate: string // use {title}
    cancelButtonText: string
    confirmButtonText: string
    confirmingText: string
    notFoundText: string
    loadErrorText: string
    deleteErrorText: string
}

export default function DeleteTodolistPage({
    id,
    pageTitle,
    descriptionTemplate,
    cancelButtonText,
    confirmButtonText,
    confirmingText,
    notFoundText,
    loadErrorText,
    deleteErrorText,
}: DeleteTodolistProps) {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [initialLoading, setInitialLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTodoListById(id)
                if (!data) {
                    setNotFound(true)
                    return
                }
                setTitle(data.title)
            } catch (e) {
                setError(loadErrorText)
            } finally {
                setInitialLoading(false)
            }
        }
        fetchData()
    }, [id, loadErrorText])

    const handleCancel = () => router.push(ROUTES.DASHBOARD)

    const handleConfirm = async () => {
        setLoading(true)
        setError('')
        try {
            await deleteTodoList(id)
            router.push(ROUTES.DASHBOARD)
        } catch (e) {
            setError(deleteErrorText)
        } finally {
            setLoading(false)
        }
    }

    const description = descriptionTemplate.replace('{title}', title)

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6'>
            <div className='w-full max-w-xl'>
                <h1 className='text-3xl font-semibold mb-6'>{pageTitle}</h1>
                <Card className='rounded-2xl border-0 shadow-lg p-8'>
                    {initialLoading && (
                        <div className='p-4 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg mb-4'>
                            Chargement...
                        </div>
                    )}
                    {notFound && !initialLoading && (
                        <div className='p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg mb-4'>
                            {notFoundText}
                        </div>
                    )}
                    {error && (
                        <div className='p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg mb-4'>
                            {error}
                        </div>
                    )}

                    {!initialLoading && !notFound && (
                        <>
                            <p className='text-gray-700 mb-6'>{description}</p>
                            <div className='flex gap-3 justify-end'>
                                <Button variant='outline' onClick={handleCancel} className='px-6 py-2'>
                                    {cancelButtonText}
                                </Button>
                                <Button onClick={handleConfirm} disabled={loading} className='bg-red-600 text-white hover:bg-red-700 px-6 py-2'>
                                    {loading ? confirmingText : confirmButtonText}
                                </Button>
                            </div>
                        </>
                    )}
                </Card>
            </div>
        </div>
    )
}
