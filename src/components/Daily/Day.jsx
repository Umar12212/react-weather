import React from 'react'
import s from './Daily.module.scss'
import { weatherName } from '../../utils/getImg'
import { getDate } from '../../utils/getDate'

const Day = ({ day, i }) => {
    
    const description = day.weather[0].description
    const img = weatherName[description] || weatherName['пасмурно']
    
    const getWeekDay = i == 0 ? 'Сегодня' : i == 1 ? 'Завтра' : getDate(day.dt, 'weekday')
    const getMonthDay = getDate(day.dt, 'day')
    const getMonth = getDate(day.dt, 'month')
    
    
  return (
    <div className={s.daily__item}>
        <p className={s.daily__item_day}>{getWeekDay}</p>
        <p className={s.daily__item_date}>{getMonthDay}  {getMonth}</p>
        <img src={img} alt="" className={s.daily__item_img} />
        <p className={s.daily__item_temp}>Макс: {Math.round(day.temp.max)}°</p>
        <p className={s.daily__item_temp2}>Мин: {Math.round(day.temp.min)}°</p>
        <p className={s.daily__item_info}>{description}</p>
    </div>
  )
}

export default Day