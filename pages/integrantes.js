function integrantes() {
    const leerServicio=()=>{
        let rutaServicio = "http://localhost/serviciopolyphia/polyphiaintegrantes.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                llenarTabla(data)
            })
    }

    const llenarTabla = (data) => {
        //console.log(data)
        let contenidoTabla = ""
        data.map(item => {//item representa a cada fila
            //console.log(item.nombre)
            let fila = "<tr>"
            fila += "<td>" + item.idintegrante + "</td>"
            fila += "<td>" + item.nombre + "</td>"
            fila += "<td>" + item.apellido + "</td>"
            fila += "<td>" + item.instrumento + "</td>"
            fila += "<td class='text-center'><i class='bi bi-pencil icono-editar' title='Editar' data-bs-toggle='modal' data-bs-target='#updateModal'></td>"
            fila += "</tr>"
            contenidoTabla += fila
            console.log(contenidoTabla)
        }
        )
        document.getElementById("tbody-integrantes").innerHTML = contenidoTabla
        let iconosEditar=document.querySelectorAll(".icono-carrito")
        iconosEditar.forEach((iEditar, index)=>{
            iEditar.addEventListener("click",()=>llenarCajasUpdate(index, 1))
        })
    }
    const insertIntegrante=()=>{
        let nombre= txtIntegranteNombre.value
        let apellido=txtIntegranteApellido.value
        let instrumento=txtIntegranteInstrumento.value
        let formData=new FormData()
        formData.append("nombre",nombre)
        formData.append("apellido",apellido)
        formData.append("instrumento",instrumento)

        let rutaServicio = "http://localhost/polyphia/polyphiaintegrantesinsert.php"
        fetch(rutaServicio, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert("Se ha agregado un nuevo integrante con codigo: "+data)
                document.querySelector("#insertmodal .btn-close").click()
                leerServicio()
            })
        
    }
    leerServicio()
    document.getElementById("formInsert").addEventListener("submit", ()=>insertIntegrante())
}
integrantes()