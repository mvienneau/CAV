$(document).ready(function() {

    $('#btnSubmit').on('click', addUser);

});

function addUser(event){
	event.preventDefault();
	var errorCount = 0;
	$('#create-account input').each(function(index, val) {
		if($(this).val() === '') {errorCount++; }
	});

	if(errorCount === 0){

		var newUser = {
			'username': $('#create-account fieldset input#username').val(),
			'fullname': $('#create-account fieldset input#fullname').val(),
			'email': $('#create-account fieldset input#email').val(),
			'password': $('#create-account fieldset input#password').val()
		}

		$.ajax({
			type: 'POST',
			data: newUser,
			url: '/createAcc/adduser',
			success: function(response) {
				alert('Sucessfully Created Account');
			},
			error: function(response) {
				alert('Error: ' + response.msg);
			}
		});
	}
	else{
		alert('Please fill in all fields');
		return false;
	}
};
