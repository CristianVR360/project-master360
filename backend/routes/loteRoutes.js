const express = require('express');
const router = express.Router();
const fs = require('fs'); // Módulo de Node.js para trabajar con archivos del sistema
const path = require('path'); // Módulo de Node.js para trabajar con rutas de archivos
const xml2js = require('xml2js'); // Librería para convertir XML a JSON y viceversa

//... tus otras rutas

// Endpoint para actualizar un hotspot basado en su ID
router.put('/hotspot/:id', (req, res) => {
    const hotspotId = req.params.id; // Obtener el ID del hotspot de la URL
    const { description, skinid } = req.body; // Extraer description y skinid del cuerpo de la solicitud

    // Definir la ruta al archivo XML
    const xmlPath = path.join(__dirname, '..', 'public', 'pano.xml');
    // Leer el contenido del archivo XML
    const xmlContent = fs.readFileSync(xmlPath, 'utf-8');

    // Convertir el contenido XML a JSON para trabajar con él
    xml2js.parseString(xmlContent, { explicitArray: false }, (err, result) => {
        if (err) {
            return res.status(500).send("Error al leer el archivo XML");
        }

        // Encontrar el hotspot específico en el array de hotspots usando su ID
        const hotspots = result.tour.hotspots.hotspot;
        const hotspotToUpdate = hotspots.find(h => h.$.id === hotspotId);

        if (!hotspotToUpdate) {
            return res.status(404).send("Hotspot no encontrado");
        }

        // Actualizar los valores del hotspot con los valores recibidos en la solicitud
        hotspotToUpdate.$.description = description;
        hotspotToUpdate.$.skinid = skinid;

        // Convertir el objeto JSON nuevamente a una cadena XML
        const builder = new xml2js.Builder();
        const updatedXml = builder.buildObject(result);

        // Guardar la cadena XML modificada en el archivo
        fs.writeFileSync(xmlPath, updatedXml);

        // Responder al cliente que el hotspot fue actualizado con éxito
        res.status(200).send("Hotspot actualizado con éxito");
    });
});

// Exportar el router para usarlo en server.js
module.exports = router;
