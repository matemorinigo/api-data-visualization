import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { modifyPageOpened } from '../redux/pageOpenedSlice'

const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(modifyPageOpened('Home'))
    }, [])


  return (
    <div>HomePage</div>
  )
}

export default HomePage