import React, { useState, useEffect } from 'react';
import './Switch.css'
import useDarkMode from '../../hooks/useDarkMode';

const Switch = ({theme, handleThemeSwitch}) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const toggleValue = localStorage.getItem('toggle')
    setIsChecked(toggleValue === 'true')
  })

  useDarkMode(isChecked)

  const handleToggle = () => {
    setIsChecked(isChecked)
    localStorage.setItem('toggle', !isChecked)
    handleThemeSwitch(); // Call handleToggleDarkMode function from props
  };

  return (
    <>
        <div className="switch">
            <input
                type="checkbox"
                onClick={handleToggle}
                id='switchInput'
                checked={isChecked}
            />
            <label htmlFor='switchInput' className="slider dark:bg-neutral-600"></label>
        </div>
    </>
  );
};

export default Switch;
