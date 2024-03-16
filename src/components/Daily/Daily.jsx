import React from 'react'
import s from './Daily.module.scss'
import { useSelector } from 'react-redux'
import Day from './Day'

export const Daily = () => {
    
  const daily = useSelector(state => state.weather.weather.daily)
    
  return (
    <div className={s.daily}>
        {daily.map((day, i) => (
            <Day
                key={day.dt}
                day={day}
                i={i}
            />
        ))}
    </div>
  )
}
