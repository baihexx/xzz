function showWeather(result) {
  console.log(result)
  table += '<tr>'
  var table = '<table><tr><th>城市</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>'
  // var weatherinfo = result[weatherinfo]
  var weatherinfo = JSON.parse(result).weatherinfo

  console.log(weatherinfo)
  table += '<td>' + weatherinfo.city + '</td>'
  table += '<td>' + weatherinfo.weather + '</td>'
  table += '<td>' + weatherinfo.temp1 + '</td>'
  table += '<td>' + weatherinfo.temp2 + '</td>'
  table += '</tr>'
  document.getElementById('weather').innerHTML = table
}

function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      callback(xhr.responseText, city)
    }
  }
  xhr.send()
}

var city = localStorage.city || 'fuzhou'
var cityCode = {
  'fuzhou': '101230101',
  'minhou': '101230103'
}
var url = 'http://www.weather.com.cn/data/cityinfo/'+ cityCode[city] + '.html'
httpRequest(url, showWeather)
