let f = new Date();
let b = 6 - f.getDay();
if (b > 1){
    alert('Only ' + b + ' days to the weekend! :D')
}
else if (b == 1) {
    alert('Only ' + b + ' day to the weekend! :D')
}
else {
    alert('It"\'"s the weekend!' )
}

function txtColor(){
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    var c = 'rgb('+ red +','+ blue +','+ green +')';
    document.body.style.color= c;
    document.getElementById('box').value = c;
}
