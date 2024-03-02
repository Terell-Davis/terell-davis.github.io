document.addEventListener('DOMContentLoaded', function() {
    var homeButton = document.getElementById('home-button');
    var ganonGif = document.getElementById('ganon-gif');
    var suavementeAudio = document.getElementById('suavemente-audio');
    var hoverTimer, scaleInterval, volumeInterval;
  
    homeButton.addEventListener('mouseenter', function() {
      hoverTimer = setTimeout(function() {
        ganonGif.style.display = 'block';
        suavementeAudio.play();
  
        let scale = 0.1; //starting scale
        let volume = 2; //starting vol
        suavementeAudio.volume = volume;
  
        // Scale the GIF over time
        scaleInterval = setInterval(function() {
          scale += 0.1; // scaling speed and maximum
          ganonGif.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
        }, 1000);
  
        // Increase volume over time
        volumeInterval = setInterval(function() {
          volume += 0.1; // Adjust volume increase speed and maximum as needed
          if (volume <= 1) {
            suavementeAudio.volume = volume;
          }
        }, 1000); // Adjust interval as needed
      }, 5000); // 5 seconds hover time
    });
  
    homeButton.addEventListener('mouseleave', function() {
      clearTimeout(hoverTimer);
      clearInterval(scaleInterval);
      clearInterval(volumeInterval);
      ganonGif.style.display = 'none';
      suavementeAudio.pause();
      suavementeAudio.currentTime = 0; // Reset audio to start
    });
  });
  