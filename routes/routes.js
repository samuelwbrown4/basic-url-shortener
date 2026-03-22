const express = require('express');
const router = express.Router();
const pool = require('../db/pool')

function generateSlug() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

router.post('/shorten' , async (req , res)=>{
    const {longURL} = req.body;

    const slug = generateSlug()

    await pool.query('INSERT INTO urls (slug ,  original_url) VALUES ($1 , $2)' , [slug , longURL])

    res.send({success: true , slug : slug})
})

module.exports = router;

