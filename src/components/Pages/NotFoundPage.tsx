import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { modifyPageOpened } from "../../redux/pageOpenedSlice"


const NotFoundPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(modifyPageOpened('NotFound'))
    }, [])

  return (
    <div>NotFoundPage</div>
  )
}

export default NotFoundPage