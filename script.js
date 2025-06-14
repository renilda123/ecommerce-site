let cartCount = 0;
function addToCart(productName) {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
    const msg = document.getElementById("cart-message");
    msg.textContent = `${productName} added to cart!`;
    msg.style.color = "green";
    setTimeout(() => { msg.textContent = ""; }, 2000);
}
function loginPopup() {
    document.getElementById("loginModal").style.display = "flex";
}
function closePopup() {
    document.getElementById("loginModal").style.display = "none";
}
function searchProduct() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");
    products.forEach(p => {
        const name = p.dataset.name.toLowerCase();
        p.style.display = name.includes(input) ? "block" : "none";
    });
}
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
