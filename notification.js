document.getElementById('mark-all')
let mainb = document.getElementById('mainb');
document.getElementById('mark-all').addEventListener('click', function () {
    mainb.innerHTML = "0"
    document.getElementById('Mark-webber').style.backgroundColor = "white"
    document.getElementById('angela-gray').style.backgroundColor = "white"
    document.getElementById('jacob-thompson').style.backgroundColor = "white"
    document.getElementById('dot1').style.display = "none"
    document.getElementById('dot2').style.display = "none"
    document.getElementById('dot3').style.display = "none"
});