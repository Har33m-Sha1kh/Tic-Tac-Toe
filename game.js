
document.addEventListener('DOMContentLoaded', function () {

    var turn = 'X';
    var boxes = document.getElementsByClassName('box');
    var result = document.querySelector('.result');
    var boxtext = document.getElementsByClassName('boxtext');
    var audioturn=new Audio('TunePocket-Short-Swoosh-Transition-01-Sec-Preview.mp3');
    var winaud=new Audio('success-fanfare-trumpets-6185.mp3')
    var drawaud=new Audio('wah-wah-sad-trombone-6347.mp3')



    function changeturn() {
        return turn == 'X' ? '0' : 'X';
    }



    function checkwin() {
        var wincond = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]


        wincond.forEach(function (e) {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText)
                && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)
                && (boxtext[e[0]].innerText !== '')) {
 
                winaud.play();
                result.innerText = ` PLAYER HOLDING ${turn} WINS`;

                e.forEach(function (a) {
                    boxes[a].style.backgroundColor = 'rgb(0, 128, 0)';

                    setTimeout(() => { boxes[a].style.backgroundColor = ''; }, 2800)

                    Array.from(boxtext).forEach(function (e) {
                        setTimeout(() => { e.innerText = ''; }, 2800)
                    })

                })





            } else if ((boxtext[0].innerText !== '') && (boxtext[0].innerText !== '') && (boxtext[0].innerText !== '') && (boxtext[1].innerText !== '') && (boxtext[2].innerText !== '') && (boxtext[3].innerText !== '') && (boxtext[4].innerText !== '') && (boxtext[5].innerText !== '') && (boxtext[6].innerText !== '') && (boxtext[7].innerText !== '') && (boxtext[8].innerText !== '')) {
                drawaud.play();
                result.innerText = `OOPS! GAME DRAW`;

                Array.from(boxtext).forEach(function (e) {
                    setTimeout(() => { e.innerText = ''; }, 4800)
                })
            }
        })

    }




    Array.from(boxes).forEach(function (element) {
        let boxtxt = element.querySelector('.boxtext');
        element.addEventListener('click', function () {
            if (boxtxt.innerText == '') {
                audioturn.play();
                result.innerText = `TURN FOR ${turn}`;
                turn = changeturn();
                boxtxt.innerText = turn;
                
            }
            checkwin();
        })
    })
})














