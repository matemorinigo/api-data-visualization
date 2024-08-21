import { RootState } from '../../redux/store.ts';
import {Filter} from "./FilterBar.tsx";
import {useState} from "react";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { modifyQuery } from '../../redux/querySlice.ts';


const FilterElement = (props: {filter: Filter, query:string, setQuery, setPageNumber}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const query = useSelector((state: RootState) => state.query.query)
  const dispatch = useDispatch()



  return (
    <section className='relative z-10 flex flex-col items-center w-[10rem] rounded-lg'>
      <button onClick={()=>setIsOpen(prev=>!prev)} className='bg-hpThirdColor h-1/3 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
        {selectedOption === '' ? props.filter.displayName : selectedOption }
        {isOpen ? (<AiOutlineCaretUp/>):(<AiOutlineCaretDown/>)}
        {isOpen && (
          <div className='bg-hpThirdColor absolute top-14 gap-2 -ml-4 -my-2 flex flex-col items-start rounded-lg p-2 w-full'>
            {props.filter.options?.map((option,index)=>{
              return (
                <div key={index} onClick={()=>dispatch(modifyQuery({
                  propertyName: props.filter.propertyName,
                  filter: option.filter, 
                  value: option.value
                  }))} className='flex w-full justify-between p-0.5 hover:bg-hpFourthColor cursor-pointer '>
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