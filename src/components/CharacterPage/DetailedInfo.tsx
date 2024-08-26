import  { useEffect, useState } from 'react'
import DropdownList from '../CharacterInfo/DropdownList'
import { CharacterProps } from '../../Pages/CharacterPage'
import CharacterData from '../CharacterInfo/CharacterData'

const DetailedInfo = (props: { char: CharacterProps }) => {

    const [propertiesShown, setPropertiesShown] = useState(0)

    useEffect(() => {
        let count = 0;

        if (props.char.attributes.family_members.length > 0) count++;
        if (props.char.attributes.titles.length > 0) count++;
        if (props.char.attributes.jobs.length > 0) count++;
        if (props.char.attributes.wands.length > 0) count++;
        if (props.char.attributes.blood_status) count++;
        if (props.char.attributes.boggart) count++;
        if (props.char.attributes.eye_color) count++;
        if (props.char.attributes.hair_color) count++;
        if (props.char.attributes.nationality) count++;
        if (props.char.attributes.patronus) count++;

        setPropertiesShown(count);
    }, [props.char.attributes]);

    return (
        <>

            <div className="flex flex-col  w-full h-full p-5 gap-4 my-auto">
                {propertiesShown === 0 && <div className="text-center font-harry text-8xl">No additional information available</div>}
                {props.char.attributes.alias_names.length > 0 && <DropdownList propertyName='Alias names' elements={props.char.attributes.alias_names}/>}
                {props.char.attributes.wands.length > 0 && <DropdownList propertyName='Wands' elements={props.char.attributes.wands} />}
                {props.char.attributes.family_members.length > 0 && <DropdownList propertyName='Family members' elements={props.char.attributes.family_members} />}
                {props.char.attributes.titles.length > 0 && <DropdownList propertyName='Titles' elements={props.char.attributes.titles}  />}
                {props.char.attributes.jobs.length > 0 && <DropdownList propertyName='Jobs' elements={props.char.attributes.jobs}  />}
                {props.char.attributes.blood_status && <CharacterData bg="bg-gray-500" property={'Blood status'} value={props.char.attributes.blood_status} animateOnHover={true} />}
                {props.char.attributes.boggart && <CharacterData bg="bg-gray-500" property={'Boggart'} value={props.char.attributes.boggart} animateOnHover={true} />}
                {props.char.attributes.hair_color && <CharacterData bg="bg-gray-500" property={'Hair color'} value={props.char.attributes.hair_color} animateOnHover={true} />}
                {props.char.attributes.nationality && <CharacterData bg="bg-gray-500" property={'Nationality'} value={props.char.attributes.nationality} animateOnHover={true} />}
                {props.char.attributes.patronus && <CharacterData bg="bg-gray-500" property={'Patronus'} value={props.char.attributes.patronus} animateOnHover={true} />}
            </div>

        </>
    )
}

export default DetailedInfo