$(".panels").on("click", function()  { // You can change the class "panels" to a naming of your choice. Please ensure these changes are reflected in the rest of the code.
	
	var speed = 500;
	
	if( $(this).hasClass("active") )  {
		
		$(this).children(".arrow").removeClass("active");
		$(this).removeClass("active");
		$(this).children(".description").slideToggle(speed);
		
	} else {
		
		$(".panels.active > .description").slideUp(speed);
		$(".panels.active").removeClass("active");
		
		$(this).addClass("active");
		$(this).children(".arrow").addClass("active");
		$(this).children(".description").slideDown(speed);
		
	}
	
});
