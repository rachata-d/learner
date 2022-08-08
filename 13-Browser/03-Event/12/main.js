const btnAdd = document.querySelector('.btn-add')

btnAdd.addEventListener('click', function () {
  const input = document.querySelector('input')
  const newValue = input.value
  const ul = document.querySelector('ul')

  const li = document.createElement('li')
  const span = document.createElement('span')
  span.innerHTML = newValue

  const btnEdit = document.createElement('button')
})
