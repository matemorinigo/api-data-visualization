import { useCallback, useEffect, useRef } from "react";
import CharactersList from "../components/CharactersPage/CharactersList.tsx";
import useCharacterSearch from "../hooks/useCharacterSearch.tsx";
import FilterBar from "../components/CharactersPage/FilterBar.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/store.ts';
import { CHARACTERS_FILTERS } from "../constants.ts";
import { setPageNumber } from "../redux/pageNumberSlice.ts";
import ImageLoader from "../components/ImageLoader.tsx";
import SearchBar from "../components/CharactersPage/SearchBar.tsx";
import { modifyPageOpened } from "../redux/pageOpenedSlice.ts";
import { resetQuery } from "../redux/querySlice.ts";


const CharactersPage = () => {

  const loading = useSelector((state: RootState) => state.loading)
  const pageNumber = useSelector((state: RootState) => state.pageNumber)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(modifyPageOpened('Characters'))
    dispatch(resetQuery())
    dispatch(setPageNumber(1))
  }, [])

  const {
    characters,
    hasMore
  } = useCharacterSearch()

  const observer = useRef<IntersectionObserver | null>(null);
  const lastCharacterElementRef = useCallback((node: HTMLElement) => {
    if (loading.loading) return;
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore)
        dispatch(setPageNumber(pageNumber.pageNumber + 1))
    })
    if (node) observer.current.observe(node)
  }, [loading.loading, hasMore, dispatch, pageNumber.pageNumber])

  return (
    <>
      <SearchBar />
      <div className='flex gap-4 p-4 mt-3 -mb-2 justify-center flex-col lg:flex-row lg:flex-wrap'>
        <FilterBar filters={CHARACTERS_FILTERS} />
        <CharactersList characters={characters} lastCharacterElementRef={lastCharacterElementRef} />
        {loading.loading && <ImageLoader />}
      </div>
    </>

  )
}

//<div className='flex gap-4 p-4 justify-center flex-col lg:flex-row lg:flex-wrap'>

export default CharactersPage