// Loading Modules
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const home = require('./routes/admin')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const Cadastrar = require('./routes/CadastroUsuario')
const database = require('./database')
const Login = require('./routes/login')
const Demo = require('./routes/Demo')
const Home = require('./routes/Home')
require('dotenv').config()



// Config
    // Session
        app.use(session({
            secret: '12nubivfvuvk',
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    // Middleware
        app.use((req,res,next) => {
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    // BodyParser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            }
        }))
        app.set('view engine', 'handlebars')


// Public
    app.use(express.static(path.join(__dirname,'/public')))
// Router
    app.use('/Home',Home)
    app.use('/Demo',Demo)
    app.use('/ValidaLogin', Login)
    app.use('/Cadastro', Cadastrar)
    app.use('/', home)


// Outros

const PORT= 8000
app.listen(PORT, () => {
    console.log('Servidor Online!')
})