function render() {
  const now = new Date
  const newYear = now.getFullYear() + 1
  const next = new Date(newYear, 0)
  const difference = timeDiffCalc(next, now)
  
  newYearSpan.innerText = newYear
  days.innerText = difference.days
  hours.innerText = difference.hours
  minutes.innerText = difference.minutes
  seconds.innerText = difference.seconds
}

function timeDiffCalc(dateFuture, dateNow) {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000
  const diffInSeconds = 60 - dateNow.getSeconds()
  
  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400)
  diffInMilliSeconds -= days * 86400
  
  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24
  diffInMilliSeconds -= hours * 3600
  
  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60
  diffInMilliSeconds -= minutes * 60

  let difference = ''
  if (days > 0)
    difference += (days === 1) ? `${days} day, ` : `${days} days, `

  difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `
  difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`;

  return {days, hours, minutes, seconds: diffInSeconds, difference}
}

render()
setInterval(render, 1000)
