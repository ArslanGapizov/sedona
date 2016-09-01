function initMap() {
	var mapDiv = document.getElementById('map');
	var myLocation = {lat: 34.866103, lng: -111.771189};
	var center = {lat: 34.866103, lng: -111.771189};
    var map = new google.maps.Map(mapDiv, {
    	center: center,
        zoom: 9,
		disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map
    });
}
var searchWindow = document.querySelector('.search-hotel-form');
var windowBtn = document.querySelector('.search-hotel-form-btn');
if(windowBtn){
windowBtn.addEventListener('click', function(event){
    event.preventDefault();
    if(searchWindow.classList.contains('search-hotel-form-shown')){
        searchWindow.classList.remove('search-hotel-form-shown');
    }else{
        searchWindow.classList.add('search-hotel-form-shown');
    }
});
}
$('#slider-range').slider({
    range: true,
    min: 0,
    max: 4000,
    values: [ 0, 3000 ],
    slide: function( event, ui ) {
        $('#min_price').val(ui.values[0]);
        $('#max_price').val(ui.values[1]);
    }
});
