import filterBar from "./FilterBar/FilterBar.tsx";

const filterRegex = /filter[\w_\w]=/

const SearchBar = (props: {query: string, setQuery, pageNumber: number, setPageNumber}) => {

  const handleSearch = (event) => {

    if(props.query !== ''){
      console.log('entre a !== \'\'')
      if(props.query.includes('name')){
        console.log('entre a includes')
        const newQuery = props.query.replace(/filter[name_cont]=[a-zA-Z0-9]*/, `filter[name_cont]=${event.target.value}`);
        console.log(newQuery)
        props.setQuery(newQuery)
      }else{
        console.log('entre al primer else')
        props.setQuery((prev: string) => `${prev}&filter[name_cont]=${event.target.value}`)
      }
    }else{
      console.log('entre al segundo else')
      props.setQuery(`filter[name_cont]=${event.target.value}`)
    }
    console.log(props.query)
    props.setPageNumber(1)

    props.setQuery(`filter[name_cont]=${event.target.value}`)
    props.setPageNumber(1)
  }

  return (
          <div className='flex my-3 -mb-1 justify-center items-center'>
            <input className='bg-hpSecondaryColor w-2/3 placeholder-black text-center p-2 border rounded-lg'
                   placeholder='Find any character!' onChange={handleSearch} />
          </div>
  )

}

export default SearchBar