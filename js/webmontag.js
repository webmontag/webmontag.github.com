function initialize() {
	var contentString = '<p>Example Location<br />Grimmstraße 9<br />50823 Köln Ehrenfeld<br /><br>' +
		'<a href="https://twitter.com/wmcgn">www.twitter.com/wmcgn</a></p>' +
		'<img src="infoWindowImage.png" alt="Image" align="left" class="infoBoxIcon"/>';

	var secheltLoc = new google.maps.LatLng(50.94895731663069, 6.986802443861961);
	var myMapOptions = {
		zoom: 14,
		scrollwheel: false,
		center: secheltLoc,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var theMap = new google.maps.Map(document.getElementById("map"), myMapOptions);
	var marker = new google.maps.Marker({
		map: theMap,
		draggable: false,
		position: new google.maps.LatLng(50.94895731663069, 6.986802443861961),
		visible: true
	});

	var boxText = document.createElement("div");
	boxText.style.cssText = "margin-top: 8px; padding: 20px; overflow: hidden; color: #FFFFFF; font-weight: bold; height: 97px;" +
	'background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI4MjgyOCIgc3RvcC1vcGFjaXR5PSIwLjgiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjgiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);' +
	'background: -moz-linear-gradient(top,  rgba(40,40,40,0.9) 0%, rgba(0,0,0,0.9) 100%);' +
	'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(40,40,40,0.8)), color-stop(100%,rgba(0,0,0,0.9)));' +
	'background: -webkit-linear-gradient(top,  rgba(40,40,40,0.9) 0%,rgba(0,0,0,0.9) 100%);' +
	'background: -o-linear-gradient(top,  rgba(40,40,40,0.9) 0%,rgba(0,0,0,0.9) 100%);' +
	'background: -ms-linear-gradient(top,  rgba(40,40,40,0.9) 0%,rgba(0,0,0,0.9) 100%);' +
	'background: linear-gradient(to bottom,  rgba(40,40,40,0.9) 0%,rgba(0,0,0,0.9) 100%);' +
	'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#cc282828\', endColorstr=\'#cc000000\',GradientType=0 );' +

	'border-radius: 5px;' +
	'border: 1px solid #000000;';

	boxText.innerHTML = contentString;

	var myOptions = {
		content: boxText,
		disableAutoPan: false,
		maxWidth: 0,
		pixelOffset: new google.maps.Size(-140, 0),
		zIndex: null,
		boxStyle: {
			width: "340px"
		},
		closeBoxMargin: "10px 2px 2px 2px",
		closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
		infoBoxClearance: new google.maps.Size(1, 1),
		isHidden: false,
		pane: "floatPane",
		enableEventPropagation: false
	};

	var ib = new InfoBox(myOptions);

	google.maps.event.addListener(marker, 'click', function() {
		ib.open(theMap,marker);
	});
}

function triangle() {
	var el = $('.triangle'),
		box = el.parent(),
		width = box.width() / 2;

	el.css( {
		'border-left-width' : width,
        'border-right-width' : width
	});

}

$(document).ready(function(){
	// scroll body to 0px on click
	$( '#backtotop' ).click( function( e ) {
		e.preventDefault();

		$( 'body, html' ).animate({
			scrollTop: 0
		}, 300 );
	} );

	initialize();
	triangle();
	$(window).resize( triangle );
});
