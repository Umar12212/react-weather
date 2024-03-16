import { useEffect } from 'react'
import Current from './components/Current/Current'
import Navbar from './components/Navbar/Navbar'
import { getLatLon } from './redux/weather/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Daily } from './components/Daily/Daily'
import { initTheme } from './redux/theme/themeSlice'

function App() {
  
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather.weather)
  const darkMode = useSelector(state => state.theme.darkMode)
  
  const wrapperClass = `wrapper ${darkMode}`
  
  useEffect(() => {
    dispatch(initTheme())
    dispatch(getLatLon('Tashkent'))
  }, [])

  return (
    <>
      <div className={wrapperClass}>
        {weather && (
                <div className="container">
                  <Navbar/>
                  <main className="main">
                    <Current/>
                    <Daily/>
                  </main>
                </div>
        ) }
      </div>
    </>
  )
}

export default App
