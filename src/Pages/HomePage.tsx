import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { modifyPageOpened } from '../redux/pageOpenedSlice'
import HeroSection from '../components/HeroSection'

const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(modifyPageOpened('Home'))
    }, [])


  return (
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
    </div>
  )
}

export default HomePage