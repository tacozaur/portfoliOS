import React, { useState } from 'react'

import sunIcon from '../assets/logos/sun-icon.png'
import moonIcon from '../assets/logos/moon-icon.png'


import '../index.css'
import Switch from './Others/Switch'
import Nav from './Others/Nav'

const Header = ({setSelectedTab, theme, handleThemeSwitch}) => {

  return (
    <header className='max-w-screen-lg my-6 flex flex-col gap-8 md:gap-0 justify-between text-lg md:my-12 md:flex-row items-center'>
        <div className='flex gap-4 xl:w-40'>
          <Switch theme={theme} handleThemeSwitch={handleThemeSwitch}/>
          <span className='font-semibold w-8'>
            <img src={theme === 'dark' ? moonIcon : sunIcon}
            alt={theme === 'dark' ? 'Moon icon' : 'Sun icon'}
            />
          </span>
        </div>
        <div>
            <Nav setSelectedTab={setSelectedTab} theme={theme}/>
        </div>
        <div>
        </div>
    </header>
  )
}

export default Header;