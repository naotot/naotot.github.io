$(document).ready(function(){
	var dataURL = 'https//api.instagram.com/v1/users/self/media/recent';
	var photoData;

	var getData = function(url) {
		$.ajax({
			url: url,
			dataType: 'jsonp',
			data: {
				access_token: '317491.3df75a0.80f8332dfc3b45a7abfe0ba4b3e84234',
				count: 12
			}

		})
		.done(function(data){
			photoData = data;
			console.dir(photoData);
		})
		.fail(function() {
			$('#gallery').text(textStatus);
		})
	}

	getData(dataURL);
});