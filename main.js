var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
btn.onclick = function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    var rndCol2 = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    var rndCol3 = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    var rndSize = random(100) + 'px';
    document.body.style.backgroundColor = rndCol;
    document.getElementById('button').style.background = rndCol2;
    document.getElementById('button').style.color = rndCol3;
    document.getElementById('button').style.fontSize = rndSize;

}