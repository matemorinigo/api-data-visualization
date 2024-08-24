import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { modifyPageOpened } from "../redux/pageOpenedSlice"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"


const NotFoundPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(modifyPageOpened('NotFound'))
  }, [])

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      </div>

      <div className='relative flex flex-col min-h-screen p-4 gap-4'>
        <Navbar />
        <div className="flex flex-col items-center mt-6 lg:mt-10">
          <h1 className="text-4xl text-white  sm:text-6xl lg:text-7xl text-center tracking-wide">
            404 -
            <span className="bg-gradient-to-r from-gray-400 to-gray-700 text-transparent bg-clip-text"> Page not found </span>
          </h1>
          <div className="flex justify-center my-10">
            <Link to={'/characters'}>
              <button className="bg-gradient-to-r from-gray-400 to-gray-700 py-3 px-4 mx-3 rounded-md">
                Go back to characters
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage


/**
 * 
 * <div className="flex flex-col items-center mt-6 lg:mt-10">
            <h1 className="text-4xl text-white  sm:text-6xl lg:text-7xl text-center tracking-wide">
                404 -
                <span className="bg-gradient-to-r from-gray-400 to-gray-700 text-transparent bg-clip-text"> Page not found </span>
            </h1>
            <div className="flex justify-center my-10">
                <Link to={'/characters'}>
                    <button className="bg-gradient-to-r from-gray-400 to-gray-700 py-3 px-4 mx-3 rounded-md">
                        Start your journey
                    </button>
                </Link>
            </div>
        </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * */ 