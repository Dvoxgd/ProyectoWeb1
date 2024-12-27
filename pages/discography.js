$(function(){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:6,
            loop:true,
            margin:0,
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
})

function discography(){
    let rutaServicio = "http://localhost/serviciopolyphia/polyphiaalbumes.php"
    fetch(rutaServicio)
        .then(response => response.json())
        .then(data => {
            llenartabla(data)
        })
        const llenartabla= (data) =>{
            console.log(data)
            let contenidotabla=""
            data.map(item =>{
                let fila="<tr>"
                fila+="<td scope='row'>"+item.nombre+"</td>"
                fila+="<td>"+item.lanzamiento+"</td>"
                fila+="<td>"+item.sello_discografico+"</td>"
                fila+="<td>"+item.album_genero+"</td>"
                fila+="<td>"+item.n_canciones+"</td>"
                fila+="</tr>"
                contenidotabla+=fila
            })
            document.getElementById("tbody-polyphiaalbumes").innerHTML=contenidotabla
        }
}
discography()
