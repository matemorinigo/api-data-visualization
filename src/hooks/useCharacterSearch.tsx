import {useEffect, useState} from "react";
import {removeDuplicatesById} from "../utils.ts";

import {BASE_URL} from "../constants.ts";
import axios from 'axios'




const useCharacterSearch = (query: string, pageNumber: number) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [characters, setCharacters] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setCharacters([])
  }, [query]);

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel;
    axios({
      method: 'GET',
      url: `${BASE_URL}/characters?filter[name_cont]=${query}&page[number]=${pageNumber}`,
      cancelToken: new axios.CancelToken(c=> cancel = c)
    })
            .then(res => {
              setCharacters(prevCharacters => {
                const combinedCharacters = [...prevCharacters, ...res.data.data]
                return removeDuplicatesById(combinedCharacters)
              })

              setHasMore(res.data.meta.records > 0)
              setLoading(false)
            }).catch(e => {
              if (axios.isCancel(e)) return
              setError(true)
            })

    return () => cancel && cancel()
  }, [query,pageNumber])

  return {loading, error, characters, hasMore}
}

export default useCharacterSearch