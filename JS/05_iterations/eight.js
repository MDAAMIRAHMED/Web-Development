const nums = [1, 2, 3]

// const total = nums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}, currval: ${currval}`);

//     return acc + currval
// },3 )

// const total = nums.reduce((acc, currval) => acc+currval, 3)
// console.log(total);

const shoppingCart = [
    {
        "item": "Wireless Mouse",
        "category": "Electronics",
        "price": 799,
        "added": 2023
    },
    {
        "item": "Notebook",
        "category": "Stationery",
        "price": 129,
        "added": 2024
    },
    {
        "item": "Running Shoes",
        "category": "Footwear",
        "price": 2499,
        "added": 2024
    },
    {
        "item": "Bluetooth Speaker",
        "category": "Electronics",
        "price": 1999,
        "added": 2023
    },
    {
        "item": "Backpack",
        "category": "Accessories",
        "price": 1099,
        "added": 2024
    },
    {
        "item": "T-Shirt",
        "category": "Clothing",
        "price": 499,
        "added": 2022
    },
    {
        "item": "Water Bottle",
        "category": "Kitchen",
        "price": 299,
        "added": 2023
    },
    {
        "item": "Gaming Keyboard",
        "category": "Electronics",
        "price": 2599,
        "added": 2024
    },
    {
        "item": "Yoga Mat",
        "category": "Fitness",
        "price": 899,
        "added": 2023
    },
    {
        "item": "Sunglasses",
        "category": "Accessories",
        "price": 1599,
        "added": 2024
    }
]

const total = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(total)