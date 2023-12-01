let palavra = document.querySelectorAll('.palavra')
let modal = document.querySelectorAll('.modal')
let fechar = document.querySelectorAll('.fechar')

palavra[0].addEventListener('click', () => {
    modal[0].style.display = 'block'
})


fechar[0].addEventListener('click', () => {
    modal[0].style.display = 'none'
})


palavra[1].addEventListener('click', () => {
    modal[1].style.display = 'block'
})


fechar[1].addEventListener('click', () => {
    modal[1].style.display = 'none'
})



palavra[2].addEventListener('click', () => {
    modal[2].style.display = 'block'
})


fechar[2].addEventListener('click', () => {
    modal[2].style.display = 'none'
})


palavra[3].addEventListener('click', () => {
    modal[3].style.display = 'block'
})


fechar[3].addEventListener('click', () => {
    modal[3].style.display = 'none'
})
palavra[4].addEventListener('click', () => {
    modal[4].style.display = 'block'
})


fechar[4].addEventListener('click', () => {
    modal[4].style.display = 'none'
})
palavra[5].addEventListener('click', () => {
    modal[5].style.display = 'block'
})


fechar[5].addEventListener('click', () => {
    modal[5].style.display = 'none'
})
palavra[6].addEventListener('click', () => {
    modal[6].style.display = 'block'
})


fechar[6].addEventListener('click', () => {
    modal[6].style.display = 'none'
})
palavra[7].addEventListener('click', () => {
    modal[7].style.display = 'block'
})


fechar[7].addEventListener('click', () => {
    modal[7].style.display = 'none'
})
palavra[8].addEventListener('click', () => {
    modal[8].style.display = 'block'
})


fechar[8].addEventListener('click', () => {
    modal[8].style.display = 'none'
})
palavra[9].addEventListener('click', () => {
    modal[9].style.display = 'block'
})


fechar[9].addEventListener('click', () => {
    modal[9].style.display = 'none'
})

function abrir(){
    let esco = document.getElementById("escondido")

    if(esco.style.display === "none")
        esco.style.display = "block"
    else{
        esco.style.display = "none";
    }
}