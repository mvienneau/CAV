$(document).ready(function() {
	//alert("YO");
    $('#btnSubmit').on('click', addUser);
    $('#loginSubmit').on('click', userLogin);

});

function userLogin(event){
	//alert("LOGGING IN");
	event.preventDefault();
	var errorCount = 0;
	$('#login input').each(function(index, val) {
		if ($("#login fieldset input#username").val() ===  '' || $("#login fieldset input#password").val() === ''){
			errorCount++;
		}
	});
	if (errorCount === 0){
		var user = {
			'username': $('#login fieldset input#username').val(),
			'password': $('#login fieldset input#password').val()
		}
		$.ajax({
			type: 'POST',
			data: user,
			url: '/login',
			datatype: 'json',
			success: function(response){
				if (response.success == true) {
					alert('Sucessfully Logged In');
					window.location.href = "/"
				}
				else {
					console.log(response);
					alert('Cannot Login, Username or Password is incorrect');
					window.location.href = "/login"
				}
			},
			error: function(response){
				alert('Error: ' + response.msg);
				window.location.href = "/login"	
			}
		});
	}
	else{
		alert('please fill in all fields');
		return false;
	}
}


function addUser(event){
	event.preventDefault();
	var errorCount = 0;
	$('#create-account input').each(function(index, val) {
		if($("#create-account fieldset input#username").val() === '' || $("#create-account fieldset input#password").val() === '') {
			errorCount++;
		}
	});

	if(errorCount === 0){
		var newUser = {
			'username': $('#create-account fieldset input#username').val(),
			'fullname': $('#create-account fieldset input#fullname').val(),
			'password': $('#create-account fieldset input#password').val()
		}

		$.ajax({
			type: 'POST',
			data: newUser,
			url: '/createAcc',
			dataType: 'json',
			success: function(response) {
				if (response.success == true) {
					alert('Sucessfully Created Account');
					window.location.href = "/"
				}
				else {
					console.log(response);
					alert('Account cannot be created. Please try again.');
					window.location.href = "/createAcc"
				}

			},
			error: function(response) {
				alert('Error: ' + response.msg);
				window.location.href = "/createAcc"
			}
		});
	}
	else{
		alert('Please fill in required fields');
		return false;
	}
}

