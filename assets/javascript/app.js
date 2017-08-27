var question;
var index;
var next;
var time;
var right = 0;
var wrong = 0;
var time;
var int;
var reset = function(){
	index = Math.floor(Math.random()*data.length);

	next = false;

	question = data[index];

	time = 30
	int = setInterval(function(){
		time--
		$("#time").html(time);
	},1000)
	
	disp();
}
reset();
console.log(question);

function disp(){
	$(":button").show()
	$("#q").html(question.question);
	$("#a").html(question.A);
	$("#b").html(question.B);
	$("#c").html(question.C);
	$("#d").html(question.D);
	$('#right').html("Number of Correct Answers: "+right);
	$('#wrong').html("Number of Wrong Answers: "+wrong);
}

var play = function(){
	clearInterval(int)
	if (this.value == question.answer){
		$("#q").html("Correct!")
		right++
	} else{
		$("#q").html("Wrong!")
		wrong++
	}
	$(":button").hide();
	setTimeout(reset,2000)
}