export function getTime(param) {
    return new Date().toLocaleString('ru-RU', {
        timeZone: param.timezone,
        hourCycle: 'h23',
        timeStyle: 'short'
    })
}