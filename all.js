let ring = new Array (1);
ring[0]="RAMS AND FALCONS GO BACK AND FORTH, BUT RAMS PULL AHEAD AT END";
ring[1]= "RECAPPING WRIGHT'S HISPANIC HERITAGE MONTH POETRY READING";
ring[2]="WRIGHT COLLEGE PERFORMING <br>FIRST PLAY SINCE COVID-19 IN MID-NOVEMBER";
ring[3]="PREVIEWING THE MIDTERM ELECTIONS";

let Elden = " ";




for (var i = 0; i < ring.length; i++){
    Elden += "<tr>";
    Elden += "<th>";
    Elden += "<img id='anime' src='images/item"+i+".jpg' />";
    Elden += "<div id='goku' >" + ring[i] + "</div>";
    Elden += "<button onclick = 'lol()' id='buy' value = " + i + " id='goku'>READ MORE</button>";
    Elden += "</tr>";
    Elden += "</th>";

    oak()


}
var water = document.getElementById("buy").value;
function lol(){
        document.getElementById("buy").onclick = function() {
            location.href = "news1.html"
        }
        console.log(water)

}
function oak(){

    document.getElementById("misty").innerHTML= Elden;
}

