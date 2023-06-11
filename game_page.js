num1 = "";
num2 = "";
question_turn = "player1";
answer_turn = "player2";
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score = parseInt(localStorage.getItem("player1_score"));
player2_score = parseInt(localStorage.getItem("player2_score"));

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" :" ;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML=player1_name+" Asks";
document.getElementById("player_answer").innerHTML=player2_name+" calculates";

function send(){
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;

    localStorage.setItem("number1",num1);
    localStorage.setItem("number2",num2);

    console.log(num1,num2);

    document.getElementById("output").innerHTML="<center><br><label>Q.</label><br><h2>"+num1+"X"+num2+"</h2><br><input type='number' id='anss' placeholder='Enter number'></input><br><button id='Check' class='btn btn-success' onClick='check()'>Check</button></center>"
}

function check(){
    ans = document.getElementById("anss").value;
    ansrealifnothenL = num1*num2;

    if (ans == ansrealifnothenL){
        if (answer_turn == "player1"){
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML="Question turn - "+player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
    }

    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player1_name;
    }
    
    localStorage.setItem("player1_score", player1_score);
    localStorage.setItem("player2_score", player2_score);
    document.getElementById("output").innerHTML="Doubt after this part";


}

function reset(){
    localStorage.setItem("player1_score", 0);
    localStorage.setItem("player2_score", 0);
    document.getElementById("player1_score").innerHTML=player1_score;
    document.getElementById("player2_score").innerHTML=player2_score;
    location.reload();
}