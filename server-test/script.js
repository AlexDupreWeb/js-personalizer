/*if (!window.jQuery) {
	var jq = document.createElement('script');
	jq.type = 'text/javascript';
	jq.src = 'https://code.jquery.com/jquery-1.11.3.min.js';
	document.getElementsByTagName('body')[0].appendChild(jq);
}*/
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://js.personalizer.server/plugin.js';
document.getElementsByTagName('body')[0].appendChild(script);

var div = document.createElement('div');
div.id = 'AdwTest';
document.getElementsByTagName('body')[0].appendChild(div);