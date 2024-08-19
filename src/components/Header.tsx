const Header = (props: {title: string}) => {
  return (
          <div className='flex-1 p-4'>
            <h1 className='text-center text-hpFontColor my-4 py-2 font-bold shadow-md text-8xl'>{props.title}</h1>
          </div>
  )
}

export default Header