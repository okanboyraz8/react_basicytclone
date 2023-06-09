import React, { useEffect, useState } from 'react';
import HomeCard from '../components/HomeCard';
import Filter from '../components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import homeAction from '../redux/actions/HomeData';

const Home = () => {
    const dispatch = useDispatch();
    const { getVideos } = useSelector(state => state.getVideos);
    const [letter, setLetter] = useState('new')

    useEffect(() => {
      dispatch(homeAction(letter))
    }, [dispatch, letter])

    console.log("getVideos", getVideos);

  return (
    <div className='m-3'>
        <Filter setLetter={setLetter} />
        <div className='flex flex-wrap m-2'>
            {
              getVideos?.items?.map((video, i) => (
                <HomeCard key={i} video={video} />
              ))
            }
        </div>
    </div>
  )
}

export default Home