import Header from "./components/Header.tsx";
import Card from "./components/Card.tsx";
import SearchBar from "./components/SearchBar.tsx";
import CharactersPage from "./components/HomePage/CharactersPage.tsx";
import {useState} from "react";

function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)



  return (
          <div className='flex flex-col p-4 gap-4'>
            <Header title={'Harry Potter API'}/>
            <SearchBar query={query} setQuery={setQuery} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
            <CharactersPage query={query} pageNumber={pageNumber}/>
          </div>
  )
}

export default App
