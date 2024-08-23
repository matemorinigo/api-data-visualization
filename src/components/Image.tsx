import imageUrl from '../assets/questionv3.png'

const Image = (props: {src?:string|typeof imageUrl, w?:string, h?:string, animateOnHover:boolean}) => {

  return (
          <img src={props.src ? props.src : imageUrl} className={`shadow-2xl object-cover bg-hpThirdColor ${props.w ? props.w : 'w-32'} ${props.h ? props.h : 'h-32'} rounded-full mx-auto ${props.animateOnHover ? 'transition-transform duration-300 hover:scale-105 hover:shadow-lg' : ''} `}/>
  )
}

//

export default Image