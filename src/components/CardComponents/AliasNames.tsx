import {useState} from "react";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";


const AliasNames = (props: {aliasNames: string[]}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isExpandable = props.aliasNames.length > 0


  return (
    <>
      <section className={`relative flex flex-col rounded-lg bg-hpThirdColor p-1 shadow-sm w-full justify-center items-center`}>
        <div onClick={() => setIsExpanded(prev => !prev)}
                className={`bg-hpThirdColor p-4 w-full flex items-center ${isExpandable && 'justify-between'} text-lg rounded-lg tracking-wider border-4 border-transparent ${isExpandable && 'active:border-white duration-300 active:text-whit'}`}>
          <strong className='-ml-4'>Alias names: </strong>
          {
            !isExpandable ? <span className='ml-1'>None</span> : isExpanded ? (<AiOutlineCaretUp/>) : (<AiOutlineCaretDown/>)
          }

          {(isExpanded && isExpandable) && (
            <div
              className='bg-hpThirdColor absolute top-20 gap-2 -ml-6 -my-2 flex flex-col items-start rounded-lg p-2 w-full'>
              {props.aliasNames.map((option, index) => {
                return (
                  <div
                       className='flex justify-between w-full hover:bg-hpFourthColor cursor-pointer' key={index}>
                    <h3>{option}</h3>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default AliasNames