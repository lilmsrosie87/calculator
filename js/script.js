$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var string = "";
    var totaldiv = $(#total);
    total.text("0");
	
$("#number a").not("#clear,#clearall").click(function(){
	append.text("#operator");
	
});



// $(document).ready(function(){
    // $("#enter").click(function(){
      // $("#number").text("Whoop there it is!");
  // });
// });

// window.onload = function() {
	// document.getElementById("number").innerHTML = "Counting now bitch!"