import React from 'react'
import moment from 'moment'

const SearchCard = ( {search} ) => {
  return (
    <div onClick={() => window.location = `/videos/${search?.id?.videoId}`} className='flex items-center space-x-2 justify-center mx-5 my-10 cursor-pointer'>
        <img className='h-60 w-80' src={search?.snippet?.thumbnails?.high?.url} alt="" />
        <div className='w-2/3 space-y-2'>
            <div className='font-bold text-lg'>{search?.snippet?.title}</div>
            <div className='text-sm text-gray-700'>
                <span>5 M Views & </span>
                <span>{moment(search?.snippet?.publishedAt).startOf('day').fromNow()}</span>
            </div>
            <div className='flex items-center space-x-2 text-sm'>
                <div className='w-10 h-10 rounded-full bg-gray-200'></div>
                <div className='text-gray-700'>{search?.snippet?.channelTitle}</div>
            </div>
            <div className='text-sm text-gray-700'>
                {search?.snippet?.description ? search?.snippet?.description : "Bu alanda Description Properties olmadiğindan biz böyle bir alan ekledik"}
            </div>
        </div>
    </div>
  )
}

export default SearchCard