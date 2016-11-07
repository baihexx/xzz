var logo = document.getElementById('lga')
// logo.style.visibility = 'hidden'

var tiles = document.getElementById('mv-tiles')
// tiles.style.visibility = 'hidden'

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if(message.isLogoShow) {
    logo.style.visibility = 'visible'
    sendResponse({response: 'Show logo success'})
  } else {
    logo.style.visibility = 'hidden'
    sendResponse({response: 'Hide logo success'})
  }
})
