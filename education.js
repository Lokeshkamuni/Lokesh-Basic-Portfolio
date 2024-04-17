$("h2").click(function(){
    var sec = $(this).attr("id");
    switch (sec) {
        case 'academic':
            var div = $("#one");
            div.toggle();
            break;
        case 'internship':
            var div = $("#two");
            div.toggle(); 
            break;   
        case 'certification':
            var div = $("#three");
            div.toggle();
        default:
            break;
    }
});

window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollToTopBtn").style.display = "block";
        } else {
            document.getElementById("scrollToTopBtn").style.display = "none";
        }
    }
    
    // Scroll to the top of the document when the button is clicked
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }