export function getDate(dt, type) {
    
    const seconds = dt * 1000
    const data = new Date(seconds)
    
    return type == 'weekday' ? data.toLocaleString('ru-RU', { weekday: 'short' }) :
           type == 'day'     ? data.toLocaleString('ru-RU', { day: 'numeric'})    :
           type == 'month'   ? data.toLocaleString('ru-RU', { month: 'short'})    : ''
}