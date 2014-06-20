	/*
	// SUCCESSFUL INJECTION OF REPOS (in alpha order) (timestamps need conversions)
		var repo, icon, name, descr, update, lang, star, fork = '';
			ghRepos.results.forEach (function (a) {
				icon = '<li><span class="mega-octicon octicon-repo"></span>'
				name = '<a class="repolist-name">' + a.name + '</a>';
				descr = '<h4>' + a.description + '</h4>';
				update = '<h6>' + a.updated_at + '</h6>';
				lang = '<h5>' + a.language + '</h5>';
				star = '<h5><span class="octicon octicon-star">' + a.stargazers_count + '</h5>';
				fork = '<h5><span class="octicon octicon-git-branch">' + a.forks_count + '</h5>';
				repo = '<li>' + icon + name + descr + update + lang + star + fork;
				repo += '</li>';
				$('#repoList').append(repo);
			});
 */

// AJAX request to real-time ACCT data...
// Checking for secret and client code or setting to an empty string
	var cID = clientID || '';
	var cSECRET = clientSecret || '';

//Grabbing template strings
	var template = _.template( $('#sidebar_template').html() );
	var headTemplate = _.template( $('#header_template').html() );
	var repoTemplate = _.template( $('#main_template').html() );


// Function to run after request.
// Takes our data, passes it through our template and then outputs the rendered HTML inside of our #sidebar element
//		var buildPage = function (data) {
//  		$('#sidebar').html( template(data)) ;
//		});

//		$.getJSON('https://api.github.com/users/lpatti10').done(buildPage);


//Making request
 	$.getJSON("https://api.github.com/users/lpatti10", {client_id: cID, client_secret: cSECRET}, function (data){
	  $('#header').html( headTemplate(data));
	  $('#sidebar').html( template(data));

	});



// AJAX request to real-time REPO data...
	$.getJSON("https://api.github.com/users/lpatti10/repos", {client_id: cID, client_secret: cSECRET}, function (repoArray){
 		//$('#main').html( repoTemplate(data/*[0]*/));
 		//Running _.each on the array
 		_.each( repoArray, function( a ){ 
 			$('#main').append( repoTemplate(a));
 		});
 	});
		

	

// var templateString = $('#item-template').text();
// var renderTemplate = _.template(templateString);
// _.each(dogfishhead.beers, function (beer) {
//   $('.some-container').append(renderTemplate(beer));
// });



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