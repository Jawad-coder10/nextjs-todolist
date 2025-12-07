'use client'
import React, { useState } from 'react'
import { Checkbox } from '@/src/components/ui/checkbox'
import { MoreVertical } from 'lucide-react'
import { Card } from '../ui/card';

interface Item {
  title: string;
  text: string;
  time: string;
  isActive?: boolean;
  bgColor?: string;
}

interface SectionProps {
  items: Item[];
}

export default function Section({ items }: SectionProps) {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({})

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }
   const [active, setActive] = useState<"active" | "completed">("active");

  return (
    <div className='p-6'>
       <Card className="flex justify-end gap-7 mb-6 w-72">
      <button
        className={`px-6 py-2 rounded-lg font-medium ${
          active === "active"
            ? "bg-slate-300 font-semibold"
            : "bg-white text-gray-800"
        }`}
        onClick={() => setActive("active")}
      >
        Active Task
      </button>
      <button
        className={`px-6 py-2 rounded-lg font-medium ${
          active === "completed"
            ? "bg-slate-300 font-semibold"
            : "bg-white text-gray-800"
        }`}
        onClick={() => setActive("completed")}
      >
        Completed
      </button>
    </Card>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor || 'bg-blue-100'} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow`}
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
              {item.text}
            </p>
            <span className='text-sm font-medium text-gray-600'>
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}