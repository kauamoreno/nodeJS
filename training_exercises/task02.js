/*
Task 2: Shopping Cart (Arrays, Objects, Loops, Functions)
Create an array cart that contains multiple objects, each representing an item in the shopping cart. 
Each object should have:

- name (the name of the item),
- price (the price of the item),
- quantity (how many of the item are being bought).

Write a function addItemToCart that takes the item details (name, price, quantity) and adds 
a new item to the cart array.

Write a function calculateTotal that calculates the total price of the items in the cart by multiplying 
the price of each item by its quantity and summing the result.

Write a function removeItemFromCart that takes the item name as input and removes the item from the cart array.

Finally, write a function viewCart that prints all the items in the cart, showing the name, price, 
and total price (price * quantity), as well as the overall total.

Test your code by adding, removing, and viewing items in the cart.
*/

let cart = [
    {
        name: 'Banana',
        price: 12,
        quantity: 12
    },
    {
        name: 'Apple',
        price: 10,
        quantity: 8
    },
    {
        name: 'Orange',
        price: 8,
        quantity: 15
    },
    {
        name: 'Grapes',
        price: 15,
        quantity: 5
    }
];

const addItemToCart = (name, price, quantity) => {
    const item = {
        name: name,
        price: price,
        quantity: quantity
    };

    cart.push(item);
}

function calculateTotal() {

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        let itenPrice = cart[i].price;
        let quantityPrice = cart[i].quantity;

        let itenTotal = itenPrice * quantityPrice;
        total += itenTotal;
    }

    return total;
}

function removeItemFromCart(name) {
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].name == name){
            
            /* 
            array.splice(startIndex, deleteCount);
            
            startIndex: The index at which to start modifying the array.
            deleteCount: The number of elements to remove.
            */

            cart.splice(i, 1);
            break;
        }
    }
}

const viewCart = () => {

    for (let i = 0; i < cart.length; i++) {
        console.log(`Iten: ${i+1} | Name: ${cart[i].name} | Price: ${cart[i].price} | Quantity: ${cart[i].quantity} | Total Price: ${cart[i].price * cart[i].quantity}`)
    }

    console.log("\n\n Overall price: ", calculateTotal());

}

addItemToCart("Fish", 4, 1);
removeItemFromCart('Apple');

viewCart();
