import { useSelector } from "react-redux";
import Card, {Character} from "../CharacterCard/Card.tsx";
import NotFound from "../NoElements.tsx";
import { RootState } from "../../redux/store.ts";

const CharactersList = (props: { characters: Character[], lastCharacterElementRef: ((node:HTMLElement)=>void)}) => {
  const loading = useSelector((state: RootState) => state.loading)
  
  return(
          <div className='flex flex-wrap gap-4 justify-center items-center w-full'>
            {props.characters.map((character, index) => {

              if(props.characters.length === index+1)
                return <Card innerRef={props.lastCharacterElementRef ? props.lastCharacterElementRef : undefined} key={character.id} char={character} className={`${props.characters.length===1 ? 'mx-auto': ''}`} />
              else
                return <Card key={character.id} char={character} className={`${props.characters.length===1 ? 'mx-auto': ''}`}/>
            })}
            {(props.characters.length === 0 && !loading.loading ) && <NotFound object="character"/>}
          </div>
  )
}

export default CharactersList