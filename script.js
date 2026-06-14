// function for handling time in backend and update user interface
function updateClock(){
    const now = new Date(); // in-built funtion to handle task related to time and date
    let hours = now.getHours();// fetching hour 
    let minutes = now.getMinutes(); // fetching minutes
    let seconds = now.getSeconds(); // fectching seconds
    const days = [ // array for storing days name
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday",
        "Thursday", 
        "Friday", 
        "Saturday"];
    const months = [ // aray for storing month names
        "January", 
        "Februry", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"];
    let dayName = days[now.getDay()]; // fetching day in number and storing name of the day through array index
    let date = now.getDate(); 
    let monthName = months[now.getMonth()]; // fetching month in number and storing name of the month through array index
    // updation of elements on interface
    document.getElementById("day").innerHTML = dayName + " &bull; ";
    document.getElementById("date").innerText = date;
    document.getElementById("month").innerText = monthName;
    hours = hours < 10 ? "0" + hours : hours ;
    minutes = minutes < 10 ? "0" + minutes : minutes ;
    seconds = seconds < 10 ? "0" + seconds : seconds ;
    document.getElementById("time").innerText = `${hours} : ${minutes} : ${seconds}`;
}
setInterval(updateClock, 1000); // every second calling funtion to update time
updateClock();// calling update clock funtion on load of page
// getting essentials elements to perform different task
let themes = document.querySelectorAll(".color-box");
let body = document.querySelector(".main");
let black = document.getElementById("black");
let purple = document.getElementById("purple");
let blue = document.getElementById("blue");
let orange = document.getElementById("orange");
let green = document.getElementById("green");


// all the container 
let mainTimeDiv = document.querySelector(".main");
let alarmContainer = document.querySelector(".alarm-container");
let stopwatchContainer = document.querySelector(".stopwatch-container");
let timerContainer = document.querySelector(".timer-container");

// click event for user intraction
themes.forEach((theme) => {
    theme.addEventListener("click", () => {
        let color = theme.getAttribute("id"); // getting user choice theme 
        if(color === "black"){ //if black applying this css
            body.style.background = "black";
            mainTimeDiv.style.background = "black";
            alarmContainer.style.background = "black";
            stopwatchContainer.style.background = "black";
            timerContainer.style.background = "black";

            black.style.border = "2px solid white";
            purple.style.border = "none";
            blue.style.border = "none";
            orange.style.border = "none";
            green.style.border = "none";
            localStorage.setItem("theme", "black"); // saving theme to local storage
        }else if(color === "purple"){ //if purple applying this css
            body.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
            mainTimeDiv.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
            alarmContainer.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
            stopwatchContainer.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
            timerContainer.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
            purple.style.border = "2px solid white";
            black.style.border = "none";
            blue.style.border = "none";
            orange.style.border = "none";
            green.style.border = "none";
             localStorage.setItem("theme", "purple"); // saving theme to local storage
        }else if(color === "blue"){ //if blue applying this css
            body.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
            mainTimeDiv.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
            alarmContainer.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
            stopwatchContainer.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
            timerContainer.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
            blue.style.border = "none";
            black.style.border = "none";
            purple.style.border = "none";
            blue.style.border = "2px solid white";
            orange.style.border = "none";
            green.style.border = "none";
             localStorage.setItem("theme", "blue"); // saving theme to local storage
        }else if(color === "orange"){ //if orange applying this css
            body.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
            mainTimeDiv.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
            alarmContainer.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
            stopwatchContainer.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
            timerContainer.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
            orange.style.border = "none";
            black.style.border = "none";
            purple.style.border = "none";
            blue.style.border = "none";
            orange.style.border = "2px solid white";
            green.style.border = "none";
             localStorage.setItem("theme", "orange"); // saving theme to local storage
        }else if(color === "green"){ //if green applying this css
            body.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
            mainTimeDiv.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
            alarmContainer.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
            stopwatchContainer.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
            timerContainer.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
            green.style.border = "none";
            black.style.border = "none";
            purple.style.border = "none";
            blue.style.border = "none";
            orange.style.border = "none";
            green.style.border = "2px solid white";
            localStorage.setItem("theme", "green");// saving theme to local storage
        }
    })
})

// ---------- LOAD SAVED THEME ----------
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  if (savedTheme === "black") {
    body.style.background = "black";
    mainTimeDiv.style.background = "black";
    alarmContainer.style.background = "black";
    stopwatchContainer.style.background = "black";
    timerContainer.style.background = "black";
    black.style.border = "2px solid white";
  } 
  else if (savedTheme === "purple") {
    body.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
    mainTimeDiv.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
    alarmContainer.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
    stopwatchContainer.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
    timerContainer.style.background = "linear-gradient(135deg, #5a4fcf, #2b1055)";
    purple.style.border = "2px solid white";
  } 
  else if (savedTheme === "blue") {
    body.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
      mainTimeDiv.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
    alarmContainer.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
    stopwatchContainer.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
    timerContainer.style.background = "linear-gradient(135deg, #1e81b0, #0f2027)";
    blue.style.border = "2px solid white";
  } 
  else if (savedTheme === "orange") {
    body.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
      mainTimeDiv.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
    alarmContainer.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
    stopwatchContainer.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
    timerContainer.style.background = "linear-gradient(135deg, #f39c12, #d35400)";
    orange.style.border = "2px solid white";
  } 
  else if (savedTheme === "green") {
    body.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
    mainTimeDiv.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
    alarmContainer.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
    stopwatchContainer.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
    timerContainer.style.background = "linear-gradient(135deg, #2ecc71, #134e5e)";
    green.style.border = "2px solid white";
  }
}



// let mainTimeDiv = document.querySelector(".main");
// let alarmContainer = document.querySelector(".alarm-container");
// let stopwatchContainer = document.querySelector(".stopwatch-container");
// let timerContainer = document.querySelector(".timer-container");
let navBtns = document.querySelectorAll(".nav-btn");
navBtns.forEach((navbtn) => {
  navbtn.addEventListener("click", () => {
    navBtns.forEach(btn => {
      btn.classList.remove("active");
    });
    navbtn.classList.add("active");
    let btnId = navbtn.getAttribute("id");
    
    if(btnId == "time-tab"){
      mainTimeDiv.style.display = "flex";
      alarmContainer.style.display = "none";
      stopwatchContainer.style.display = "none";
      timerContainer.style.display = "none";
      
    }
    if(btnId == "alarm-tab"){
      mainTimeDiv.style.display = "none";
      alarmContainer.style.display = "flex";
      stopwatchContainer.style.display = "none";
      timerContainer.style.display = "none";
    }
    if(btnId == "stop-watch"){
      mainTimeDiv.style.display = "none";
      alarmContainer.style.display = "none";
      stopwatchContainer.style.display = "flex";
      timerContainer.style.display = "none";
    }
    if(btnId == "timer"){
      mainTimeDiv.style.display = "none";
      alarmContainer.style.display = "none";
      stopwatchContainer.style.display = "none";
      timerContainer.style.display = "flex";
    }
    
  });
});

// ==============================
// Alarm Settings
// ==============================

let alarms =
    JSON.parse(
        localStorage.getItem("alarms")
    ) || [];

let inputTime =
    document.getElementById("input-time");

let labelInput =
    document.getElementById("alarm-label");

let setAlarmBtn =
    document.getElementById("set-alarm");

let upcomingAlarms =
    document.querySelector(".upcoming-alarms");

let alarmPopup =
    document.querySelector(".alarm-popup");

let ringingLabel =
    document.getElementById("ringing-label");

let stopAlarmBtn =
    document.getElementById("stop-alarm");

let alarmSound =
    document.getElementById("alarm-sound");

let alarmTriggered = false;
let lastTriggeredTime = null;


// ==============================
// Create Alarm Card
// ==============================

function createAlarmCard(alarm){

    let newAlarm =
        document.createElement("div");

    newAlarm.classList.add(
        "scheduled-alarm"
    );

    newAlarm.innerHTML = `
        <p class="alarm-heading">
            ⏰ Alarm ${alarm.displayNo}
            <span class="alarm-time">
                ${alarm.time}
            </span>
        </p>

        <p class="alarm-title">
            ${alarm.label}
            <button class="delete-btn">
                Delete
            </button>
        </p>
    `;

    let deleteBtn =
        newAlarm.querySelector(
            ".delete-btn"
        );

    deleteBtn.addEventListener(
        "click",
        () => {

            alarms = alarms.filter(
                item => item.id !== alarm.id
            );

            localStorage.setItem(
                "alarms",
                JSON.stringify(alarms)
            );

            newAlarm.remove();
        }
    );

    upcomingAlarms.appendChild(
        newAlarm
    );
}


// ==============================
// Load Existing Alarms
// ==============================

alarms.forEach(alarm => {
    createAlarmCard(alarm);
});


// ==============================
// Set Alarm
// ==============================

setAlarmBtn.addEventListener(
    "click",
    () => {

        let userTime =
            inputTime.value;

        let userLabel =
            labelInput.value.trim();

        if(
            userTime === "" ||
            userLabel === ""
        ){
            alert(
                "Please enter time and label"
            );
            return;
        }

        if(
            alarms.length >= 3
        ){
            alert(
                "Maximum 3 alarms allowed"
            );
            return;
        }

        if(
            alarms.some(
                alarm =>
                    alarm.time === userTime
            )
        ){
            alert(
                "Alarm already exists"
            );
            return;
        }

        let newAlarm = {

            id: Date.now(),

            displayNo:
                alarms.length + 1,

            time:
                userTime,

            label:
                userLabel
        };

        alarms.push(
            newAlarm
        );

        localStorage.setItem(
            "alarms",
            JSON.stringify(alarms)
        );

        createAlarmCard(
            newAlarm
        );

        inputTime.value = "";
        labelInput.value = "";
    }
);


// ==============================
// Check Alarms
// ==============================

function checkAlarms(){

    let now =
        new Date();

    let currentTime =

        String(
            now.getHours()
        ).padStart(2,"0")

        + ":"

        +

        String(
            now.getMinutes()
        ).padStart(2,"0");


    if(
        currentTime !==
        lastTriggeredTime
    ){
        alarmTriggered = false;
    }


    alarms.forEach(alarm => {

        if(

            alarm.time ===
            currentTime

            &&

            !alarmTriggered

        ){

            alarmSound.play();

            alarmPopup.classList.add(
                "active"
            );

            ringingLabel.textContent =
                alarm.label;

            alarmTriggered = true;

            lastTriggeredTime =
                currentTime;

            console.log(
                `Alarm Ringing: ${alarm.label}`
            );
        }

    });

}

setInterval(
    checkAlarms,
    1000
);


// ==============================
// Stop Alarm
// ==============================

stopAlarmBtn.addEventListener(
    "click",
    () => {

        alarmSound.pause();

        alarmSound.currentTime = 0;

        alarmPopup.classList.remove(
            "active"
        );

    }
);

// stopwatch logic
let startBtn = document.getElementById("start-stopwatch");
let pauseBtn = document.getElementById("pause-stopwatch");
let resetBtn = document.getElementById("reset-stopwatch");
let lapBtn = document.getElementById("mark-lap-stopwatch");

let display = document.querySelector(".stopwatch-display");
let lapList = document.querySelector(".lap-list");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;
let running = false;

// format time
function formatTime() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = `${h}:${m}:${s}`;
}

// start stopwatch
startBtn.addEventListener("click", function () {
    if (running) return;

    running = true;

    timer = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        formatTime();
    }, 1000);
});

// pause stopwatch
pauseBtn.addEventListener("click", function () {
    running = false;
    clearInterval(timer);
});

// reset stopwatch
resetBtn.addEventListener("click", function () {
    running = false;
    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    formatTime();

    lapList.innerHTML = "";
});

// LAP (optional feature: double click display to add lap)
lapBtn.addEventListener("click", function () {
    if (!running) return;

    let lapTime = display.innerText;

    let lapItem = document.createElement("div");
    lapItem.classList.add("lap-item");
    lapItem.innerText = `Lap - ${lapTime}`;

    lapList.prepend(lapItem);
});

// initial display
formatTime();

// timer 
// TIMER LOGIC (isolated naming)



let timerCountdown;
let timerRunning = false;

let timerTotalSeconds = 0;

// inputs
let timerHoursInput = document.getElementById("hours");
let timerMinutesInput = document.getElementById("minutes");
let timerSecondsInput = document.getElementById("seconds");

// display (IMPORTANT: different class than stopwatch)
let timerDisplay = document.querySelector(".timer-display");

// buttons
let timerStartBtn = document.getElementById("start-timer");
let timerPauseBtn = document.getElementById("pause-timer");
let timerResetBtn = document.getElementById("reset-timer");


// format function
function formatTimerTime(totalSec) {
    let h = Math.floor(totalSec / 3600);
    let m = Math.floor((totalSec % 3600) / 60);
    let s = totalSec % 60;

    return (
        String(h).padStart(2, "0") + ":" +
        String(m).padStart(2, "0") + ":" +
        String(s).padStart(2, "0")
    );
}


// update UI
function updateTimerDisplay() {
    timerDisplay.innerText = formatTimerTime(timerTotalSeconds);
}


// START TIMER
timerStartBtn.addEventListener("click", function () {

    if (timerRunning) return;

    // first time load inputs
    if (timerTotalSeconds === 0) {
        let h = parseInt(timerHoursInput.value) || 0;
        let m = parseInt(timerMinutesInput.value) || 0;
        let s = parseInt(timerSecondsInput.value) || 0;

        timerTotalSeconds = (h * 3600) + (m * 60) + s;
    }

    if (timerTotalSeconds <= 0) return;

    timerRunning = true;

    timerCountdown = setInterval(() => {

        timerTotalSeconds--;

        updateTimerDisplay();

        if (timerTotalSeconds <= 0) {
            clearInterval(timerCountdown);
            timerRunning = false;
            alert("⏰ Timer finished!");
        }

    }, 1000);
});


// PAUSE TIMER
timerPauseBtn.addEventListener("click", function () {
    clearInterval(timerCountdown);
    timerRunning = false;
});


// RESET TIMER
timerResetBtn.addEventListener("click", function () {
    clearInterval(timerCountdown);
    timerRunning = false;

    timerTotalSeconds = 0;

    timerHoursInput.value = "";
    timerMinutesInput.value = "";
    timerSecondsInput.value = "";

    updateTimerDisplay();
});


// initial display
updateTimerDisplay();