$(document).ready(function () {
    console.log("ancho..."+$(".container").width());
    borders();
      $(window).resize(function(){
         borders();
      });
     texto_pie = 'Copyright &copy; Ministerio de Educación Pública de Costa Rica 2019';
     $(".credit-footer").html(texto_pie);
});

function borders() {
    // var ancho= $("#main-header").width()
    console.log("padding.."+$("#main-header").css('padding-left') );
    console.log("padding.."+$("#main-header").css('padding-right') )
    var pl = parseInt($("#main-header").css('padding-left') );
    var pr = parseInt($("#main-header").css('padding-right') );
    var padd = pl + pr;
    console.log("padd "+padd)
    $('.row-top-header').css({
        "border-left-width": function( index ) {
            index = $("#main-header").width()- padd;
            console.log(index)
            return index;
        }
    });
    $('.row-top-header').css({
        "border-left-style": "solid"
    });
    $('.row-top-header').css({
        "border-left-color": "#dadada"
    });
    
};
