function Login(){
    player_name=document.getElementById("playername").value;
    localStorage.setItem("player_name", player_name);

    if(player_name==""){
        alert("PLEASE ENTER YOUR NAME");
    }
    else{
        window.location="gamepage.html";
    }
}