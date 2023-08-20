const start_button = document.querySelector("body > div.buttons > button:nth-child(1)");
const stop_button = document.querySelector("body > div.buttons > button:nth-child(2)");
const reset_button = document.querySelector("body > div.buttons > button:nth-child(3)");
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let inv;
start_button.addEventListener("click",function(){
    inv = setInterval(function(){
        if(milliseconds < 99){
            milliseconds++;
        }else if(seconds < 59){
            milliseconds = 0;
            seconds++;
        }else if(minutes < 59){
            seconds = 0;
            minutes++;
        }else if(hours < 24){
            hours++;
            minutes = 0;
            seconds = 0;
        }
        const formatted_minutes = minutes.toString().padStart(2,'0');
        const formatted_hours = hours.toString().padStart(2,'0');
        const formatted_seconds = seconds.toString().padStart(2, '0');
        const formatted_milliseconds = milliseconds.toString().padStart(2,'0');
        
        document.querySelector("body > div.timer").textContent = `${formatted_hours}:${formatted_minutes}:${formatted_seconds}.${formatted_milliseconds}`
    },10);


    stop_button.addEventListener("click",function(){
        clearInterval(inv);
    });
});
reset_button.addEventListener("click",function(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.querySelector("body > div.timer").textContent = "00:00:00"
});