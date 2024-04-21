
var playerOne = prompt("Player One => choose your color: ");

var playerTwo = prompt("Player Two => choose your color: ");

var msgBox = $('div.Message');
msgBox.text("Game Started");
var tableIndexing = $('table td');
var lastClass = '';

msgBox.text("Player 1 turn, click on the box to select...");
tableIndexing.click( function() {
    console.log($(this));
    var rowIndex = $(this).parent().index();
    var colIndex = $(this).index();

    var reverseTbl;
    var btn;
    var btnClass;
    var reverseCnt = 6;
    while (true) {
        reverseTbl = $('table tr').eq(reverseCnt).find('td').eq(colIndex);
        
        btn = reverseTbl.children("button")
        btnClass = btn.attr("class");

        if (typeof btnClass === "undefined") {
            break;
        }
        reverseCnt = reverseCnt - 1;
    } 

    if (lastClass === '') {
        msgBox.text("Player 2 turn, click on the box to select...");
        console.log("player1");
        btn.addClass('red');
        lastClass = 'red';
    }
    else if (lastClass === 'red') {
        msgBox.text("Player 1 turn, click on the box to select...");
        console.log("player2");
        btn.addClass('green');
        lastClass = 'green';
    }
    else if (lastClass === 'green') {
        msgBox.text("Player 2 turn, click on the box to select...");
        console.log("player 1");
        btn.addClass('red');
        lastClass = "red";
    }
    console.log(rowIndex, colIndex);

    var player= findHorizontalMatch();

    if (player === "red") {
        console.log("player 1 wins");
        msgBox.text(playerOne+ ": won the match");
        // resetGame();
    }
    else if (player === 'green') {
        console.log("player 2 wins");
        msgBox.text(playerTwo+ ": won the match");
        // resetGame();
    }

    var player = findVerticalMatch();

    if (player === "red") {
        console.log("player 1 wins");
        msgBox.text(playerOne+ ": won the match");
        // resetGame();
    }
    else if (player === 'green') {
        console.log("player 2 wins");
        msgBox.text(playerTwo+ ": won the match");
        // resetGame();
    }


})

function findHorizontalMatch() {
    for (var row=0; row<7; row++) {
        for (var col=0; col<4; col++) {
            var col1 = $('table tr').eq(row).find('td').eq(col).children("button").attr("class");
            var col2 = $('table tr').eq(row).find('td').eq(col+1).children("button").attr("class");
            var col3 = $('table tr').eq(row).find('td').eq(col+2).children("button").attr("class");
            var col4 = $('table tr').eq(row).find('td').eq(col+3).children("button").attr("class"); 

            if (col1 === col2 && col1 === col3 && col1 === col4 && typeof col1 !== 'undefined') {
                console.log("Horizontal match ");
                msgBox.text("Horizontal Match Occured...")
                return col1
            }
        }
    }
}

function findVerticalMatch() {
    for (var col=0; col<7; col++) {
        for (var row=0; row<4; row++) {
            var row1 = $('table tr').eq(row).find('td').eq(col).children("button").attr("class");
            var row2 = $('table tr').eq(row+1).find('td').eq(col).children("button").attr("class");
            var row3 = $('table tr').eq(row+2).find('td').eq(col).children("button").attr("class");
            var row4 = $('table tr').eq(row+3).find('td').eq(col).children("button").attr("class");
            if (row1 === row2 && row1 === row3 && row1 === row4 && typeof row1 !== 'undefined') {
                console.log("Vertical Match");
                msgBox.text("Vertical Match Occured");
                return row1
            }
        }
    }
}


function resetGame() {
    for (var row=0; row<7; row++) {
        for (var col=0; col<7; col++) {
            var button = $('table tr').eq(row).find('td').eq(col).children("button");
            if (button.attr("class") === 'red') {
                button.removeClass('red');
            }
            else if (button.attr("class") === 'green') {
                button.removeClass('green');
            }
        }
    }
}