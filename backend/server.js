const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const xml2js = require('xml2js');


dotenv.config({ path: '../.env' });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

function updateHotspotInXML(id, updatedTitle, updatedDescription, updatedSkinID, callback) {
    fs.readFile('../public/pano.xml', (err, data) => {
        if (err) {
            console.error(err);
            callback(err);
            return;
        }

        xml2js.parseString(data, (err, result) => {
            if (err) {
                console.error(err);
                callback(err);
                return;
            }

            // Buscar el hotspot por ID y actualizarlo
            const hotspotsArray = result.tour.panorama[0].hotspots[0].hotspot;
            const hotspotToUpdate = hotspotsArray.find(hotspot => hotspot.$.id === id);

            if (hotspotToUpdate) {
                hotspotToUpdate.$.title = updatedTitle;
                hotspotToUpdate.$.description = updatedDescription;
                hotspotToUpdate.$.skinid = updatedSkinID; 

                // Convertir el objeto result de nuevo a XML
                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);

                // Guardar el XML actualizado
                fs.writeFile('../public/pano.xml', xml, err => {
                    if (err) {
                        console.error(err);
                        callback(err);
                        return;
                    }

                    callback(null); // No hay errores
                });
            } else {
                callback(new Error("Hotspot no encontrado"));
            }
        });
    });
}



app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de tu aplicación Pano2VR.');
});


app.use(express.static(__dirname + '/../public'));



const loteRoutes = require('./routes/loteRoutes');

app.use('/lotes', loteRoutes);


app.get('/getHotspots', (req, res) => {
    fs.readFile('../public/pano.xml', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al leer el archivo XML');
        }

        xml2js.parseString(data, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error al analizar el archivo XML');
            }
            const excludedIds = ["Point01", "Point02", "id3"];
            const hotspotsArray = result.tour.panorama[0].hotspots[0].hotspot;

            // Filtramos los hotspots para excluir los que tengan las IDs que queremos ignorar
            const filteredHotspots = hotspotsArray.filter(hotspot => !excludedIds.includes(hotspot.$.id));

            // Ordenar por ID correlativo.
            filteredHotspots.sort((a, b) => {
                const numA = parseInt(a.$["id"].replace(/[^\d]/g, ''));
                const numB = parseInt(b.$["id"].replace(/[^\d]/g, ''));
                return numA - numB;
            });

            // Aquí, result es un objeto JavaScript que representa el XML.
            // Puedes hacer manipulaciones aquí si lo necesitas, por ejemplo:
            // const hotspot = result.hotspot[0];
            // hotspot.description = "Nueva descripción";
            // hotspot.skinid = "nuevo_skinid";

            // Enviar el objeto result como respuesta
            res.json(filteredHotspots);
        });
    });
});

app.post('/updateHotspot', (req, res) => {
    const { id, title, description, skinID} = req.body;

    if (!id || !title || !description || !skinID) {
        return res.status(400).json({ success: false, message: 'Faltan datos en la solicitud.' });
    }

    updateHotspotInXML(id, title, description, skinID, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error al actualizar el hotspot.' });
        }
        res.json({ success: true, message: 'Hotspot actualizado con éxito.' });
    });
});


// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, { // Asegúrate de que esta variable coincide con tu .env 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

