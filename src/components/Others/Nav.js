import React, { useState, useEffect } from 'react';

import '../../index.css';
import { Link, useNavigate } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';


const navItems = [
    { name: 'All', url: '/' },
    { name: 'Projects', url: '/projects'},
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact'},
  ]


const Nav = ({setSelectedTab, theme}) => {

    useDarkMode(theme)

    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState(() => {
        const storedTab = window.localStorage.getItem('activeTab');
        return storedTab || navItems[0].name;
      });

    const handleTabClick = (tabName, url) => {
        const selectedItem = navItems.find((item) => item.name === tabName)

        setActiveTab(tabName)
        setSelectedTab(tabName)
        window.localStorage.setItem('activeTab', tabName); // store the active tab in local storage
        navigate(selectedItem. url)
    }

    useEffect(() => {
        const storedTab = window.localStorage.getItem('activeTab');
        if(storedTab && navItems.some((item) => item.name === storedTab)) {
            setActiveTab(storedTab);
        }
    }, [])

    return (
        <nav className='bg-fill-tertiary w-80 sm:w-full rounded-header py-1 px-2 select-none'>
            <ul className={'flex text-center [&>*]:transition-colors [&>*]:duration-200 [&>*]:rounded-lg' }>
                {navItems.map((item) => (
                    <li
                        key={item.url}
                        className={`
                        hover:bg-default-orange2 hover:text-white
                        dark:hover:bg-white/60 dark:hover:text-black
                        w-20
                        sm:w-24
                        py-1
                        ${activeTab === item.name ? 'bg-white' : ''}
                        ${activeTab === item.name ? 'dark:bg-white/10' : ''}
                        `}
                        onClick={() => handleTabClick(item.name)}
                    >
                        <Link className='text-xs font-bold sm:font-normal sm:text-lg md:font-semibold'>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;