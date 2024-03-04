let timer = document.getElementById('timer').textContent;
let counter = setInterval(countDown, 1000);

function countDown() {
    if (timer === 0) {
        clearInterval(counter);
        alert("Вы победили в конкурсе!");
        return;
    }
    timer--;
    document.getElementById('timer').textContent = timer;
}