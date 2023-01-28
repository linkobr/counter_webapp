var counter = 0;

document.getElementById("Number").innerText = counter

function incrementCounter(){
    document.getElementById("Number").innerText ++
}

function decrementCounter(){
    document.getElementById("Number").innerText --
}

function resetCounter(){
    document.getElementById("Number").innerText = 0
}