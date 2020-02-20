let inputs = document.querySelectorAll('.check')

inputs = Array.from(inputs);

let checked = true;

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    inputs.map((check) => {
      let value = check.getAttribute('value')
      let randomNumber = getRandomInt(1, 6)
      console.log(value)
      console.log(randomNumber)
      if (value == randomNumber && value != input.getAttribute('value')) {
        check.checked = !checked;
        console.log('test')
      }
    })
  })
})


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(getRandomInt(0, 6))
// console.log(getRandomInt(0, 6))
// console.log(getRandomInt(0, 6))
// console.log(getRandomInt(0, 6))
// console.log(getRandomInt(0, 6))