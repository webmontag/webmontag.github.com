function initialize() {
	var markers = $( '#map-markers > div' ),
		mapCanvas = $( '#map-canvas' ),
		mapCenter = new google.maps.LatLng( 50.941285, 6.958187 ), // Cologne
		mapOptions = {
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: mapCenter,
			backgroundColor: '#fff',
			scrollwheel: false
		},
		map = new google.maps.Map( mapCanvas[0], mapOptions ),
		markerIcon = new google.maps.MarkerImage(
			'images/marker.png',
			new google.maps.Size(20,40),
			new google.maps.Point(0,0),
			new google.maps.Point(10,40)
		),
		markerShadow = new google.maps.MarkerImage(
			'images/marker.png',
			new google.maps.Size(44,40),
			new google.maps.Point(20,0),
			new google.maps.Point(12,40)
		);

	markers.each( function() {
		var that = $( this );
		var loc = that.data( 'loc' ).split( ',' );
		var position = new google.maps.LatLng(
			parseFloat( loc[0] ),
			parseFloat( loc[1] )
		);
		var title = that.data( 'title' ) || '';

		var marker = new google.maps.Marker({
			position: position,
			map: map,
			icon: markerIcon,
			shadow: markerShadow,
			title: title,
			animation: google.maps.Animation.DROP
		});

		var infoBox = new InfoBox( {
			content: that.html(),
			pixelOffset: new google.maps.Size(-145, 0),
			boxStyle: {
				width: '290px'
			},
			boxClass: 'infobox',
			closeBoxMargin: '5px',
			closeBoxURL: 'images/close.png'
		} );

		google.maps.event.addListener( marker, 'click', function() {
			infoBox.open( map, marker );
		} );
    } );
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
