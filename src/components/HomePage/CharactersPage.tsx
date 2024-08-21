import React, {useCallback, useRef} from "react";
import CharactersList from "./CharactersList.tsx";
import useCharacterSearch from "../../hooks/useCharacterSearch.tsx";
import FilterBar from "../FilterBar/FilterBar.tsx";

const CHARACTERS_FILTERS = [
  {
    displayName: 'Gender',
    propertyName: 'gender',
    options: [
      {
        displayName:'Male',
        filter: 'eq',
        value: 'Male'
      },
      {
        displayName:'Female',
        filter: 'cont',
        value: 'Female'
      },
      {
        displayName:'Other',
        filter: 'null',
        value: '1'
      }
    ]
  },
  {
    displayName: 'House',
    propertyName: 'house',
    options: [
      {
        displayName:'Gryffindor',
        filter: 'eq',
        value: 'Gryffindor'
      },
      {
        displayName:'Slytherin',
        filter: 'eq',
        value: 'Slytherin'
      },
      {
        displayName:'Hufflepuff',
        filter: 'eq',
        value: 'Hufflepuff'
      },
      {
        displayName:'Ravenclaw',
        filter: 'eq',
        value: 'Ravenclaw'
      },
      {
        displayName:'None',
        filter: 'null',
        value: '1'
      }
    ]
  }
]


const CharactersPage = (props: {query: string, setQuery, pageNumber: number, setPageNumber: React.Dispatch<React.SetStateAction<number>>}) => {



  const {
    loading,
    error,
    characters,
    hasMore
  } = useCharacterSearch(props.query, props.pageNumber)

  const observer = useRef<IntersectionObserver | null>(null);
  const lastCharacterElementRef = useCallback((node: HTMLElement) => {
    if(loading) return;
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore)
        props.setPageNumber(prev => prev + 1)
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  return (
          <div className='flex gap-4 p-4 justify-center flex-col lg:flex-row lg:flex-wrap lg:mr-0'>
            <FilterBar setPageNumber={props.setPageNumber} filters={CHARACTERS_FILTERS} query={props.query} setQuery={props.setQuery}/>
            <CharactersList characters={characters} lastCharacterElementRef={lastCharacterElementRef}/>
          </div>
  )
}

export default CharactersPage