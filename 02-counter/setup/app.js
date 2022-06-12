let count = 0


let value = document.querySelector('#value')
let buttons = document.querySelectorAll('.btn')


buttons.forEach((btn) => {
    console.log(btn)
    btn.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            count --
        }else if(styles.contains('increase')){
            count++
        }else{
            count = 0
        }
        if(count >0){
            value.style.color = 'green'
        }else if(count <0){
            value.style.color='red'
        }
        value.textContent = count


    })
})



