
const express = require('express');
const db = require('./conectardb');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

app.use(express.static('public'));
app.use(express.json());

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas estáticas
app.use(express.static('public'));

// Importar rutas
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

// Usar rutas
app.use('/auth', authRoutes);
app.use('/api', productRoutes);

// Validación y saneamiento de los datos de entrada para el registro de usuarios
const userValidationRules = [
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('correo').isEmail().withMessage('Debe ser un correo electrónico válido'),
    body('contraseña').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
];

// Endpoint para el registro de usuarios
app.post('/registrar', userValidationRules, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, correo, contraseña } = req.body;

    // Hash de la contraseña
    bcrypt.hash(contraseña, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ message: 'Error al procesar la contraseña' });
        }

        const query = 'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)';

        // Insertar el usuario en la base de datos
        db.query(query, [nombre, correo, hash], (error, results) => {
            if (error) {
                return res.status(500).json({ message: 'Error al registrar el usuario' });
            }
            res.send({ message: 'Usuario registrado con éxito' });
        });
    });
});

// Validación y saneamiento de los datos de entrada para la inserción de productos
const productValidationRules = [
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('descripcion').notEmpty().withMessage('La descripción es requerida'),
    body('precio').isDecimal().withMessage('El precio debe ser un número decimal'),
    body('cantidad').isInt().withMessage('La cantidad debe ser un número entero'),
];

// Endpoint para la inserción de productos
app.post('/productos', productValidationRules, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, descripcion, precio, cantidad } = req.body;

    const query = 'INSERT INTO productos (nombre, descripcion, precio, cantidad) VALUES (?, ?, ?, ?)';

    // Insertar el producto en la base de datos
    db.query(query, [nombre, descripcion, precio, cantidad], (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Error al insertar el producto' });
        }
        res.send({ message: 'Producto insertado con éxito' });
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});