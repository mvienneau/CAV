$('#btnSubmit').on('click', addUser);

function addUser(event){
	event.preventDefault();

	var errorCount = 0;
	$('#create-account input').each(function(index, val) {
		if($(this).val() === '') {errorCount++; }
	});

	if(errorCount === 0){

		var newUser = {
			'username': $('#addUser fieldset input#inputUserName').val(),
			'fullname': $('#addUser fieldset input#inputUserFullName').val(),
			'email': $('#addUser fieldset input#inputUserEmail').val(),
			'password': $('#addUser fieldset input#inputUserPassword').val()
		}

		$.ajax({
			type: 'POST',
			data: newUser,
			url: '/createAcc',
			dataType: 'JSON'
		}).done(function( response )) {
			if (response.msg === '') {
				alert('Sucessfully Created Account');
			}else {
				alert('Error: ' + response.msg);
			}
		});
	}
	else{
		alert('Please Fill in all Fields');
		return false;
	}
};