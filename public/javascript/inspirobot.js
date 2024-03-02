function fetchInspirationalQuote() {
    $.get('https://inspirobot.me/api?generate=true', function(data) {
      // Assuming 'data' contains the direct URL to the generated image
      $('#inspirational-quote').attr('src', data);
    });
  }
  