function myClock(ele) {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  m = m >= 10 ? m : ('0' +  m)
  s = s >= 10 ? s : ('0' +  s)
  ele.innerHTML = h + ':' + m+ ':' + s
  setTimeout(function() {
    myClock(ele)
  }, 1000)
}

var timeDiv = document.getElementById('curtime')
myClock(timeDiv)
