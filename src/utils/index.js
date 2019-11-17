const _transformFahrenheitToCelsius = (value) => {
  const result = (value - 32) * 5 / 9
  return result.toFixed(1)
}

const _getDayOfWeek = (day) => {

  let dayOfWeek = null
  const date = new Date(day)
  const number = date.getDay()

  switch (number) {
    case 0:
      dayOfWeek = 'Sunday'
      break
    case 1:
      dayOfWeek = 'Monday'
      break
    case 2:
      dayOfWeek = 'Tuesday'
      break
    case 3:
      dayOfWeek = 'Wednesday'
      break
    case 4:
      dayOfWeek = 'Thursday'
      break
    case 5:
      dayOfWeek = 'Friday'
      break
    case 6:
      dayOfWeek = 'Saturday'
      break
  }
  return dayOfWeek
}

export {
  _transformFahrenheitToCelsius,
  _getDayOfWeek
}