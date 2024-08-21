import Navbar from "./components/Navbar.tsx";
import SearchBar from "./components/SearchBar.tsx";
import CharactersPage from "./components/HomePage/CharactersPage.tsx";
import {useState} from "react";


function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  return (
          <div className='flex flex-col p-4 gap-4 '>
            <Navbar/>
            <SearchBar query={query} setQuery={setQuery} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
            <CharactersPage query={query} setQuery={setQuery} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
          </div>
  )
}

export default App
