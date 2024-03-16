import React from 'react'
import s from './Current.module.scss'
import headerBg from '../../assets/images/headerBg.svg'
import { useSelector } from 'react-redux'
import { getTime } from '../../utils/getTime'
import { weatherName } from '../../utils/getImg'
import temp from '../../assets/images/temp.svg'
import davlenie from '../../assets/images/davlenie.svg'
import osadki from '../../assets/images/osadki.svg'
import wind from '../../assets/images/wind.svg'



const Current = () => {
    
    const weather = useSelector(state => state.weather.weather)
    const time = getTime(weather)
    const description = weather.current.weather[0].description
    const img = weatherName[description] || weatherName['пасмурно']
    const items = [
      {
        img: temp,
        name: 'Температура',
        value: `${Math.round(weather.current.temp)}° - ощущается как ${Math.round(weather.current.feels_like)}°`
      },
      {
        img: davlenie,
        name: 'Давление ',
        value: weather.current.pressure + ' мм'
      },
      {
        img: osadki,
        name: 'Облачность',
        value: weather.current.clouds + '%'
      },
      {
        img: wind,
        name: 'Ветер',
        value: Math.round(weather.current.wind_speed) + ' м/c'
      },
    ]
    
  return (
    <div className={s.current}>
        <div className={s.current__left}>
            <p className={s.current__left_degree}>{Math.round(weather.current.temp)}°</p>
            <p className={s.current__left_today}>Сегодня</p>
            <p className={s.current__left_time}>Время: {time}</p>
            <p className={s.current__left_city}>Город: {weather.timezone.split('/')[1]}</p>
            <img src={img} alt="" className={s.current__left_img} />
        </div>
        <div className={s.current__right}>
          <img src={headerBg} alt="" className={s.current__right_img} />
          {items.map(item => (
              <div key={item.name} className={s.current__right_item}>
                <div className={s.current__right_item_img}>
                  <img src={item.img} alt="" />
                </div>
                <p className={s.current__right_item_name}>{item.name}</p>
                <p className={s.current__right_item_value}>{item.value}</p>
             </div>
          ))}
       
        </div>
    </div>
  )
}

export default Current