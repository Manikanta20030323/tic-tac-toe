const GameStatus=document.querySelector('[GameStatus]');
const toyContainer=document.querySelector('.tic-tac-toe');
const newgame=document.querySelector('[newgame]');
const boxItem=document.querySelectorAll('.box');

//initilaizing the current player
let current_player="X";
let gridArray=["","","","","","","","",""];
let winning3=[];
let winingCase=[[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],[0,4,8],[2,4,6]];
function initilaize_game()
{
    current_player="X";
    GameStatus.textContent= `Current Player - ${current_player}`;
    gridArray=["","","","","","","","",""];
     boxItem.forEach((divs)=>{
                divs.style.pointerEvents="all";
                divs.innerHTML="";
            });
            if(winning3.length!=0)
            {
                winning3.forEach((ele)=>{
                    boxItem[ele].classList.remove('background-color');
                })
            }
            winning3=[];
    //remove newGmae button
    newgame.classList.remove('active');


}

initilaize_game();

function switchPlayers(){
    if(current_player=="X")
    {
        current_player="O";
    }
    else{
        current_player="X";
    }
}

function findWinner(){

    winingCase.forEach((ele,ind)=>{
        if(gridArray[ele[0]]!="" &&  gridArray[ele[0]]==gridArray[ele[1]] && gridArray[ele[1]]==gridArray[ele[2]])
        {
            
            GameStatus.textContent=  `Winner is - ${gridArray[ele[0]]}`;
            ele.forEach((ind)=>{
                boxItem[ind].classList.add('background-color');
                winning3.push(ind);
            });

            boxItem.forEach((divs)=>{
                divs.style.pointerEvents="none";
            });

            newgame.classList.add('active')
        }
    })


    gridArray.forEach((ele)=>{
        if(ele=="")return;
    });

}

function handler(index)
{
    console.log("touched player is ",boxItem[index].textContent)
    if(boxItem[index].textContent=="")
    {
        gridArray[index]=current_player;
        boxItem[index].textContent=current_player;
        switchPlayers();
        findWinner();
    }
    boxItem[index].style.pointerEvents="none";

    
    
}
//playing event
boxItem.forEach((ele,index)=>{
    ele.addEventListener('click', function(){
       
        handler(index);
    });
});


function newGameHandler(){

}
newgame.addEventListener('click',initilaize_game);