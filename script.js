


$( document ).ready(function(){

	$('#calculateButton').click(function(){
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
	total_payment = (total_payment*1) + (payment*1) ;
	log_ID = log_ID + 1;

	//apend information to page
	var msg = "worked(";
	msg = msg + start_hour + ":" + start_minute;
	msg = msg + "~" + finish_hour + ":" + finish_minute;
	msg = msg + ")got $" + payment.toFixed(2) ;

	var log_element = '<p class = \'log-row\' data-pay='+payment+'>' + msg + "<button type=\"button\" class=\"close\" >&times;</button> </p>" ;
	$("div.log-div").prepend(log_element);
	$("#total-payment").html("Total: $"+ total_payment.toFixed(2));
}


$(".log-div").delegate(".close", "click",function(){
        $(this).parent().hide();
        var taken_payment = $(this).parent().data('pay');
        total_payment = total_payment - taken_payment ;
        $("#total-payment").html("Total: $"+ total_payment.toFixed(2));

 });

});