$(document).ready(function(){
var header = `<h1>Selecciona la historia que quieres leer</h1>
                  <nav>
                    <a href="lev.html">Lev's Story</a>
                    <a href="blue.html">Blue</a>
                    <a href="son.html">Son of the staves of time</a>
                  </nav>`;
var bottom = `<button type="button" class="ant">Ant</button>
              <button type="button" class="sig">Sig</button>`;
function loadpage(top, bot) {
  var up = document.getElementById('head')
  var dn = document.getElementById('botton')
  up.innerHTML = top;
  dn.innerHTML = bot;
}
var sct = document.getElementsByTagName('section')
for (var i =0; i < sct.length; i++) {
  var atr = sct[i].getAttribute("id");
  console.log(atr)
  var li = document.createElement("li")
  var ref = li.setAttribute("href", `#${atr}`);
  var fill = document.createTextNode(`${i +1}`)
  var set = li.appendChild(fill)
  document.getElementById('set').appendChild(li)
}
$("ul li:first-child").addClass("dis")
$("section:first").addClass("vis")

loadpage(header, bottom);

$(".buttons").hide();
  $("body").on("click", function(){
    $(".buttons").toggle();
  })
  function next(){
    $(".dis").next().addClass("dis").prev().removeClass("dis");
    $(".vis").next("section").addClass("vis").prev().removeClass("vis");//se hace visible la tab actual
  }
  function prev(){
    $(".dis").prev().addClass("dis").next().removeClass("dis");
    $(".vis").prev("section").addClass("vis").next().removeClass("vis");//se hace visible la tab actual
  }
  $(".sig").click(next)
  $(".ant").click(prev)
$("li").click(function(){
  var ref = $(this).attr("href")
  $("section").removeClass("vis")
  $("li").removeClass("dis")
  $(this).addClass("dis")
  $(ref).addClass("vis")
  console.log($(this).attr("href"))
})
  document.addEventListener("keydown", turnPage)
  function turnPage(key){
    if (key.keyCode == 37) {
      prev()
      }
    if (key.keyCode == 39) {
      next()
      }
  }
});//end of the line
