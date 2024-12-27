function tienda() {
    let productos=[];
    let rutaServicio = "http://localhost/serviciopolyphia/polyphiashop.php"
    fetch(rutaServicio)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            llenarCuadricula(data)
            productos=data
        })
    
    const llenarCuadricula = (data) => {
        let contenidoCuadricula = ""
        data.map(item => {
            let card = "<div class='col mt-5'>"
            card += "<div class='card'>"
            card += "<img src='http://localhost/serviciopolyphia/" + item.imagen +"' class='card-img-top rounded' alt='...'>"
            card += "<div class='card-body text-center'><i class='bi bi-eye icono-vista-rapida' " +
            "data-bs-toggle='modal' data-bs-target='#vistaRapidaModal' title='Vista rápida'></i>"
            card += "<h5 class='card-title'>" + item.nombre + " " + item.apellidos +"</h5>"
            card += "<p class='card-text'>$" + item.precio.toFixed(2) + " USD <i class='bi bi-cart4 icono-carrito' title='Añadir al carrito'></i></p>"
            card += "</div></div></div>"
            contenidoCuadricula += card
        })
        document.getElementById("grid-card-productos").innerHTML = contenidoCuadricula
        document.getElementById("grid-card-productos").innerHTML = contenidoCuadricula
        let iconosVistaRapida = document.querySelectorAll(".icono-vista-rapida")
        iconosVistaRapida.forEach((iVistaRapida, index) => {
            iVistaRapida.addEventListener("click", () => seleccionarProducto(index))
        })

        let iconosCarrito = document.querySelectorAll(".icono-carrito")
            iconosCarrito.forEach((iCarrito, index) => {
                iCarrito.addEventListener("click", () => agregarItemCarrito(index,1))
            })
    }
    const agregarItemCarrito = (index, cantidadP)=>{
        console.log(productos[index].idproducto)
        let itemCarrito=productos[index]
        itemCarrito.cantidad=cantidadP
        console.log(itemCarrito)
        let carrito=[]

        if (sessionStorage.getItem("carritocompras")) {
            carrito=JSON.parse(sessionStorage.getItem("carritocompras"))
            let posicion=-1
            for (let i = 0; i < carrito.length; i++) {
                if (itemCarrito.idproducto===carrito[i].idproducto) {
                    posicion=i
                    break
                }
            }
            if(posicion !== -1){
                carrito[posicion].cantidad+=cantidadP
                sessionStorage.setItem("carritocompras", JSON.stringify(carrito))
            }else{
                carrito.push(itemCarrito)
            }
        }else{
            carrito.push(itemCarrito)
        }
        
        sessionStorage.setItem("carritocompras", JSON.stringify(carrito))
    }
    const seleccionarProducto = (index) => {
        console.log(productos[index].idproducto)
        let rutaServicio = "http://localhost/serviciopolyphia/polyphiashopdetalle.php?idproducto=" 
                                    + productos[index].idproducto
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                document.getElementById("producto-nombre").innerText = data[0].nombre
                let rutaImagen = "img/no-image.svg"
                if(data[0].imagengrande !== null){
                    rutaImagen = "http://localhost/serviciopolyphia/" + data[0].imagen
                }
                document.getElementById("producto-imagen").setAttribute("src", rutaImagen) 
                document.getElementById("producto-precio").innerHTML ="<p>$" + data[0].precio.toFixed(2) + " USD</p>"               
                document.getElementById("producto-descripcion").innerText = data[0].descripcion
            })
    }
}
tienda()