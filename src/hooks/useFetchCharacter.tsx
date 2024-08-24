import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '../redux/loadingSlice'
import axios, { Canceler } from 'axios'
import { BASE_URL } from '../constants'
import { CharacterProps } from '../Pages/CharacterPage'
import { useNavigate } from 'react-router-dom'


export const useFetchCharacter = (characterId?: string) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState<CharacterProps|null>()

    useEffect(() => {
        dispatch(setLoading(true))

        async function fetchCharacter() {

            let cancel: Canceler

            axios({
                method: 'GET',
                url: `${BASE_URL}/characters/${characterId}`,
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
                .then(res => {
                    if(res.data.data){
                        setData(res.data.data)
                    } else {
                        setData(null)
                        navigate('')
                    }
            
                })
                .catch(e => {
                    if (axios.isCancel(e)) return
                    setData(null)
                    navigate('')
                })
                .finally(() => dispatch(setLoading(false)))
            return () => cancel && cancel()
        }

        fetchCharacter()

        
    }, [characterId, navigate, dispatch])

    return {data}
}
