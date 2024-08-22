const NotFound = (props: {object: string}) => {
  return (
    <div className="bg-hpFourthColor w-1/3 h-auto flex flex-row justify-center items-center border-4 rounded-lg shadow-lg border-gray-600 gap-0 p-2 ">
        <h1 className="text-4xl text-white">No {props.object}s found</h1>
    </div>
  )
}

export default NotFound