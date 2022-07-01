<script>
// @ts-nocheck

    /**
* @type {any[]}
*/
    let cart = [];
    let products = [
        {id: 1, name: "Apple", image: "https://th.bing.com/th/id/R.1e21679199854a3c125609204861201a?rik=VcCW7KgQX18H2w&pid=ImgRaw&r=0", price: 10, quantity: 1},
        {id: 2, name: "Orange", image: "https://th.bing.com/th/id/OIP.s6QjeLMcWmQzyQXYo6vh3QHaG0?pid=ImgDet&rs=1", price: 11, quantity: 1},
        {id: 3, name: "Grapes", image: "https://th.bing.com/th/id/R.5147164cd3954a0ce04538debad6d24d?rik=F9GfGvhE59ajfQ&pid=ImgRaw&r=0", price: 12, quantity: 1},
    ]

    const addToCart = (/** @type {{ id: any; name?: string; image?: string; price?: number; quantity: any; }} */ product) => {
        for(let item of cart) {
            if(item.id === product.id) {
                product.quantity += 1
                cart = cart;
                return;
            }
        }
        cart = [...cart, product];
    }
        //alert("It works!")  --to test if the function works on the button!

    $: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); 

        const minusItem = (product) => {
            for(let item of cart) {
                if(item.id === product.id) {
                    product.quantity -= 1
                    cart = cart;
                    return;
                }
            }
        cart = [...cart, product];
        }

        const plusItem = (product) => {
            for(let item of cart) {
                if(item.id === product.id) {
                    product.quantity += 1
                    cart = cart;
                    return;
            }
        }
        cart = [...cart, product];
    }
</script>

<p>There are {cart.length} items in your cart</p>

<div class="product-list">
    {#each products as product}
        <div>
            <div class="image" style="background-image: url({product.image})"></div>
            <h4>{product.name}</h4>
            <p>R{product.price}</p>
            <button on:click={() => addToCart(product)}>Add to cart</button>
        </div>
    {/each}
</div>

<div class="cart-list">
    {#each cart as item}
    {#if item.quantity > 0}
        <div class="cart-item">
            <img width="50" src={item.image} alt={item.name}>
            <div>{item.quantity}
                <button on:click={() => minusItem(item)}>-</button>
                <button on:click={() => plusItem(item)}>+</button>
            </div>
            <p>R{item.price * item.quantity}</p>
        </div>
        {/if}
    {/each}
    <div class="total">
        <h4>Total: R{total}</h4>
    </div>
</div>

<div class="shipping-address">
    <p>Name</p>
    <input />

    <p>Email</p>
    <input />

    <p>Phone</p>
    <input />

    <p>Address</p>
    <textarea cols="24" rows="6"/>

    <p>City</p>
    <input />

    <p>State</p>
    <input />

    <p>PIN</p>
    <input />

</div>

<style>
    .product-list, .cart-item {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .image {
        height: 150px;
        width: 150px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .total {
        text-align: right;
    }
    .cart-list {
        border: 2px solid;
        padding: 10px;
    }
</style>