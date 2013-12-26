var DEVICE_INFOS = [
	{	// Standard OpenHCD USB Host Controller
		"vendorId": 1022, 
		"productId": 7808
	},
	{	// USB2.0 Camera
		"vendorId": 7758, 	// 0x1E4E
		"productId": 258	// 0x0102
	},
	{	// Jetion Digital Scanner
		"vendorId": 2760, 	// 0x0AC8
		"productId": 13408	// 0x3460
	}
];

function onDeviceFound(devices) {
	console.log(window.JSON.stringify(devices));
	this.devices=devices;
	if (devices) {
		if (devices.length > 0) {
			console.log("Device(s) found: "+devices.length);
		} else {
			console.log("Device could not be found");
		}
	} else {
		console.log("Permission denied.");
	}
}
// 检测USB设备
//chrome.usb.getDevices(DEVICE_INFOS[2], onDeviceFound);
//chrome.usb.getDevices(DEVICE_INFOS[0], onDeviceFound);
chrome.usb.getDevices(DEVICE_INFOS[1], onDeviceFound);
