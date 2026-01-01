'use client'
import Link from 'next/link'
import { TypeOutline } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Image from "next/image";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Featured', href: '/featured' },
  { name: 'Pircing', href: '/pircing' },
  { name: 'Testimonials', href: '/testimonials' },
]

export default function Header() {
  return (
    <div className='relative'>
      <div className='absolute left-0 right-0 mx-auto w-full max-w-7xl px-8 py-4 '>
      <div className='flex items-left justify-between'>
        <div className='flex items-center gap-12'>
          <Link href='/' className='flex items-center gap-2 text-2xl'>
            <TypeOutline className="rounded-full bg-orange-600 text-white p-2 w-8 h-8" />
            <h1 className='text-2xl font-bold'>ToDo<span className='text-orange-600'>it</span></h1>
          </Link>
          <div className='flex items-center gap-8 '>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className='hover:text-orange-600'>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
          <div className='flex items-center gap-6'>
            <Link className='rounded-full bg-orange-600 mx-8 px-6 py-3 text-white' href='/download'>Download App</Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center text-center py-32 gap-3 pt-38'>
        <h1 className='text-8xl font-bold'>To Do List</h1>
        <Link className='rounded-full bg-orange-600 w-123 h-30 pb-5 px-10 text-white font-bold text-8xl' href='/download'>Optimizer</Link>
        <p className='text-sm text-gray-600 '>
          This platform can determine the importance of your tasks,
           allowing you to be<br />
          more efficient in your daily operations.
        </p>
        <div className='flex items-center gap-28 border border-gray-200 rounded-full mt-2'>
          <input type='email' className='text-gray-600 h-11 w-32 ml-3 font-bold border-none outline-none' placeholder='Enter your email'/>
          <Link className='text-white  h-11 w-32 rounded-full bg-orange-600 pt-2' href='/learnmore'>Get Started</Link>
        </div>
      </div>
      <FcGoogle size={40} className='absolute left-[320px] top-[190px] -rotate-45'/>
      <div className='flex items-center gap-7 justify-center -mt-9'>
        <div className='flex flex-col gap-1'>
          <p className='text-3xl font-semibold'><span className='text-orange-600'>
            6 </span>Million</p>
          <p className='text-slate-500 -ml-5'>Users that using this app</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-3xl font-semibold'><span className='text-orange-600'>
            3 </span>Million</p>
          <p className='text-slate-500 ml-3'>and compilant</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-3xl font-semibold'><span className='text-orange-600'>
            5 </span>Million</p>
          <p className='text-slate-500'>happy better tester</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-3xl font-semibold'><span className='text-orange-600'>4.8 </span>Million</p>
          <p className='text-slate-500'>Googl Play Store</p>
        </div>
      </div>
        <Image src='/images/fleche1.png' alt='header-bg' height={120} width={120} className='absolute left-[260px] top-[250px]'/>
        <Image src='/images/fleche2.png' alt='header-bg' height={117} width={117} className='absolute right-[300px] top-[150px]'/>
        <Image src='/images/calendar.png' alt='header-bg' height={95} width={95}  
          className="rounded-lg p-1 absolute right-[260px] top-[290px] "/>
    </div>
  )
}
