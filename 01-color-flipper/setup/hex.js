const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

console.log('test')

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }


const createHexColor = () => {
    hex_str = '#'
    for(let i=0;i<6;i++){
        const random_number = getRandomInt(6)
        hex_str += hex[random_number]
    }
    return hex_str
}

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click', () => {
    console.log(document.body)
    
    const hex_str = createHexColor()

    document.body.style.background = hex_str
    color.textContent = hex_str

})


