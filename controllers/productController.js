const model = require('../models')
const jwt = require('jsonwebtoken')
const Product = model.product
const User = model.user

exports.index = (req, res) => {
    Product.findAll({
        include:[{
            model: User,
            as:"createdBy"
        }]
    }).then(data => res.send(data))
}

exports.show = (req, res) => {
    Product.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}

exports.store = (req, res) => {
    // const token = `Bearer ${req.body.token}`
    jwt.verify(token,'kimsohyun',(err,authdata )=> {

        if(err){
            res.status(403).send({
                status : "lu ga punya token jancuk bangsat",
                msg : err,
            })
        }else{

        //     const {name, price, created_by} = req.body
        //     Product.create({
        //         name: name,
        //         price: price,
        //         created_by: authdata.userid
        //     }).then(product => {
        //         res.send({
        //             messages: "success",
        //         product:product.name
        //     })
        // })
            res.send(authdata)
            console.log(req.body)
    }

    
        
    })
}

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Product.update(req.body,{where : {id: req.params.id}}).then(product => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    Product.destroy(
        {where: {id: req.params.id}
    }).then(product => {
        res.send({
            messages: 'Berhasil Dihapus',
            product: product.name
        })
    })
}