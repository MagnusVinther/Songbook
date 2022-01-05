import express from 'express';

const router = express.Router();

router.get('/about', (req, res) => {  // Cookie-cutter eksempel på at lave nye routes på sin port.
    res.status(200).send('Om os!');
})

router.get('/contact', (req, res) => {
    res.status(200).send('Kontakt os!');
})

export { router }