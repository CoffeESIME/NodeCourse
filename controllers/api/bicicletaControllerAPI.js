var Bicicleta= require('../../models/bicicleta');

exports.bicicleta_list= (req,res)=>{
    res.status(200).json({bicicletas:Bicicleta.allBicis
    });
}

exports.bicicleta_create_get=function(req,res){
    res.render('bicicletas/create');
}

exports.bicicleta_create_post=function(req,res){
    var bici = new Bicicleta(req.body.datosCrearBici.id,req.body.datosCrearBici.color,req.body.datosCrearBici.modelo);
    bici.ubicacion=[req.body.datosCrearBici.lat, req.body.datosCrearBici.lng];
    console.log(req.body)
    Bicicleta.add(bici)
    res.redirect('/bicicletas');

}

exports.bicicleta_update_get=function(req,res){
    var bici= Bicicleta.findById(req.params.id);
    res.render('bicicletas/update',{bici})
}

exports.bicicleta_update_post=function(req,res){
    console.log(req.body)
    var bici= Bicicleta.findById(req.params.id);
    bici.id=req.body.datosModalEditar.id;
    bici.color= req.body.datosModalEditar.color;
    bici.modelo=req.body.datosModalEditar.modelo;
    bici.ubicacion=[req.body.datosModalEditar.ubicacion[0], req.body.datosModalEditar.ubicacion[1]];
    //res.redirect('/bicicletas');
    res.statusCode=200;
    res.end(JSON.stringify(Bicicleta.allBicis));

}

exports.bicicleta_delete_post=function(req,res){
    Bicicleta.removeById(req.body.id);
    res.statusCode=200;
    res.end(JSON.stringify(Bicicleta.allBicis));
    //res.redirect('/bicicletas');
}