const NameHeader = (props: {name: string}) => {
  return (
          <div className='bg-hpFourthColor rounded border-black border-2 shadow-md w-full justify-center text-center overflow-hidden text-ellipsis whitespace-nowrap'>
            <strong className='w-40 p-3 text-hpFontColor text-3xl overflow-hidden text-ellipsis whitespace-nowrap'>{props.name}</strong>
          </div>
  )
}

export default NameHeader