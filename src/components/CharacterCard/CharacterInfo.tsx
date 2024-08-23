import {Character} from "./Card.tsx";
import CharacterData from "../CharacterInfo/CharacterData.tsx";

const CharacterInfo = (props: {char: Character}) => {
  const charAttrs = props.char.attributes
  return (
    <>
      <div className='w-full flex flex-col gap-2 '>
        <CharacterData property={'House'} value={charAttrs.house} animateOnHover={false}/>
        <CharacterData property={'Gender'} value={charAttrs.gender} animateOnHover={false}/>
      </div>
    </>
  )
}

export default CharacterInfo