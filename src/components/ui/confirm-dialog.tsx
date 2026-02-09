"use client"
import React from 'react'
import { Button } from './button'

export interface ConfirmDialogProps {
    open: boolean
    title: string
    description?: React.ReactNode
    cancelLabel: string
    confirmLabel: string
    onCancel: () => void
    onConfirm: () => void
    confirmDisabled?: boolean
}

export function ConfirmDialog({
    open,
    title,
    description,
    cancelLabel,
    confirmLabel,
    onCancel,
    onConfirm,
    confirmDisabled,
}: ConfirmDialogProps) {
    if (!open) return null

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                    {title}
                </h3>
                {description && (
                    <div className='text-gray-600 mb-6'>
                        {typeof description === 'string' ? <p>{description}</p> : description}
                    </div>
                )}
                <div className='flex gap-3 justify-end'>
                    <Button
                        variant='outline'
                        onClick={onCancel}
                        className='px-6 py-2'
                    >
                        {cancelLabel}
                    </Button>
                    <Button
                        onClick={onConfirm}
                        disabled={!!confirmDisabled}
                        className='bg-red-600 text-white hover:bg-red-700 px-6 py-2'
                    >
                        {confirmLabel}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDialog
