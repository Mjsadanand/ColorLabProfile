// function sendmsg(){
//   var pno="+917829118313";
//   var fname=document.querySelector('first').Value;
//   var lname=document.querySelector('last').Value;
//   var email=document.querySelector('email').Value;
//   var sub=document.querySelector('sub').Value;

//   var url="https://wa.me/" +pno+"*First Name*:" + fname 
//           +"*Last Name*:" + lname + "%0a"
//           +"*Email*:" + email + "%0a"
//           +"*Sub*:" + sub + "%0a%0a";

//     window.open(url,'_blank').focus();          
// }

function sendToWhatsapp(){
	let number = "+917829118313";

	let fname = document.getElementById('first').value;
	let lname = document.getElementById('last').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('sub').value;

	var url = "https://wa.me/" + number
	+ "First Name : " +fname+ "%0a"
	+ "Last Name : " +lname+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}