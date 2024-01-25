document.getElementById('themeToggle').addEventListener('click', function() {
    var body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('purple-theme');
    } else {
        body.classList.remove('purple-theme');
        body.classList.add('dark-theme');
    }
});
