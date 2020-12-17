// You can run these functions on the browser
var numbers = [1, 2, 3, 4, 5];
var friends = ["Carlos", "Sebastian", "Matilda", "Goof"];
function intro() {
    alert("Hello from the js file");
    var userName = prompt("What is your name?");
    alert("Nice to meet you " + userName);
    console.log("Nice to meet you too,  " + userName);

}
function stalkerExercise() {
    var firstName = prompt("What's your first name?");
    var lastName = prompt("What's your last name?");

    var age = prompt("How old are you?");

    alert("Your full name is " + firstName + " " + lastName);

    console.log("Your full name is " + firstName + " " + lastName);
    console.log("You are " + age + " years old");

    if (age <= 0) {
        alert("Error, age must be greater than 0");
    }
    else if (age == 21) {
        alert("Happy 21st birthday");
    }
    else if (age % 2 !== 0) {
        alert("your age is odd");
    }
    else if (age % Math.sqrt(age) === 0) {
        alert("Your age is a perfect square!");
    }
    // Number(string) parse a string into a number

}
function whileLoopsExercises() {
    var num1 = -10;
    console.log("FIRST EXERCISE");
    while (num1 <= 19) {
        console.log(num1);
        num1++;
    }
    var num2 = 10;
    console.log("SECOND EXERCISE");
    while (num2 <= 40) {
        if (num2 % 2 == 0) {
            console.log(num2);
        }
        num2++;
    }
    var num3 = 300;
    console.log("THIRD EXERCISE");
    while (num3 <= 333) {
        if (num3 % 2 != 0) {
            console.log(num3);
        }
        num3++;
    }
    var num4 = 5;
    console.log("FOURTH EXERCISE");
    while (num4 <= 50) {
        if (num4 % 5 == 0 && num4 % 3 == 0) {
            console.log(num4);
        }
        num4++;
    }
}
function forLoops() {
    for (let i = 0; i <= 10; i++) {
        console.log("Player " + i + ", get ready");
    }
}
function square(num) {
    console.log(num * num);
}
function sayHello(name) {
    console.log("Hello", name);
}
function area(length, width) {
    console.log(length * width);
}
function capitalize(str) {
    // Makes the first letter of the string a capital case
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function isEven(num) {
    return num % 2 == 0;
}
function factorial(num) {
    var result = 1;
    for (num; num != 0; num--) {
        result *= num;
    }
    return result;
}
function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}
function arrays() {
    // Arrays can hold any type of data
    var cars = new Array();
    var friends = ["Charlie", "Liz", "David"];

    // Adding a new value
    friends[4] = "John";
    friends.push("Jessica"); //Adds Jessica at the end of the array
    friends.unshift("Frank"); //Adds Frank to the front of the array

    // Removing the last item of the array
    friends.pop(); //Removes the last element
    friends.shift(); //Removes the first element

    // 2D arrays
    var friendsGroups = [
        ["Harry", "Ron", "Hermione"],
        ["Malfoy", "Crabbe", "Goyle"],
        ["Mooney", "Wormtail", "Prongs"]
    ]; //2x2 array
}
function todoList() {
    console.log("'new' - Add a todo");
    console.log("'list' - View all todos");
    console.log("'quit' - Exit app");
    console.log("'delete' - Delete item");

    var todos = [];
    var input = prompt("What would you like to do?");

    while (input != "quit") {

        if (input === "list") {
            console.log("******************");
            todos.forEach(function (todo, i) {
                console.log(i + ": " + todo);
            })
            console.log("******************");
        }
        else if (input === "new") {
            var newTodo = prompt("Enter new todo");
            todos.push(newTodo);
            console.log(newTodo + "Added to the list");
        }
        else if (input === "delete") {
            var index = prompt("Enter index of todo to delete");
            //Delete a certain element of an array
            todos.splice(index, 1);
        }
        var input = prompt("What would you like to do?");

    }
    console.log("Ok, you quit the app");
}
function forEachLoop() {
    var colors = ["red", "blue", "green", "yellow", "purple"];
    colors.forEach(function (color) {
        console.log(color);
    })
}
function printReverse(array) {
    var reverse = [];
    array.forEach(function (i) {
        reverse.unshift(i);
    })
    console.log(reverse)
}
function isUniform(array) {
    for (var i = 0; i < array.length; i++) {
        var first = array[0];
        if (array[i] !== first) {
            return false;
        }
    }
    return true;
}
function sumArray(array) {
    var sum = 0;
    array.forEach(function (i) {
        sum += i;
    })
    return sum;
}
function maxNumber(array) {
    var max = 0;
    array.forEach(function (i) {
        // if(i>max) {
        //     max = i;
        // }
        i > max ? max = i : max = max; //Ternario operator (if enhanced)
    })
    return max;
}
function objects() {
    var dog = {
        name: "Doddy",
        breed: "Chihuahua",
        age: 5,
        friends: ["Shakira", "Blanquita"],
        run: function() {
            console.log(this.name + " is running");
        }
    }
    dog.run();

    var person = {} // = new Object();
    person.name = "Travis";
    person.age = 22;
    person.city = "London";

    // MoviesDB exercise
    var movies = [
        { title: "La casita encantada", rating: "3.1/5", hasWatched: false },
        { title: "La chosabroza", rating: "5/5", hasWatched: true },
        { title: "Querida, encogí la casita", rating: "4/5", hasWatched: true },
        { title: "Hogar, casa o Refugio", rating: "4/5", hasWatched: false }
    ]
    movies.forEach(function (movie) {
        if (movie.hasWatched) {
            console.log("You have watched " + movie.title + " - " + movie.rating);
        }
        else {
            console.log("You haven't seen " + movie.title + " - " + movie.rating);
        }
    })
}