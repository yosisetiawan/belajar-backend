const model = require('../models')
const User = model.user
const jwt = require('jsonwebtoken')

exports.index = (req, res) => {
    User.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    User.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}

exports.store = (req, res) => {
    const {name, email, password} = req.body

    User.create({
        name: name,
        email: email,
        password: password
    }).then(user => {
        res.send({
            messages: "success",
            user:user.name
        })
    }).catch(err => {
        res.send({
            status : 'error',
            msg : err
        })
    })
}

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    User.update(req.body,{where : {id: req.params.id}}).then(user => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    User.destroy(
        {where: {id: req.params.id}
    }).then(user => {
        res.send({
            messages: 'Berhasil Dihapus',
            user: user.name
        })
    })
}

exports.login = (req,res) => {
    User.findOne({
        where : {
            email : req.body.email,
            password : req.body.password
        }
    }).then(result => {
        const token = jwt.sign({
            userid : result.id
        },'kimsohyun')
        res.send({
            status : "success",
            token : token
        })
    })
}

exports.thisjwt = (req,res) => {
    const token = jwt.sign({
        userid : 1
    },'kimsohyun')
    res.send({
        token
    })
}