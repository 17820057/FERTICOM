const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '300408749541-126blkck1anuimcs6su0canbggqflpp4.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

router.post('/login/google', async (req, res) => {
    const { id_token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: CLIENT_ID
        });
        const payload = ticket.getPayload();
        const userId = payload['sub'];
        
        // Aquí puedes realizar la lógica para autenticar al usuario en tu sistema
        // Por ejemplo, crear una sesión para el usuario o generar un token JWT

        res.status(200).send({ message: 'Autenticación exitosa' });
    } catch (error) {
        console.error('Error al verificar el token de ID:', error);
        res.status(401).send({ error: 'Error de autenticación' });
    }
});

module.exports = router;
