import Image from "./Image.tsx";
import NameHeader from "./CardComponents/NameHeader.tsx";
import ImageBox from "./CardComponents/ImageBox.tsx";

export interface Character {
  id: string
  type: string
  attributes: {
    name: string
    alias_names: string[]
    born: string|null
    died: string|null
    house: string|null
    image: string|null
  }
}


const Card = (props: {char: Character}) => {
  const charAttrs = props.char.attributes
  return(
          <div className='w-128 h-min-128 h-max[48rem] bg-hpSecondaryColor border-black shadow-xl rounded-2xl gap-4 p-4 flex flex-col m-0 items-center '>
            <NameHeader name={charAttrs.name}/>
            <ImageBox src={charAttrs.image ? charAttrs.image:undefined}/>
            <div className='w-full flex flex-col gap-2'>
              <div className='bg-hpThirdColor p-1 rounded shadow-sm w-full text-xl flex flex-row gap-4 justify-between items-center'>
                <p className='w-full'>
                  <strong>Born: </strong>
                  <span>{charAttrs.born ? charAttrs.born : 'Unknown'}</span>
                </p>
              </div>
              <div className='bg-hpThirdColor p-1 rounded shadow-sm w-full text-xl flex flex-row gap-4 justify-between items-center'>
                <p className='w-full'>
                  <strong>Died: </strong>
                  <span>{charAttrs.died ? charAttrs.died : 'Unknown'}</span>
                </p>
              </div>
              <div className='bg-hpThirdColor p-1 rounded shadow-sm w-full justify-center items-center'>
                <strong className='text-xl'>Alias names: </strong>
                <ul className='list-disc pl-6 space-y-2 text-lg'>
                  {charAttrs.alias_names.map((name, index) => {
                    return <li key={index}>{name}</li>
                  })}
                </ul>
              </div>
            </div>

          </div>
  )
}

export default Card