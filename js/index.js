

$(document).ready(function() {
	$("#getCollection").click(doGetCollection);
	$("#get").click(doGET);
	$("#post").click(doPOST);
	$("#put").click(doPUT);
	$("#delete").click(doDELETE);
});


// GET collection
var doGetCollection = function() {
	$.ajax({
	  type: "GET",
	  url: "http://www.ciens.ucv.ve/ajaxati/tweets.json"
	})
	.done(function( result ) {
	  alert( "Data Saved: " + result );
	});
}

// GET
var doGET = function() {
	$.ajax({
	  type: "GET",
	  url: "http://www.ciens.ucv.ve/ajaxati/tweets/503.json"
	})
	.done(function( result ) {
	  alert( "Data Saved: " + result );
	});
}

// POST
var doPOST = function() {
	$.ajax({
	  type: "POST",
	  url: "http://www.ciens.ucv.ve/ajaxati/tweets.json",
	  data: { 
	  	"tweet[username]": "Mary",
	  	"tweet[content]": "supercalifragilisticexpialidocious" 
	  }
	})
	.done(function( result ) {
	  alert( "Data Saved: " + result );
	});
}

// PUT
var doPUT = function() {
	$.ajax({
	  type: "PUT",
	  url: "http://www.ciens.ucv.ve/ajaxati/tweets/503.json",
	  data: { 
	  	"tweet[content]": "supercalifragilisticexpialidocious"
	  }
	})
	.done(function( result ) {
	  alert( "Data Saved: " + result );
	});
}

// DELETE
var doDELETE = function() {
	$.ajax({
	  type: "DELETE",
	  url: "http://www.ciens.ucv.ve/ajaxati/tweets/500.json"
	})
	.done(function( result ) {
	  alert( "Data Saved: " + result );
	});
}




