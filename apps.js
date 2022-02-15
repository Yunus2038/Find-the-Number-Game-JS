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
let playagain = document.querySelector(".restart");

let randomNumber = Math.round(Math.random() * 100); 
console.log(randomNumber);

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

        inputNumber.focus();
        result.innerText = "Congratulations, you won!!";
        result.style.color = "red";
        result.style.fontSize = "2rem";
        playagain.style.display = "inline";
       

    } 
    else if (inputNumber.value == ""){
        window.alert("Please Enter a number !!");
        return;
    }
    else if (inputNumber.value > randomNumber) {
        if (inputNumber.value > 100) {
            result.innerHTML = "Please Enter a number less than 100";
            inputNumber.value = "";
            return; 
        }
        inputNumber.focus();
        maxNumber = inputNumber.value;
        result.innerHTML = `Enter a number between ${minNumber} and ${maxNumber}`;
        counter--;
        count.innerHTML = `Number of attempts Left: ${counter}`;
        inputNumber.value = "";
            if (counter == 0) {
                
                result.innerText = "Sorry You Lost";
                result.style.color = "red";
                result.style.fontSize = "2rem";
                playagain.style.display = "inline";
                               
            }
            if (counter < 0) {
                window.alert("Wanna Play Again?? Press Restart Pls") ;                                             
            }

    } 
    else if (inputNumber.value < randomNumber) {
        if (inputNumber.value < 0) {
            result.innerHTML = "Please Enter a number bigger than 0";
            inputGuess.value = ""; 
            return; 
        }
        inputNumber.focus();
        minNumber = inputNumber.value;
        result.innerHTML = `Enter a number between ${minNumber} and ${maxNumber}`;
        counter--;
        count.innerHTML = `Number of attempts Left: ${counter}`;
        inputNumber.value = "";
            if (counter == 0) {
                result.innerText = "Sorry You Lost";
                result.style.color = "red";
                result.style.fontSize = "2rem";
                playagain.style.display = "inline";
                               
            }
            if (counter < 0) {
                window.alert("Wanna Play Again?? Press Restart Pls") ;
                               
            }

    } 
    else if (inputGuess.value == "") {
    result.innerHTML = "Enter a Number";
    }});



    playagain.addEventListener("click", () => {
        window.location.reload()
    });


