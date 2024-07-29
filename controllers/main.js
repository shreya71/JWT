// setup authentication so only the request with JWT can access the dashboard

const jwt  = require('jsonwebtoken')
const {BadRequest} = require('../errors')

const login = async (req, res) =>{
    const {username, password} = req.body
    //mongo
    //Joi package
    // check in the controller

    //3rd way
    if(!username || !password)
    {
        throw new BadRequest('Please provide email and password')
    }

    //for demo, normally provided by DB(the id)
    const id = new Date().getDate()


    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    // console.log(username, password);
    //res.send('Fake Login/Register/Signup Route')
    res.status(200).json({msg: 'User created', token})
}


const dashboard = async (req, res) =>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, ${req.user.username}`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}