function tour(){
    let rutaServicio = "http://localhost/serviciopolyphia/polyphiatour.php"
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
                fila+="<td scope='row'>"+item.event_name+"</td>"
                fila+="<td>"+item.event_date+"</td>"
                fila+="<td>"+item.event_city+"</td>"
                fila+="<td>"+item.event_state+"</td>"
                fila+="<td>"+item.event_country+"</td>"
                fila+="</tr>"
                contenidotabla+=fila
            })
            document.getElementById("tbody-polyphiatour").innerHTML=contenidotabla
        }
}
tour()