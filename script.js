var song = new Audio("audio/failure.mp3")

function check() {
    var user = document.getElementById("grade").value;

    if (user >= 0 && user < 40) {

        document.getElementById("display").innerHTML = "F - Fail";
        document.getElementById("display").style.color = "red";
        song.play()

    } else if (user >= 40 && user < 45) {

        document.getElementById("display").innerHTML = "D - Pass";
        document.getElementById("display").style.color = "red";
    } else if (user >= 45 && user < 50) {

        document.getElementById("display").innerHTML = "D - Average";
        document.getElementById("display").style.color = "orange";
    } else if (user >= 50 && user < 60) {

        document.getElementById("display").innerHTML = "C - Credit";
        document.getElementById("display").style.color = "green";

    } else if (user >= 60 && user < 70) {

        document.getElementById("display").innerHTML = "B - Good";
        document.getElementById("display").style.color = "green";
    } else if (user >= 70 && user <= 100) {

        document.getElementById("display").innerHTML = "A - Excellent";
        document.getElementById("display").style.color = "green";
    } else if (user > 100) {

        document.getElementById("display").innerHTML = "Not Recognized";
        document.getElementById("display").style.color = "black";
    } else if (grade.value == " ") {
        document.getElementById("display").innerHTML = "Not Recognized";
    }


}