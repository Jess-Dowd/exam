/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});



///////2

$('.dropdown1 .dropdown-menu1 li1').click(function () {
    $(this).parents('.dropdown1').find('span1').text($(this).text());
    $(this).parents('.dropdown1').find('input1').attr('value1', $(this).attr('id1'));
});

$('.dropdown-menu1 li').click(function () {
var input =  $(this).parents('.dropdown1').find('input1').val() ,
  msg = '<span class="msg1">The prepend() method is correct. It is used to insert the content at the beginning of the selected elements. The append() method is used to insert the content at the end of the selected elements. The after() method is used to insert the content after the selected elements The before() method is used to insert the content before the selected elements';
$('.msg1').html(msg + input + '</span>');
}); 


//////3

$('.dropdown2 .dropdown-menu2 li').click(function () {
    $(this).parents('.dropdown2').find('span2').text($(this).text());
    $(this).parents('.dropdown2').find('input2').attr('value2', $(this).attr('id2'));
});

$('.dropdown-menu2 li').click(function () {
var input =  + $(this).parents('.dropdown2').find('input2').val() 
  msg = '<span class="msg2">The margin property was introduced in CSS version 1. Transformations, transitions, and animations are all new in CSS3. Transitions are the CSS3 effect that gradually changes an element from one style to another style. Transformations are the CSS3 effect that changes the shape, size, and/or position of an element. CSS3 animations were designed to replace basic animations that previously required plug-ins. CSS3 animations also replace basic animations that previously required JavaScript.';
$('.msg2').html(msg + input + '</span>');
}); 


///////4

$('.dropdown3 .dropdown-menu3 li').click(function () {
    $(this).parents('.dropdown3').find('span3').text($(this).text());
    $(this).parents('.dropdown3').find('input3').attr('value3', $(this).attr('id3'));
});

$('.dropdown-menu3 li').click(function () {
var input =  + $(this).parents('.dropdown3').find('input3').val() 
  msg = '<span class="msg3">In addition to HTML5, you can also perform inline form field validation of user input using JavaScript. To check for a proper email address format, a JavaScript function checks the input fields contents. The code is complex, but it can offer more browser support. For example, JavaScript validation code for email address validation can check for the presence of the @ symbol, ensure that @ is not the first character, check for the presence of at least one dot (.), ensure that the last dot (.) appears after the @ symbol, and verify that at least two characters appear after the last dot.';
$('.msg3').html(msg + input + '</span>');
}); 


////////1
$('.dropdown4 .dropdown-menu4 li').click(function () {
    $(this).parents('.dropdown4').find('span4').text($(this).text());
    $(this).parents('.dropdown4').find('input4').attr('value4', $(this).attr('id4'));
});

$('.dropdown-menu4 li').click(function () {
var input =  + $(this).parents('.dropdown4').find('input4').val() 
  msg = '<span class="msg4">The code myFunction(a) will call a JavaScript function without error. The code var myFunction(1,2) and initiate myFunction(3) are incorrect because var and initiate are not keywords used to call JavaScript functions. The code myFunction(;) is not syntactically correct.';
$('.msg4').html(msg + input + '</span>');
}); 



