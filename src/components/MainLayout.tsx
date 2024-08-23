import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
/*
const MainLayout = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 min-h-screen h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className='flex flex-col min-h-screen p-4 gap-4'>
        <Navbar />
        <main className='flex-grow'>
          <Outlet />
        </main>
      </div>
    </>

  )
}
*/

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      </div>
  
      <div className='relative flex flex-col min-h-screen p-4 gap-4'>
        <Navbar />
        <main className='flex-grow'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}





export default MainLayout