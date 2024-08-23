import FilterElement from "../FilterElement";

export type Filter = {
  displayName: string
  propertyName: string
  options: {
    displayName:string,
    filter: string,
    value: string
  }[]
}



const FilterBar = (props: {filters: Filter[]}) => {
  return (
    <div className="m-auto w-2/3 p-3 h-2 -mt-4 pt-9 justify-center items-center flex flex-row">
        <ul className='flex justify-between gap-4'>
          {props.filters.map((filter,index) =>
            <FilterElement key={index} filter={filter}/>)}
        </ul>
    </div>
  )
}

export default FilterBar