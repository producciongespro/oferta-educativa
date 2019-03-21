$(document).ready(function () {
    console.log("ancho..."+$(".container").width());
    // resizeWindowSet();     
    $(".texto-header").css("display","none"); 
     texto_pie = 'Copyright &copy; Ministerio de Educación Pública de Costa Rica 2019';
     $(".credit-footer").html(texto_pie);
    //  showHideTextoHeader();
});

function resizeWindowSet() {
    $(window).resize(function(){
        showHideTextoHeader();
     });
}

function showHideTextoHeader() {
    if ($(window).width() < 200){
        $(".texto-header").css("display","none");
      }
    else {
    $(".texto-header").css("display","inline");
    }
}
