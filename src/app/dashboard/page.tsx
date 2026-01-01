import HeaderSection from '@/src/components/dashboard/header-section'
import Section from '@/src/components/dashboard/section'

const data = {
    items: [
            {   title: 'Team Meeting',
                text: "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idisfjfj.",
                time: "10:30 AM - 12:00 PM",
                isActive: true,
                bgColor: 'bg-blue-100'
            },
            {   title: 'Work on Branding',
                text: "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idisfjfj.",
                time: "10:30 AM - 12:00 PM",
                isActive: false,
                bgColor: 'bg-purple-100'
            },
            {   title: 'Make a Report for client',
                text: "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idisfjfj.",
                time: "10:30 AM - 12:00 PM",
                isActive: false,
                bgColor: 'bg-yellow-100'
            },
            {   title: 'Create a planer',
                text: "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idisfjfj.",
                time: "10:30 AM - 12:00 PM",
                isActive: false,
                bgColor: 'bg-pink-100'
            },
            {   title: 'Create Treatment Plan',
                text: "Lorem ipsum dolor sit amet, consectetur elit lddv nlorem idisfjfj.",
                time: "10:30 AM - 12:00 PM",
                isActive: false,
                bgColor: 'bg-green-100'
            },
    ],
}
export default function DashboardPage() {
  return (
    <div>
      <HeaderSection />
      <Section items={data.items} />
    </div>
  )
}
