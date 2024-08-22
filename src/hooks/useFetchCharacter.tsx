import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '../redux/loadingSlice'
import axios, { Canceler } from 'axios'
import { BASE_URL } from '../constants'
import { CharacterProps } from '../components/Pages/CharacterPage'

export const useFetchCharacter = (characterId?: string) => {
    const dispatch = useDispatch()

    const [data, setData] = useState<CharacterProps|null>()

    useEffect(() => {
        dispatch(setLoading(true))
        let cancel: Canceler

        if(!characterId){
            setData(null)
            dispatch(setLoading(false))
            return
        }
        axios({
            method: 'GET',
            url: `${BASE_URL}/characters/${characterId}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(res => {

                setData(res.data.data)
        
            })
            .catch(e => {
                if (axios.isCancel(e)) return
                setData(null)
                
            })
            .finally(() => dispatch(setLoading(false)))
        
        return () => cancel && cancel()
    }, [characterId, data, dispatch])

    return {data}
}
