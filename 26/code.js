// for animation DOM is not enough for animations
// we need JQUERY

$('#p2').css('background-color', 'skyblue')  // jquery codes start w/ a $ sign; for changing id start w/ #
$('.red').removeClass('red').addClass('blue')

var a = setTimeout(function(){
    $('[name="p3"]').fadeOut();
}, 3000)

var b = setTimeout(function(){
    $('[name="p3"]').fadeIn();
}, 5000)

$('p').css('font-size', '24px')

$('a').attr('href', 'https://en.wikipedia.org/wiki/Argentina_national_football_team')
$('a').attr('target', '_blank')

console.log($('#p3').html())
$('#p3').html('Que esta barra, quilombera * clap clap clap * !!')

$('input').val('Dieguito')
console.log($('input').val())

$('div').addClass('grey')
$('div').width(350)

// adding click event
$('div').click(function(){
    $('div').animate({width: 200}, callback);
})

function callback(){
    alert('Tu eres un Pendejo!! Don\'t do this shit, holmes..')
}