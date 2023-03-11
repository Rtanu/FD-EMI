function CalculateEMI() {

	// Extracting value in the amount
	// section in the variable
	const amount = document.querySelector("#amount").value;

	// Extracting value in the interest
	// rate section in the variable
	const rate = document.querySelector("#rate").value;

	// Extracting value in the months
	// section in the variable
	const months = document.querySelector("#months").value;
	if (amount !== '' && rate !== '' && months !== '') {
		// Calculating interest per month
		const interest = (amount * (rate * 0.01)) / months;

		// Calculating total payment
		const total = ((amount / months) + interest).toFixed(2);

		document.querySelector("#total")
			.innerHTML = "EMI : (₹)" + total;
	}


}

function FixedDeposit() {
	const amount = document.querySelector("#amount").value;
	var rate = document.querySelector("#rate").value;
	rate /= 100;  
	var months = document.querySelector("#months").value;
	months /= 12;  
	const total = Math.round(amount * (1 + rate * months));

	if (amount == '' && rate == '' && months == '') {
		document.querySelector("#total")
			.innerHTML = "Please enter all the fields";
	}
	else {
	document.querySelector("#total")
			.innerHTML = "Fixed Deposit : (₹)" + total;
	}

}
