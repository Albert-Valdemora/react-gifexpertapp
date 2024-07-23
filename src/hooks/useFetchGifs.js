import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

  const [state, SetState] = useState({
    data: [],
    loading: true
  });


  useEffect(() => {
    getGifs(category)
      .then(imgs => {
        SetState({
          data: imgs,
          loading: false
        })
      })
  }, [category])


  return state;
}