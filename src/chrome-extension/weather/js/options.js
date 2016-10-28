var city = localStorage.city || 'fuzhou'
document.getElementById('city').value = city
document.getElementById('save').onclick = function() {
  localStorage.city = document.getElementById('city').value
  alert('Save successful!')
}
