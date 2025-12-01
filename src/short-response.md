# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1
This block of code throws a `SyntaxError` because the same variable is declared twice. To fix this, declare the variable outside the **if statement** and initialize it with an empty string.

### Question 2
The console will return the name `'Michael Jordan'`. Objects are mutable, meaning you can add, modify or delete their properties. In this code, `bestPlayer` is set to an object. Then, a variable `theGOAT` is declared and assigned to reference the `bestPlayer` object. Lastly, the `name` property of `bestPlayer`object is reassigned `'Michael Jordan'`.

### Question 3
When the `shoutOut` function is invoked, logs `'Paul is the hardest working person in the room.'` to the console. After that, the console prints `'Laisha is also the hardest working person in the room.'`. There are two variables named `theHustler`, but they hold different values and exist in different scopes. One is inside the function and one outside. The scope of a variable determines where a variable can be accessed. Since the function has its own local scope, `theHustler` inside it is separate from the one outside.

### Question 4
A **rest parameter** allows a function to accept an unknown number of arguments as an array. A function can only have **one** rest parameter and it can collect any number of arguments passed to the function. The main purpose of a rest argument is to handle multiple separate arguments more cleanly and avoid messy code.

Rest parameters use the `...` syntax to gather these arguments into an array.

For example, imagine your worker gives you a list of company expenses and you want to calculate the total amount spent:

```js
const sum = (...nums) => {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;
```
As you can see, the rest parameter is represented by the `...` before `nums`, which allows the function to accept any number of arguments.

### Question 5
**Scope** is the accessibility or visibility of a variable within different parts of a program. 

An analogy for scope is how you speak differently depending on who you're talking to. For example, a friend versus someone older. The message you convey might change based on your evidence.

``` js
const message = "Hi, how are you doing?"; // Global scope
const sayMessage = () => {
    const message = "What's up?"; // Local scope
    console.log(message);
}
sayMessage();
console.log(message);
```
In the code above, there are two variables named `message`, but they exist in different scopes. The first `message` is declared outside the function and has a **global scope**. It's accessible anywhere in the program. The second `message` is declared inside the function `sayMessage` and has a **local scope**. It's only accessible within that function. When `sayMessage()` is called, it logs the local `message` as `'What's up'`. Outside the function, when the console is called, it logs the global `message` as `'Hi, how are you doing?'`.

### Question 6
A **module** is a file containing code that performs specific tasks and can be imported into other files to be reused. The main benefit of modules is that they help organize code across multiple files or projects, making it easier to manage and reuse.

For example, imagine a bank management system that includes features like account creation, managing accounts, deposits and withdraws. Instead of putting all this code in one file, you can split it into separate modules such as handling deposits or another for withdraws.

Here is an example of a `deposit` module:
```js
// deposit.js
const deposit = (account, amount) => {
    account.balance += amount;
    return account.balance;
}

module.exports = deposit;
```

You can then import and use this function in another file:
```js
// index.js
const madlib = require('./deposit.js');
const account = {
    balance: 100
};

console.log(deposit(account, 50));
```

### Question 7
* `fruits` will contain apple, banana, cherry, and date. 
* `fruitMinusOne` will contain apple, banana, and cherry.

It is important to make a **copy** of the array to keep the function pure so the original array is not modified. By having a copy, the original array can stay as it was. This helps if you want to reuse it later without worrying that the function might change it.

Avoiding mutation of the input array makes sure the original data remains unchanged and prevents unintended side effects. If the input were changed by accident, it could lead to incorrect or unexpected output.

### Question 8
To represent a single item in the cart, I would use an object because each item contains information such as the **itemName**, **quantity**, and **price**.

To represent the entire shopping cart that holds those items, I would use an **array of objects**. This is because the shipping cart contains multiple items and using an array helps store an ordered list of elements. Each element in the array is an item object.

```js
const shoppingCart = [
    {
        item: 'peach',
        quantity: 4,
        price: '2.50'
    },
    {
        item: 'orange',
        quantity: 2,
        price: '0.75'
    },

    {
        item: 'ice cream',
        quantity: 1,
        price: '5.40'
    },
]
```
From the example, the `shoppingCart` is an array that holds multiple items. Each of the items in the cart is represented as an object with three properties:
* `item`: the name of the product
* `quantity`: how many items there are
* `price`: the cost per item

The use of an array of object helps access individual items, updating quantities, and calculating the total cost of all items.