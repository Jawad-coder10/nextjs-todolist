'use client'
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FiMoreVertical, FiTrash2, FiEdit } from 'react-icons/fi'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { getTodoLists } from '@/lib/services/todolist.service'
import { ROUTES } from '@/utils/route'
import { Checkbox } from '../ui/checkbox'

type TodoListDto = {
  id: number
  title: string
  description?: string
  createdAt?: string
}

interface SectionProps {
  activeLabel: string
  completedLabel: string
  loadingText: string
  errorText: string
  noDescriptionText: string
  createdPrefix: string
  editMenuLabel: string
  deleteMenuLabel: string
  confirmDeleteTitle: string
  confirmDeleteDescriptionTemplate: string
  confirmDeleteCancelLabel: string
  confirmDeleteConfirmLabel: string
  confirmDeleteConfirmLoadingLabel: string
  deleteErrorText: string
}

export default function Section({
  activeLabel,
  completedLabel,
  loadingText,
  errorText,
  noDescriptionText,
  createdPrefix,
  editMenuLabel,
  deleteMenuLabel,
}: SectionProps) {
  const [todoLists, setTodoLists] = useState<TodoListDto[]>([])
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [active, setActive] = useState<'active' | 'completed'>('active')
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchTodoLists = async () => {
      try {
        const data = await getTodoLists()
        setTodoLists(data)
      } catch (err) {
        setError(errorText)
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTodoLists()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id)
  }

  const handleEdit = (id: number) => {
    setOpenMenuId(null)
    router.push(`${ROUTES.DASHBOARD}/edit/${id}`)
  }

  const handleDelete = (id: number) => {
    setOpenMenuId(null)
    router.push(`${ROUTES.DASHBOARD_DELETE}/${id}`)
  }

  return (
    <div className='p-6'>
      <Card className="flex justify-start mb-6 border-2 border-slate-300 rounded-xl bg-white w-[250px]">
        <Button className={`px-8 py-2 font-medium ${active === "active" ? "bg-slate-300 font-semibold" : "bg-white text-gray-800"}`}
          onClick={() => setActive("active")} > {activeLabel}
        </Button>
        <Button className={`px-8 py-2 font-medium ${active === "completed" ? "bg-slate-300 font-semibold" : "bg-white text-gray-800"}`}
          onClick={() => setActive("completed")} > {completedLabel}
        </Button>
      </Card>
      {loading && (
        <p className='text-sm text-gray-600'>{loadingText}</p>
      )}
      {error && (
        <p className='text-sm text-red-600'>{error}</p>
      )}
      {!loading && !error && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {todoLists.map((item, index) => (
            <div
              key={item.id ?? index}
              className='bg-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative'
            >
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center gap-3'>
                  <Checkbox
                    checked={checkedItems[index] || false}
                    onCheckedChange={() => toggleCheck(index)}
                  />
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {item.title}
                  </h3>
                </div>
                <div className='relative' ref={openMenuId === item.id ? menuRef : null}>
                  <FiMoreVertical
                    className='w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800'
                    onClick={() => toggleMenu(item.id)}
                  />
                  {openMenuId === item.id && (
                    <div className='absolute right-0 top-8 bg-white rounded-lg shadow-lg border border-gray-200 py-2 w-40 z-10'>
                      <button
                        onClick={() => handleEdit(item.id)}
                        className='w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 transition-colors'
                      >
                        <FiEdit className='w-4 h-4 text-blue-600' />
                        <span className='text-sm text-gray-700'>{editMenuLabel}</span>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className='w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 transition-colors'
                      >
                        <FiTrash2 className='w-4 h-4 text-red-600' />
                        <span className='text-sm text-gray-700'>{deleteMenuLabel}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className='text-gray-700 text-sm mb-4'>
                {item.description || noDescriptionText}
              </p>
              {item.createdAt && (
                <span className='text-sm font-medium text-gray-600'>
                  {createdPrefix} {new Date(item.createdAt).toLocaleDateString('fr-FR')}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}