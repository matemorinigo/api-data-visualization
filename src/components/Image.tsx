import imageUrl from '../assets/questionv1.svg'

const Image = (props: {src?:string|imageUrl}) => {

  return (
          <img src={props.src ? props.src : imageUrl} className='shadow-md rounded-1xl object-cover bg-hpThirdColor max-h-48 max-w-48'/>
  )
}

export default Image