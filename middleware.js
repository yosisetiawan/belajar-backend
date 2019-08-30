exports.authentication = (req,res,next) => {
    
    if(typeof req.headers['authorization'] != 'undefined'){
        console.log(typeof req.headers['authorization'])
        bearer = req.headers['authorization'].split(' ')
        token = bearer[1]
        next();
    }else{
        res.send({
            msg : "ga ada token lu jancuk bgst",
            type : typeof req.headers['authorization']
        })
    }
}