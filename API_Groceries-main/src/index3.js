const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

const estudiantes = [];

app.post('/insertOne', (request, response) => {
    const data = request.body;

    if (!data.matricula || !data.nombres || !data.apellidos) {
        return response.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    const matricula = parseInt(data.matricula);
    const nombres = data.nombres;
    const apellidos = data.apellidos;

    estudiantes.push({
        "matricula": matricula,
        "nombres": nombres,
        "apellidos": apellidos
    });

    response.json({
        "estatus": "Datos guardados correctamente",
        "matricula": matricula,
        "nombres": nombres,
        "apellidos": apellidos
    });
});


app.get('/getOne/:matricula', (request, response) => {
    let matricula = parseInt(request.params.matricula);

    let estudianteEncontrado = null;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].matricula === matricula) {
            estudianteEncontrado = estudiantes[i];
            break;
        }
    }

    if (estudianteEncontrado) {
        response.json(estudianteEncontrado);
    } else {
        response.json({ message: 'Estudiante no encontrado' });
    }
});

app.get('/getAll', (request, response) => {
    response.json({
        estatus:"Datos mostrados correctamente",
        estudiantes
    });
});

app.put('/updateOne/:matricula', (request, response) => {
    const matricula = parseInt(request.params.matricula);
    const data = request.body;

    let estudianteEncontrado = null;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].matricula === matricula) {
            estudianteEncontrado = i;
            break;
        }
    }

    if (estudianteEncontrado !== null) {
        estudiantes[estudianteEncontrado] = {
            matricula: matricula,
            nombres: data.nombres || estudiantes[estudianteEncontrado].nombres,
            apellidos: data.apellidos || estudiantes[estudianteEncontrado].apellidos
        };

        response.json({
            estatus: "Datos actualizados correctamente",
            estudiante: estudiantes[estudianteEncontrado]
        });
    } else {
        response.json({ message: 'Estudiante no encontrado' });
    }
});


app.delete('/deleteOne/:matricula', (request, response) => {
    const matricula = parseInt(request.params.matricula);

    let estudiante = -1;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].matricula === matricula) {
            estudiante = i;
            break;
        }
    }

    if (estudiante !== -1) {
        estudiantes.splice(estudiante, 1);
        response.json({ message: 'Estudiante eliminado exitosamente' });
    } else {
        response.status(404).json({ message: 'Estudiante no encontrado' });
    }
});


app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
});
