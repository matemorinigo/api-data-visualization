
const SearchBar = (props: {query: string, setQuery, pageNumber: number, setPageNumber}) => {

  const handleSearch = (event) => {
    props.setQuery(event.target.value)
    props.setPageNumber(1)
  }


  return (
          <div className='flex my-5 justify-center items-center'>
            <input className='bg-hpSecondaryColor placeholder-hpFontColor p-2 border w-2/3 rounded-lg'
                   placeholder='Find any character!' onChange={handleSearch} value={props.query}/>
            <button className='flex ml-2 items-end p-3 bg-hpThirdColor rounded-3xl h-min border'>Search</button>
          </div>
  )

}

export default SearchBar