import Card, {Character} from "../Card.tsx";

const CharactersList = (props: { characters: Character[], lastCharacterElementRef: (node:HTMLElement)=>void}) => {
  return(
          <div className='flex flex-wrap gap-4 justify-center items-center'>
            {props.characters.map((character, index) => {

              if(props.characters.length === index+1)
                return <Card innerRef={props.lastCharacterElementRef ? props.lastCharacterElementRef : null} key={character.id} char={character} />
              else
                return <Card key={character.id} char={character} />
            })}
          </div>
  )
}

export default CharactersList