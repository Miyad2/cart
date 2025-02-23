const cartIcon = document.querySelector('.cart-icon i');
const cartCount= document.querySelector('#cartCount');
const cartBtn= document.querySelector('#cartBtn');

var cartCountNum=0


function shoppingCart(){
    cartCountNum= cartCountNum+1
    console.log(cartCountNum)
    cartCount.innerText=cartCountNum
    cartCount.style.opacity="1"
    document.querySelector(".cart-box").add()
}
