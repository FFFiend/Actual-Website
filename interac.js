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
