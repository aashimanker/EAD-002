const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
require('dotenv').config()
app.use(express.json())

const posts = [
    {
        name:'CBIT',
        title:'my clg'
    },
    {
        name:'MGIT',
        title:'not my clg'
    }
]

const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.json({msg:'error in verification of token'});
    
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
        if (err){
            return res.json({msg:"error in verify method"})
        }
        req.user = user
        next()
    })
}

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const user = {name:username}

    const token = jwt.sign(user,process.env.ACCESS_TOKEN)

    res.json({AccessTokenis: token})
})

app.use(authenticateToken)
app.get('/posts',(req,res)=>{
    console.log(req.user.name)
    res.send(posts.filter(post=> post.name === req.user.name))
})
app.listen(3000,()=>{
    console.log('App is running at port 3000')
})