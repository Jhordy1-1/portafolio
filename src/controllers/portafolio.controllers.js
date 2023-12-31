const portafolio = require('../models/portafolio')
const Portfolio = require('../models/portafolio')

const renderAllPortafolios = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    //res.send('Listar todos los portafolios')
    res.render("portafolio/allPortfolios",{portfolios})
    //res.json({portfolios})--> Esto es para enviar en formato Json a nuestro backend 
}

const renderPortafolio = (req,res)=>{
    //res.send('Mostrar el detalle de un portafolio')
}
const renderPortafolioForm = (req,res)=>{
    //res.send('Formulario para crear un portafolio')
    res.render('portafolio/newFormPortafolio')
}

const createNewPortafolio =async (req,res)=>{
    //res.send('Crear un nuevo portafolio')
    const {title, category,description} = req.body
    const newPortfolio = new Portfolio({title,category,description})
    await newPortfolio.save()
    res.json({newPortfolio})
}

const renderEditPortafolioForm = (req,res)=>{
    res.send('Formulario para editar un portafolio')
}
const updatePortafolio = (req,res)=>{
    res.send('Editar un portafolio')
}
const deletePortafolio = (req,res)=>{
    res.send('Eliminar un nuevo portafolio')
}


module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}



