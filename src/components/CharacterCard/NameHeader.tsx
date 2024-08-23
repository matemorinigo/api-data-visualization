import { Link } from "react-router-dom"

const NameHeader = (props: { name: string, id: string }) => {
  return (
    <div className='bg-hpFourthColor rounded border-black border-2 shadow-md w-full justify-center text-center overflow-hidden text-ellipsis whitespace-nowrap'>
      <Link to={`/characters/${props.id}`}>
        <strong className='p-4 text-hpFontColor text-lg overflow-hidden text-ellipsis whitespace-nowrap'>{props.name}</strong>
      </Link>
    </div>
  )
}

export default NameHeader