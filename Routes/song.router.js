import express from 'express';

const router = express.Router();

router.get('/sangbog', (req, res) => {
    res.status(200).send('Velkommen til sangbogen')
})

router.get('/songs', (req, res) => {
    res.status(200).send('Liste over sange');
})

export { router }