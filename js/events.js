//define functions here

$(document).ready(function(){

$('p').on('click', function getIt(){
   alert('Hey!');
}); 

$('img').on('load', function frameIt(){
  $('img').addClass('tasty');
});
$(document).on('keydown', function pressIt(){
  if ($('input:first').val()==='g'){
    alert('you pressed g!');
  }
});
$('form').on('submit', function submitIt(){
  alert('Your form is going to be submitted now.');
});

});
 