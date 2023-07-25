const express = require('express')
const router = express.Router()


router.get('/', (req,res) => {
    res.render('admin/adminLogin',{style: 'adminLogin.css'})
})

router.get('/ocorrencias', (req,res) => {
    res.render('admin/adminOccurrences',{style: 'adminOccurrences.css'})
})

module.exports = router