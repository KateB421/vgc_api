const express = require('express');
const app = express();
const portNumber = process.env.PORT||3005;
const Sequelize=require('sequelize');
const cors = require('cors');
const bcrypt=require('bcrypt');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const {Game, GroupJoin, Group, Post, SavedPost, User}=require('./models');
app.use(
    cors({
        origin: '*',
        credentials:true
    })
)

app.listen(portNumber, function(req,res){
    console.log(`listening on port ${portNumber}`);
})

// Games Table
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get('/api/games', async function(req, res){
    let results = await Game.findAll();
    res.json({results});
})

app.get('/api/games/:id', async function (req, res){
    let {id}=req.params;
    let results=await Game.findByPk(id);
    res.json({results});
})

app.post('/api/games/add', async function(req, res){
    const {title, genre, release, developer, publisher, description}=req.body;
    let results=await Game.create({
        title: title,
        genre: genre,
        release: release,
        developer: developer,
        publisher: publisher,
        description: description,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.json({results});
})

app.get('/api/games/delete/:id',async function(req, res){
    const {id} = req.params;
    let results = await Game.destroy({
        where:{
            id
        }
    })
    res.json({results});
})

app.post('/api/games/edit/:id', async function(req, res){
    const {id}=req.params;
    const {title, genre, release, developer, publisher, description}=req.body;
    let results=await Game.create({
        title: title,
        genre: genre,
        release: release,
        developer: developer,
        publisher: publisher,
        description: description,
        updatedAt: new Date()
    },{
        where:{
            id
        }
    })
    res.json({results})
})

//Group Table
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get('/api/groups', async function(req, res){
    let results = await Group.findAll();
    res.json({results});
})

app.get('/api/groups/:id', async function(req, res){
    let {id}=req.params;
    let results=await Group.findByPk(id);
    res.json({results});
})

app.post('/api/groups/add', async function(req, res){
    const {name, description, private, maxmember, language} = req.body;
    let results=await Group.create({
        name: name,
        description: description,
        private:(private==='true'),
        maxmember:maxmember,
        language: language,
        createdAt: new Date(),
        updatedAt:new Date()
    })
    res.json(results) 
})

app.get('/api/groups/delete/:id',async function(req, res){
    const {id}=req.params;
    let results = await Group.destroy({
        where:{
            id
        }
    })
    res.json({results});
})

app.post('/api/groups/edit/:id', async function(req, res){
    const {id}=req.params;
    const {name, description, private, maxmember, language}=req.body;
    let results =await Group.update({
        name: name,
        description: description,
        private:(private==='true'),
        maxmember:maxmember,
        language: language,
        updatedAt:new Date()
    },{
        where:{
            id
        }
    })
    res.json({results})
})

//GroupJoins Table
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get('/api/groupjoins', async function(req, res){
    let results = await GroupJoin.findAll();
    res.json({results});
})

app.get('/api/groupjoins/:id', async function(req, res){
    let {id}=req.params;
    let results=await GroupJoin.findByPk(id);
    res.json({results});
})

app.post('/api/groupjoins/add', async function(req, res){
    const {userID, admin, groupID} = req.body;
    let results=await GroupJoin.create({
        userID:parseInt(userID),
        admin:(admin==='true'),
        groupID:parseInt(groupID),
        createdAt: new Date(),
        updatedAt:new Date()
    })
    res.json(results)  
})

app.get('/api/groupjoins/delete/:id',async function(req, res){
    const {id}=req.params;
    let results = await GroupJoin.destroy({
        where:{
            id
        }
    })
    res.json({results});
})

app.post('/api/groupjoins/edit/:id', async function(req, res){
    const {id}=req.params;
    const {userID, admin, groupID}=req.body;
    let results =await GroupJoin.update({
        userID:parseInt(userID),
        admin:(admin==='true'),
        groupID:parseInt(groupID),
        updatedAt:new Date()
    },{
        where:{
            id
        }
    })
    res.json({results})
})

//Posts Table
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get('/api/posts', async function(req, res){
    let results = await Post.findAll();
    res.json({results});
})

app.get('/api/posts/:id', async function(req, res){
    let {id}=req.params;
    let results=await Post.findByPk(id);
    res.json({results});
})

app.get('/api/posts/game/:gameid', async function(req, res){
    let {gameid}=req.params;
    let results=await Post.findAll({
        where: {
            game: parseInt(gameid)
      }});
    res.json({results});
})

app.post('/api/posts/add', async function(req, res){
    const {content, creator, reference, honors, gameIn, private} = req.body;
    let results=await Post.create({
        content:content,
        creator:parseInt(creator),
        reference:parseInt(reference),
        honors:parseInt(honors),
        game:parseInt(gameIn),
        private:parseInt(private),
        createdAt:new Date(),
        updatedAt:new Date()
    })
    res.json({results})  
})

app.get('/api/posts/delete/:id',async function(req, res){
    const {id}=req.params;
    let results = await Post.destroy({
        where:{
            id
        }
    })
    res.json({results});
})

app.post('/api/posts/edit/:id', async function(req, res){
    const {id}=req.params;
    const {content, creator, reference, honors, game, private}=req.body;
    let results =await Post.update({
        content:content,
        creator:parseInt(creator),
        reference:parseInt(reference),
        honors:parseInt(honors),
        game:parseInt(game),
        private:parseInt(private),
        updatedAt:new Date()
    },{
        where:{
            id
        }
    })
    res.json({results})
})

//SavedPosts Table
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get('/api/savedposts', async function(req, res){
    let results = await SavedPost.findAll();
    res.json({results});
})

app.get('/api/savedposts/:id', async function(req, res){
    let {id}=req.params;
    let results=await SavedPost.findByPk(id);
    res.json({results});
})

app.post('/api/savedposts/add', async function(req, res){
    const {user, post} = req.body;
    let results=await SavedPost.create({
        user:parseInt(user),
        post:parseInt(post),
        createdAt:new Date(),
        updatedAt:new Date()
    })  
})

app.get('/api/savedposts/delete/:id',async function(req, res){
    const {id}=req.params;
    let results = await SavedPost.destroy({
        where:{
            id
        }
    })
    res.json({results});
})

app.post('/api/savedposts/edit/:id', async function(req, res){
    const {id}=req.params;
    const {user, post}=req.body;
    let results =await SavedPost.update({
        user:parseInt(user),
        post:parseInt(post),
        updatedAt:new Date()
    },{
        where:{
            id
        }
    })
    res.json({results})
})

//Users Table
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get('/api/users', async function(req, res){
    let results = await User.findAll();
    res.json({results});
})

app.get('/api/users/:id', async function(req, res){
    let {id}=req.params;
    let results=await User.findByPk(id);
    res.json({results});
})

app.post('/api/users/add', async function(req, res){
    const {username, password, bio, interests, email} = req.body;
    let theHashedPassword=await bcrypt.hash(password, 10);
    let results=await User.create({
        username:username,
        password:theHashedPassword,
        bio:bio,
        interests:interests,
        email:email,
        createdAt:new Date(),
        updatedAt:new Date()
    })
    res.json({results})
})

app.post('/api/verification', async function(req,res){
    const {username, password}=req.body;
    let theUserInformation=await User.findOne({
        where: {username: username}
    })
    let theResult=await bcrypt.compare(password, theUserInformation.password)
    if(theResult){
        res.json({theUserInformation})
    }
    // else{

    // }
})

app.get('/api/users/delete/:id',async function(req, res){
    const {id}=req.params;
    let results = await User.destroy({
        where:{
            id
        }
    })
    res.json({results});
})

app.post('/api/users/edit/:id', async function(req, res){
    const {id}=req.params;
    const {username, password, bio, interests, email}=req.body;
    let results =await User.update({
        username:username,
        password:password,
        bio:bio,
        interests:interests,
        email:email,
        updatedAt:new Date()
    },{
        where:{
            id
        }
    })
    res.json({results})
})