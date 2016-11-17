$('.add-employee-btn').click(function() {
	var value = $('.employee-name-input').val();
   	var message = $('#message');
		
	if (value == '') { // error if input is blank
		message.text("error! Pleas input employee name!").css('color','#960606');  
	} else { // adding new element to list
		var removeButton = '<button class="remove">X</button>',
			li = '<li>' + value + removeButton + '</li>';
	    
	$('.employee-list').append(li);
		$('.employee-name-input').val("");
		message.text("successful! You added new employee to your list!").css('color','green');    
      }
	$('.remove').click(function() { // removing element from list
		var listItem = $(this).parent(), 
     		deleteBox = $('#delete-box');
     	deleteBox.css('display','block');
       		
       	$('#yes').click(function(){ // user approved to delete element from list
           	listItem.remove();
            deleteBox.css('display','');
           	message.text("User has been succesfully removed!").css('color','');
        });   
       	$('#no').click(function(){ // user disapproved to delete element from list
            deleteBox.css('display','');
            message.text("");
        });
	 });
});

