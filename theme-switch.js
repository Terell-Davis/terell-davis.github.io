document.addEventListener('DOMContentLoaded', function() {
    function changeTheme(event) {
      event.preventDefault();

      var selectedTheme = event.target.getAttribute('data-theme');

      document.body.classList.remove('default', 'light-theme', 'purple-theme', 'armour-theme','simpatico-theme');

      if (selectedTheme) {
        document.body.classList.add(selectedTheme);
      }
    }

    var themeOptions = document.querySelectorAll('#theme-menu a');
    themeOptions.forEach(function(option) {
      option.addEventListener('click', changeTheme);
    });
});
