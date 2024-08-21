import {Filter} from "./FilterBar.tsx";
import {useState} from "react";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";

const FilterElement = (props: {filter: Filter, query:string, setQuery, setPageNumber}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handleQuery= (filter: Filter, option: {
    displayName: string,
    query: string,
    filter: string,
    value: string
  }) => {
    const queryRegex = new RegExp(`filter\\[${filter.propertyName}_\\w+\\]=\\w+`, 'g');

    if(selectedOption === option.displayName) {
      setSelectedOption('')
      props.setQuery(props.query.replace(queryRegex, ''))
    }else{
      props.setPageNumber(1)
      setSelectedOption(option.displayName)
      if(props.query !== ''){
        if(props.query.includes(`${filter.propertyName}`)){
          const newQuery = props.query.replace(queryRegex, `filter[${filter.propertyName}_${option.filter}]=${option.value}`);
          props.setQuery(newQuery)
        }else{
          props.setQuery((prev: string) => `${prev}&filter[${filter.propertyName}_${option.filter}]=${option.value}`)
        }
      }else{
        props.setQuery(`filter[${filter.propertyName}_${option.filter}]=${option.value}`)
      }
    }


  }

  return (
    <section className='relative flex flex-col items-center w-[10rem] rounded-lg'>
      <button onClick={()=>setIsOpen(prev=>!prev)} className='bg-hpThirdColor h-1/3 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
        {selectedOption === '' ? props.filter.displayName : selectedOption }
        {isOpen ? (<AiOutlineCaretUp/>):(<AiOutlineCaretDown/>)}
        {isOpen && (
          <div className='bg-hpThirdColor absolute top-14 gap-2 -ml-4 -my-2 flex flex-col items-start rounded-lg p-2 w-full'>
            {props.filter.options?.map((option,index)=>{
              return (
                <div onClick={()=>handleQuery(props.filter, option)} className='flex w-full justify-between p-0.5 hover:bg-hpFourthColor cursor-pointer '>
                  <h3>{option.displayName}</h3>
                </div>
              )
            })}
          </div>
        )}
      </button>
    </section>
  )
}

export default FilterElement