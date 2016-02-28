$(document).ready(function() {

    $('#btnSubmit').on('click', addUser);

});

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
};
