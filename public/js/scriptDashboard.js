document.addEventListener('DOMContentLoaded', function() { 
    function formatPrice(price) {
        return `$${parseInt(price).toLocaleString('es-CL')}`;
    }
    

    fetch("/getHotspots")
    .then(response => response.json())
    .then(filteredHotspots => {
        if (filteredHotspots && filteredHotspots.length > 0) {

            const tbody = document.getElementById("hotspotTable");

            filteredHotspots.forEach(hotspot => {
                
                const row = document.createElement("tr");
                
        
                // Columna ID
                const idCell = document.createElement("td");
                idCell.textContent = hotspot.$["id"];
                row.appendChild(idCell);
                
               
                // Columna Precio
             
                const priceCell = document.createElement("td");
                priceCell.textContent = hotspot.$["url"];
               
                row.appendChild(priceCell);
                

                
                
                // Columna Descripción
                const descCell = document.createElement("td");
                descCell.innerHTML = hotspot.$["description"];
                row.appendChild(descCell);
                
                // Columna Disponibilidad
                const availabilityCell = document.createElement("td");
                
                availabilityCell.textContent = hotspot.$["skinid"] === "ht_disponible" ? "Disponible" : "No Disponible";
                row.appendChild(availabilityCell);


                
                // Columna Acciones
                const actionsCell = document.createElement("td");
                // Puedes agregar aquí botones o acciones específicas para editar o eliminar
                // Por ahora lo dejaré vacío
                row.appendChild(actionsCell);

                  // Crear botón de editar
                  const editButton = document.createElement("button");
                  editButton.className = "btn btn-primary";
                  editButton.textContent = "Editar";
                  editButton.addEventListener("click", function() {
                      // Mostrar el modal con los datos actuales del hotspot
                      
                      const rawPrice = hotspot.$["url"].replace(/\$|\.|,/g, ""); // Aquí se quita el formato
                      document.getElementById("titleInput").value = hotspot.$["url"];

                      document.getElementById("descriptionInput").value = hotspot.$["description"];
                      
  
                      // Usar un atributo data- en el botón de guardar para saber qué hotspot estamos editando
                      document.getElementById("saveChangesBtn").setAttribute("data-id", hotspot.$["id"]);

                    //Establecer valor skinID
                      const skinIDSelect = document.getElementById("skinIDSelect");
                      skinIDSelect.value = hotspot.$["skinID"] || "ht_disponible";  // Establece el valor por defecto si no hay ninguno
                     
                      // Mostrar el modal
                      $('#editModal').modal('show');
                      
                  });
  
                  actionsCell.appendChild(editButton);
                  row.appendChild(actionsCell);

                
                // Añadir la fila al tbody
                tbody.appendChild(row);





            });
        } else {
            console.error("No se encontraron hotspots en la respuesta");
        }
    })
    .catch(error => {
        console.error("Error fetching hotspots:", error);
    });

    
});
// ... (Tu código anterior)

// Función para guardar los cambios
function saveChanges() {
    // Obtener los datos actualizados del modal
    const updatedTitle = document.getElementById("titleInput").value;
    const updatedDescription = document.getElementById("descriptionInput").value;

    // Obtener el ID del hotspot que estamos editando desde el atributo data-id
    const hotspotId = document.getElementById("saveChangesBtn").getAttribute("data-id");

 // Obtener el skinID seleccionado
 const updatedSkinID = document.getElementById("skinIDSelect").value;
    
 // Incluir el skinID en el objeto con los datos actualizados
 const updatedData = {
     id: hotspotId,
     url: updatedTitle,
     description: updatedDescription,
     skinID: updatedSkinID
 };



    // Enviar los datos actualizados al backend (por ejemplo, mediante una solicitud POST o PUT)
    fetch('/updateHotspot', {
        method: 'POST', // o 'PUT' dependiendo de tu API
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            // Actualizar la interfaz del usuario o recargar los datos
            // Por ejemplo, puedes cerrar el modal y mostrar un mensaje de éxito
            $('#editModal').modal('hide');
            alert("Cambios guardados con éxito!");
            // Y recargar los datos o actualizar la fila correspondiente en la tabla
            location.reload(); // Esto recargará la página. Si prefieres no recargar, puedes simplemente actualizar la fila en la tabla.
        } else {
            alert("Error al guardar los cambios. Por favor, intenta nuevamente.");
        }
    })
    .catch(error => {
        console.error("Error updating hotspot:", error);
        alert("Error al guardar los cambios. Por favor, intenta nuevamente.");
    });
}

// Escuchar el evento "click" en el botón "Guardar" del modal
document.getElementById("saveChangesBtn").addEventListener("click", saveChanges);


