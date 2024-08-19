import Card, {Character} from "../Card.tsx";

const CharactersList = (props: { characters: Character[] }) => {
  return(
          <div className='flex flex-wrap gap-4 justify-center items-center'>
            {props.characters.map((character) => {
              return <Card key={character.id} char={character} />
            })}
          </div>
  )
}

export default CharactersList