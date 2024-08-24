import Image from "../Image.tsx";

const ImageBox = (props: {src: string|undefined}) => {
  return (
          <div className='w-auto h-[6rem] flex my-3 p-0 justify-center items-center rounded-xl'>
            <Image animateOnHover={false} src={props.src ? props.src : undefined}/>
          </div>
  )
}

export default ImageBox