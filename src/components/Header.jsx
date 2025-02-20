import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Header() {

    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <header>
        <button onClick={toggleTheme}>Changer de theme</button>
    </header>
  )
}
