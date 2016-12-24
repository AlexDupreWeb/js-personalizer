function ajax(method, url, apiKey, apiSecret, setCookie, async, params){
	//async default is true
	//params default is null
	async = async || true;
	params = params || null;
	
	var xhr = null;
	if(window.XMLHttpRequest || window.ActiveXObject){
		if(window.ActiveXObject){
			try{
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			}catch(e){
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}else{
			xhr = new XMLHttpRequest();
		}
	}else{
		//alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			if(xhr.responseText != ''){
				console.log("readyState: "+xhr.readyState+" - status: "+xhr.status);
				console.log("XHR: " + xhr.responseText);
				
				array = JSON.parse(xhr.responseText);
				
				getBottomBar(array.bottomBar);
				getPopin(array.popin);
				//return xhr.responseText; // C'est bon \o/
			}
		}
	};

	xhr.open(method, url, async);
	if(method == "POST"){
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}
	
	var str = "apiKey=" + apiKey + "&apiSecret=" + apiSecret + "&setCookie=" + setCookie + "&";
	if(params){
		for (var key in params) {
			if (params.hasOwnProperty(key)) {
			   str += key + "=" + params[key] + "&";
			}
		}
		
	}
	str = str.substring(0, str.length - 1);
	console.log("STR: " + str);
	xhr.send(str);
	
	return null;
}

function getBottomBar(config){
	var bottomBarConfig = config.bottomBar;
	var closeButtonConfig = config.closeButton;
	
	var bottomBarOpenerConfig = config.bottomBarOpener;
	var openButtonConfig = config.openButton;
	
	//console.log(config);
	var container = document.getElementById('AdwTest');
	
	var bottomBar = document.createElement('div');
	bottomBar.id = 'AdwBottomBar';
	bottomBar.style.backgroundColor = bottomBarConfig.backgroundColor;
	bottomBar.style.bottom = bottomBarConfig.bottom;
	bottomBar.style.display = bottomBarConfig.display;
	bottomBar.style.height = bottomBarConfig.height;
	bottomBar.style.left = bottomBarConfig.left;
	bottomBar.style.position = bottomBarConfig.position;
	bottomBar.style.right = bottomBarConfig.right;
	bottomBar.style.textAlign = bottomBarConfig.textAlign;
	bottomBar.style.top = bottomBarConfig.top;
	bottomBar.style.width = bottomBarConfig.width;
	container.appendChild(bottomBar);
	
	var closeButton = document.createElement('div');
	closeButton.id = 'AdwBottomBarCloseButton';
	closeButton.style.backgroundImage = closeButtonConfig.backgroundImage;
	closeButton.style.backgroundPosition = closeButtonConfig.backgroundPosition;
	closeButton.style.backgroundRepeat = closeButtonConfig.backgroundRepeat;
	closeButton.style.cursor = closeButtonConfig.cursor;
	closeButton.style.float = closeButtonConfig.float;
	closeButton.style.height = closeButtonConfig.height;
	closeButton.style.marginTop = closeButtonConfig.marginTop;
	closeButton.style.marginRight = closeButtonConfig.marginRight;
	closeButton.style.width = closeButtonConfig.width;
	closeButton.onclick = function() { /*alert('closeEvent');*/ closeBottomBar(); };
	bottomBar.appendChild(closeButton);
	
	var bottomBarOpener  = document.createElement('div');
	bottomBarOpener.id = 'AdwBottomBarOpener';
	bottomBarOpener.style.backgroundColor = bottomBarOpenerConfig.backgroundColor;
	bottomBarOpener.style.bottom = bottomBarOpenerConfig.bottom;
	bottomBarOpener.style.display = bottomBarOpenerConfig.display;
	bottomBarOpener.style.height = bottomBarOpenerConfig.height;
	bottomBarOpener.style.left = bottomBarOpenerConfig.left;
	bottomBarOpener.style.position = bottomBarOpenerConfig.position;
	bottomBarOpener.style.right = bottomBarOpenerConfig.right;
	bottomBarOpener.style.top = bottomBarOpenerConfig.top;
	bottomBarOpener.style.width = bottomBarOpenerConfig.width;
	container.appendChild(bottomBarOpener);
	
	var openButton = document.createElement('div');
	openButton.id = 'AdwBottomBarCloseButton';
	openButton.style.backgroundImage = openButtonConfig.backgroundImage;
	openButton.style.backgroundPosition = openButtonConfig.backgroundPosition;
	openButton.style.backgroundRepeat = openButtonConfig.backgroundRepeat;
	openButton.style.cursor = openButtonConfig.cursor;
	openButton.style.float = openButtonConfig.float;
	openButton.style.height = openButtonConfig.height;
	openButton.style.marginTop = openButtonConfig.marginTop;
	openButton.style.marginRight = openButtonConfig.marginRight;
	openButton.style.width = openButtonConfig.width;
	openButton.onclick = function() { /*alert('openEvent');*/ openBottomBar(); };
	bottomBarOpener.appendChild(openButton);
	
	var bottomBarContent = document.createElement('img');
	bottomBarContent.id = 'AdwBottomBarContent';
	bottomBarContent.alt = "Une image pour tester";
	bottomBarContent.src = "http://dev.alexandre-dupre.fr/script/1000x70_rose.jpg";
	
	bottomBarContent.style.height = '70px';
	bottomBarContent.style.width = '1000px';
	bottomBar.appendChild(bottomBarContent);
}

function closeBottomBar(){
	var div = document.getElementById('AdwBottomBar');
	div.style.display = "none";
	var div = document.getElementById('AdwBottomBarOpener');
	div.style.display = "block";
}

function openBottomBar(){
	var div = document.getElementById('AdwBottomBar');
	div.style.display = "block";
	var div = document.getElementById('AdwBottomBarOpener');
	div.style.display = "none";
}

// var retour = ajax("GET", "http://dev.alexandre-dupre.fr/script/script.php", AdwApiKey, AdwApiSecret, AdwSetCookie, true);
// console.log(ajax);

var retour = ajax("POST", "http://dev.alexandre-dupre.fr/script/script.php", AdwApiKey, AdwApiSecret, AdwSetCookie, true, {val0:"alex",val1:"andre"});
console.log(ajax);


function getPopin(config){
	var popinConfig = config.popin;
	var closeButtonConfig = config.closeButton;
	
	//console.log(config);
	var container = document.getElementById('AdwTest');
	
	var popin = document.createElement('div');
	popin.id = 'AdwPopin';
	popin.style.backgroundColor = popinConfig.backgroundColor;
	popin.style.display = popinConfig.display;
	popin.style.height = popinConfig.height;
	popin.style.left = popinConfig.left;
	popin.style.marginLeft = popinConfig.marginLeft;
	popin.style.marginTop = popinConfig.marginTop;
	popin.style.position = popinConfig.position;
	popin.style.top = popinConfig.top;
	popin.style.width = popinConfig.width;
	container.appendChild(popin);
	
	var closeButton = document.createElement('div');
	closeButton.id = 'AdwBottomBarCloseButton';
	closeButton.style.backgroundImage = closeButtonConfig.backgroundImage;
	closeButton.style.backgroundPosition = closeButtonConfig.backgroundPosition;
	closeButton.style.backgroundRepeat = closeButtonConfig.backgroundRepeat;
	closeButton.style.cursor = closeButtonConfig.cursor;
	closeButton.style.float = closeButtonConfig.float;
	closeButton.style.height = closeButtonConfig.height;
	closeButton.style.marginTop = closeButtonConfig.marginTop;
	closeButton.style.marginRight = closeButtonConfig.marginRight;
	closeButton.style.width = closeButtonConfig.width;
	closeButton.onclick = function() { /*alert('closeEvent');*/ closePopin(); };
	popin.appendChild(closeButton);
}

function closePopin(){
	var div = document.getElementById('AdwPopin');
	div.parentNode.removeChild(div);
}


// var sVar1 = encodeURIComponent("contenu avec des espaces");
// var sVar2 = encodeURIComponent("je vois que vous êtes un bon élève... oopa !");
// xhr.open("GET", "handlingData.php?variable1=" + sVar1 + "&variable2= " + sVar2, true);
// xhr.send(null);