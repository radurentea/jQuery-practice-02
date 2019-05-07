// toggle span element when mouseover the element with iD #helpText
$('#helpText').on('mouseover', function ()
{
    $('#helpText span').toggle();
});

//append a new restaurant to the list using ES6 
$('#addNew').on('click', function ()
{
    const newRestaurant = $('#newRestaurantInput').val();
    $('ul').append(`<li>${newRestaurant}</li>`);
});

//toggle class strike when a li is double clicked
$('ul').on('dblclick', 'li', function ()
{
    $(this).toggleClass('strike');
});