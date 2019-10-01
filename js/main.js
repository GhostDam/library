$(document).ready(function(){
var header = `<h1>Selecciona la historia que quieres leer</h1>
      <nav>
        <a href="lev.html">Lev's Story</a>
        <a href="blue.html">Blue</a>
        <a href="son.html">Son of the staves of time</a>
      </nav>`;
var bottom = `<button type="button" class="ant">Ant</button>
              <button type="button" class="sig">Sig</button>`;
var footer = `<footer>aqui esta el footer ma homs</footer>`;
function loadpage(top, bot) {
  var up = document.getElementById('head')
  var dn = document.getElementById('botton')
  up.innerHTML = top;
  dn.innerHTML = bot;
}
loadpage(header, bottom);

$(".buttons").hide();
  $("section").on("click", function(){
    $(".buttons").toggle();
  })
  $(".sig").click(function(){
    $(".vis").next("section").addClass("vis").prev().removeClass("vis");//se hace visible la tab actual
  })
  $(".ant").click(function(){
    $(".vis").prev("section").addClass("vis").next().removeClass("vis");//se hace visible la tab actual
  })


});//end of the line
