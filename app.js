class SmartWatch {
    UpdateTime = () => {
        let SmallTime = document.getElementById("SmallTime");
        let time = document.getElementById("Time");
        let day = document.getElementById("Day");
        let d = new Date();
        let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        let minute =
            d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        let second =
            d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
        time.textContent = hour + ":" + minute + ":" + second;
        SmallTime.textContent = hour + ":" + minute;
        day.textContent =
            d.getDay() == 1
                ? "Monday"
                : d.getDay() == 2
                ? "Tuesday"
                : d.getDay() == 3
                ? "Wednesday"
                : d.getDay() == 4
                ? "Thursday"
                : d.getDay() == 5
                ? "Friday"
                : d.getDay() == 6
                ? "Saturday"
                : "Sunday";
    };
}

window.onload = () => {
    let SW = new SmartWatch();
    setInterval(SW.UpdateTime, 1000);
};
