import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { modifyPageOpened } from "../../redux/pageOpenedSlice"
import { useFetchCharacter } from "../../hooks/useFetchCharacter"
import { RootState } from "../../redux/store"
import ImageLoader from "../ImageLoader"
import { setLoading } from "../../redux/loadingSlice"
import axios, { Canceler } from "axios"
import { BASE_URL } from "../../constants"

export interface CharacterProps {
    id: string
    type: string
    attributtes: {
        slug: string,
        alias_names: string[],
        animagus: string,
        blood_status: string,
        boggart: string,
        born: string,
        died: string,
        eye_color: string,
        family_member: string[],
        gender: string,
        hair_color: string,
        height: string,
        house: string,
        image: string,
        jobs: string[],
        name: string,
        nationality: string,
        patronus: string,
        romances: string[],
        skin_color: string,
        titles: string[],
        wand: string[],
        weight: string
    }
}

const CharacterPage = () => {
    const { characterId } = useParams<{characterId: string}>()
    const loading = useSelector((state: RootState) => state.loading)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { data } = useFetchCharacter(characterId)

    useEffect(()=>{
        dispatch(modifyPageOpened('Character'))
        
        if(data===null && !loading.loading){
            console.log(data)
            navigate('/')
        }
        
        console.log(data)
        
    }, [data, loading.loading]) 


    if(loading.loading){
        return <ImageLoader/>
    }else{
        console.log(data ? data : 'No data')
    }


    console.log(data)

    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default CharacterPage