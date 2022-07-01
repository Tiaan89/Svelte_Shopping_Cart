import {readable, writable} from "svelte/store";

export const products = readable([
        {id: 1, name: "Apple", image: "https://th.bing.com/th/id/R.1e21679199854a3c125609204861201a?rik=VcCW7KgQX18H2w&pid=ImgRaw&r=0", price: 10, quantity: 1},
        {id: 2, name: "Orange", image: "https://th.bing.com/th/id/OIP.s6QjeLMcWmQzyQXYo6vh3QHaG0?pid=ImgDet&rs=1", price: 11, quantity: 1},
        {id: 3, name: "Grapes", image: "https://th.bing.com/th/id/R.5147164cd3954a0ce04538debad6d24d?rik=F9GfGvhE59ajfQ&pid=ImgRaw&r=0", price: 12, quantity: 1},
    ])

export const cart = writable([])
export const address = writable({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pin: ""
})