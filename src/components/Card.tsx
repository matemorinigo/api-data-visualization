import NameHeader from "./CardComponents/NameHeader.tsx";
import ImageBox from "./CardComponents/ImageBox.tsx";
import CharacterInfo from "./CardComponents/CharacterInfo.tsx";



export interface Character {
  id: string
  type: string
  attributes: {
    name: string
    alias_names: string[]
    born: string | null
    died: string | null
    house: string | null
    image: string | null
    gender: string | null
  }
}


const Card = (props: { char: Character, innerRef?: ((node: HTMLElement | null) => void) | undefined, className?: string }) => {
  const charAttrs = props.char.attributes
  return (
    <div ref={props.innerRef ? props.innerRef : null} className={`w-128 min-h-[39rem] h-max-[48rem] bg-hpSecondaryColor border-black shadow-xl rounded-2xl gap-4 p-4 flex flex-col m-0 items-center ${props.className ? props.className : ''} `}>

      <NameHeader name={charAttrs.name} id={props.char.id} />
      <ImageBox src={charAttrs.image ? charAttrs.image : undefined} />
      <CharacterInfo char={props.char} />
    </div>
  )
}

export default Card