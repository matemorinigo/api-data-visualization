import {useEffect, useState} from "react";
import {BASE_URL} from "../../constants.ts";
import CharactersList from "./CharactersList.tsx";
import useCharacterSearch from "../../hooks/useCharacterSearch.tsx";
import charactersList from "./CharactersList.tsx";
const CharactersPage = (props: {query: string, pageNumber: number}) => {

  const {
    loading,
    error,
    characters,
    hasMore
  } = useCharacterSearch(props.query, props.pageNumber)



  console.log(characters)


  return (
          <div className='flex gap-4 p-4 justify-center flex-col lg:flex-row lg:flex-wrap lg:mr-0'>
            <CharactersList characters={characters}/>
          </div>
  )
}

export default CharactersPage