const random = ["Rock", "Paper", "Scissor"];
let computer;
let player;
let result;

$(".btn").click(

    function () {
        player = $(this).text();
        let randomNumber = Math.floor(Math.random() * random.length);
        if (randomNumber == 0) {
            computer = random[0];
        }
        else if (randomNumber == 1) {
            computer = random[1];
        }
        else if (randomNumber == 2) {
            computer = random[2];
        }
        $("#comp").text(computer);
        $("#play").text(player);

        if (computer == player) {
            result = $("#rslt").text("Draw");
            $("#rslt").css("color", "black");
        }
        else if (computer == "Rock" || player == "Scissor") {
            $("#rslt").text("Computer wins");
            $("#rslt").css("color", "black");
        }
        else if (player == "Rock" || computer == "Scissor") {
            $("#rslt").text("Player wins");
            $("#rslt").css("color", "green");
        }
        else if (computer == "Rock" || player == "Paper") {
            $("#rslt").text("Player wins");
            $("#rslt").css("color", "green");
        }
        else if (player == "Rock" || computer == "Paper") {
            $("#rslt").text("Computer wins");
            $("#rslt").css("color", "black");
        }
        else if (computer == "Paper" || player == "Scissor") {
            $("#rslt").text("Player wins");
            $("#rslt").css("color", "green");
        }
        else if (player == "Paper" || computer == "Scissor") {
            $("#rslt").text("Computer wins");
            $("#rslt").css("color", "black");
            
        }
    }

)

