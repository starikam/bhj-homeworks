let counter = document.getElementById('clicker__counter').textContent;
const cookie = document.getElementById('cookie');

cookie.onclick = function() {
	counter++;
	document.getElementById('clicker__counter').textContent = counter;
	counter % 2 === 0 ? cookie.width = 200 : cookie.width = 220;
};