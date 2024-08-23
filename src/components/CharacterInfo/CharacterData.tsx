const CharacterData = (props: {property: string, value: string|null, bg?: string, animateOnHover:boolean}) => {
  return (
    <div
      className={`bg-gradient-to-tr from-hpThirdColor to-slate-600 p-1 rounded shadow-sm w-full text-md flex flex-row gap-4 justify-between items-center mx-auto ${props.animateOnHover ? 'transition-transform duration-300 hover:scale-105 hover:shadow-lg' : '' } `}>
      <p className='w-full'>
        <strong>{props.property}: </strong>
        <span>{props.value ? props.value : (props.property === 'House' ? 'None' : 'Unknown')}</span>
      </p>
    </div>
  )
}


export default CharacterData