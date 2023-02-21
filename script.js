// readmore bg color change at active&inactive
const readMore = document.getElementById('readMore');
readMore.addEventListener('mousedown', activeBtn);
readMore.addEventListener('mouseup', inactiveBtn);

function activeBtn () {
    readMore.style.backgroundColor = "hsl(240, 100%, 5%)";
}
function inactiveBtn () {
    readMore.style.backgroundColor = "hsl(5, 85%, 63%)";
}