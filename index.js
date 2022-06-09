// GRAB ELEMENTS GAME 1
const inputGame1 = document.getElementById('input--game1')
const buttonGame1 = document.getElementById('button--game1')
const resultGame1 = document.getElementById('result1')
// GRAB ELEMENTS GAME 2
const inputGame2 = document.getElementById('input--game2')
const buttonGame2 = document.getElementById('button--game2')
const resultGame2 = document.getElementById('result2')

buttonGame1.addEventListener('click', () => {
  resultGame1.textContent = "Result: " + getResistenza(inputGame1.value)
})
buttonGame2.addEventListener('click', () => findMaxResistenza(inputGame2.value))

function getResistenza(n) {
  const resArr = [n]
  // HELPER FUNCTION
  // Getting the string as a parameter
  // and typecasting it into an integer
  const numberify = num => Number(num)
  // new arr to save the reduced value
  const reducer = (pValue, cValue) => pValue * cValue
  // LOOP
  while (resArr[(resArr.length)-1].toString().length !== 1) {
    const lastElArr = Array.from(String(resArr[(resArr.length)-1]), numberify)
    const neww = lastElArr.reduce(reducer)
    resArr.push(neww)
  }
  const resistenza = resArr.length - 1
  return resistenza
}

function findMaxResistenza(n) {
  let maxResistenza = 0
  let winnerArr = []
  for (let i = 10; i <= n; i++) {
    const res = getResistenza(i)
    if (res > maxResistenza) {
      winnerArr.splice(0, winnerArr.length - 1, i)
      maxResistenza = res
    } else if (res === maxResistenza) {
      winnerArr.push(i)
    }
  }
  resultGame2.textContent = `WINNER: ${winnerArr} with ${maxResistenza}`
  return(`WINNER: ${winnerArr} with ${maxResistenza}`)
}


