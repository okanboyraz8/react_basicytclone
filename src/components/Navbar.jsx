import React, { useState } from 'react'
import icons from '../assets/icons'
import images from '../assets/images/images'

const Navbar = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const onKeyFunc = (e) => {
        if(e.key === 'Enter'){
            searchFunc();
        }
    }

    const searchFunc = () => {
        if(searchKeyword.length > 0){
            window.location = `/search/${searchKeyword}`
        }
    }
  return (
    <div className='w-full flex items-center justify-between h-20 px-3'>
        <div className='w-3/12 flex items-center space-x-4'>
            <icons.menu className='icon-style' />
            <img onClick={() => window.location = "/"} className='w-32 cursor-pointer' src={images.youtube} alt="" />
        </div>
        <div className='w-6/12 flex items-center space-x-4'>
            <div className='w-3/4 flex items-center'>
                <input onKeyPress={onKeyFunc} value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} className='outline-none border p-2 h-10 flex-1' type="text" placeholder='search'/>
                <div onClick={searchFunc} className='bg-gray-100 h-10 w-20 flex items-center justify-center border'>
                    <icons.search className='icon-style' />
                </div>
            </div>
            <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer'>
                <icons.microphone className='icon-style' />
            </div>
        </div>
        <div className='w-3/12 flex items-center justify-end space-x-5'>
        <icons.video className='icon-style text-2xl' />
        <icons.notification className='icon-style text-2xl' />
        <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
        </div>
    </div>
  )
}

export default Navbar