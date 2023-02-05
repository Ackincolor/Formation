import './cart.css'



function Cart({updateCart}) {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (
    <div className="cart">
        <h2>Panier</h2>
        <ul>
        <li>Monstera : {monsteraPrice}€</li>
        <li>Lierre : {ivyPrice}€</li>
        <li>Fleurs : {flowerPrice}€</li>
        </ul>
        Total : {monsteraPrice * cart }€
        <button onClick={() => updateCart(0)}>Vider le panier</button>
    </div>
    )
}

export default Cart;
