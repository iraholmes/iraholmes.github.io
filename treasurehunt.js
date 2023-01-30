// variable declarations
var winner = 0
var loser = 0

const setWinner = () => {
   return winner = Math.floor(Math.random() * 16)
}

const setLoser = () => {
   do {
      loser = Math.floor(Math.random() * 16)
   }
   while (loser === winner);

   return loser
}

const treaasure = (selectedTile) => {
   
   setWinner()
   setLoser()
   
   if(selectedTile === winner){
    document.getElementById(`${selectedTile}`).innerHTML = "🏆"
 } else if (selectedTile === loser) {
    document.getElementById(`${selectedTile}`).innerHTML = "😈"
 } else {
    document.getElementById(`${selectedTile}`).innerHTML = "👍🏽"
 }
}