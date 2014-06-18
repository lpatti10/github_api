		var repo, name, descr, update, lang, star, fork = '';
			ghRepos.results.forEach (function (a) {
				name = '<li><a>' + a.name + '</a>';
				descr = '<h4>' + a.description + '</h4>';
				update = '<h6>' + a.updated_at + '</h6>';
				lang = '<h5>' + a.language + '</h5>';
				star = '<h5>' + a.stargazers_count + '</h5>';
				fork = '<h5>' + a.forks_count + '</h5>';
				repo = '<li>' + name + descr + update + lang + star + fork ;
				repo += '</li>';
				$('#repoList').append(repo);
			});

/*
// ETSY SNIPPET ////////////////////////////////////////////////////////////////////////////
var item = '';

etsyitems.results.forEach (function (a) {
	item = '<li><img src="' + a.Images[0].url_170x135 + '" /><h4>' + a.title + '</h4><h5>' + a.user_id + '</h5><a href="#">' + '$' + a.price + ' ' + a.currency_code +'</a>';
	item += '</li>';
	$('#tile').append(item);
});

		//Could have done this...
		var image, description, vendor, price = '';
			etsyitems.results.forEach (function (a) {
				image = '<li><img src="' + a.Images[0].url_170x135 + '" />';
				description = '<h4>' + a.title + '</h4>';
				vendor = '<h5>' + a.user_id + '</h5>';
				price ='<a href="#">' + '$' + a.price + ' ' + a.currency_code +'</a>';
				item = '<li>' + image + description + vendor + price;
				item += '</li>';
				$('#tile').append(item);
			});

		var track, title, artwork;
			rocktracks.forEach (function (a) {
		  title = '<p>' + a.title + '</p>';
		  artwork = '<img src="' + a.artwork_url + '" />';
		  track = '<li>' + artwork + title;
		  track += '</li>';
		  $('#tracks').append(track);
		});

// CLASS SNIPPETS (WEDNESDAY, JUNE 18) ////////////////////////////////////////////////////////
// Returns an array of objects
_.each(dogfishhead.beers, function (beer) {
	$('.some-container').append(renderTemplate(beer));
});

// Grab the template string
var templateString = $('#item-template').text();

var renderTemplate = _.template(templateString);

_.each(dogfishhead.beers, function (beer) {
	$('.some-container').append(renderTemplate(beer));
});


// Templating...
var templateString = $('#item-template').text();
var renderTemplate = _.template(templateString);
var freshHTML = renderTemplate({name: 'Dogfish Head'});
	// Injects the fresh HTML into the page
  $('.some-container').append(freshHTML);
  // Returns: <ul class = "some-container"></ul>

_.each(dogfishhead.beers, function (beer) {
  $('.some-container').append(renderTemplate(beer));
});

*/