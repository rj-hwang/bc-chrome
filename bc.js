chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('bc.htm', {
    'bounds': {
      'width': 400,
      'height': 150
    }
  });
});