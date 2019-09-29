document.addEventListener("DOMContentLoaded", function(){
var header = `<h1>Selecciona la historia que quieres leer</h1>
      <ul>
        <a href="lev.html">Lev's Story</a>
        <a href="blue.html">Blue</a>
        <a href="son.html">Son of the staves of time</a>
      </ul>`

console.log(header)

function insheader(what) {
  var where = document.getElementById('head')
  where.innerHTML = what;
}
insheader(header);
})
