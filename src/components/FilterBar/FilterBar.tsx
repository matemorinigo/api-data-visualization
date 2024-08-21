import FilterElement from "./FilterElement.tsx";

export type Filter = {
  displayName: string
  propertyName: string
  options?: {
    displayName:string,
    filter: string,
    value: string
  }[]
}



const FilterBar = (props: {filters: Filter[], query:string, setQuery, setPageNumber}) => {
  return (
    <div className="m-auto w-2/3 p-3 h-14 -mt-4 pt-9 justify-center items-center flex flex-row">
        <ul className='flex justify-between gap-4'>
          {props.filters.map((filter,index) =>
            <FilterElement key={index} setPageNumber={props.setPageNumber} filter={filter} query={props.query} setQuery={props.setQuery}/>)}
        </ul>
    </div>
  )
}

export default FilterBar