

# JavaScript Basics

## Table of Contents
## Table of Contents
1. [Arrays](#arrays)
   - [Examples](#examples)
   - [Practice Exercises](#practice-exercises)
2. [Objects](#objects)
   - [Examples](#examples-1)
   - [Practice Exercises](#practice-exercises-1)
3. [Loops](#loops)
   - [Examples](#examples-2)
   - [Practice Exercises](#practice-exercises-2)
4. [Conditional Statements](#conditional-statements)
   - [Examples](#examples-3)
   - [Practice Exercises](#practice-exercises-3)
5. [Small Project](#small-project)
6. [Events and Interactivity](#events-and-interactivity)
   - [Examples](#examples-4)
   - [Practice Exercises](#practice-exercises-4)
7. [Final Project: Interactive Webpage](#final-project-interactive-webpage)
8. [Step-by-Step Guide to Preparing and Running a JavaScript File](#step-by-step-guide-to-preparing-and-running-a-javascript-file)


   

## Arrays
Arrays are used to store multiple values in a single variable.

### Examples
```javascript
// Declaring an array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing array elements
console.log(fruits[1]); // Output: Banana

// Adding an element
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']
```

## Practice Exercises for Arrays

1. Create an array called `numbers` with the values 1 through 5.
2. Access the third element in the `numbers` array.
3. Add the number 6 to the end of the `numbers` array.


## Objects
Objects are collections of key-value pairs.

### Examples
```javascript
// Declaring an object
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Accessing object properties
console.log(person.name); // Output: John

// Adding a property
person.job = 'Developer';
console.log(person); // Output: { name: 'John', age: 30, city: 'New York', job: 'Developer' }
```

## Practice Exercises
1. Create an object called car with properties make, model, and year.
2. Access the model property of the car object.
3. Add a property color to the car object.


## Loops
Loops are used to execute a block of code repeatedly until a specified condition is met. They are essential for iterating over arrays or performing repeated tasks.

### Types of Loops
1. **For Loop**: Executes a block of code a specified number of times.
2. **While Loop**: Executes a block of code as long as a specified condition is true.
3. **Do While Loop**: Similar to the while loop, but it guarantees that the block of code is executed at least once.

### Examples

#### For Loop
```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Output: 0, 1, 2, 3, 4
    j++;
}

// Do While loop
let k = 0;
do {
    console.log(k); // Output: 0, 1, 2, 3, 4
    k++;
} while (k < 5);
```

## Practice Exercises
1. Use a for loop to print numbers 1 to 10.
2. Use a while loop to print numbers 10 to 1.
3. Create a loop that iterates through the fruits array and prints each fruit.


## Conditional Statements
Conditional statements are used to perform different actions based on different conditions.

### Examples

#### If Statement
```javascript
// If statement
let score = 85;
if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B'); // Output: B
} else {
    console.log('C');
}

// Switch statement
let day = 2;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday'); // Output: Tuesday
        break;
    default:
        console.log('Another day');
}

```

## Practice Exercises
1. Write an if-else statement that checks if a number is even or odd.
2. Create a switch statement to print the name of a month based on a number (1 for January, 2 for February, etc.).


## Small Project
Create a simple JavaScript program that simulates a basic shopping cart. The program should:

1. Use an array to store the names of items.
2. Use an object to store item details (name, price, quantity).
3. Use loops to iterate over the items and calculate the total price.
4. Use conditional statements to apply a discount if the total price exceeds a certain amount.

### Example Code
```javascript
let cart = [
    { name: 'Apple', price: 1.00, quantity: 3 },
    { name: 'Banana', price: 0.50, quantity: 5 },
    { name: 'Cherry', price: 0.75, quantity: 2 }
];

let totalPrice = 0;

for (let item of cart) {
    totalPrice += item.price * item.quantity;
}

if (totalPrice > 10) {
    totalPrice *= 0.9; // Apply 10% discount
}

console.log(`Total Price: $${totalPrice.toFixed(2)}`);
```

## Events and Interactivity
Events are actions like clicking a button or pressing a key, which JavaScript can detect and respond to. This is how you make web pages interactive.

### Examples
```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <button onclick="sayHello()">Click Me!</button>

    <script>
      function sayHello() {
        alert("Hello, World!");
      }
    </script>
  </body>
</html>
```
## Practice Questions
1. Create a button that changes the text of a <p> element to "Button Clicked!" when clicked.
2. Write a small web page where a button changes the background color of the page randomly each time it's clicked.

## Final Project: Interactive Webpage

### Project Description
Build an interactive webpage where users can:

1. Add their name, age, and favorite hobby into input fields.
2. Display this data in a formatted card on the webpage.
3. Use a button to change the background color of the card.
4. If the user's age is above 18, display a message on the card saying, "You are eligible to vote."

### Requirements
- Use objects to store user information (name, age, and hobby).
- Use events to detect when the user submits their data and when they click the button to change the background color.
- Use conditional statements to display the "eligible to vote" message based on the user's age.
- Use loops to dynamically display a list of users (if you want to extend the project).

### Example Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive User Card</title>
    <style>
        .user-card {
            border: 1px solid #ccc;
            padding: 16px;
            margin: 16px 0;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>User Information</h1>
    <input type="text" id="name" placeholder="Enter your name">
    <input type="number" id="age" placeholder="Enter your age">
    <input type="text" id="hobby" placeholder="Enter your favorite hobby">
    <button onclick="addUser()">Submit</button>

    <div id="userList"></div>

    <script>
        const users = [];

        function addUser() {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const hobby = document.getElementById('hobby').value;

            const user = { name, age, hobby };
            users.push(user);
            displayUsers();
            clearInputs();
        }

        function displayUsers() {
            const userList = document.getElementById('userList');
            userList.innerHTML = ''; // Clear existing users
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';
                userCard.style.backgroundColor = '#f9f9f9';
                userCard.innerHTML = `
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Age:</strong> ${user.age}</p>
                    <p><strong>Hobby:</strong> ${user.hobby}</p>
                `;
                if (user.age > 18) {
                    userCard.innerHTML += '<p>You are eligible to vote.</p>';
                }
                const colorButton = document.createElement('button');
                colorButton.innerText = 'Change Background Color';
                colorButton.onclick = () => changeColor(userCard);
                userCard.appendChild(colorButton);
                userList.appendChild(userCard);
            });
        }

        function changeColor(card) {
            const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ffcc99'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            card.style.backgroundColor = randomColor;
        }

        function clearInputs() {
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            document.getElementById('hobby').value = '';
        }
    </script>
</body>
</html>

```

# Step-by-Step Guide to Preparing and Running a JavaScript File

## 1. Setting Up Your Environment

### Option A: Using a Text Editor
1. Choose a text editor like Visual Studio Code, Sublime Text, or Notepad++.
2. Install Node.js if you want to run JavaScript outside a web browser. Download it from [nodejs.org](https://nodejs.org).

### Option B: Using a Browser Console
1. Open a web browser (like Chrome or Firefox).
2. Right-click on the page and select “Inspect” or “Inspect Element.”
3. Go to the “Console” tab where you can directly run JavaScript code.

## 2. Creating a JavaScript File
1. Open your text editor.
2. Create a new file and name it `shoppingCart.js` (or any name you prefer with a `.js` extension).
3. Copy and paste the following JavaScript code into the file:

   ```javascript
   let cart = [
       { name: 'Apple', price: 1.00, quantity: 3 },
       { name: 'Banana', price: 0.50, quantity: 5 },
       { name: 'Cherry', price: 0.75, quantity: 2 }
   ];

   let totalPrice = 0;

   for (let item of cart) {
       totalPrice += item.price * item.quantity;
   }

   if (totalPrice > 10) {
       totalPrice *= 0.9; // Apply 10% discount
   }

   console.log(`Total Price: $${totalPrice.toFixed(2)}`);
   ```

   4. Save the file.

## 3. Running the JavaScript Code
### Option A: Running in Node.js
1. Open your command line interface (Terminal on macOS/Linux or Command Prompt on Windows).
2. Navigate to the folder where you saved your JavaScript file. Use the cd command. For example:
bash
Copy code
cd path/to/your/folder
3. Run the file using Node.js by typing:
bash
Copy code
node shoppingCart.js
4. You should see the output in the console.
### Option B: Running in the Browser Console
1. Open a web browser.
2. Go to any webpage.
3. Open the Developer Tools (right-click and select “Inspect”).
4. Go to the “Console” tab.
5. You can copy and paste the JavaScript code directly into the console and press Enter. The output will appear in the console


