chrome.app.runtime.onLaunched.addListener(function() {
	// 创建一个窗口
	chrome.app.window.create('usb.htm', {
		'bounds': {
			'width': 400,
			'height': 150
		},
    	singleton: true,
    	id: "ChromeApps-BC-Dragon-USB1"
	});
});