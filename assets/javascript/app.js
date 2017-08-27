var question;
var index;
var next;
var time;
var right;
var wrong;
function reset(){
	console.log(data.length);
	index = Math.floor(Math.random()*data.length);

	next = false

	question = data[index]
	disp()
}
reset();
console.log(question)

function disp(){
	$("#q").html(question.question)
	$("#a").html(question.A)
	$("#b").html(question.B)
	$("#c").html(question.C)
	$("#d").html(question.D)

}