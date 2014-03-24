//- call to Google CDN for JQuery (See Ruby.html)


$('.blurb').attr('title', "Click when read");

//- implement a Selection call by element
$('h2').hover(function(){
    $(this).toggleClass('highlight');
});

//- implement a Selection call by class
$('.blurb').hover(function(){
	$(this).toggleClass('highlight');
});

//- implement a Selection call by id
$('#pagetitle').hover(function(){
    $(this).toggleClass('highlight');
});

//- implement an Event call
//- implement a Manipulation call
$('.blurb').click(function(){
    $(this).addClass('read');
});


//- implement a JQuery UI call (Widget, interactions, effect, and/or utilities)
$(function() {
    $( "#draggable" ).draggable();
 });

$(function() {
    $( document ).tooltip({
      track: true
    });
});