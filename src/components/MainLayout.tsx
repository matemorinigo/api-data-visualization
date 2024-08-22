import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col p-4 gap-4'>
        <Navbar />
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout