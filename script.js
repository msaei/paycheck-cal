var total_payment = 0;
var log_ID = 0;

function main(){
	let start_hour = document.getElementById("start-hour").value;
	let start_minute = document.getElementById("start-minute").value;
	let finish_hour = document.getElementById("finish-hour").value;
	let finish_minute = document.getElementById("finish-minute").value;
	let pay_rate = document.getElementById("pay-rate").value;
	if ((finish_hour * 1) < (start_hour * 1)) {
		finish_hour = (finish_hour * 1) + 12 ;
		console.log(finish_hour);
	}
	

	let start_time = (start_hour * 60) + (start_minute * 1);
	let finish_time = (finish_hour * 60) + (finish_minute * 1);
	let worked_time = finish_time - start_time  ;
	let worked_minutes = worked_time % 60 ;
	let worked_hours = (worked_time - worked_minutes)/60 ;
	let payment = worked_time / 60 * pay_rate  ;
	total_payment = total_payment + payment ;
	log_ID = log_ID + 1;

	//console.log(total_payment);

	//apend information to page
	let msg = "you worked from ";
	msg = msg + start_hour + ":" + start_minute;
	msg = msg + " to " + finish_hour + ":" + finish_minute;
	msg = msg + " you earned $" + payment + "."
	//console.log(msg);
	let log_element = "<p id='log" + log_ID + "'>" + msg ;
	log_element = log_element + "<button type=\"button\" class=\"close\" onclick =\"removeLog()\">&times;</button> </p>" ;
	$("div.log-div").append(log_element);
	document.getElementById("total-payment").innerHTML = "Your paycheck is $" + total_payment;





}

function removeLog(){
	console.log(this.type);
}