import express from 'express';

const router = express.Router();

router.get('/artists', (req, res) => {
    res.status(200).send('Liste over artister');
})

export { router }