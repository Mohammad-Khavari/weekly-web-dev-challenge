function updateEnergy(){
    energy.value = input.value
    input.value -= 1
    input.addEventListener("click",updateEnergy)
    if (energy.value <= 3){
        emojis.textContent= "😓"
    }else if(energy.value > 3 && energy.value < 7){
        emojis.textContent= "😐"
    }else{
        emojis.textContent="😄"
    }
   if (energy.value === 1){
       clearInterval(depletEnergy)
   }
}
updateEnergy()
