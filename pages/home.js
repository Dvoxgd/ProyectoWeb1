$(function(){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:6,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:6,
                    nav:true
                }
            }
        });
      });
    $("#releases figure").append("<figcaption>")
    $("#releases figure").mouseenter(function(){
        $(this).find("figcaption").stop().fadeIn("slow");
    })
    $("#releases figure").mouseleave(function(){
        $(this).find("figcaption").stop().fadeOut("slow");
    })
    $("#releases figure").each(function(){
        let titulo=$(this).find("img").attr("title")
        let ruta=$(this).find("img").attr("src")
        $(this).find("figcaption").html("<div>"+titulo+"</div>")
        $(this).find("figcaption div i").click(function(){
            $("body").append("<div id='fondo-oscuro'></div>")
            $("#fondo-oscuro").append("<img src='"+ruta+"'></img>")
            $("#fondo-oscuro").append("<h3>"+titulo+"</h3>")
            $("#fondo-oscuro").click(function(){
                $(this).remove()
            })
        })
    })
})

twttr.widgets.load()