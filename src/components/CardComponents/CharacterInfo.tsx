import AliasNames from "./AliasNames.tsx";
import {Character} from "../Card.tsx";
import CharacterData from "./CharacterData.tsx";


const CharacterInfo = (props: {char: Character}) => {
  const charAttrs = props.char.attributes
  return (
    <>
      <div className='w-full flex flex-col gap-2 '>
        <CharacterData property={'Born'} value={charAttrs.born}/>
        <CharacterData property={'Died'} value={charAttrs.died}/>
        <CharacterData property={'House'} value={charAttrs.house}/>
        <CharacterData property={'Gender'} value={charAttrs.gender}/>
        <AliasNames aliasNames={charAttrs.alias_names}/>
      </div>
    </>
  )
}

export default CharacterInfo