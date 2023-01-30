const RedChecker = document.getElementById('RedChecker');
let RedArray = [];
const BlueChecker = document.getElementById('BlueChecker'); /*I DONT HAVE THIS YET */
const ButtonArray = document.getElementsByClassName('b'); 

//The amount of stacked checkers corresponding to each column
let Height1 = 0;
let Height2 = 0;
let Height3 = 0;
let Height4 = 0;
let Height5 = 0;
let Height6 = 0;
let Height7 = 0;
const StackHeightArray = [Height1,Height2,Height3,Height4,Height5,Height6,Height7];

//What turn it is in the game
let TurnCount = 1;
const DisplayTurn = document.getElementById("DisplayTurnCount");
//console.log(DisplayTurn);

DisplayTurn.innerHTML = TurnCount;

/*for (let i=0; i<21; i++) {
    RedArray.push(null);
};
console.log(RedArray);*/

for (let i=0; i<ButtonArray.length; i++){
    ButtonArray[i].addEventListener('click',(event)=> {
        if (i%2==0) {
            for (let r=0; r<21; r++) {
                RedArray[r] = RedChecker.cloneNode(true);
                let RedTop = 0;
                RedTop = StackHeightArray[i]*70 + 185;
                let RedTopString = RedTop+'px';
                RedArray[r].style.top = RedTopString;
                let RedLeft = 0;
                RedLeft = i*80 + 75;
                let RedLeftString = RedLeft+'px';
                RedArray[r].style.left = RedLeftString;
            }

        }  
        StackHeightArray[i]++;
        TurnCount++;
        DisplayTurn.innerHTML = TurnCount; //Updates the display of turn counter
        
    })
}

//Nothing to see here... heh... heh...
setInterval(()=>{alert('Feel my wrath!!! Mwahahahaha!');},3000);
