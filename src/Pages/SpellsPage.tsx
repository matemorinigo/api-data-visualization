import { useEffect } from 'react'
import { modifyPageOpened } from '../redux/pageOpenedSlice'
import { useDispatch } from 'react-redux'

const SpellsPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(modifyPageOpened('Spells'))
    }, [])

    return (
        <div>SpellsPage</div>
    )
}

export default SpellsPage