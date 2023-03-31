
import express from 'express'

const router = express.Router();

router.post('/', (req, res) => {
    const {name,email,password} = req.body;

    res.send(`Usuario ${name} de email ${email} e senha ${password}`);
})
export default router;