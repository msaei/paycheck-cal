


$( document ).ready(function(){

	$('#calculateButton').click(function(){
    //console.log('hi from click');
    //$("#total-payment").html("there we go");
	mainFunction();
	});

var total_payment = 0;
var log_ID = 0;

function mainFunction(){
	var start_hour = document.getElementById("start-hour").value;
	var start_minute = document.getElementById("start-minute").value;
	var finish_hour = document.getElementById("finish-hour").value;
	var finish_minute = document.getElementById("finish-minute").value;
	var pay_rate = document.getElementById("pay-rate").value;
	if ((finish_hour * 1) < (start_hour * 1)) {
		finish_hour = (finish_hour * 1) + 12 ;
		console.log(finish_hour);
	}
	

	var start_time = (start_hour * 60) + (start_minute * 1);
	var finish_time = (finish_hour * 60) + (finish_minute * 1);
	var worked_time = finish_time - start_time  ;
	var worked_minutes = worked_time % 60 ;
	var worked_hours = (worked_time - worked_minutes)/60 ;
	var payment = worked_time / 60 * pay_rate  ;
	total_payment = total_payment + payment ;
	log_ID = log_ID + 1;

	//console.log(total_payment);

	//apend information to page
	var msg = "you worked from ";
	msg = msg + start_hour + ":" + start_minute;
	msg = msg + " to " + finish_hour + ":" + finish_minute;
	msg = msg + " you earned $" + payment + "."
	console.log(msg);
	var log_element = "<p id='log" + log_ID + "'>" + log_ID +'-' + msg ;
	log_element = log_element + "<button type=\"button\" class=\"close\" >&times;</button> </p>" ;
	$("div.log-div").append(log_element);
	$("#total-payment").html("Your paycheck is $"+ total_payment);
}



});