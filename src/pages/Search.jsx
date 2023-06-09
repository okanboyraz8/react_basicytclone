import React, { useEffect } from 'react'
import SearchCard from '../components/SearchCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import searchAction from '../redux/actions/SearchData'

const Search = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { getSearch } = useSelector(state => state.getSearch);

  useEffect(() => {
    dispatch(searchAction(keyword))
  }, [dispatch, keyword])

  console.log("getSearch", getSearch)
  return ( 
    <div>
      {
        getSearch?.items?.map((search,i) => (
        <SearchCard key={i} search={search} />
        ))
      }      
    </div>
  )
}

export default Search