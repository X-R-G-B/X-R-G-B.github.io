function SetTime(){
    console.log("salut")
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let DayMonthYear = day + "/" + month + "/" + year;

    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let HourMinuteSeconds = hour + ":" + minute + ":" + seconds;

    document.getElementById("time").innerHTML = DayMonthYear + " " + HourMinuteSeconds;
}
