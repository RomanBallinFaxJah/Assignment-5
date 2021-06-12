document.getElementById('button').addEventListener('click', getCircumferenceAndArea)

// adjust how many decimal places it rounds to here
const round = 3

let circumference
let area

function getCircumferenceAndArea () {
  // gets values and calculates area and circumference
  const radius = document.getElementById('radius').value
  circumference = radius * Math.PI * 2
  area = radius ** 2 * Math.PI

  // Displays the results of the calculations, and rounds to a number of decimal places with toFixed method and value set in the code
  document.getElementById('area').innerHTML = `The area is ${area.toFixed(round)}`
  document.getElementById('circumference').innerHTML = `The circumference is ${circumference.toFixed(round)}`
}
