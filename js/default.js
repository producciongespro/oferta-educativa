$(document).ready(function () {
          callMenu();
});

function callMenu() {
    
    console.log("ancho..."+$(".container").width())
    var texto = "<li class='nav-item'><a class='nav-link' href='index.html'>Inicio</a></li><li class='nav-item'><a class='nav-link' href='acerca-de.html'>Acerca de</a></li><li class='nav-item dropdown'><a class='nav-link dropdown-toggle' href='#' id='navbarDropdownElementos' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Oferta Educativa</a><div class='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdownElementos'><a class='dropdown-item' href='mep.html'>MEP</a><a class='dropdown-item' href='http://infoweb.ina.ac.cr/cursos/' target = '_blank'>INA</a><a class='dropdown-item' href='https://admision.ac.cr/sau/' target='_blank'>Universidades públicas</a><a class='dropdown-item' href='http://conesup.mep.go.cr/lista_universidades' target='_blank'>Universidades privadas</a><a class='dropdown-item' href='https://www.mep.go.cr/sites/default/files/preguntafrecuente/adjuntos/instituciones-parauniversitarias-actualizado.pdf' target='_blank'>Instituciones parauniversitarias</a><a class='dropdown-item' href='#'>Institutos de bachillerato</a></div></li>";
    texto +="<li class='nav-item'><a class='nav-link' href='contactenos.html'>Contáctenos</a></li>";
    $("#opciones").html(texto);
    // texto_pie = 'Copyright &copy; Ministerio de Educación Pública de Costa Rica 2019';
    // $("#text_footer").html(texto_pie);



}
