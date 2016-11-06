var isLogoShow = true
function handleResponse(message) {
  console.log("message from the content script:")
  console.log(message.response)
}

function sendMessageToTab(tabs) {
  if (tabs.length > 0) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {isLogoShow: isLogoShow},
      handleResponse
    )
  }
}

document.getElementById('show-input').onclick = function() {
  isLogoShow = true
  chrome.tabs.query({currentWindow: true, active: true}, sendMessageToTab)
}

document.getElementById('hide-input').onclick = function() {
  isLogoShow = false
  chrome.tabs.query({currentWindow: true, active: true}, sendMessageToTab)
}
