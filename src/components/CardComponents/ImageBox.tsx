import Image from "../Image.tsx";

const ImageBox = (props: {src: string|undefined}) => {
  return (
          <div className='flex h-48 w-48 bg-hpThirdColor justify-center align-middle items-center rounded-xl'>
            <Image classname='h-auto w-auto max-w-sm max-h-sm' src={props.src ? props.src : undefined}/>
          </div>
  )
}

export default ImageBox