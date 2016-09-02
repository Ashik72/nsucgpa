jQuery( document ).ready( function( $ ) {

	$(".theDetail .form-control.gpa").val(null);
	$(".theDetail .form-control.credit").val(null);

	$(".addAnother").click(function(){

		var html = '<div class="input-group theDetail">';
  html += '<span class="input-group-addon" id="basic-addon1">Credit</span>';
  html += '<input type="text" class="form-control credit" placeholder="Credit" aria-describedby="basic-addon1">';
  html += '<span class="input-group-addon" id="basic-addon1">GPA</span>';
  html += '<input type="text" class="form-control gpa" placeholder="GPA" aria-describedby="basic-addon1">';
  html += '</div>';


		$(".theDetailGroup").append(html);

	})


$( ".theDetailGroup" ).on( "focusout", ".input-group.theDetail", function() {


	initiateCalculation($(this));

});

$(".calculate_btn").click(function(){


  		var totalCredit = 0;
		var totalGpa = 0;
	  var gpa =  1;
	  var credit =  1;


	  calCulateCGPA(gpa, credit, totalCredit, totalGpa);


})


var initiateCalculation = function(thisElement = null) {

	  var gpa =  Math.abs(parseFloat(thisElement.find(".gpa").val()));
	  var credit =  Math.abs(parseFloat(thisElement.find(".credit").val()));

  	var totalCredit = 0;
	var totalGpa = 0;

  calCulateCGPA(gpa, credit, totalCredit, totalGpa);

}

var calCulateCGPA = function(gpa = null, credit = null, totalCredit = null, totalGpa = null) {

	if (gpa == null || isNaN(gpa))
		return;

	if (credit == null || isNaN(credit))
		return;


  	$(".theDetail .form-control.credit").each(function() {

  		theEnteredCredit = Math.abs(parseFloat($(this).val()));

  		if (theEnteredCredit == null || isNaN(theEnteredCredit))
  			theEnteredCredit = 0;


  		totalCredit += theEnteredCredit;


  	})

  	var totalScore = 0;

  	$(".theDetail .form-control.gpa").each(function() {

  		totalGpa += Math.abs(parseFloat($(this).val()));

  		theGPA = Math.abs(parseFloat($(this).val()));
  		theCredit = Math.abs(parseFloat($(this).parent().children('.credit').val()));

  		if (theGPA == null || isNaN(theGPA))
  			theGPA = 1;

  		if (theCredit == null || isNaN(theCredit))
  			theCredit = 0;



  		totalScore += theCredit * theGPA;

  	})

/*  	console.log("Credit: " + totalCredit);
  	console.log('<br>')
 	console.log("CGPA: " + totalGpa)
  	console.log('<br>')
 	console.log("Score: " + totalScore)
  	console.log('<br>')
*/
  	var cgpa_latest = (totalScore/totalCredit).toFixed(2);

  	$(".theCGPA h1").text(cgpa_latest);

  	if (cgpa_latest >= 3)
  		$(".theCGPA h1").css('color', 'green');
  	else if (cgpa_latest <= 3 && cgpa_latest > 2)
  		$(".theCGPA h1").css('color', 'orange');
  	else if (cgpa_latest <= 2)
  		$(".theCGPA h1").css('color', 'red');


}


} );