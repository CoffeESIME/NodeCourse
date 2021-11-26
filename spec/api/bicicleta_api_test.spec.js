var Bicicleta =require("../../models/bicicleta");
var server = require("../../bin/www")
var request=require('request');

describe('Bicicleta API', ()=>{
    describe('Get Bicicletas /', () => {
        it('status 200', ()=>{
            expect(Bicicleta.allBicis.length).toBe(0);
            var a= new Bicicleta(1,"rojo","urbana",[19.353536, -99.318017]);
            Bicicleta.add(a);
            request.get('http://localhost:3300/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200);
            })
        });
    }); 

    describe('Post Bicicletas /create', () => {
        it('status 200', (done)=>{
            var headers={'Content-Type':'application/json'};
            var aBici='{"id":10, "color":"rojo", "modelo":"urbana", "lat":-34, "lng":-54}';
            request.post({
                headers:headers,
                url:'http://localhost:3300/api/bicicletas/create',
                body:aBici}, 
                function(error,response, body){
                    expect(response.statusCode).toBe(200);
                    expect(Bicicleta.findById(10).color).toBe("rojo");
                    done();
            })
        });
    }); 


});