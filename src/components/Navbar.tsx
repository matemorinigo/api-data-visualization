import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from 'react-icons/ai';
import logoUrl from '../../logo.ico'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';	


const Navbar = () => {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const pageOpened = useSelector((state: RootState) => state.pageOpened.pageOpened)

  const navLinks = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Characters',
      link: '/characters'
    },
    {
      label: 'Spells',
      link: '/spells'
    }
  ]

  return (
    <nav className='bg-hpNavbarColor flex justify-between px-8 items-center py-6 lg:px-24'>

      <div className='flex items-center gap-8'>
        <section className='flex items-center gap-4'>
          {/*menu*/}
          <FiMenu onClick={() => setIsSideMenuOpen(true)} className='text-3xl cursor-pointer lg:hidden' />
          <Link to='/'>
            <img src={logoUrl} />
          </Link>
        </section>

        {navLinks.map((navLink: { label: string, link: string }, index) => {
          return (
            <Link to={navLink.link}>
              <h3 key={index} className={`${pageOpened === navLink.label ? 'font-bold' : undefined} hidden lg:block text-gray-400 hover:text-black text-2xl`}>{navLink.label}
              </h3>
            </Link>
          )
        })}
      </div>



      {/*sidebar "mobile"*/}
      <div className={`fixed z-20 h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all ${isSideMenuOpen && 'translate-x-0'}`}>
        <section className='text-black bg-hpSideBarColor flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-56'>
          <AiOutlineClose onClick={() => setIsSideMenuOpen(false)} className='mt-0 mb-8 text-3xl cursor-pointer' />

          {navLinks.map((navLink: { label: string, link: string }, index) => {
            return (
              <Link to={navLink.link}>
                <h3 key={index} className={ pageOpened === navLink.label ? 'font-bold' : undefined}>{navLink.label}</h3>
              </Link>

            )
          })}
        </section>
      </div>


    </nav>
  )
}

export default Navbar