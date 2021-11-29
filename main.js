// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

//Setup 'tock' sound
const tock = new Audio('sounds/tock.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3')

//Tock-Counter
let tockCounter = 0

// This function is called every 600ms
function update() {
    tockCounter++
    if  (tockCounter % 4 == 0){
        tock.play();
    }
    
    else{
    // Play the 'tick' sound
    tick.play();
    }
    let metCount = document.querySelector("#metronomeCount")
        metCount.innerHTML = tockCounter
    
}
console.log(tockCounter)
// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
