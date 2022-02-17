let hour = document.querySelector(".hour");
let minute  = document.querySelector(".minute");

let time = () => {
    let currentTime = new Date();

    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();

    hour.textContent =currentHour.toString();
    minute.textContent =currentMinute.toString().padStart(2, 0);

}
setInterval(time,1000);
time();


let buttonNumber = document.querySelectorAll("#num");
let display = document.querySelector("#screen");
let buttonOperation = document.querySelectorAll("#opt");
let ac = document.querySelector("#ac")
let optState = false;
let opt ="";
let final = 0;

buttonNumber.forEach(number =>{
    number.addEventListener("click",showNumber);

    function showNumber(){
        if(display.textContent == "0" || optState){
            display.textContent = "";
        }
       
        display.textContent += this.textContent;
        optState=false;
    }
});

buttonOperation.forEach(operation => {
    operation.addEventListener("click",calculator);

    function calculator() {
        optState = true;
        var newOpt = this.textContent;

        switch (opt) {
            case "+":
             display.textContent = final + Number(display.textContent);
            break;
            case "-":
             display.textContent = final - Number(display.textContent);
               break;
            case "×":
             display.textContent = final * Number(display.textContent);
            break;
            case "÷":
             display.textContent = final / Number(display.textContent);
            break;
            case "=":
                final = Number(display.textContent);
            break;
        }
        

        final = Number(display.textContent);
        opt = newOpt;
        
    }
});

ac.addEventListener("click",function(){
    display.innerHTML = "";
});

