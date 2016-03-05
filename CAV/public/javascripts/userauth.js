$(document).ready(function() {
	//alert("YO");
    if ($('#username').text() != '') {
      $('#CreateAccount').hide();
      $('#Login').html('Logout');
      $('#Login').on('click', function() {window.location.href = "/search"});
    }

});
