import {useState} from "react";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";


const DropdownList = (props: {propertyName: string, elements: string[], bg?: string, hoverBg?: string}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isExpandable = props.elements.length > 0


  return (
    <>
      <section className={`relative flex flex-col rounded-lg bg-gradient-to-tr from-hpThirdColor to-slate-600 p-1 shadow-sm w-full justify-center items-center mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg ${isExpanded ? 'z-50': 'z-0'}`}>
        <div onClick={() => setIsExpanded(prev => !prev)}
                className={`p-4 w-full flex items-center ${isExpandable && 'justify-between'} text-lg rounded-lg tracking-wider border-4 border-transparent ${isExpandable && 'active:border-white duration-300 active:text-whit'}`}>
          <strong className='-ml-4'>{props.propertyName}:  </strong>
          {
            !isExpandable ? <span className='ml-1'>None</span> : isExpanded ? (<AiOutlineCaretUp/>) : (<AiOutlineCaretDown/>)
          }

          {(isExpanded && isExpandable) && (
            <div
              className={`${props.bg ? props.bg : 'bg-hpThirdColor'} absolute top-20 gap-2 -ml-6 -my-2 flex flex-col items-start rounded-lg p-2 w-full z-50`}>
              {props.elements.map((option, index) => {
                return (
                  <div
                       className={`flex justify-between w-full ${props.hoverBg ? props.hoverBg : 'hover:bg-hpFourthColor'} cursor-pointer`} key={index}>
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

export default DropdownList