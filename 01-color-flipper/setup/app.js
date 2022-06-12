const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click', () => {
    console.log(document.body)
    
    const random_number = getRandomNumber()
    console.log(random_number)

    document.body.style.background = colors[random_number]
    color.textContent = colors[random_number]

})


const getRandomNumber = () => {
    const random_number = Math.floor(Math.random()*colors.length)
    return random_number
}