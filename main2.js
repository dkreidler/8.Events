var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * number);
}

/*function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}*/
function bgChange(e) {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}
btn.addEventListener('click', bgChange);
// btn.onmouseout = bgChange;