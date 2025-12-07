
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mb-10 px-6'>
        {children}
    </div>
  );
}
