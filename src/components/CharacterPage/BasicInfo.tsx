import React from 'react'
import { CharacterProps } from '../../Pages/CharacterPage'
import Image from '../Image'
import CharacterData from '../CharacterInfo/CharacterData'

const BasicInfo = (props: {char: CharacterProps}) => {
    return (
        <div className="flex flex-col my-auto gap-4 bg-gray-700 p-4 w-2/6 rounded-l-xl rounded-r-0">
            <Image animateOnHover={true} src={props.char.attributes.image} />
            <div className="bg-gray-600 w-full rounded-xl border-gray-700 shadow-lg border text-center">
                <strong className="p-2 justify-normal text-xl">{props.char.attributes.name}</strong>
            </div>
            <CharacterData bg="bg-gray-600" property={'Born'} value={props.char.attributes.born} animateOnHover={true} />
            <CharacterData bg="bg-gray-600" property={'Died'} value={props.char.attributes.died} animateOnHover={true} />
            <CharacterData bg="bg-gray-600" property={'House'} value={props.char.attributes.house} animateOnHover={true} />
            <CharacterData bg="bg-gray-600" property={'Gender'} value={props.char.attributes.gender} animateOnHover={true} />
            {props.char.attributes.species && <CharacterData bg="bg-gray-600" property={'Specie'} value={props.char.attributes.species} animateOnHover={true} />}
        </div>
    )
}

export default BasicInfo