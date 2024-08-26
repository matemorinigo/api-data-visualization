import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams} from "react-router-dom"
import { modifyPageOpened } from "../redux/pageOpenedSlice"
import { useFetchCharacter } from "../hooks/useFetchCharacter"
import { RootState } from "../redux/store"
import ImageLoader from "../components/ImageLoader"
import CharacterDetailCard from "../components/CharacterPage/CharacterDetailCard"
export interface CharacterProps {
    id: string
    type: string
    attributes: {
        slug: string,
        alias_names: string[],
        animagus: string,
        blood_status: string,
        boggart: string,
        born: string,
        died: string,
        eye_color: string,
        family_members: string[],
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
        wands: string[],
        weight: string
        species: string
    }
}

const CharacterPage = () => {
    const { characterId } = useParams<{ characterId: string }>()
    const loading = useSelector((state: RootState) => state.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data } = useFetchCharacter(characterId)

    useEffect(() => {
        dispatch(modifyPageOpened('Character'))
    }, [dispatch])


    useEffect(() => {
        if (!loading.loading && data===null) {
            navigate('/404')
        }
    }, [loading.loading, data, navigate])


    if (loading.loading || data===undefined) {
        return <ImageLoader />;
    }

 
    return (
        <div className="flex flex-col rounded">
            <CharacterDetailCard data={data}/>
            {loading.loading && <ImageLoader />}
        </div>
    )

   
}

export default CharacterPage