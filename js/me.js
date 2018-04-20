// var tracks;
// function fetchTracks() {
// 	$.getJSON('//spotify.kiding.net', function(data) {
// 		if (data 
// 			&& data.tracks
// 			&& data.tracks.length) {
// 			tracks = data.tracks;
// 			changeGreetings();
// 		}
// 	});
// }

function changeAvatar() {
	$('#avatar').attr('src', 'image/avatar/' + ((Math.floor((Math.random())*100))%24) + '.png');
}

// function changeGreetings() {
// 	var g = $('#greetings');
// 	if (tracks) {
// 		var item = tracks[((Math.floor((Math.random())*100))%(tracks.length))],
// 			href = item && item.href,
// 			name = item && item.name,
// 			artist = item && item.artist;

// 		if(href && name && artist) {
// 			g.html(artist + ' - <a href="' + href + '">' + name + '</a>');
// 		} else {
// 			changeGreetings();
// 		}
// 	}
// }

function randomize() {
	// changeGreetings();
	changeAvatar();
}

var he = false;
var onscroll = function() {
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var h = document.documentElement.clientWidth * 0.4 * 0.6; // padding-top 40%
	var p = Math.round(t/h*100)/100;
	if(p < 0) {
		p = 0;
	} else if (p > 1) {
		p = 1;
	}
	$('.me-blur').css('opacity', p)

	if(t < 70) {
		he = true;
	} else if(t > 70 && he) {
		he = false;
		$('header').css('display', 'block');
		setTimeout(randomize);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	$('.me').css('opacity', 1);
	$('article').addClass('visible');
	window.scrollTo(0,1);
	
	setTimeout(function() {
		$('.me-blur').css('visibility', 'visible');
		window.addEventListener('scroll', onscroll);
		window.addEventListener('ontouchmove', onscroll);
	}, 100); 

	randomize();
	fetchTracks();
});
