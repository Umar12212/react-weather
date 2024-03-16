import React, { useState } from 'react'
import styles from './Navbar.module.scss'

import logo from '../../assets/images/logo.svg'
import kaplya from '../../assets/images/kaplya.svg'
import { getLatLon } from '../../redux/weather/weatherSlice'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../redux/theme/themeSlice'


const Navbar = () => {
    
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    
    const submitFn = (event) => {
        event.preventDefault()
        if(text.length > 2) {
            dispatch(getLatLon(text))
        }
    }
    
  return (
    <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
            <img src={logo} alt="" />
            <span className={styles.logo__span}>react weather</span>
        </a>
        <div className={styles.search}>
            <img src={kaplya} alt="" onClick={() => dispatch(toggleTheme())}/>
            <form onSubmit={submitFn}>
                <input 
                    type="text"
                    placeholder='Выбрать город'
                    className={styles.search__input}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            
            </form>
        </div>
    </nav>
  )
}

export default Navbar