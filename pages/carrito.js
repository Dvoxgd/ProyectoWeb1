function carrito(){
    let carrito=[]
    carrito=JSON.parse(sessionStorage.getItem("carritocompras"))
    let contenidoTabla=""
    carrito.map(item =>{//item representa a cada fila
        //console.log(item.nombre)
        let fila="<tr>"
        fila+="<td>"+item.idproducto+"</td>"
        fila+="<td>"+item.nombre+"</td>"
        fila+="<td class='text-end'>"+item.precio+"</td>"
        fila+="<td class='text-end'>"+item.cantidad+"</td>"
        fila+="<td class='text-end'><p>$"+item.precio*item.cantidad+" USD</p></td>"
        fila+="<td></td>"
        fila+="</tr>"
        contenidoTabla+=fila
    })
    document.getElementById("tbody-carrito").innerHTML=contenidoTabla
    document.getElementById("btnVaciarCarrito").addEventListener("click",()=>{
        sessionStorage.removeItem("carritocompras")
        document.getElementById("tbody-carrito").innerHTML=""
    })
}
carrito()