var y=Math.floor(Math.random()*10+1);
var guess=1;
player_name=localStorage.getItem("player_name");
function submit(){
    var x=document.getElementById("guessField").value;
    if(x==y){
        alert("CONGRADULATION!!!"+ player_name+" YOU GUESSED IT RIGHT IN "+ guess +" GUESS(ES)");
        guess=1;

    }
    else if(x>y){
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else{
        guess++;
        alert("OOPS SORRY! TRY A BIGGER NUMBER")
    }
}
function playAgain(){
    y=Math.floor(Math.random()*10+1);
    document.getElementById("guessField").value="";

}