# FAQs
A common FAQs dropdown function
This FAQs function allows the user to add as many questions as they require. When each panel is selected by the user, the answer for that panel will slide down

Usage example

HTML

<section class="panels">

	<div class="arrow"></div>
    
    <h2 class="title">1. The title will go here</h2>
    
    <article class="description">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus turpis enim, sit amet accumsan lorem aliquam at. Quisque scelerisque nulla sed risus sodales ultrices. Sed dictum id sapien non convallis.</p>
    </article>

</section>

You are able to change the tags used in your HTML as long as the DOM is the same as the JQuery relies on this. 

JQuery

<script>

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

</script>
