function dropdown(target){
    target.parentNode.querySelector('.dropcontent').classList.toggle("show");
}

window.onclick = function(e){
    if (!e.target.matches('.dropbtn')){
        var dropdown = document.getElementById("mydropdown");
        if (dropdown.classList.contains('show')){
            dropdown.classList.remove('show');
        }
    }
}