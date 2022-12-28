import React from 'react'
import { GiBookmarklet } from 'react-icons/gi'
import "./HeaderQuran.css"

const HeaderQuran = () => {
  return (
    <div className='wrapper-header'>
      <GiBookmarklet className='logo-header'/>
      <p className='title-header'>Qur'anku</p>
    </div>
  )
}

export default HeaderQuran