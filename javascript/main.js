/* CURRENTLY IN: javascript/main.js */

$(function() {


(function(){

	$.getJSON( "javascript/sections.json", function(response) {
		var length = response.length;

		for (p=0;p<length; p++) { 
			var data = response[p];
			var title = data.title;
			var teaser = data.teaser;
			var img = data.image;
			var url = data.url;

			var section = $('<div />')
			section.addClass('section')
			section.append('<h3>' + title + '</h3>')
			section.append('<img src="images/' + img + '">')
			section.append('<p>' + teaser + '</p>')
			section.append('<span><a href="' + url + '">Learn More</a></span>')

			$('.dark-box').append(section)
		}
	
	});

}());


});