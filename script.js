function getFormvalue() {
    //Write your code here
    // let fname = document.getElementById("form1").value;
let fname = document.getElementsByName("fname")[0].value;
	let lname = document.getElementsByName("lname")[0].value;

	// Display the first and last name in an alert box
	alert(fname +" "+ lname);
}
