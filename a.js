const cartBtn = document.querySelector('#cartBtn');
const demo = document.querySelector('#demo');



function sec(e){
    var section= document.createElement("section")
    section.classList.add(e)
    return section
}
function div(e){
    var div= document.createElement("div")
    div.classList.add(e)
    return div
}
function icons(e){
    var icon= document.createElement("p")
    icon.classList.add(e)
    icon.innerText = e
    return icon
}







// var images = document.querySelectorAll('.headphone-image img');
// console.log(images.length)

// for ( i = 0; i < images.length; i++) {
//     var it = images[i].src
//     console.log(it)
// }






function shoppingCart(){


    var section = sec("cart-section")
    document.body.appendChild(section)
    var container = div("container")
    section.appendChild(container)
    var row = div("row")
    container.appendChild(row)
    var col = div("col-lg-12")
    row.appendChild(col)
    var cartItemBox = div("cart-item-box")
    col.appendChild(cartItemBox)
    var cartBox = div("cart-box")
    cartItemBox.appendChild(cartBox)
    var cartItem = div("cart-item")
    cartBox.appendChild(cartItem)
    var cartImg = div("cart-img")
    cartItem.appendChild(cartImg)

// ===============================================================

    var imgItem = document.createElement("img")
    var images = document.querySelectorAll('.headphone-image img');
    console.log(images[0])
    var p = images[0]
    console.log(p)
    // for ( i = 0; i < images.length; i++) {
    //     var it = images[i].src
    //     console.log(it)
    //      imgItem.src=it
    // cartImg.appendChild(imgItem)
    // }

    for ( i = 0; i < images.length; i++) {
        var it = images[i].src
        imgItem.src=it 
        
    }
console.log(it)
        
    cartImg.appendChild(imgItem)
   

// ==============================================


    // Connect Images
    // var imgItem = document.createElement("img")
    // console.log(imgItem)
    // imgItem.src=(document.querySelector('.headphone-image img')).src;
    // cartImg.appendChild(imgItem)

    var cartCount = div("cart-count")
    cartBox.appendChild(cartCount)
    var cartCountPart = div("cart-count-part")
    cartCount.appendChild(cartCountPart)



    var countIconBefore = div("count-icon-before")
    countIconBefore.setAttribute("id", "decrease")
    countIconBefore.setAttribute("onclick", "decrease()")
    cartCountPart.appendChild(countIconBefore)

    var decrease = icons("Decrease")
    countIconBefore.appendChild(decrease)


    var countNum = div("count-num")
    countNum.setAttribute("id", "count")
    countNum.innerText= 1
    cartCountPart.appendChild(countNum)


    var countIconBefore = div("count-icon-before")
    countIconBefore.setAttribute("id", "increase")
    countIconBefore.setAttribute("onclick", "increase()")
    cartCountPart.appendChild(countIconBefore)

    var increase = icons("Increase")
    countIconBefore.appendChild(increase)

    var tooltipText = div("tooltipText")
    cartCount.appendChild(tooltipText)

    var cartPricePart = div("cart-price-part")
    cartBox.appendChild(cartPricePart)

    var cartPrice = div("after-discount-price")
    var pricecount=document.querySelector(".item-price").innerHTML
    cartPrice.innerText=pricecount+` tk`
    cartPricePart.appendChild(cartPrice)

    var beforeDiscountPricediv = div("before-discount-price")
    cartPricePart.appendChild(beforeDiscountPricediv)

    var beforeDiscountPrice = document.createElement("s")
    var beforepricecount=document.querySelector("s .item-price").innerHTML
    beforeDiscountPrice.innerText=beforepricecount+` tk`
    beforeDiscountPrice.style.color="red"
    beforeDiscountPricediv.appendChild(beforeDiscountPrice)

var deleteBtn = div("deletebtn")
deleteBtn.setAttribute("id","deleteBtn")
deleteBtn.setAttribute("onclick","deletebtn()")
deleteBtn.innerText="Remove"
cartBox.appendChild(deleteBtn)



}













