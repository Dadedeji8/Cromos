const addCromos = document.getElementById('addCromos')
const purchaseCromos = document.getElementById('purchaseCromos')
const resetCromos = document.getElementById('resetCromos')
let dollarValue = document.getElementById('dollarValue')
let cromsoValue = document.getElementById('cromosValue')
let notice = document.getElementById('notice')
let wallet = document.querySelector('#wallet')

notice.style.display = 'none'

let dollar = 0
let cromos = 0

//conversion for cromos using  addCromos
addCromos.addEventListener('click', function() {
    cromos += 1
    dollar = cromos * 0.78
    dollarValue.textContent = `$ ${dollar}`
    cromsoValue.textContent = `${cromos} Cromos`

})

//purchase to generate wallet address
purchaseCromos.addEventListener('click', function() {

    wallet.style.display = ''
    wallet.textContent = `virtual wallet : 141071434139` //not really the wallet sha

    notice.style.display = 'block'
    if (cromos == 0) {
        alert('cannot generate wallet for empty value')
        notice.style.display = 'none'
        wallet.style.display = 'none'
    } else {
        alert('copy address generated and pay using your crypto app then return to dashboard')
    }

})


//reset button
resetCromos.addEventListener('click', function() {
    cromos = 0
    dollar = 0
    dollarValue.textContent = `$ ${dollar}`
    cromsoValue.textContent = `${cromos} Cromos`
    notice.style.display = "none"
    wallet.style.display = 'none'

})