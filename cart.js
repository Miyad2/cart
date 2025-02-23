var cartIconCount = document.querySelector('.cart-icon-count');
var decreaseBtn = document.querySelector('#decreaseBtn');
var increaseBtn = document.querySelector('#increaseBtn');
var price = document.querySelector('#price');
var count = document.querySelector('#count');
var tooltips = document.querySelector('.tooltipText');
var sPrice = document.querySelector('#subtotalPrice');
var deleteBtn = document.querySelector('#deleteBtn');

var countnum = Number(count.innerText)
var basePrice = Number(price.innerText)
var subPrice = Number(sPrice.innerText)


var totalprice = basePrice
var subtotalprice = subPrice

function decrease() {
    if (countnum === 1) {
        tooltips.innerText = "Please enter a value greater than or equal to 1"
        tooltips.style.display = "block"
        setTimeout(tooltipsDisplay, 3000)
        return
    }
    countnum--
    count.innerText = countnum
    tooltipsDisplay()
    totalPrice()
    subTotalPrice()
}


function increase() {
    if (countnum === 5) {
        tooltips.innerText = "Maximum 5 products, per user in this deal."
        tooltips.style.display = "block"
        setTimeout(tooltipsDisplay, 3000)
        return
    }
    countnum++
    count.innerText = countnum
    tooltipsDisplay()
    totalPrice()
    subTotalPrice()
}

function tooltipsDisplay() {
    tooltips.style.display = "none"
}

function totalPrice() {
    totalprice = basePrice * countnum
    price.innerText = totalprice
}
// subtotal price
function subTotalPrice() {
    subtotalprice = subPrice * countnum
    sPrice.innerText = subtotalprice
}
// delete item
function deletebtn() {
    document.querySelector(".cart-box").remove()
}






