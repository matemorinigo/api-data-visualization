import { useEffect, useState } from "react";
import { removeDuplicatesById } from "../utils.ts";
import { RootState } from "../redux/store.ts";
import { useSelector } from "react-redux";
import { BASE_URL } from "../constants.ts";
import axios, { Canceler } from 'axios'
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/loadingSlice.ts";




const useCharacterSearch = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const [characters, setCharacters] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const query = useSelector((state: RootState) => state.query)
  const pageNumber = useSelector((state: RootState) => state.pageNumber)

  useEffect(() => {
    setCharacters([])
  }, [query.query]);

  useEffect(() => {
    dispatch(setLoading(true))
    setError(false)
    let cancel: Canceler

    axios({
      method: 'GET',
      url: `${BASE_URL}/characters?${query.query}&page[number]=${pageNumber.pageNumber}`,
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setCharacters(prevCharacters => {
          const combinedCharacters = [...prevCharacters, ...res.data.data]
          return removeDuplicatesById(combinedCharacters)
        })

        setHasMore(res.data.data.length > 0)
        dispatch(setLoading(false))

      }).catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
      })

    return () => cancel && cancel()
  }, [query.query, pageNumber.pageNumber])

  return { error, characters, hasMore }
}

export default useCharacterSearch