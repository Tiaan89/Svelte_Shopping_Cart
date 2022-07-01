<script>
    import { products, cart, address } from "./cart.js";

    const addToCart = (/** @type {{ id: any; name?: string; image?: string; price?: number; quantity: any; }} */ product) => {
        for(let item of $cart) {
            if(item.id === product.id) {
                product.quantity += 1
                $cart = $cart;
                return;
            }
        }
        $cart = [...$cart, product];
    }
        //alert("It works!")  --to test if the function works on the button!

    $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0); 

        const minusItem = (product) => {
            for(let item of $cart) {
                if(item.id === product.id) {
                    product.quantity -= 1
                    $cart = $cart;
                    return;
                }
            }
        $cart = [...$cart, product];
        }

        const plusItem = (product) => {
            for(let item of $cart) {
                if(item.id === product.id) {
                    product.quantity += 1
                    $cart = $cart;
                    return;
            }
        }
        $cart = [...$cart, product];
    }

const checkOut = () => {
    alert(JSON.stringify(cart))
    alert(JSON.stringify(address))
}

</script>

<p>There are {$cart.length} items in your cart</p>

<div class="product-list">
    {#each $products as product}
        <div>
            <div class="image" style="background-image: url({product.image})"></div>
            <h4>{product.name}</h4>
            <p>R{product.price}</p>
            <button on:click={() => addToCart(product)}>Add to cart</button>
        </div>
    {/each}
</div>

<div class="cart-list">
    {#each $cart as item}
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
    <div>
        <p>Name</p>
        <input bind:value={$address.name}/>

        <p>Email</p>
        <input bind:value={$address.email}/>

        <p>Phone</p>
        <input bind:value={$address.phone}/>

        <p>Street</p>
        <textarea cols="24" rows="6" bind:value={$address.street}/>

        <p>City</p>
        <input bind:value={$address.city}/>

        <p>State</p>
        <input bind:value={$address.state}/>

        <p>PIN</p>
        <input bind:value={$address.pin}/>

        <button on:click={checkOut}>Checkout</button>
    </div>

    <div class="current-address">
        <p>{$address.name}</p>
        <p>{$address.email}</p>
        <p>{$address.phone}</p>
        <p>{$address.street}</p>
        <p>{$address.city}</p>
        <p>{$address.state}</p>
        <p>{$address.pin}</p>
    </div>
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
    .shipping-address {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
    }
    .current-address {
        padding: 2em;
        border: 2px dashed green;
    }
</style>