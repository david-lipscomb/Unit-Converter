/* Measurements:
1 meter = 3.281 feet
1 liter = 0.264 gallons
1 kilogram = 2.204 pounds */ 
let number = []
const numInput = document.getElementById("num-inp")
const convertButton = document.getElementById("convert-btn")
const lengthSect = document.getElementById("length-sec")
const volumeSect = document.getElementById("volume-sec")
const massSect = document.getElementById("mass-sec")

function feet() {
    let feet = Number(numInput.value) * 3.281
    return feet.toFixed(3) + " feet"
}

function meters() {
    let meter = Number(numInput.value)  / 3.281
    return meter.toFixed(3) + " meter"
}

function gallon() {
    let gallon = Number(numInput.value)  * .0264
    return gallon.toFixed(3) + " gallons"
}

function liter() {
    let liter = Number(numInput.value) / .0264
    return liter.toFixed(3) + " liters"
}

function kilo() {
    let kilo = Number(numInput.value)  / 2.204
    return kilo.toFixed(3) + " kilograms"
}

function pounds() {
    let pound = Number(numInput.value) * 2.204
    return pound.toFixed(3) + " pounds"
}



convertButton.addEventListener("click", function(){
    number = []
    number.push(numInput.value)
    let lenSen = `${Number(number[0])} meters = ${feet()} | ${Number(number[0])} feet = ${meters()}`
    let volSen = `${Number(number[0])} liters = ${gallon()} | ${Number(number[0])} gallons = ${liter()}`
    let massSen = `${Number(number[0])} pounds = ${kilo()} | ${Number(number[0])} kilograms = ${pounds()}`
    lengthSect.innerHTML = lenSen
    volumeSect.innerHTML = volSen
    massSect.innerHTML = massSen
})


