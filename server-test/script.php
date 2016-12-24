<?php
header("Access-Control-Allow-Origin: http://js.personalizer.clientd");

$picto_close_blanc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4jY2TSQGAMAwEIwGJSEACDpCAlEpAQiUgYfhwlLZJN89mZ3obMAMnsJlYwHYziwGZr5IA70U+G7DyL1dSwbyr7jQaSSezA1MUSDIcSWQ4kOjwQKLBgWB4xcoWYolzYPVYX+LAk9NLMhxk0tOon3IDRxMZcCiwI8nG953XEVxI3u98AW2lJ/jqCuSNAAAAAElFTkSuQmCC";
$picto_close_noir  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgklEQVQ4jZWTWw3AIAxFjwQkTsIk4AAJSEHCJCBhErafPQij3aUJP/SeQ0JTgAXYgYRe6WJWgAoc1ykCnJt8BYjNxZ8kd9lkNUaSPpOB4AXKDOxJZNiSTMGeRIYtgTJiE5Ylow9TRmzCweh9JMqoTEkUYO8hNhEeSSq86xwF+K5nnU8+ynOQKkzRcAAAAABJRU5ErkJggg==";
$picto_chevron_up_blanc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgElEQVQ4jd3Suw3CQBCE4QtcAkguh9CFOCAgcEhGEUZyES6HIiiB8CPgLJ0O+Z0gRtpo9x/NSBvCfwsVqq3wFS8f3fbAVpmgSaA+zqBmLVzEmTfJYncok90R99E6U3Byc0D7ZYJzHnuiYl7nEvBYAo+YPANOMcUsnJnUtj7Zb+kNBOsLKm2SqTgAAAAASUVORK5CYII=";
$picto_chevron_up_noir = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVQ4jWNgGPbAA4rJAhUMDAzfGRgY/jMwMNRTohmGiTakAEnTaiiG8QtI1cwCxUQZguzs6QwMDBJIcqIMDAxT8HkHn2YYEGFgYJiMzZAMLM7GBdC9k8PAwMBwmUjN2Ax5zsDAwOAAdQUxmpENSWGgIJENIgAAdaMt+QPHEo4AAAAASUVORK5CYII=";

/**
 * Protection des clés, on vérifie que les données du REQUEST sont bien celles programmées.
 */
$key_protection = array('apiKey','apiSecret','setCookie','val0','val1');
$key_request = array_keys($_REQUEST);

foreach($key_request as $key){
	if(!in_array($key, $key_protection)){
		unset($_REQUEST[$key]);
	}
}

/**
 * Affection du REQUEST à une variable.
 */
$params = isset($_REQUEST) && !empty($_REQUEST) ? $_REQUEST:null;
// var_dump($params);

/**
 * Desctruction des variables inutiles.
 */
unset($key_protection);
unset($key_request);
unset($_REQUEST);

/**
 * Contr�le de l'authentification
 */
if($params["apiKey"] == "alex123456" && $params["apiSecret"] == "01abcde23fghij45klmno67pqrst89uvwyz"){
	
	/**
	 * Fin du script, envoi des informations
	 */
	echo json_encode(array(
		'bottomBar' => array(
			'bottomBar' => array(
				'backgroundColor' => "#aaaaaa",
				'bottom' => "0",
				'display' => "block",
				'height' => "70px",
				'left' => "0",
				'position' => "fixed",
				'right' => "0",
				'textAlign' => "center",
				'top' => "",
				'width' => "100%",
				'' => "",
			),
			'bottomBarOpener' => array(
				'backgroundColor' => "#000000",
				'bottom' => "0",
				'display' => "none",
				'height' => "30px",
				'left' => "auto",
				'position' => "fixed",
				'right' => "0",
				'top' => "",
				'width' => "150px",
				'' => "",
			),
			'closeButton' => array(
				'backgroundImage' => "url('$picto_close_blanc')",
				'backgroundPosition' => "center center",
				'backgroundRepeat' => "no-repeat",
				'cursor' => "pointer",
				'float' => "right",
				'height' => "20px",
				'marginTop' => "3px",
				'marginRight' => "5px",
				'width' => "20px",
			),
			'openButton' => array(
				'backgroundImage' => "url('$picto_chevron_up_blanc')",
				'backgroundPosition' => "center center",
				'backgroundRepeat' => "no-repeat",
				'cursor' => "pointer",
				'float' => "right",
				'height' => "20px",
				'marginTop' => "3px",
				'marginRight' => "5px",
				'width' => "20px",
			),
		
		),
		'popin' => array(
			'popin' => array(
				'backgroundColor' => "#ffa500",
				'display' => "block",
				'height' => "500px",
				'left' => "50%",
				'marginLeft' => "-250px",
				'marginTop' => "-125px",
				'position' => "fixed",
				'top' => "25%",
				'width' => "500px",
				'' => "",
			),
			'closeButton' => array(
				'backgroundImage' => "url('$picto_close_noir')",
				'backgroundPosition' => "center center",
				'backgroundRepeat' => "no-repeat",
				'cursor' => "pointer",
				'float' => "right",
				'height' => "20px",
				'marginTop' => "3px",
				'marginRight' => "5px",
				'width' => "20px",
			),
		),
	));
	
}else{
	echo null;
	die();
}

/*
BLANC

									
NOIR



*/




?>