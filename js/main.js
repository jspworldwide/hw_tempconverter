function convertToC() {

	//on click, get user input
	var f = $('.userTemp').val();
	console.log(f);
	//value of userTem input is a string
	//need to convert string in int
	f = parseInt(f);
	//convert user input (f) tso c
	//[C to ([F-32]) x 5/9]
	var cTemp = (f - 32) * (5/9);
	//display C result
	console.log(cTemp);
	$('.result').html(cTemp);

}

function convertToF() {

	var c = $('.userTempC').val();
	console.log(c);
	c = parseInt(c);
	var fTemp = (c * (5/9)) + (32);
	console.log(fTemp);
	$('.resultC').html(fTemp);

}

$ (function() {

	var cTemp = $('.convert').click(convertToC);
	var fTemp = $('.convertf').click(convertToF);

});

/*$ (function() {

//end c to f 

var celcTemp = $('.convert').click(convertToC);
var fTemp = $('.convertF').click(convertToF);



});*/
