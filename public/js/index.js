$("#down").click(function() {
   $('html,body').animate({scrollTop: $("a[name='skills']").offset().top},'slow');
});
