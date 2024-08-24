import { setPageNumber } from "../../redux/pageNumberSlice.ts";
import { modifyQuery } from "../../redux/querySlice.ts";
import { useDispatch} from "react-redux";



const SearchBar = () => {

  const dispatch = useDispatch()

  return (
          <div className='flex my-3 -mb-1 justify-center items-center'>
            <input className='bg-hpSecondaryColor w-2/3 placeholder-white text-white text-center p-2 border rounded-lg'
                   placeholder='Find any character!' onChange={(e)=>{
                    dispatch(modifyQuery({
                      propertyName: 'name',
                      filter: 'cont',
                      value: e.target.value
                    }))
                    dispatch(setPageNumber(1))
                   }} />
          </div>
  )

}

export default SearchBar