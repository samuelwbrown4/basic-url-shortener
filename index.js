const express = require('express');
const pool = require('./db/pool')

const app = express()

const PORT = 3000

const shortenURL = require('./routes/routes')

app.use(express.json())

app.use('/api/url' , shortenURL)

app.get('/' , (req , res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/:slug' , async (req , res) => {
    const {slug} = req.params

    const result = await pool.query('SELECT * FROM urls WHERE slug = $1' , [slug]);

    console.log(result.rows);

    res.redirect(302 , result.rows[0].original_url)

})



app.listen(PORT , ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
});