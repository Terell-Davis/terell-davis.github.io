function dropdown(){
    document.getElementById("mydropdown").classList.toggle("show");
}

window.onclick = function(e){
    if (!e.target.matches('.dropbtn')){
        var dropdown = document.getElementById("mydropdown");
        if (dropdown.classList.contains('show')){
            dropdown.classList.remove('show');
        }
    }
}