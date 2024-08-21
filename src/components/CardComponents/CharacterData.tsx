const CharacterData = (props: {property: string, value: string|null}) => {
  return (
    <div
      className='bg-hpThirdColor p-1 rounded shadow-sm w-full text-xl flex flex-row gap-4 justify-between items-center'>
      <p className='w-full'>
        <strong>{props.property}: </strong>
        <span>{props.value ? props.value : (props.property === 'House' ? 'None' : 'Unknown')}</span>
      </p>
    </div>
  )
}

export default CharacterData