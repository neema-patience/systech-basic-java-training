switch ( new Date( ).getDay( )) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

}

console.log(day)
switch(new Date().getDay()){
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
console.log(text)

switch(new Date().getDay()) {
    default:
        text = "Looking forward to the weekend";
        break;
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
}
console.log(text)

let x = "0";
switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
console.log(x)

switch(fruits){
    case "Banana":
        alert("Hello")
        break;
    case "Apple":
        alert("Welcome")
        break;
    default:
        alert("Neither");
}