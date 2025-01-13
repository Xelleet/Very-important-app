function changeBackground(){
    var color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    document.body.style.backgroundColor = color;
    document.getElementById('current-color').textContent = color;
}