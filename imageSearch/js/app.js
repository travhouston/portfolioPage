// SEARCH BOX

$("#search").keyup(function() {
    
    //Take input and store in a variable
    var filter= $(this).val();
    
    //Run through image gallery
    $("#imageGallery img").each(function() {

        if ($(this).attr("alt").search(new RegExp(filter, "gi")) < 0 ) {
        
            $(this).parents("li").fadeOut(1000); //Fade out
            
        } else {
            $(this).parents("li").addClass('filtered').fadeIn(1000); //Fade in
        }
        
        //If search box is empty			
        if ( $("#search").val().length < 1) {
            $(this).parents("li").removeClass('filtered'); //restore margins
        } 						
    });				
    
}); 