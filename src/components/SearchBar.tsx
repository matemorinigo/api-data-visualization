import { setPageNumber } from "../redux/pageNumberSlice.ts";
import { modifyQuery } from "../redux/querySlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";


const SearchBar = () => {

  const dispatch = useDispatch()
  const query = useSelector((state: RootState) => state.query)

  return (
          <div className='flex my-3 -mb-1 justify-center items-center'>
            <input className='bg-hpSecondaryColor w-2/3 placeholder-black text-center p-2 border rounded-lg'
                   placeholder='Find any character!' onChange={(e)=>{
                    dispatch(modifyQuery({
                      propertyName: 'name',
                      filter: 'cont',
                      value: e.target.value
                    }))
                    dispatch(setPageNumber(1))
                    console.log(query)
                   }} />
          </div>
  )

}

export default SearchBar