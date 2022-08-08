Math.random()
;[1, 2, 3, 4, 5, 6]
Math.randon() * array.length
Math.floor(Math.random() * arr.length)

const removeRAndom = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  arr.splice(randomIndex, 1)
  return arr
}
