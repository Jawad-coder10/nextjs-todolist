'use client'
import React, { useEffect, useState } from 'react'
import { Checkbox } from '@/src/components/ui/checkbox'
import { MoreVertical } from 'lucide-react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { getTodoLists } from '@/src/lib/services/todolist.service'

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
}

export default function Section({
  activeLabel,
  completedLabel,
  loadingText,
  errorText,
  noDescriptionText,
  createdPrefix,
}: SectionProps) {
  const [todoLists, setTodoLists] = useState<TodoListDto[]>([])
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [active, setActive] = useState<'active' | 'completed'>('active')

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

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className='p-6'>
      <Card className="flex justify-start mb-6 border-2 border-slate-300 rounded-xl bg-white w-60">
        <Button className={`px-6 py-2 font-medium ${active === "active" ? "bg-slate-300 font-semibold" : "bg-white text-gray-800"}`}
          onClick={() => setActive("active")} > {activeLabel}
        </Button>
        <Button className={`px-6 py-2 font-medium ${active === "completed" ? "bg-slate-300 font-semibold" : "bg-white text-gray-800"}`}
          onClick={() => setActive("completed")} > {completedLabel}
        </Button>
      </Card>
      {loading && (
        <p className='text-sm text-gray-600'>{loadingText}</p>
      )}
      {error && (
        <p className='text-sm text-red-600'>{errorText}</p>
      )}
      {!loading && !error && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {todoLists.map((item, index) => (
            <div
              key={item.id ?? index}
              className='bg-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow'
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
                <MoreVertical className='w-5 h-5 text-gray-600 cursor-pointer' />
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