let checkButton = document.querySelector(".check-button");
let inputNumber = document.querySelector("#guess");
let result = document.querySelector(".result");
let count = document.querySelector(".count");
let body = document.getElementById("body");
let title = document.querySelector(".title");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let image = document.querySelector(".image");

let randomNumber = Math.round(Math.random() * 100); 
// console.log(randomNumber);

let maxNumber = 100;
let minNumber = 0;
let counter = 6;

inputNumber.addEventListener("keypress", (e) => {
    
            if (e.key == "Enter") {
                checkButton.click();
            }
        });


checkButton.addEventListener("click", () => {
    if (randomNumber == inputNumber.value) {

        checkButton.style.display = "none";
        count.style.display = "none";
        inputNumber.style.display = "none";
        title.style.display = "none";
        img1.style.display = "none";
        img2.style.display = "block";
        result.innerText = "Play Again?";
        result.style.color = "yellow";
        result.style.fontSize = "2rem";
        body.style.background = "white";
    } 
    else if (inputNumber.value > randomNumber) {
        if (inputNumber.value > 100) {
            result.innerHTML = "Please Enter a number less than 100";
            inputNumber.value = "";
            return; 
        }
        maxNumber = inputNumber.value;
        result.innerHTML = `Enter a number between ${minNumber} and ${maxNumber}`;
        counter--;
        count.innerHTML = `Number of attempts Left: ${counter}`;
        inputNumber.value = "";
            if (counter == 0) {
                checkButton.style.display = "none";
                count.style.display = "none";
                inputNumber.style.display = "none";
                title.style.display = "none";
                img1.style.display = "none";
                img3.style.display = "inline-block";
                result.innerText = "Play Again?";
                result.style.color = "yellow";
                result.style.fontSize = "2rem";
                body.style.background = "black";
            }

    } 
    else if (inputNumber.value < randomNumber) {
        if (inputNumber.value < 0) {
            result.innerHTML = "Please Enter a number bigger than 0";
            inputGuess.value = ""; 
            return; 
        }
        minNumber = inputNumber.value;
        result.innerHTML = `Enter a number between ${minNumber} and ${maxNumber}`;
        counter--;
        count.innerHTML = `Number of attempts Left: ${counter}`;
        inputNumber.value = "";
            if (counter == 0) {
                checkButton.style.display = "none";
                count.style.display = "none";
                inputNumber.style.display = "none";
                title.style.display = "none";
                img1.style.display = "none";
                img2.style.display = "inline-block";
                result.innerText = "Play Again?";
                result.style.color = "yellow";
                result.style.fontSize = "2rem";
                body.style.background = "black";
            }

    } 
    else if (inputGuess.value == "") {
    result.innerHTML = "Enter a Number";
    }});



    result.addEventListener("click", () => {
        window.location.reload()
    });


