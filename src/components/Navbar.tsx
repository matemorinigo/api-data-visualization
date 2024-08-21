import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from 'react-icons/ai';
import logoUrl from '../../logo.ico'

type NavbarProps = {

}

const Navbar = ({ }: NavbarProps) => {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const navLinks = [
    {
      label: 'Home',
      link: '#'
    },
    {
      label: 'Characters',
      link: '#'
    },
    {
      label: 'Potions',
      link: '#'
    }
  ]

  return (
    <nav className='bg-hpNavbarColor flex justify-between px-8 items-center py-6 lg:px-24'>

      <div className='flex items-center gap-8'>
        <section className='flex items-center gap-4'>
          {/*menu*/}
          <FiMenu onClick={() => setIsSideMenuOpen(true)} className='text-3xl cursor-pointer lg:hidden' />
          {/*TODO hacer logo que redirige*/}
          <img src={logoUrl } />
        </section>

        {navLinks.map((navLink: { label: string, link: string }, index) => {
            return (<h3 key={index} className={`${index === 1 ? 'font-bold' : undefined} hidden lg:block text-gray-400 hover:text-black text-2xl`}>{navLink.label}</h3>)
          })}
      </div>



      {/*sidebar "mobile"*/}
      <div className={`fixed z-20 h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all ${isSideMenuOpen && 'translate-x-0'}`}>
        <section className='text-black bg-hpSideBarColor flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-56'>
          <AiOutlineClose onClick={() => setIsSideMenuOpen(false)} className='mt-0 mb-8 text-3xl cursor-pointer' />
          {/*TODO links que redirigen*/}
          {navLinks.map((navLink: { label: string, link: string }, index) => {
            return (<h3 key={index} className={index === 1 ? 'font-bold' : undefined}>{navLink.label}</h3>)
          })}
        </section>
      </div>


    </nav>
  )
}

export default Navbar